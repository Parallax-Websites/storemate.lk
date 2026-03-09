import { useState, useRef, useEffect } from 'react';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! 👋 Ask me anything about our Storemate OMS!', sender: 'bot' },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatBoxRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = async () => {
        const question = input.trim();
        if (!question || isLoading) return;

        const userMsg = { id: Date.now(), text: question, sender: 'user' };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chatbot/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ question }),
            });
            const data = await res.json();
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: data.answer || 'No answer found.', sender: 'bot' },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: 'Sorry, something went wrong. Please try again.', sender: 'bot' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed top-28 bottom-[7.5rem] right-6 z-50 w-[370px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col chatbot-slide-in">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                🤖
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Storemate OMS Assistant</p>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-blue-200 text-xs">Online</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                {msg.sender === 'bot' && (
                                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                        🤖
                                    </div>
                                )}
                                <div className={`px-3.5 py-2.5 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-sm'
                                        : 'bg-white text-gray-700 rounded-bl-sm border border-gray-100'
                                }`}>
                                    <span className="whitespace-pre-wrap">{msg.text}</span>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isLoading && (
                            <div className="flex items-end gap-2">
                                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                    🤖
                                </div>
                                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100">
                                    <div className="flex gap-1 items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t bg-white flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question..."
                                disabled={isLoading}
                                className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                                autoComplete="off"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2.5 rounded-xl transition-colors duration-200 flex-shrink-0 disabled:cursor-not-allowed"
                                aria-label="Send message"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1.5 text-center">Powered by AI Document Assistant</p>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-24 right-6 z-50 group w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                    isOpen
                        ? 'bg-gray-600 hover:bg-gray-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                }`}
                aria-label="Open chatbot"
            >
                {isOpen ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {/* Notification dot */}
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                    </>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <span className="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                        Chat with us!
                        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
                    </span>
                )}
            </button>
        </>
    );
}
