# Complete GTM Setup - All Functionality Moved to Tag Manager

This guide shows you how to set up **100% of the lead scoring functionality in GTM**, with your website only pushing simple events.

---

## 🎯 Architecture Overview

### **OLD (Website handles logic):**
```
Website Code → Calculate Score → Store in localStorage → Push to dataLayer → GTM sends to GA4
```

### **NEW (GTM handles everything):**
```
Website → Push simple event → GTM detects → GTM calculates score → GTM stores → GTM sends everywhere
```

---

## 📦 What GTM Will Handle

✅ Score calculation (30 pts for trial, 25 for video, etc.)  
✅ Duplicate prevention (only count actions once)  
✅ localStorage persistence (scores saved across sessions)  
✅ Category determination (Cold/Warm/Hot/Very Hot)  
✅ Normalized score (÷ 39.4)  
✅ Session time tracking (5+ min session)  
✅ Page time tracking (3+ min on key pages)  
✅ Multiple page tracking (3+ pages visited)  
✅ Return visit detection  
✅ Category milestone events  
✅ Integration with all platforms  

---

## 🚀 STEP-BY-STEP SETUP

### **STEP 1: Create Core Tags**

#### **Tag 1A: Lead Score Calculator (Main Engine)**

**Path:** Tags → New  
**Name:** `Lead Score - Calculator Core`  
**Type:** Custom HTML  
**Trigger:** All Pages - DOM Ready

