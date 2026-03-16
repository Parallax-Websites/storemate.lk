/**
 * Opens WhatsApp chat — WhatsApp Web on desktop, WhatsApp app on mobile.
 *
 * @param {string} phone  – Phone number with country code, no "+" (e.g. "94777672155")
 * @param {string} [text] – Optional pre-filled message
 */
export const openWhatsApp = (phone = '94777672155', text = '') => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );

    if (isMobile) {
        window.open(`https://api.whatsapp.com/send?phone=${phone}${text ? `&text=${encodeURIComponent(text)}` : ''}`, '_blank');
    } else {
        window.open(`https://web.whatsapp.com/send?phone=${phone}${text ? `&text=${encodeURIComponent(text)}` : ''}`, '_blank');
    }
};
