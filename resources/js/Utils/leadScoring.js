/**
 * Lead Scoring System
 * Tracks user actions and calculates lead scores
 */

class LeadScoring {
    constructor() {
        this.actions = [];
        this.totalScore = 0;
        this.sessionStartTime = Date.now();
        this.pageVisits = new Set();
        this.timeOnPages = {};
        this.currentPage = null;
        this.pageStartTime = null;

        // Load existing data BEFORE initializing tracking
        this.loadFromStorage();

        // Initialize tracking
        this.initializeTracking();
    }

    // Scoring configuration
    SCORING = {
        'Trial Started': { score: 30, category: 'High Intent' },
        'Demo Requested': { score: 30, category: 'High Intent' },
        'Pricing Viewed': { score: 25, category: 'High Intent' },
        'Video Completed': { score: 25, category: 'High Intent' },
        '3+ min on Key Page': { score: 20, category: 'High Intent' },
        'Multiple Pages (3+)': { score: 15, category: 'Medium Intent' },
        'Documentation Viewed': { score: 12, category: 'Medium Intent' },
        'CTA Clicked': { score: 10, category: 'Medium Intent' },
        'About Page Viewed': { score: 10, category: 'Medium Intent' },
        'Blog Read': { score: 5, category: 'Low Intent' },
        'Return Visit': { score: 5, category: 'Engagement' },
        '5+ min Session': { score: 10, category: 'Engagement' }
    };

    // Key pages that count for "3+ min on Key Page"
    KEY_PAGES = ['pricing', 'features', 'home', 'demo'];

    initializeTracking() {
        // Check for return visit
        if (localStorage.getItem('leadScore_visited')) {
            this.trackAction('Return Visit');
        } else {
            localStorage.setItem('leadScore_visited', 'true');
        }

        // Track session time
        setInterval(() => {
            const sessionTime = (Date.now() - this.sessionStartTime) / 1000 / 60; // in minutes
            if (sessionTime >= 5 && !this.hasAction('5+ min Session')) {
                this.trackAction('5+ min Session');
            }
        }, 30000); // Check every 30 seconds

        // Track page navigation
        window.addEventListener('beforeunload', () => {
            this.checkPageTime();
        });
    }

    getLeadCategory(score = this.totalScore) {
        if (score >= 100) return 'Very Hot Lead 🔥🔥🔥';
        if (score >= 61) return 'Hot Lead 🔥🔥';
        if (score >= 31) return 'Warm Lead 🔥';
        return 'Cold Lead ❄️';
    }

    hasAction(actionName) {
        return this.actions.some(a => a.action === actionName);
    }

    trackAction(action, metadata = {}) {
        const scoring = this.SCORING[action];
        if (!scoring) {
            console.warn(`Unknown action: ${action}`);
            return;
        }

        // Check if action already tracked (prevent duplicates)
        if (this.hasAction(action)) {
            console.log(`⚠️ Action "${action}" already tracked, skipping duplicate`);
            return;
        }

        // Add action
        this.actions.push({
            action,
            score: scoring.score,
            category: scoring.category,
            timestamp: new Date().toISOString(),
            metadata
        });

        this.totalScore += scoring.score;

        // Log to console with styling
        this.logToConsole(action, scoring);

        // Store in localStorage for persistence
        this.saveToStorage();

        return this.totalScore;
    }

    logToConsole(action, scoring) {
        console.log('\n' + '='.repeat(60));
        console.log(`🎯 LEAD SCORING EVENT: ${action}`);
        console.log('='.repeat(60));
        console.log(`Score Added: +${scoring.score} points (${scoring.category})`);
        console.log(`Total Score: ${this.totalScore}`);
        console.log(`Lead Status: ${this.getLeadCategory()}`);
        console.log('-'.repeat(60));
        console.log('All Tracked Actions:');
        console.table(this.actions.map(a => ({
            Action: a.action,
            Score: a.score,
            Category: a.category,
            Time: new Date(a.timestamp).toLocaleTimeString()
        })));
        console.log('='.repeat(60));

        // Show total score summary
        console.log('\n' + '█'.repeat(60));
        console.log(`📊 TOTAL SCORE: ${this.totalScore} points`);
        console.log(`🏆 LEAD STATUS: ${this.getLeadCategory()}`);
        console.log('█'.repeat(60) + '\n');
    }