**Code:**
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
      
      // Check for duplicates FIRST
      if (this.hasAction(actionName)) {
        console.log('⚠️ Duplicate blocked: ' + actionName);
        return { success: false, reason: 'duplicate' };
      }
      
      var config = SCORE_CONFIG[actionName];
      if (!config) {
        console.warn('❌ Unknown: ' + actionName);
        return { success: false, reason: 'unknown' };
      }
      
      var previousScore = this.getTotalScore();
      var previousCategory = this.getLeadCategory(previousScore);
      
      var actions = this.getActions();
      
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
      
      console.log('🎯 ' + actionName + ' (+' + config.score + ' pts) → Total: ' + newScore);
      
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
  
  console.log('✅ Lead Score Manager Ready');
  console.log('📊 Current Score: ' + window.LeadScoreManager.getTotalScore());
  
})();
</script>
```

---

#### **Tag 1B: Auto-Tracking Features (Timers, Pages, Return Visits)**

**Path:** Tags → New  
**Name:** `Lead Score - Auto Tracking`  
**Type:** Custom HTML  
**Trigger:** All Pages - DOM Ready

**Code:**
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
      var sessionTime = (Date.now() - sessionStartTime) / 1000 / 60;
      if (sessionTime >= 5 && !window.LeadScoreManager.hasAction('5+ min Session')) {
        triggerAction('5+ min Session', { 
          sessionTime: Math.round(sessionTime) 
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
      
      // 3+ minutes on key page
      if (KEY_PAGES.indexOf(currentPage) !== -1 && 
          timeOnPages[currentPage] >= 3 &&
          !window.LeadScoreManager.hasAction('3+ min on Key Page')) {
        triggerAction('3+ min on Key Page', { 
          page: currentPage,
          timeSpent: Math.round(timeOnPages[currentPage])
        });
      }
    }
    
    // Start tracking new page
    currentPage = pageName;
    pageStartTime = Date.now();
    pageVisits.push(pageName);
    
    // Track specific page views
    if (pageName === 'pricing' && !window.LeadScoreManager.hasAction('Pricing Viewed')) {
      triggerAction('Pricing Viewed');
    }
    if (pageName === 'about' && !window.LeadScoreManager.hasAction('About Page Viewed')) {
      triggerAction('About Page Viewed');
    }
    if (pageName === 'documentation' && !window.LeadScoreManager.hasAction('Documentation Viewed')) {
      triggerAction('Documentation Viewed');
    }
    if (pageName === 'blog' && !window.LeadScoreManager.hasAction('Blog Read')) {
      triggerAction('Blog Read');
    }
    
    // Multiple pages (3+)
    var uniquePages = pageVisits.filter(function(v, i, a) {
      return a.indexOf(v) === i;
    });
    if (uniquePages.length >= 3 && !window.LeadScoreManager.hasAction('Multiple Pages (3+)')) {
      triggerAction('Multiple Pages (3+)', { 
        totalPages: uniquePages.length 
      });
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

---

### **STEP 2: Create Event Detection Tags**

These tags detect user actions and trigger scoring.

#### **Tag 2A: Trial Started**

**Name:** `Lead Score - Trial Started`  
**Type:** Custom HTML  
**Code:**
```html
<script>
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: {
    action: 'Trial Started',
    metadata: { formType: 'trial' }
  }
}));
</script>
```
**Trigger:** Create new trigger
- **Type:** Form Submission
- **Name:** `Form - Trial Submit`
- **Fires On:** Some Forms
- **Condition 1:** Form ID equals `trial-form`
- **OR Condition 2:** Form Classes contains `trial-signup-form`

**Alternative Method:** If form trigger doesn't work, create a **Custom Event** trigger instead:
- **Type:** Custom Event
- **Name:** `Custom - Trial Form Submitted`
- **Event Name:** `lead_action_trigger`
- **Fires On:** Some Custom Events
- **Condition:** `{{leadAction}}` equals `Trial Started`

---

#### **Tag 2B: Demo Requested**

**Name:** `Lead Score - Demo Requested`  
**Type:** Custom HTML  
**Code:**
```html
<script>
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: {
    action: 'Demo Requested',
    metadata: { formType: 'demo' }
  }
}));
</script>
```
**Trigger:** Create new trigger
- **Type:** Form Submission
- **Name:** `Form - Demo Submit`
- **Fires On:** Some Forms
- **Condition 1:** Form ID equals `demo-form`
- **OR Condition 2:** Form Classes contains `demo-request-form`

**Alternative Method:** If form trigger doesn't work, create a **Custom Event** trigger instead:
- **Type:** Custom Event
- **Name:** `Custom - Demo Form Submitted`
- **Event Name:** `lead_action_trigger`
- **Fires On:** Some Custom Events
- **Condition:** `{{leadAction}}` equals `Demo Requested`

---

#### **Tag 2C: Video Completed (OPTIONAL - Not Required)**

**⚠️ NOTE: This tag is OPTIONAL and NOT REQUIRED. Tag 1A already handles video scoring.**

If you want a separate tag for debugging or additional tracking, create:

**Name:** `Lead Score - Video Completed`  
**Type:** Custom HTML  
**Code:**
```html
<script>
console.log('✅ Video Completed tag fired (debug only)');
</script>
```
**Trigger:** Create new trigger
- **Type:** Custom Event
- **Name:** `Custom Event - Video Completed`
- **Event Name:** `lead_score_calculated`
- **Fires On:** Some Custom Events
- **Condition:** `{{leadScoring.action}}` equals `Video Completed`

**Why this works:** This tag fires AFTER Tag 1A has already calculated the score and pushed to dataLayer. It's purely for debugging/confirmation.

**Recommended:** Delete this tag entirely - it's not needed!

---

#### **Tag 2D: CTA Clicked**

**Name:** `Lead Score - CTA Clicked`  
**Type:** Custom HTML  
**Code:**
```html
<script>
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: {
    action: 'CTA Clicked',
    metadata: {
      ctaText: {{Click Text}},
      ctaUrl: {{Click URL}}
    }
  }
}));
</script>
```
**Trigger:** Create new trigger
- **Type:** Click - All Elements
- **Name:** `Click - CTA Buttons`
- **Condition:** Click Classes contains `cta` OR `btn-primary` OR Click Text contains `Start Free Trial`

---

### **STEP 3: Create Integration Tags**

#### **Tag 3A: Google Analytics 4**

**Name:** `GA4 - Lead Score Event`  
**Type:** Google Analytics: GA4 Event  
**Event Name:** `lead_score_action`  
**Event Parameters:**
- `action` → `{{leadScoring.action}}`
- `score_added` → `{{leadScoring.scoreAdded}}`
- `total_score` → `{{leadScoring.totalScore}}`
- `lead_category` → `{{leadScoring.leadCategory}}`
- `normalized_score` → `{{leadScoring.normalizedScore}}`

**Trigger:** Custom Event = `lead_score_calculated`

**How to create this trigger in GTM:**
1. Go to **Triggers** → Click **New**
2. Click on trigger configuration area
3. Select **Custom Event** from the list
4. **Event name:** `lead_score_calculated` (type exactly this)
5. **This trigger fires on:** All Custom Events
6. Click **Save**
7. Name the trigger: `Custom Event - Lead Score Calculated`

---

#### **Tag 3B: Make.com Webhook**

**Name:** `Make.com - Lead Score Webhook`  
**Type:** Custom HTML  
**Code:**
```html
<script>
(function() {
  var scoring = {{leadScoring}};
  
  // Only send high-value actions
  var highValue = ['Trial Started', 'Demo Requested', 'Video Completed', 'Pricing Viewed'];
  if (highValue.indexOf(scoring.action) === -1) return;
  
  fetch('https://hook.eu1.make.com/7pg5oiucajn3zqla49eqxrh8j5ngfi8v', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: scoring.action,
      totalScore: scoring.totalScore,
      leadCategory: scoring.leadCategory,
      normalizedScore: scoring.normalizedScore,
      timestamp: scoring.timestamp
    })
  }).then(function() {
    console.log('✅ Sent to Make.com');
  });
})();
</script>
```
**Trigger:** Custom Event = `lead_score_calculated`

---

#### **Tag 3C: Facebook Pixel**

**Name:** `Facebook Pixel - Lead Score`  
**Type:** Custom HTML  
**Code:**
```html
<script>
if (typeof fbq !== 'undefined') {
  fbq('trackCustom', 'LeadScoreUpdate', {
    action: {{leadScoring.action}},
    score: {{leadScoring.totalScore}},
    category: {{leadScoring.leadCategory}},
    normalized_score: {{leadScoring.normalizedScore}}
  });
}
</script>
```
**Trigger:** Custom Event = `lead_score_calculated`

---

### **STEP 4: Create Data Layer Variables**

Go to **Variables → New → Data Layer Variable**

**How to create each variable:**

1. Click **Variables** in left sidebar
2. Scroll to **User-Defined Variables** section
3. Click **New**
4. Click on variable configuration area
5. Select **Data Layer Variable** from the list
6. Enter the **Data Layer Variable Name** (see below)
7. Click **Save** and name the variable

**Create these 6 variables:**

**Variable 1: DL - Lead Scoring Object**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring`
- Save as: `DL - Lead Scoring Object`

