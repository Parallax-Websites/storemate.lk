/**
 * Minimal DataLayer Pusher
 * Only pushes events to GTM - NO scoring logic here
 * All scoring, calculation, and storage happens in GTM
 */

class DataLayerPusher {
    constructor() {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
    }

    /**
     * Push event to Google Tag Manager
     * GTM handles ALL logic: scoring, duplicate prevention, storage, categorization
     */
    trackAction(action, metadata = {}) {
        window.dataLayer.push({
            event: 'lead_action',
            leadAction: action,
            actionMetadata: metadata,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Track page view - GTM will handle the rest
     */
    trackPageView(pageName) {
        window.dataLayer.push({
            event: 'lead_action',
            leadAction: 'page_view',
            actionMetadata: {
                pageName: pageName,
                pageUrl: window.location.pathname
            },
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Helper functions for backward compatibility with existing code
     * These read from GTM's LeadScoreManager if available
     */
    get totalScore() {
        if (typeof window !== 'undefined' && window.LeadScoreManager) {
            return window.LeadScoreManager.getTotalScore();
        }
        return 0;
    }

    getLeadCategory() {
        if (typeof window !== 'undefined' && window.LeadScoreManager) {
            return window.LeadScoreManager.getLeadCategory();
        }
        return 'Cold Lead';
    }

    getNormalizedScore() {
        if (typeof window !== 'undefined' && window.LeadScoreManager) {
            return window.LeadScoreManager.getNormalizedScore();
        }
        return 0;
    }
}

// Create singleton instance
const dataLayerPusher = new DataLayerPusher();

// Expose to window for debugging
if (typeof window !== 'undefined') {
    window.dataLayerPusher = dataLayerPusher;
}

// Export with backward compatible name so existing code still works
export default dataLayerPusher;
