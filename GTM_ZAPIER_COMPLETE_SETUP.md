# Complete GTM + Zapier Setup Guide
## Lead Scoring & Form Data Automation

This guide shows you how to set up **100% of the lead scoring and data automation using Google Tag Manager (GTM) and Zapier**, with your website only pushing simple events.

---

## 🎯 Architecture Overview

### **Your New Setup:**
```
Website → Push to dataLayer → GTM detects → GTM scores → GTM sends to Zapier
```

**What happens where:**
- **Website (Frontend):** Only pushes form data to dataLayer
- **GTM (Tag Manager):** Calculates scores, tracks actions, stores in localStorage
- **Zapier:** Receives complete data (form + scores) and automates workflows

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: GTM Core Setup (Lead Scoring Engine)](#step-1-gtm-core-setup)
3. [Step 2: Create Form Detection Tags](#step-2-form-detection-tags)
4. [Step 3: Create Zapier Integration Tags](#step-3-zapier-integration)
5. [Step 4: Create GTM Variables](#step-4-create-variables)
6. [Step 5: Create GTM Triggers](#step-5-create-triggers)
7. [Step 6: Setup Zapier Workflows](#step-6-zapier-setup)
8. [Step 7: Testing & Debugging](#step-7-testing)
9. [Complete Data Flow Diagram](#data-flow)

---

## Prerequisites

✅ Google Tag Manager account and container installed on your website  
✅ Zapier account (Free or paid plan)  
✅ Your website already pushes data to `dataLayer`  
✅ Access to GTM container and publish permissions  

---

## Step 1: GTM Core Setup (Lead Scoring Engine)

### **Tag 1A: Lead Score Calculator Core**

This is the main engine that handles all scoring logic.

**Create New Tag:**
1. Go to **Google Tag Manager**
2. Click **Tags** → **New**
3. Click on tag configuration area
4. Select **Custom HTML**
5. **Name:** `Lead Score - Calculator Core`
6. **Paste this code:**

```html
<script>
(function() {
  'use strict';
  
  // SCORING CONFIGURATION
  var SCORE_CONFIG = {
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
  
  // LEAD SCORE MANAGER
  window.LeadScoreManager = {
    
    getActions: function() {
      try {
        var data = localStorage.getItem('gtm_lead_actions');
        return data ? JSON.parse(data) : [];
      } catch(e) {
        return [];
      }
    },
    
    saveActions: function(actions) {
      try {
        localStorage.setItem('gtm_lead_actions', JSON.stringify(actions));
      } catch(e) {
        console.error('Error saving:', e);
      }
    },
    
    hasAction: function(actionName) {
      return this.getActions().some(function(a) { 
        return a.action === actionName; 
      });
    },
    
    trackAction: function(actionName, metadata) {
      metadata = metadata || {};
      
      var config = SCORE_CONFIG[actionName];
      if (!config) {
        console.warn('❌ Unknown action: ' + actionName);
        return { success: false, reason: 'unknown' };
      }
      
      var previousScore = this.getTotalScore();
      var previousCategory = this.getLeadCategory(previousScore);
      
      var actions = this.getActions();
      var isDuplicate = this.hasAction(actionName);
      
      var newAction = {
        action: actionName,
        score: config.score,
        category: config.category,
        timestamp: new Date().toISOString(),
        metadata: metadata
      };
      actions.push(newAction);
      this.saveActions(actions);
      
      var newScore = this.getTotalScore();
      var newCategory = this.getLeadCategory(newScore);
      var categoryChanged = previousCategory !== newCategory;
      
      // Enhanced console logging
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4CAF50');
      console.log('%c🎯 LEAD SCORE EVENT', 'color: #2196F3; font-weight: bold; font-size: 14px');
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4CAF50');
      console.log('%c📌 Action: ' + actionName + (isDuplicate ? ' (Repeat)' : ''), 'color: #FF9800; font-weight: bold');
      console.log('%c⭐ Points Earned: +' + config.score + ' pts', 'color: #4CAF50; font-weight: bold');
      console.log('%c📊 Previous Score: ' + previousScore + ' pts', 'color: #9E9E9E');
      console.log('%c📊 New Total Score: ' + newScore + ' pts', 'color: #2196F3; font-weight: bold; font-size: 13px');
      console.log('%c🏷️  Category: ' + newCategory, 'color: ' + (
        newCategory.indexOf('Very Hot') !== -1 ? '#F44336' :
        newCategory.indexOf('Hot') !== -1 ? '#FF5722' :
        newCategory.indexOf('Warm') !== -1 ? '#FF9800' :
        '#607D8B'
      ) + '; font-weight: bold');
      
      if (isDuplicate) {
        console.log('%c🔁 Repeat Action: Score added again!', 'color: #9C27B0; font-style: italic');
      }
      
      if (categoryChanged) {
        console.log('%c🔥 CATEGORY UPGRADE: ' + previousCategory + ' → ' + newCategory, 
          'color: #F44336; font-weight: bold; font-size: 14px; background: #FFF3E0; padding: 4px 8px');
      }
      
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4CAF50');
      
      return {
        success: true,
        action: actionName,
        scoreAdded: config.score,
        actionCategory: config.category,
        totalScore: newScore,
        previousCategory: previousCategory,
        leadCategory: newCategory,
        categoryChanged: categoryChanged,
        normalizedScore: this.getNormalizedScore(),
        timestamp: newAction.timestamp,
        metadata: metadata
      };
    },
    
    getTotalScore: function() {
      return this.getActions().reduce(function(total, a) {
        return total + (a.score || 0);
      }, 0);
    },
    
    getLeadCategory: function(score) {
      score = score !== undefined ? score : this.getTotalScore();
      if (score >= 100) return 'Very Hot Lead';
      if (score >= 61) return 'Hot Lead';
      if (score >= 31) return 'Warm Lead';
      return 'Cold Lead';
    },
    
    getNormalizedScore: function() {
      return Math.round(this.getTotalScore() / 39.4);
    },
    
    getCategoryLevel: function(category) {
      category = category || this.getLeadCategory();
      if (category.indexOf('Very Hot') !== -1) return 'very_hot';
      if (category.indexOf('Hot') !== -1) return 'hot';
      if (category.indexOf('Warm') !== -1) return 'warm';
      return 'cold';
    },
    
    reset: function() {
      localStorage.removeItem('gtm_lead_actions');
      console.log('✅ Reset');
    }
  };
  
  // LISTEN FOR EVENTS
  window.addEventListener('lead_action_trigger', function(e) {
    var result = window.LeadScoreManager.trackAction(e.detail.action, e.detail.metadata);
    
    if (result.success) {
      window.dataLayer.push({
        event: 'lead_score_calculated',
        leadScoring: result
      });
      
      if (result.categoryChanged) {
        var level = window.LeadScoreManager.getCategoryLevel(result.leadCategory);
        window.dataLayer.push({
          event: 'lead_category_changed',
          categoryLevel: level,
          category: result.leadCategory,
          score: result.totalScore
        });
        window.dataLayer.push({
          event: 'lead_became_' + level,
          score: result.totalScore
        });
        console.log('🔥 Category: ' + result.previousCategory + ' → ' + result.leadCategory);
      }
    }
  });
  
  console.log('%c✅ LEAD SCORE MANAGER READY', 'color: #4CAF50; font-weight: bold; font-size: 16px');
  console.log('%c📊 Current Score: ' + window.LeadScoreManager.getTotalScore() + ' pts', 'color: #2196F3; font-weight: bold');
  console.log('%c🏷️  Current Category: ' + window.LeadScoreManager.getLeadCategory(), 'color: #FF9800; font-weight: bold');
  
  // Show all available scoring actions
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #9E9E9E');
  console.log('%c📋 AVAILABLE SCORING ACTIONS:', 'color: #2196F3; font-weight: bold');
  console.table(SCORE_CONFIG);
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #9E9E9E');
  
  // Show user's action history if any
  var currentActions = window.LeadScoreManager.getActions();
  if (currentActions.length > 0) {
    console.log('%c📜 YOUR ACTION HISTORY:', 'color: #FF9800; font-weight: bold');
    console.table(currentActions);
  } else {
    console.log('%c💡 TIP: Start interacting with the site to earn lead score points!', 'color: #9E9E9E; font-style: italic');
  }
  
})();
</script>
```

7. **Triggering:** Click on "Triggering" section
8. Select **All Pages** → **DOM Ready**
9. Click **Save**

---

### **Tag 1B: Auto-Tracking Features**

This tag automatically tracks session time, page visits, and return visitors.

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Lead Score - Auto Tracking`
4. **Paste this code:**

```html
<script>
(function() {
  'use strict';
  
  var sessionStartTime = Date.now();
  var pageVisits = [];
  var currentPage = null;
  var pageStartTime = null;
  var timeOnPages = {};
  var sessionTimerStarted = false;
  var returnVisitChecked = false;
  
  var KEY_PAGES = ['pricing', 'features', 'home', 'demo'];
  
  // Helper to trigger actions
  function triggerAction(action, metadata) {
    var event = new CustomEvent('lead_action_trigger', {
      detail: { action: action, metadata: metadata || {} }
    });
    window.dispatchEvent(event);
  }
  
  // CHECK RETURN VISIT (once per session)
  if (!returnVisitChecked) {
    if (localStorage.getItem('leadScore_visited')) {
      triggerAction('Return Visit');
    } else {
      localStorage.setItem('leadScore_visited', 'true');
    }
    returnVisitChecked = true;
  }
  
  // TRACK SESSION TIME (5+ minutes)
  if (!sessionTimerStarted) {
    setInterval(function() {
      if (!window.LeadScoreManager) return;
      var sessionTime = (Date.now() - sessionStartTime) / 1000 / 60;
      // Trigger every 5 minutes (at 5min, 10min, 15min, etc.)
      if (sessionTime >= 5 && Math.floor(sessionTime) % 5 === 0) {
        triggerAction('5+ min Session', { 
          sessionTime: Math.floor(sessionTime),
          sessionMinutes: Math.floor(sessionTime) + ' minutes'
        });
      }
    }, 30000); // Check every 30 seconds
    sessionTimerStarted = true;
  }
  
  // TRACK PAGE VIEWS & TIME
  function trackCurrentPage() {
    var path = window.location.pathname;
    var pageName = 'unknown';
    
    // Detect page type
    if (path.includes('/pricing')) pageName = 'pricing';
    else if (path.includes('/about')) pageName = 'about';
    else if (path.includes('/features')) pageName = 'features';
    else if (path.includes('/blog')) pageName = 'blog';
    else if (path.includes('/docs') || path.includes('/documentation')) pageName = 'documentation';
    else if (path === '/' || path.includes('/home')) pageName = 'home';
    
    // Check page time before switching
    if (currentPage && pageStartTime) {
      var timeSpent = (Date.now() - pageStartTime) / 1000 / 60;
      if (!timeOnPages[currentPage]) timeOnPages[currentPage] = 0;
      timeOnPages[currentPage] += timeSpent;
      
      // 3+ minutes on key page (trigger every 3 minutes: 3min, 6min, 9min, etc.)
      if (window.LeadScoreManager && 
          KEY_PAGES.indexOf(currentPage) !== -1 && 
          timeOnPages[currentPage] >= 3 &&
          Math.floor(timeOnPages[currentPage]) % 3 === 0) {
        triggerAction('3+ min on Key Page', { 
          page: currentPage,
          timeSpent: Math.floor(timeOnPages[currentPage]),
          minutesOnPage: Math.floor(timeOnPages[currentPage]) + ' minutes'
        });
      }
    }
    
    // Start tracking new page
    currentPage = pageName;
    pageStartTime = Date.now();
    pageVisits.push(pageName);
    
    // Track specific page views (triggers on EACH visit to these pages)
    if (window.LeadScoreManager) {
      if (pageName === 'pricing') {
        triggerAction('Pricing Viewed', { visitCount: pageVisits.filter(function(p) { return p === 'pricing'; }).length });
      }
      if (pageName === 'about') {
        triggerAction('About Page Viewed', { visitCount: pageVisits.filter(function(p) { return p === 'about'; }).length });
      }
      if (pageName === 'documentation') {
        triggerAction('Documentation Viewed', { visitCount: pageVisits.filter(function(p) { return p === 'documentation'; }).length });
      }
      if (pageName === 'blog') {
        triggerAction('Blog Read', { visitCount: pageVisits.filter(function(p) { return p === 'blog'; }).length });
      }
      
      // Multiple pages (triggers when reaching 3, 6, 9+ unique pages)
      var uniquePages = pageVisits.filter(function(v, i, a) {
        return a.indexOf(v) === i;
      });
      if (uniquePages.length >= 3 && uniquePages.length % 3 === 0) {
        triggerAction('Multiple Pages (3+)', { 
          totalPages: uniquePages.length,
          pages: uniquePages.join(', ')
        });
      }
    }
  }
  
  // Track on load
  trackCurrentPage();
  
  // Track on navigation (for SPAs)
  var originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(this, arguments);
    setTimeout(trackCurrentPage, 100);
  };
  
  console.log('✅ Auto-tracking enabled');
  
})();
</script>
```

5. **Triggering:** Create a custom trigger:
   - Click on "Triggering" section
   - Click **+** icon
   - Select **Page View**
   - Select **Window Loaded** (NOT DOM Ready)
   - **This trigger fires on:** All Window Loaded Events
   - Click **Save**
   - Name it: `All Pages - Window Loaded`

6. Click **Save**

**⚠️ IMPORTANT:** This tag MUST use **Window Loaded** trigger (not DOM Ready) to ensure Tag 1A (Calculator Core) initializes first.

---

## Step 2: Form Detection Tags

These tags detect when forms are submitted and trigger lead scoring.

### **Tag 2A: Trial Form Submission Handler**

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Lead Score - Trial Form Handler`
4. **Paste this code:**

```html
<script>
(function() {
  // Trigger lead scoring action
  window.dispatchEvent(new CustomEvent('lead_action_trigger', {
    detail: {
      action: 'Trial Started',
      metadata: {
        formType: 'trial',
        source: {{DL - Button Source}} || 'unknown'
      }
    }
  }));
  
  console.log('🎯 Trial Started action triggered');
})();
</script>
```

5. **Triggering:** Create new trigger
   - Click on "Triggering" section
   - Click the **+** icon in top right
   - Select **Custom Event**
   - **Event name:** `trial_form_submit`
   - **This trigger fires on:** All Custom Events
   - Click **Save**
   - Name it: `Custom Event - Trial Form Submit`

6. Click **Save** on the tag

---

### **Tag 2B: Demo Form Submission Handler**

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Lead Score - Demo Form Handler`
4. **Paste this code:**

```html
<script>
(function() {
  // Trigger lead scoring action
  window.dispatchEvent(new CustomEvent('lead_action_trigger', {
    detail: {
      action: 'Demo Requested',
      metadata: { formType: 'demo' }
    }
  }));
  
  console.log('🎯 Demo Requested action triggered');
})();
</script>
```

5. **Triggering:** Create new trigger
   - Click on "Triggering" section
   - Click the **+** icon
   - Select **Custom Event**
   - **Event name:** `demo_form_submit`
   - **This trigger fires on:** All Custom Events
   - Click **Save**
   - Name it: `Custom Event - Demo Form Submit`

6. Click **Save** on the tag

---

## Step 3: Zapier Integration

These tags send complete data (form + scores) to Zapier.

### **Tag 3A: Zapier - Trial Form Complete Data**

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Zapier - Trial Form Complete`
4. **Paste this code:**

```html
<script>
(function() {
  var leadScoring = {{DL - Lead Scoring Object}} || {};
  var formData = {{DL - Form Data}} || {};
  
  // Only send for Trial Started action
  if (leadScoring.action !== 'Trial Started') {
    console.log('⏭️ Skipping - not a Trial Started action. Action:', leadScoring.action || 'none');
    return;
  }
  
  // Prevent duplicate sends within 2 seconds
  var lastSentKey = 'zapier_trial_last_sent';
  var lastSent = sessionStorage.getItem(lastSentKey);
  var now = Date.now();
  
  if (lastSent && (now - parseInt(lastSent)) < 2000) {
    console.log('⏭️ Duplicate send blocked - already sent within 2 seconds');
    return;
  }
  
  sessionStorage.setItem(lastSentKey, now.toString());
  
  var scoring = window.LeadScoreManager;
  
  // Prepare complete payload
  var payload = {
    // Form fields
    fullName: formData.fullName || '',
    phoneNumber: formData.phoneNumber || '',
    email: formData.email || '',
    companyName: formData.companyName || '',
    courierCompanies: formData.courierCompanies || '',
    ordersPerDay: formData.ordersPerDay || '',
    
    // Lead scoring (NOW UPDATED!)
    leadScore: scoring ? scoring.getTotalScore() : 0,
    normalizedScore: scoring ? scoring.getNormalizedScore() : 0,
    leadCategory: scoring ? scoring.getLeadCategory() : 'Cold Lead',
    
    // Action history (all actions user has taken)
    actionHistory: scoring ? scoring.getActions() : [],
    
    // Metadata
    registrationUrl: {{DL - Registration URL}} || '',
    utmSource: {{DL - UTM Source}} || '',
    formType: 'trial',
    timestamp: {{DL - Timestamp}} || new Date().toISOString()
  };
  
  console.log('📤 Sending to Zapier (Trial) - Score:', payload.leadScore);
  
  // Send to Zapier
  fetch('https://hooks.zapier.com/hooks/catch/11465938/uz82iuk/', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function() {
    console.log('✅ Trial data sent to Zapier with score:', payload.leadScore);
  }).catch(function(error) {
    console.error('❌ Error sending to Zapier:', error);
  });
})();
</script>
```

5. **Triggering:** Select trigger:
   - Trigger: `Custom Event - Lead Score Calculated`
   
6. Click **Save**

**⚠️ IMPORTANT:** Use ONLY `lead_score_calculated` trigger. The tag has built-in duplicate prevention to avoid sending data twice.

---

### **Tag 3B: Zapier - Demo Form Complete Data**

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Zapier - Demo Form Complete`
4. **Paste this code:**

```html
<script>
(function() {
  var leadScoring = {{DL - Lead Scoring Object}} || {};
  var formData = {{DL - Form Data}} || {};
  
  // Only send for Demo Requested action
  if (leadScoring.action !== 'Demo Requested') {
    console.log('⏭️ Skipping - not a Demo Requested action. Action:', leadScoring.action || 'none');
    return;
  }
  
  // Prevent duplicate sends within 2 seconds
  var lastSentKey = 'zapier_demo_last_sent';
  var lastSent = sessionStorage.getItem(lastSentKey);
  var now = Date.now();
  
  if (lastSent && (now - parseInt(lastSent)) < 2000) {
    console.log('⏭️ Duplicate send blocked - already sent within 2 seconds');
    return;
  }
  
  sessionStorage.setItem(lastSentKey, now.toString());
  
  var scoring = window.LeadScoreManager;
  
  // Prepare complete payload
  var payload = {
    // Form fields
    fullName: formData.fullName || '',
    phoneNumber: formData.phoneNumber || '',
    email: formData.email || '',
    companyName: formData.companyName || '',
    courierCompanies: formData.courierCompanies || '',
    ordersPerDay: formData.ordersPerDay || '',
    
    // Lead scoring (NOW UPDATED!)
    leadScore: scoring ? scoring.getTotalScore() : 0,
    normalizedScore: scoring ? scoring.getNormalizedScore() : 0,
    leadCategory: scoring ? scoring.getLeadCategory() : 'Cold Lead',
    
    // Action history (all actions user has taken)
    actionHistory: scoring ? scoring.getActions() : [],
    
    // Metadata
    loginUrl: {{DL - Login URL}} || '',
    redirectUrl: {{DL - Redirect URL}} || '',
    formType: 'demo',
    timestamp: {{DL - Timestamp}} || new Date().toISOString()
  };
  
  console.log('📤 Sending to Zapier (Demo) - Score:', payload.leadScore);
  
  // Send to Zapier
  fetch('https://hooks.zapier.com/hooks/catch/11465938/ukomrvd/', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function() {
    console.log('✅ Demo data sent to Zapier with score:', payload.leadScore);
  }).catch(function(error) {
    console.error('❌ Error sending to Zapier:', error);
  });
})();
</script>
```

5. **Triggering:** Select trigger:
   - Trigger: `Custom Event - Lead Score Calculated`
   
6. Click **Save**

**⚠️ IMPORTANT:** Use ONLY `lead_score_calculated` trigger. The tag has built-in duplicate prevention to avoid sending data twice.

---

### **Tag 3C: Zapier - High-Value Actions (Optional)**

This tag sends real-time updates when users take high-value actions (not just form submissions).

**Create New Tag:**
1. Click **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Zapier - High Value Actions`
4. **Paste this code:**

```html
<script>
(function() {
  var scoring = {{DL - Lead Scoring Object}} || {};
  
  // Only send high-value actions
  var highValue = ['Trial Started', 'Demo Requested', 'Video Completed', 'Pricing Viewed'];
  if (highValue.indexOf(scoring.action) === -1) {
    console.log('⏭️ Skipping low-value action:', scoring.action);
    return;
  }
  
  var payload = {
    action: scoring.action,
    scoreAdded: scoring.scoreAdded,
    totalScore: scoring.totalScore,
    leadCategory: scoring.leadCategory,
    normalizedScore: scoring.normalizedScore,
    categoryChanged: scoring.categoryChanged,
    timestamp: scoring.timestamp,
    metadata: scoring.metadata || {}
  };
  
  console.log('📤 Sending high-value action to Zapier:', payload);
  
  // Send to Zapier (use same webhook as trial or create a dedicated one)
  fetch('https://hooks.zapier.com/hooks/catch/11465938/ufjmokc/', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(function() {
    console.log('✅ High-value action sent to Zapier');
  });
})();
</script>
```

5. **Triggering:** Create new trigger
   - Click on "Triggering"
   - Click **+** icon
   - Select **Custom Event**
   - **Event name:** `lead_score_calculated`
   - **This trigger fires on:** All Custom Events
   - Click **Save**
   - Name it: `Custom Event - Lead Score Calculated`

6. Click **Save** on the tag

---

## Step 4: Create Variables

Variables allow you to read data from dataLayer in your tags.

### **How to Create Variables:**

1. Click **Variables** in left sidebar
2. Scroll to **User-Defined Variables** section
3. Click **New**
4. Click on variable configuration area
5. Select **Data Layer Variable**
6. Enter the **Data Layer Variable Name** (see below)
7. Click **Save** and name the variable

### **Variables to Create:**

Create these 10 variables:

| Variable Name | Data Layer Variable Name | Description |
|---------------|-------------------------|-------------|
| `DL - Form Data` | `formData` | All form fields |
| `DL - Lead Scoring Object` | `leadScoring` | Complete scoring object |
| `DL - Lead Action` | `leadScoring.action` | Action name |
| `DL - Total Score` | `leadScoring.totalScore` | Current total score |
| `DL - Lead Category` | `leadScoring.leadCategory` | Category (Cold/Warm/Hot) |
| `DL - Normalized Score` | `leadScoring.normalizedScore` | Score ÷ 39.4 |
| `DL - UTM Source` | `utmSource` | UTM tracking |
| `DL - Registration URL` | `registrationUrl` | Trial registration URL |
| `DL - Login URL` | `loginUrl` | Demo login URL |
| `DL - Redirect URL` | `redirectUrl` | Demo redirect URL |
| `DL - Timestamp` | `timestamp` | Form submission time |
| `DL - Button Source` | `buttonSource` | Which button clicked |

---

## Step 5: Create Triggers

You should now have these triggers created:

✅ **All Pages - DOM Ready** (Built-in)  
✅ **Custom Event - Trial Form Submit** (Created in Step 2A)  
✅ **Custom Event - Demo Form Submit** (Created in Step 2B)  
✅ **Custom Event - Lead Score Calculated** (Created in Step 3C)  

---

## Step 6: Zapier Setup

### **6.1: Create Trial Form Zap**

1. Go to **Zapier Dashboard**
2. Click **Create Zap**
3. **Trigger:**
   - App: **Webhooks by Zapier**
   - Event: **Catch Hook**
   - Click **Continue**
   - Copy webhook URL: `https://hooks.zapier.com/hooks/catch/11465938/uz82iuk/`
   - Click **Test trigger** (submit a trial form to test)

4. **Action** (Choose what to do with the data):
   - **Option A:** Send to Google Sheets
   - **Option B:** Send to Salesforce/HubSpot/CRM
   - **Option C:** Send Email notification
   - **Option D:** All of the above (multi-step Zap)

5. **Map the fields:**
   ```
   Full Name → {{fullName}}
   Email → {{email}}
   Phone → {{phoneNumber}}
   Company → {{companyName}}
   Lead Score → {{leadScore}}
   Category → {{leadCategory}}
   Registration URL → {{registrationUrl}}
   ```

6. Click **Test & Continue**
7. **Turn on Zap**

### **6.2: Create Demo Form Zap**

1. Create another Zap
2. **Trigger:**
   - Webhooks by Zapier → Catch Hook
   - URL: `https://hooks.zapier.com/hooks/catch/11465938/ukomrvd/`

3. **Action:** Same as trial (or different workflow)
4. **Map the fields:**
   ```
   Full Name → {{fullName}}
   Email → {{email}}
   Phone → {{phoneNumber}}
   Company → {{companyName}}
   Lead Score → {{leadScore}}
   Category → {{leadCategory}}
   Login URL → {{loginUrl}}
   ```

5. Turn on Zap

### **6.3: Add Phone Number Formatter (Optional)**

If you need to format phone numbers to a consistent format (e.g., +94XXXXXXXXX for Sri Lanka):

1. **After the Webhook trigger, add a new step:**
   - Click **+** to add a step
   - Choose **Code by Zapier**
   - Event: **Run JavaScript**
   - Click **Continue**

2. **Configure the Code:**
   - **Input Data:** Map all webhook fields
     ```
     fullName: [Webhook] Full Name
     phoneNumber: [Webhook] Phone Number
     email: [Webhook] Email
     companyName: [Webhook] Company Name
     courierCompanies: [Webhook] Courier Companies
     ordersPerDay: [Webhook] Orders Per Day
     leadScore: [Webhook] Lead Score
     normalizedScore: [Webhook] Normalized Score
     leadCategory: [Webhook] Lead Category
     registrationUrl: [Webhook] Registration Url
     utmSource: [Webhook] Utm Source
     timestamp: [Webhook] Timestamp
     formType: [Webhook] Form Type
     ```

   - **Code (Option 1 - If you mapped individual fields):**
   ```javascript
   // Data is already parsed by Zapier
   // Access fields directly from inputData

   // Get phone number
   let phone = inputData.phoneNumber || '';

   // Remove spaces, dashes, parentheses
   phone = phone.replace(/[\s\-\(\)]/g, '');

   // Remove leading + if exists
   phone = phone.replace(/^\+/, '');

   // Remove leading 94 if exists
   phone = phone.replace(/^94/, '');

   // Remove leading 0 if exists
   phone = phone.replace(/^0/, '');

   // Add +94 prefix
   const formattedPhone = '+94' + phone;

   // Return formatted data
   return {
     courierCompanies: inputData.courierCompanies || '',
     ordersPerDay: inputData.ordersPerDay || '',
     fullName: inputData.fullName || '',
     phoneNumber: formattedPhone,
     email: inputData.email || '',
     companyName: inputData.companyName || '',
     timestamp: inputData.timestamp || new Date().toISOString(),
     registrationUrl: inputData.registrationUrl || '',
     utmSource: inputData.utmSource || '',
     leadScore: inputData.leadScore || 0,
     normalizedScore: inputData.normalizedScore || 0,
     leadCategory: inputData.leadCategory || 'Cold Lead',
     formType: inputData.formType || '',
     actionHistory: inputData.actionHistory || []
   };
   ```

   - **Code (Option 2 - If you're using Raw Body - RECOMMENDED):**
   
   **Input Data Mapping:**
   ```
   rawBody: [Webhook] Raw Body
   ```
   
   **Code:**
   ```javascript
   // Parse the raw JSON body
   const data = JSON.parse(inputData.rawBody);

   // Get phone number
   let phone = data.phoneNumber || '';

   // Remove spaces, dashes, parentheses
   phone = phone.replace(/[\s\-\(\)]/g, '');

   // Remove leading + if exists
   phone = phone.replace(/^\+/, '');

   // Remove leading 94 if exists
   phone = phone.replace(/^94/, '');

   // Remove leading 0 if exists
   phone = phone.replace(/^0/, '');

   // Add +94 prefix
   const formattedPhone = '+94' + phone;

   // Return formatted data
   return {
     courierCompanies: data.courierCompanies || '',
     ordersPerDay: data.ordersPerDay || '',
     fullName: data.fullName || '',
     phoneNumber: formattedPhone,
     email: data.email || '',
     companyName: data.companyName || '',
     timestamp: data.timestamp || new Date().toISOString(),
     registrationUrl: data.registrationUrl || '',
     utmSource: data.utmSource || '',
     leadScore: data.leadScore || 0,
     normalizedScore: data.normalizedScore || 0,
     leadCategory: data.leadCategory || 'Cold Lead',
     formType: data.formType || '',
     actionHistory: data.actionHistory || []
   };
   ```

3. **Test the Code:**
   - Click **Test & Continue**
   - Verify output shows formatted phone number

4. **Use formatted data in next steps:**
   - In subsequent actions, use `[Code] Phone Number` instead of `[Webhook] Phone Number`

### **6.4: Example Zap Workflows**

**Workflow 1: Hot Leads → Instant Notification**
```
Trigger: Catch Hook
Filter: leadCategory equals "Hot Lead" OR "Very Hot Lead"
Action: Send Slack message to #sales-alerts
Action: Send email to sales team
Action: Create Salesforce lead
```

**Workflow 2: All Leads → CRM**
```
Trigger: Catch Hook
Action: Create/Update contact in HubSpot
- Set custom property "Lead Score" = {{leadScore}}
- Set custom property "Lead Category" = {{leadCategory}}
- Add to list "Trial Signups"
```

**Workflow 3: Score Changes → Update CRM**
```
Trigger: Catch Hook (high-value actions)
Filter: categoryChanged equals true
Action: Update contact in CRM with new score
Action: Trigger automated email sequence based on category
```

---

## Step 7: Testing & Debugging

### **7.1: Test in GTM Preview Mode**

1. Go to GTM container
2. Click **Preview** (top right)
3. Enter your website URL
4. Click **Connect**

### **7.2: Test Trial Form**

1. Fill out and submit trial form
2. **In GTM Debug Panel, verify:**
   - ✅ Event `trial_form_submit` appears
   - ✅ Tag "Lead Score - Trial Form Handler" fires
   - ✅ Tag "Lead Score - Calculator Core" processes action
   - ✅ Event `lead_score_calculated` appears
   - ✅ Tag "Zapier - Trial Form Complete" fires

3. **In Browser Console, verify:**
   ```javascript
   // Check dataLayer
   console.table(dataLayer);
   
   // Check current score
   window.LeadScoreManager.getTotalScore() // Should be 30+
   
   // Check all actions
   console.table(window.LeadScoreManager.getActions())
   ```

4. **In Zapier, verify:**
   - Go to your Zap
   - Click "Zap History"
   - See successful run with data

### **7.3: Test Demo Form**

Same process as trial form.

### **7.4: Test Scoring Logic**

**Test repeat actions:**
```javascript
// Submit trial form twice
// Score will increase BOTH times (+30 each time = +60 total)
// Note: Duplicate actions ARE allowed and add points each time
```

**Test category changes:**
```javascript
// Start fresh
window.LeadScoreManager.reset()

// Trigger actions manually
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Pricing Viewed' }
})); // +25 = Cold Lead

window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Trial Started' }
})); // +30 = 55 = Warm Lead

window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Video Completed' }
})); // +25 = 80 = Hot Lead
```

### **7.5: Common Issues & Fixes**

| Issue | Solution |
|-------|----------|
| "LeadScoreManager is not defined" | Tag 1A hasn't loaded. Check it fires on DOM Ready |
| "formData is undefined" | Variable not created or incorrect name |
| Zapier not receiving data | Check webhook URL, test with curl |
| Zapier Code step returns nothing | Use `inputData.fieldName` directly, don't use `JSON.parse(inputData.bn)` or access `metadata` object |
| Phone number not formatted | Add Code by Zapier step (see section 6.3) |
| Score not increasing | Check action name exact match, verify Calculator Core loaded |
| dataLayer empty | Website not pushing correctly, check frontend code |
| leadScore is 0 when should be higher | Form submitted before user took other actions. Score is correct for that moment |

### **7.6: Zapier Troubleshooting**

**Issue: Zapier receives data but fields are empty in Code step**

❌ **Wrong Code:**
```javascript
const data = JSON.parse(inputData.bn);
const metadata = data.metadata || {};
return { fullName: metadata.fullName }; // Returns empty!
```

✅ **Correct Code:**
```javascript
// Data is already parsed - access directly
return { fullName: inputData.fullName }; // Works!
```

**Issue: Can't see webhook data in Zapier**

1. Go to Zap editor
2. Click on Webhook trigger step
3. Click **Test trigger**
4. Submit a form on your website
5. Click **Find new records** in Zapier
6. Should see the data appear

**Issue: Code step shows "output: undefined"**

Make sure your Code step **returns** an object:
```javascript
return {
  fullName: inputData.fullName,
  phoneNumber: formattedPhone
}; // Must have return statement!
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER SUBMITS FORM                        │
│                     (Trial or Demo on Website)                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND (Header.jsx)                         │
│  • Collects form data (name, email, phone, company)             │
│  • Builds registration/login URL                                 │
│  • Pushes to dataLayer:                                          │
│    {                                                             │
│      event: 'trial_form_submit',                                 │
│      formData: {...},                                            │
│      registrationUrl: '...',                                     │
│      utmSource: '...'                                            │
│    }                                                             │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   GTM DETECTS EVENT                              │
│  Trigger: "trial_form_submit" fires                              │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ TAG: Trial Form Handler      │  │ TAG: Calculator Core         │
│ • Triggers scoring action    │  │ • Already loaded on page     │
│ • Dispatches:                │  │ • Listens for actions        │
│   'lead_action_trigger'      │  │ • Calculates scores          │
│   action: 'Trial Started'    │  │ • Stores in localStorage     │
└──────────────┬───────────────┘  └───────────┬──────────────────┘
               │                               │
               └───────────────┬───────────────┘
                               ▼
               ┌────────────────────────────────┐
               │ LeadScoreManager.trackAction() │
               │ • Check duplicate ✓            │
               │ • Add to actions list ✓        │
               │ • Calculate total: 30 + X ✓   │
               │ • Determine category ✓         │
               │ • Push to dataLayer ✓          │
               └───────────┬────────────────────┘
                           │
                           ▼
               ┌────────────────────────────────┐
               │ dataLayer UPDATED              │
               │ {                              │
               │   event: 'lead_score_calculated'│
               │   leadScoring: {               │
               │     action: 'Trial Started',   │
               │     totalScore: 55,            │
               │     leadCategory: 'Warm Lead', │
               │     normalizedScore: 1         │
               │   }                            │
               │ }                              │
               └───────────┬────────────────────┘
                           │
                           ▼
               ┌────────────────────────────────┐
               │ TAG: Zapier - Trial Complete   │
               │ • Reads formData from DL       │
               │ • Reads score from Manager     │
               │ • Combines all data            │
               │ • Sends HTTP POST to Zapier    │
               └───────────┬────────────────────┘
                           │
                           ▼
               ┌────────────────────────────────┐
               │         ZAPIER WEBHOOK         │
               │ Receives:                      │
               │ • fullName                     │
               │ • email                        │
               │ • phoneNumber                  │
               │ • companyName                  │
               │ • leadScore: 55                │
               │ • leadCategory: 'Warm Lead'    │
               │ • actionHistory: [...]         │
               │ • registrationUrl              │
               │ • utmSource                    │
               │ • timestamp                    │
               └───────────┬────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
┌──────────────────────┐   ┌──────────────────────┐
│   Zapier Action 1    │   │   Zapier Action 2    │
│  • Send to CRM       │   │  • Send Email        │
│  • Create contact    │   │  • Notify sales team │
└──────────────────────┘   └──────────────────────┘
```

---

## 📊 Complete Tag Summary

| Tag Name | Type | Trigger | Purpose |
|----------|------|---------|---------|
| Lead Score - Calculator Core | Custom HTML | All Pages (DOM Ready) | Main scoring engine |
| Lead Score - Auto Tracking | Custom HTML | All Pages (Window Loaded) | Session/page tracking |
| Lead Score - Trial Form Handler | Custom HTML | trial_form_submit | Triggers scoring |
| Lead Score - Demo Form Handler | Custom HTML | demo_form_submit | Triggers scoring |
| Zapier - Trial Form Complete | Custom HTML | **lead_score_calculated** | Sends data to Zapier (with duplicate prevention) |
| Zapier - Demo Form Complete | Custom HTML | **lead_score_calculated** | Sends data to Zapier (with duplicate prevention) |
| Zapier - High Value Actions | Custom HTML | lead_score_calculated | Real-time updates |

---

## 🎯 What Zapier Receives

### **Trial Submission:**
```json
{
  "fullName": "John Doe",
  "phoneNumber": "+94771234567",
  "email": "john@example.com",
  "companyName": "Acme Corp",
  "courierCompanies": "DHL, FedEx",
  "ordersPerDay": "50-100",
  "leadScore": 55,
  "normalizedScore": 1,
  "leadCategory": "Warm Lead",
  "actionHistory": [
    {
      "action": "Pricing Viewed",
      "score": 25,
      "timestamp": "2025-12-17T10:00:00Z"
    },
    {
      "action": "Trial Started",
      "score": 30,
      "timestamp": "2025-12-17T10:05:00Z"
    }
  ],
  "registrationUrl": "https://welcome.oms.storemate.cloud/register?...",
  "utmSource": "btn_start_a_free_trial_header_pricing",
  "formType": "trial",
  "timestamp": "2025-12-17T10:05:30.123Z"
}
```

### **Demo Submission:**
```json
{
  "fullName": "Jane Smith",
  "phoneNumber": "+94779876543",
  "email": "jane@example.com",
  "companyName": "Example Inc",
  "courierCompanies": "Pronto, Aramex",
  "ordersPerDay": "100-200",
  "leadScore": 80,
  "normalizedScore": 2,
  "leadCategory": "Hot Lead",
  "actionHistory": [
    {
      "action": "Pricing Viewed",
      "score": 25,
      "timestamp": "2025-12-17T10:00:00Z"
    },
    {
      "action": "Video Completed",
      "score": 25,
      "timestamp": "2025-12-17T10:03:00Z"
    },
    {
      "action": "Demo Requested",
      "score": 30,
      "timestamp": "2025-12-17T10:07:00Z"
    }
  ],
  "loginUrl": "https://oms.storemate.cloud/login?businessName=...",
  "redirectUrl": "https://oms.storemate.cloud/login?businessName=...&name=Jane+Smith&phone=...",
  "formType": "demo",
  "timestamp": "2025-12-17T10:07:30.456Z"
}
```

---

## ✅ Final Checklist

### **GTM Container:**
- [ ] Tag 1A: Lead Score - Calculator Core (✓ DOM Ready trigger)
- [ ] Tag 1B: Lead Score - Auto Tracking (✓ DOM Ready trigger)
- [ ] Tag 2A: Lead Score - Trial Form Handler (✓ trial_form_submit trigger)
- [ ] Tag 2B: Lead Score - Demo Form Handler (✓ demo_form_submit trigger)
- [ ] Tag 3A: Zapier - Trial Form Complete (✓ trial_form_submit trigger)
- [ ] Tag 3B: Zapier - Demo Form Complete (✓ demo_form_submit trigger)
- [ ] Tag 3C: Zapier - High Value Actions (✓ lead_score_calculated trigger)
- [ ] All 12 Variables created
- [ ] All Triggers created
- [ ] Tested in Preview mode
- [ ] Published container

### **Zapier:**
- [ ] Trial Form Zap created and ON
- [ ] Demo Form Zap created and ON
- [ ] Webhook URLs match in GTM tags
- [ ] Tested with real submissions
- [ ] Actions configured (CRM, email, etc.)

### **Website:**
- [ ] Frontend pushes `trial_form_submit` to dataLayer
- [ ] Frontend pushes `demo_form_submit` to dataLayer
- [ ] GTM container snippet installed on all pages
- [ ] No direct webhook calls in frontend code
- [ ] Tested form submissions work

---

## 📋 Quick Reference: Zapier Data Structure

When you receive data in Zapier, it will look like this:

**Available Fields (use in Code or Actions):**
```
inputData.fullName              → "John Doe"
inputData.phoneNumber           → "0771234567"
inputData.email                 → "john@example.com"
inputData.companyName           → "Acme Corp"
inputData.courierCompanies      → "DHL, FedEx"
inputData.ordersPerDay          → "50-100"
inputData.leadScore             → 55
inputData.normalizedScore       → 1
inputData.leadCategory          → "Warm Lead"
inputData.registrationUrl       → "https://..."
inputData.utmSource             → "btn_start_a_free_trial_header_pricing"
inputData.formType              → "trial"
inputData.timestamp             → "2025-12-17T10:05:30.123Z"
inputData.actionHistory         → [array of actions]
```

**In Zapier Actions/Filters, use:**
- `{{fullName}}` - Not `{{metadata.fullName}}`
- `{{phoneNumber}}` - Not `{{bn.phoneNumber}}`
- `{{leadScore}}` - Direct access
- `{{leadCategory}}` - Direct access

**In Code by Zapier, use:**
```javascript
// ✅ Correct
const name = inputData.fullName;
const score = inputData.leadScore;

// ❌ Wrong
const data = JSON.parse(inputData.bn); // Don't do this
const name = data.metadata.fullName;   // Don't do this
```

---

## 🎉 Result

**Your website now:**
- ✅ Only pushes simple form data to dataLayer
- ✅ Has NO webhook calls in frontend code
- ✅ Has NO scoring logic in frontend
- ✅ Has NO duplicate webhooks
- ✅ Clean, maintainable code

**GTM handles:**
- ✅ ALL scoring calculations
- ✅ Allows repeat actions (duplicates add to score)
- ✅ ALL localStorage management
- ✅ ALL category determination
- ✅ ALL auto-tracking (timers, pages, visits)
- ✅ ALL webhook sending to Zapier

**Zapier receives:**
- ✅ Complete form data
- ✅ Lead scores (raw + normalized)
- ✅ Lead categories
- ✅ Full action history
- ✅ UTM tracking
- ✅ Timestamps

**To change anything:**
- 🔧 Scoring rules → Edit GTM Tag 1A
- 🔧 Zapier webhooks → Edit GTM Tags 3A/3B
- 🔧 Automation workflows → Edit Zapier Zaps
- 🔧 NO frontend deployment needed!

---

## 🆘 Support & Troubleshooting

### **Debug Commands:**

```javascript
// Check if GTM loaded
window.LeadScoreManager

// Check current score
window.LeadScoreManager.getTotalScore()

// Check all actions
console.table(window.LeadScoreManager.getActions())

// Check dataLayer
console.table(dataLayer)

// Manually trigger form submission (test)
window.dataLayer.push({
  event: 'trial_form_submit',
  formData: {
    fullName: 'Test User',
    email: 'test@example.com',
    phoneNumber: '+94771234567',
    companyName: 'Test Corp'
  },
  registrationUrl: 'https://test.com',
  utmSource: 'test'
});

// Reset scores (fresh start)
window.LeadScoreManager.reset()
```

### **Common Gotchas:**

1. **Tags not firing:** Check trigger conditions in Preview mode
2. **Variables returning undefined:** Check exact dataLayer key names
3. **Zapier not receiving:** Check webhook URL is exact match
4. **Scores not persisting:** Check localStorage not blocked
5. **Repeat actions working as designed:** Duplicate actions now ADD to score (intentional behavior)

---

**Need help?** Check GTM Debug Panel, Browser Console, and Zapier Task History for detailed logs.


{"fullName":"Kavindu Rasanjana","phoneNumber":"0772003045","email":"kavindurs8@gmail.com","companyName":"Parallax Technologies","courierCompanies":"domexx, trans","ordersPerDay":"600","leadScore":0,"normalizedScore":0,"leadCategory":"Cold Lead","actionHistory":[],"registrationUrl":"https://welcome.oms.storemate.cloud/register?fullName=Kavindu+Rasanjana&phoneNumber=0772003045&email=kavindurs8%40gmail.com&companyName=Parallax+Technologies&utm_source=btn_start_a_free_trial_header_about","utmSource":"btn_start_a_free_trial_header_about","formType":"trial","timestamp":"2025-12-17T07:36:58.039Z"}

// Data is already parsed by Zapier, no need to JSON.parse
// Access fields directly from inputData

// Get phone number
let phone = inputData.phoneNumber || '';

// Remove spaces, dashes, parentheses
phone = phone.replace(/[\s\-\(\)]/g, '');

// Remove leading + if exists
phone = phone.replace(/^\+/, '');

// Remove leading 94 if exists
phone = phone.replace(/^94/, '');

// Remove leading 0 if exists
phone = phone.replace(/^0/, '');

// Add +94 prefix
const formattedPhone = '+94' + phone;

// Return formatted data
return {
  courierCompanies: inputData.courierCompanies || '',
  ordersPerDay: inputData.ordersPerDay || '',
  fullName: inputData.fullName || '',
  phoneNumber: formattedPhone,
  email: inputData.email || '',
  companyName: inputData.companyName || '',
  timestamp: inputData.timestamp || new Date().toISOString(),
  registrationUrl: inputData.registrationUrl || '',
  utmSource: inputData.utmSource || '',
  leadScore: inputData.leadScore || 0,
  normalizedScore: inputData.normalizedScore || 0,
  leadCategory: inputData.leadCategory || 'Cold Lead',
  formType: inputData.formType || '',
  actionHistory: inputData.actionHistory || []
};



utm_source=Facebook&utm_medium=Website&utm_campaign=10_Cold_Website_Dec&utm_content=Without_WebSite
utm_source=Facebook&utm_medium=website&utm_campaign=10_Cold_Website_Dec&utm_content=Return_Headache
utm_source=Facebook&utm_medium=Website&utm_campaign=10_Cold_Website_Decutm_content=Order_Management
utm_source=Facebook&utm_medium=Website&utm_campaign=10_Cold_Website_Dec&utm_content=Excel_Upload
utm_source=Facebook&utm_medium=Website&utm_campaign=10_Cold_Website_Dec&utm_content=Courier_Sync_2
