import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useRef, useEffect, useState } from 'react';
import leadScoring from '@/Utils/leadScoring';

export default function Blog({ auth }) {
    const headerRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState('5000px');

    useEffect(() => {
        // Track blog page view
        leadScoring.trackPageView('blog');

        // Listen for messages from iframe to get actual content height
        const handleMessage = (event) => {
            // Verify origin for security
            if (event.origin === 'https://storemate.lk') {
                if (event.data && event.data.height) {
                    setIframeHeight(event.data.height + 100 + 'px');
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <MainLayout>
            <Head title="Blog - StoreMate OMS">
                <meta name="description" content="Read the latest articles, tips, and insights from StoreMate OMS about e-commerce, order management, and business growth." />
                <meta name="keywords" content="e-commerce blog, order management tips, online business, StoreMate blog" />
            </Head>
            <Header ref={headerRef} auth={auth} />

            <div className="blog-container">
                <iframe
                    id="blog-iframe"
                    src="https://storemate.lk/blogs/"
                    style={{
                        width: '100%',
                        height: iframeHeight,
                        border: 'none',
                        display: 'block',
                        overflow: 'hidden'
                    }}
                    scrolling="no"
                    title="StoreMate Blog"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                />
            </div>

            <Footer />
        </MainLayout>
    );
}
