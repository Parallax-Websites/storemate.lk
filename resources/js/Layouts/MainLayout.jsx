import WhatsAppWidget from '@/Components/WhatsAppWidget';

export default function MainLayout({ children }) {
    return (
        <>
            {children}
            <WhatsAppWidget />
        </>
    );
}
