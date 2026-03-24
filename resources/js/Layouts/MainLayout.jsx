import WhatsAppWidget from '@/Components/WhatsAppWidget';
import ChatbotWidget from '@/Components/ChatbotWidget';

export default function MainLayout({ children }) {
    return (
        <>
            {children}
            <WhatsAppWidget />
            <ChatbotWidget />
        </>
    );
}