**Variable 2: DL - Lead Action**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring.action`
- Save as: `DL - Lead Action`

**Variable 3: DL - Total Score**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring.totalScore`
- Save as: `DL - Total Score`

**Variable 4: DL - Lead Category**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring.leadCategory`
- Save as: `DL - Lead Category`

**Variable 5: DL - Normalized Score**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring.normalizedScore`
- Save as: `DL - Normalized Score`

**Variable 6: DL - Score Added**
- Variable Type: Data Layer Variable
- Data Layer Variable Name: `leadScoring.scoreAdded`
- Save as: `DL - Score Added`

**How to use these variables in GA4 Event Parameters:**
When you see `{{leadScoring.action}}` in the documentation, you're using the variable named "DL - Lead Action". GTM will automatically suggest these variables when you type `{{` in any field.

---

## 🧪 Testing Checklist

### **1. Test Core Functionality**

Open browser console:

```javascript
// Check if manager loaded
window.LeadScoreManager

// Check current score
window.LeadScoreManager.getTotalScore()

// Manually trigger action
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Trial Started' }
}));

// Check score again (should be +30)
window.LeadScoreManager.getTotalScore()

// View all actions
console.table(window.LeadScoreManager.getActions())

// Check dataLayer
console.table(dataLayer)
```