    trackPageView(pageName) {
        this.pageVisits.add(pageName);

        // Check page time before switching
        this.checkPageTime();

        // Start tracking new page
        this.currentPage = pageName;
        this.pageStartTime = Date.now();

        // Track specific pages
        if (pageName === 'pricing' && !this.hasAction('Pricing Viewed')) {
            this.trackAction('Pricing Viewed');
        }

        if (pageName === 'about' && !this.hasAction('About Page Viewed')) {
            this.trackAction('About Page Viewed');
        }

        if (pageName === 'documentation' && !this.hasAction('Documentation Viewed')) {
            this.trackAction('Documentation Viewed');
        }

        if (pageName === 'blog' && !this.hasAction('Blog Read')) {
            this.trackAction('Blog Read');
        }

        // Check for multiple pages
        if (this.pageVisits.size >= 3 && !this.hasAction('Multiple Pages (3+)')) {
            this.trackAction('Multiple Pages (3+)');
        }
    }

    checkPageTime() {
        if (!this.currentPage || !this.pageStartTime) return;

        const timeSpent = (Date.now() - this.pageStartTime) / 1000 / 60; // in minutes

        // Track time for this page
        if (!this.timeOnPages[this.currentPage]) {
            this.timeOnPages[this.currentPage] = 0;
        }
        this.timeOnPages[this.currentPage] += timeSpent;

        // Check if key page and 3+ minutes
        if (this.KEY_PAGES.includes(this.currentPage) &&
            this.timeOnPages[this.currentPage] >= 3 &&
            !this.hasAction('3+ min on Key Page')) {
            this.trackAction('3+ min on Key Page', { page: this.currentPage });
        }
    }

    saveToStorage() {
        const data = {
            actions: this.actions,
            totalScore: this.totalScore,
            pageVisits: Array.from(this.pageVisits),
            timeOnPages: this.timeOnPages,
            sessionStartTime: this.sessionStartTime
        };
        localStorage.setItem('leadScore_data', JSON.stringify(data));
    }

    loadFromStorage() {
        const data = localStorage.getItem('leadScore_data');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                this.actions = parsed.actions || [];
                this.totalScore = parsed.totalScore || 0;
                this.pageVisits = new Set(parsed.pageVisits || []);
                this.timeOnPages = parsed.timeOnPages || {};
                this.sessionStartTime = parsed.sessionStartTime || Date.now();
                console.log('✅ Lead scoring data loaded from localStorage');
                console.log(`📊 Current Total Score: ${this.totalScore}`);
            } catch (e) {
                console.error('Error loading lead score data:', e);
            }
        }
    }

    reset() {
        this.actions = [];
        this.totalScore = 0;
        this.pageVisits = new Set();
        this.timeOnPages = {};
        localStorage.removeItem('leadScore_data');
        console.log('✅ Lead scoring data reset');
    }

    getReport() {
        return {
            totalScore: this.totalScore,
            leadCategory: this.getLeadCategory(),
            actions: this.actions,
            pageVisits: Array.from(this.pageVisits),
            timeOnPages: this.timeOnPages,
            sessionDuration: (Date.now() - this.sessionStartTime) / 1000 / 60
        };
    }
}

// Create singleton instance
const leadScoring = new LeadScoring();

// Expose to window for debugging
if (typeof window !== 'undefined') {
    window.leadScoring = leadScoring;
    window.getLeadScore = () => leadScoring.getReport();
}

export default leadScoring;
