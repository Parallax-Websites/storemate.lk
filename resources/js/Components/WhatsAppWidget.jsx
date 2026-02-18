import { useState, useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const widgetTranslations = {
    en: {
        replyTime: 'Typically replies within a minute',
        welcomeMessage: "Hi, Welcome to StoreMate\nHow can we help you?",
        placeholder: 'Type Message',
        sendButton: 'Send A Message',
        poweredBy: 'Powered by StoreMate',
        defaultMessage: "Hello! I'm interested in Storemate OMS for my business.",
    },
    si: {
        replyTime: 'සාමාන්‍යයෙන් මිනිත්තුවක් ඇතුළත පිළිතුරු දෙයි',
        welcomeMessage: "ආයුබෝවන්, StoreMate වෙත සාදරයෙන් පිළිගනිමු\nඅපට ඔබට උදව් කරන්නේ කෙසේද?",
        placeholder: 'පණිවිඩය ටයිප් කරන්න',
        sendButton: 'පණිවිඩයක් යවන්න',
        poweredBy: 'StoreMate මඟින් බලගන්වයි',
        defaultMessage: "ආයුබෝවන්! මම මගේ ව්‍යාපාරය සඳහා Storemate OMS ගැන උනන්දුයි.",
    },
    ta: {
        replyTime: 'பொதுவாக ஒரு நிமிடத்திற்குள் பதிலளிப்பார்',
        welcomeMessage: "வணக்கம், StoreMate க்கு வரவேற்கிறோம்\nநாங்கள் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
        placeholder: 'செய்தியை தட்டச்சு செய்யுங்கள்',
        sendButton: 'செய்தி அனுப்பவும்',
        poweredBy: 'StoreMate மூலம் இயக்கப்படுகிறது',
        defaultMessage: "வணக்கம்! எனது வணிகத்திற்கு Storemate OMS இல் ஆர்வமாக உள்ளேன்.",
    },
};

export default function WhatsAppWidget() {
    const context = useContext(LanguageContext);
    const currentLanguage = context?.currentLanguage || 'en';
    const t = widgetTranslations[currentLanguage] || widgetTranslations.en;

    const [isOpen, setIsOpen] = useState(() => {
        try {
            return sessionStorage.getItem('whatsapp_widget_closed') !== 'true';
        } catch {
            return true;
        }
    });
    const [message, setMessage] = useState('');

    const whatsappNumber = "94777672155";
    const businessName = "StoreMate";
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();

    const handleSend = () => {
        const text = message.trim() || t.defaultMessage;
        const encodedMessage = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        setMessage('');
        setIsOpen(false);
        try { sessionStorage.setItem('whatsapp_widget_closed', 'true'); } catch {}
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#075e54]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src="https://cimacleaners.com.au/wp-content/uploads/2026/02/499229865_1183317163809967_3276925672574001051_n.jpg"
                                    alt={businessName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">{businessName}</p>
                                <p className="text-green-200 text-xs">{t.replyTime}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { setIsOpen(false); try { sessionStorage.setItem('whatsapp_widget_closed', 'true'); } catch {} }}
                            className="text-white/80 hover:text-white transition-colors p-1"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div
                        className="px-4 py-5 min-h-[120px]"
                        style={{
                            backgroundColor: '#e5ddd5',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 2a2 2 0 100 4 2 2 0 000-4z' fill='%23ccc' opacity='.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='200' height='200'/%3E%3C/svg%3E")`
                        }}
                    >
                        {/* Message Bubble */}
                        <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] relative">
                            <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent"></div>
                            <p className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">{t.welcomeMessage}</p>
                            <p className="text-[11px] text-gray-400 text-right mt-1">{currentTime}</p>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
                        <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 pl-4 pr-2 py-1">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t.placeholder}
                                className="flex-1 text-sm text-gray-700 placeholder-gray-400 border-none outline-none focus:ring-0 bg-transparent"
                            />
                            <button className="text-gray-400 hover:text-gray-500 p-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Send Button */}
                    <div className="px-3 pb-3 bg-gray-50">
                        <button
                            onClick={handleSend}
                            className="w-full bg-[#25d366] hover:bg-[#1fb855] text-white font-semibold py-3 rounded-full text-sm transition-colors duration-200"
                        >
                            {t.sendButton}
                        </button>
                    </div>

                    {/* Powered By */}
                    <div className="text-center pb-2 bg-gray-50">
                        <p className="text-xs text-gray-400">{t.poweredBy}</p>
                    </div>
                </div>
            )}

            {/* Floating WhatsApp Button */}
            <button
                onClick={() => { const next = !isOpen; setIsOpen(next); try { sessionStorage.setItem('whatsapp_widget_closed', next ? 'false' : 'true'); } catch {} }}
                className="relative bg-[#25d366] hover:bg-[#1fb855] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Contact us on WhatsApp"
            >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
                {/* Notification dot */}
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
        </div>
    );
}