### **2. Test Each Event**

- [ ] Submit trial form → Score +30
- [ ] Submit demo form → Score +30
- [ ] View pricing page → Score +25
- [ ] Complete video → Score +25
- [ ] Click CTA button → Score +10
- [ ] View about page → Score +10
- [ ] Visit 3+ pages → Score +15
- [ ] Stay 3+ min on pricing → Score +20
- [ ] Stay 5+ min total → Score +10
- [ ] Return visit → Score +5

### **3. Test Duplicate Prevention**

```javascript
// Trigger same action twice
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Pricing Viewed' }
}));
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: { action: 'Pricing Viewed' }
}));

// Should see: ⚠️ Duplicate: Pricing Viewed
// Score should only increase once
```

### **4. Test Category Changes**

Watch console as you score points:
- 0-30: Cold Lead
- 31-60: Warm Lead → fires `lead_became_warm`
- 61-100: Hot Lead → fires `lead_became_hot`
- 100+: Very Hot Lead → fires `lead_became_very_hot`

### **5. Test Persistence**

```javascript
// Check current score
window.LeadScoreManager.getTotalScore()

// Refresh page
location.reload()

// Score should still be there
window.LeadScoreManager.getTotalScore()
```

---

## 📊 Complete Event Flow

```
User Action (e.g., submits trial form)
    ↓
GTM Form Trigger detects submission
    ↓
GTM Tag fires: "Lead Score - Trial Started"
    ↓
Dispatches CustomEvent 'lead_action_trigger'
    ↓
LeadScoreManager.trackAction('Trial Started') executes
    ↓
1. Check duplicate ✓
2. Add to localStorage ✓
3. Calculate new score (previous + 30) ✓
4. Determine category ✓
5. Calculate normalized score ✓
    ↓
Push to dataLayer: { event: 'lead_score_calculated', leadScoring: {...} }
    ↓
Integration tags fire:
    - GA4 Event ✓
    - Make.com Webhook ✓
    - Facebook Pixel ✓
```

---

## ✅ Final Checklist

- [ ] Tag 1A: Lead Score Calculator Core (Trigger: All Pages - DOM Ready)
- [ ] Tag 1B: Auto Tracking (Trigger: All Pages - DOM Ready)
- [ ] Tag 2A: Trial Started (Trigger: Form - Trial Submit)
- [ ] Tag 2B: Demo Requested (Trigger: Form - Demo Submit)
- [ ] Tag 2C: Video Completed (Trigger: YouTube - Complete)
- [ ] Tag 2D: CTA Clicked (Trigger: Click - CTA)
- [ ] Tag 3A: GA4 Event (Trigger: lead_score_calculated)
- [ ] Tag 3B: Make.com Webhook (Trigger: lead_score_calculated)
- [ ] Tag 3C: Facebook Pixel (Trigger: lead_score_calculated)
- [ ] All Data Layer Variables created
- [ ] All Triggers created
- [ ] Tested in Preview mode
- [ ] Verified localStorage persistence
- [ ] Verified duplicate prevention
- [ ] Published GTM container

---

## 🎉 Result

**Your website now:**
- ✅ Has ZERO scoring logic (only 40 lines of code)
- ✅ Only pushes simple events to dataLayer
- ✅ Doesn't store anything in localStorage
- ✅ Doesn't calculate scores
- ✅ Doesn't determine categories

**GTM handles:**
- ✅ ALL scoring calculations
- ✅ ALL duplicate prevention
- ✅ ALL localStorage management
- ✅ ALL category determination
- ✅ ALL auto-tracking (timers, pages, return visits)
- ✅ ALL integrations (GA4, Facebook, Make.com, etc.)

**To change scoring rules:** Just edit GTM tags - no website deployment needed! 🚀
