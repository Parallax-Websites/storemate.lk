# Google Tag Manager - Custom HTML Tags for Lead Scoring

This guide provides **ready-to-copy Custom HTML tags** for Google Tag Manager to track all 12 lead scoring events and calculate scores automatically.

---

## 📋 Setup Overview

You'll create:
1. **1 Custom HTML Tag** - Lead Score Calculator (fires on all events)
2. **12 Custom Event Triggers** - One for each action
3. **Data Layer Variables** - To read calculated scores
4. **Integration Tags** - Send data to GA4, Facebook, Make.com, etc.

---

## 🎯 STEP 1: Create the Main Score Calculator Tag

### Tag Name: `Lead Score Calculator`
**Tag Type:** Custom HTML  
**Fires On:** All Pages (Page View)

**HTML Code:**
```html
<script>
(function() {
  'use strict';
  
  // ============================================
  // LEAD SCORING CONFIGURATION
  // ============================================
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
  
  // ============================================
  // LEAD SCORE MANAGER
  // ============================================
  window.LeadScoreManager = {
    
    // Get all tracked actions from localStorage
    getActions: function() {
      try {
        var data = localStorage.getItem('gtm_lead_actions');
        return data ? JSON.parse(data) : [];
      } catch(e) {
        console.error('Error reading lead actions:', e);
        return [];
      }
    },
    
    // Save actions to localStorage
    saveActions: function(actions) {
      try {
        localStorage.setItem('gtm_lead_actions', JSON.stringify(actions));
        return true;
      } catch(e) {
        console.error('Error saving lead actions:', e);
        return false;
      }
    },
    
    // Check if action already tracked (duplicate prevention)
    hasAction: function(actionName) {
      var actions = this.getActions();
      return actions.some(function(a) { 
        return a.action === actionName; 
      });
    },
    
    // Track a new action
    trackAction: function(actionName, metadata) {
      metadata = metadata || {};
      
      // Check if already tracked
      if (this.hasAction(actionName)) {
        console.log('⚠️ Action "' + actionName + '" already tracked, skipping duplicate');
        return {
          success: false,
          reason: 'duplicate',
          totalScore: this.getTotalScore()
        };
      }
      
      // Get score config
      var config = SCORE_CONFIG[actionName];
      if (!config) {
        console.warn('❌ Unknown action: ' + actionName);
        return {
          success: false,
          reason: 'unknown_action'
        };
      }
      
      // Get current state
      var previousScore = this.getTotalScore();
      var previousCategory = this.getLeadCategory(previousScore);
      
      // Add new action
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
      
      // Calculate new state
      var newScore = this.getTotalScore();
      var newCategory = this.getLeadCategory(newScore);
      var normalizedScore = this.getNormalizedScore();
      var categoryChanged = previousCategory !== newCategory;
      
      // Log to console
      console.log('🎯 LEAD SCORING EVENT: ' + actionName);
      console.log('Score Added: +' + config.score + ' points (' + config.category + ')');
      console.log('Total Score: ' + newScore);
      console.log('Lead Category: ' + newCategory);
      console.log('Normalized Score: ' + normalizedScore);
      
      // Return result
      return {
        success: true,
        action: actionName,
        scoreAdded: config.score,
        actionCategory: config.category,
        previousScore: previousScore,
        newScore: newScore,
        totalScore: newScore,
        previousCategory: previousCategory,
        newCategory: newCategory,
        leadCategory: newCategory,
        categoryChanged: categoryChanged,
        normalizedScore: normalizedScore,
        timestamp: newAction.timestamp,
        metadata: metadata
      };
    },
    
    // Calculate total score
    getTotalScore: function() {
      var actions = this.getActions();
      return actions.reduce(function(total, action) {
        return total + (action.score || 0);
      }, 0);
    },
    
    // Get lead category based on score
    getLeadCategory: function(score) {
      if (score === undefined) {
        score = this.getTotalScore();
      }
      if (score >= 100) return 'Very Hot Lead';
      if (score >= 61) return 'Hot Lead';
      if (score >= 31) return 'Warm Lead';
      return 'Cold Lead';
    },
    
    // Get normalized score (total / 39.4 rounded)
    getNormalizedScore: function() {
      var total = this.getTotalScore();
      return Math.round(total / 39.4);
    },
    
    // Get category level (for event names)
    getCategoryLevel: function(category) {
      if (!category) category = this.getLeadCategory();
      if (category.indexOf('Very Hot') !== -1) return 'very_hot';
      if (category.indexOf('Hot') !== -1) return 'hot';
      if (category.indexOf('Warm') !== -1) return 'warm';
      return 'cold';
    },
    
    // Reset all data
    reset: function() {
      localStorage.removeItem('gtm_lead_actions');
      console.log('✅ Lead scoring data reset');
    },
    
    // Get full report
    getReport: function() {
      return {
        actions: this.getActions(),
        totalScore: this.getTotalScore(),
        leadCategory: this.getLeadCategory(),
        normalizedScore: this.getNormalizedScore()
      };
    }
  };
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Listen for lead_action events
  window.addEventListener('lead_action_trigger', function(e) {
    var actionName = e.detail.action;
    var metadata = e.detail.metadata || {};
    
    var result = window.LeadScoreManager.trackAction(actionName, metadata);
    
    if (result.success) {
      // Push to dataLayer
      window.dataLayer.push({
        event: 'lead_score_calculated',
        leadScoring: result
      });
      
      // Fire category change event if needed
      if (result.categoryChanged) {
        var categoryLevel = window.LeadScoreManager.getCategoryLevel(result.newCategory);
        window.dataLayer.push({
          event: 'lead_category_changed',
          categoryLevel: categoryLevel,
          category: result.newCategory,
          score: result.totalScore,
          normalizedScore: result.normalizedScore
        });
        
        window.dataLayer.push({
          event: 'lead_became_' + categoryLevel,
          score: result.totalScore,
          normalizedScore: result.normalizedScore
        });
        
        console.log('🔥 Category Changed: ' + result.previousCategory + ' → ' + result.newCategory);
      }
    }
  });
  
  console.log('✅ Lead Score Manager initialized');
  console.log('📊 Current Score:', window.LeadScoreManager.getTotalScore());
  console.log('🏆 Lead Category:', window.LeadScoreManager.getLeadCategory());
  
})();
</script>
```

---

## 🎯 STEP 2: Create Helper Function Tag

### Tag Name: `Lead Score Helper Function`
**Tag Type:** Custom HTML  
**Fires On:** All Pages (Page View)

**HTML Code:**
```html
<script>
// Helper function to trigger lead scoring events
window.trackLeadAction = function(actionName, metadata) {
  metadata = metadata || {};
  
  // Dispatch custom event
  var event = new CustomEvent('lead_action_trigger', {
    detail: {
      action: actionName,
      metadata: metadata
    }
  });
  window.dispatchEvent(event);
  
  // Also push to dataLayer for GTM triggers
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_action',
    leadAction: actionName,
    actionMetadata: metadata,
    timestamp: new Date().toISOString()
  });
};

console.log('✅ trackLeadAction() helper function ready');
</script>
```

---

## 🎯 STEP 3: Create Individual Event Tags

### Tag 1: **Trial Started**
**Tag Type:** Custom HTML  
**Trigger:** Form Submission - Trial Form

```html
<script>
window.trackLeadAction('Trial Started', {
  formType: 'trial',
  source: '{{Form Source}}' // Use GTM variable if available
});
</script>
```

---

### Tag 2: **Demo Requested**
**Tag Type:** Custom HTML  
**Trigger:** Form Submission - Demo Form

```html
<script>
window.trackLeadAction('Demo Requested', {
  formType: 'demo'
});
</script>
```

---

### Tag 3: **Pricing Viewed**
**Tag Type:** Custom HTML  
**Trigger:** Page View - URL contains `/pricing`

```html
<script>
window.trackLeadAction('Pricing Viewed', {
  page: 'pricing'
});
</script>
```

---

### Tag 4: **Video Completed**
**Tag Type:** Custom HTML  
**Trigger:** YouTube Video - Video Complete (use built-in YouTube trigger)

```html
<script>
window.trackLeadAction('Video Completed', {
  videoTitle: '{{Video Title}}',
  videoUrl: '{{Video URL}}'
});
</script>
```

---

### Tag 5: **3+ min on Key Page**
**Tag Type:** Custom HTML  
**Trigger:** Timer - 3 minutes on pricing/features/home/demo pages

```html
<script>
window.trackLeadAction('3+ min on Key Page', {
  page: '{{Page Path}}',
  timeSpent: 180 // 3 minutes in seconds
});
</script>
```

---

### Tag 6: **Multiple Pages (3+)**
**Tag Type:** Custom HTML  
**Trigger:** Custom Event - After 3rd page view

```html
<script>
window.trackLeadAction('Multiple Pages (3+)', {
  totalPages: '{{Page View Count}}' // Use GTM variable
});
</script>
```

---

### Tag 7: **Documentation Viewed**
**Tag Type:** Custom HTML  
**Trigger:** Page View - URL contains `/docs` or `/documentation`

```html
<script>
window.trackLeadAction('Documentation Viewed', {
  page: 'documentation'
});
</script>
```

---

### Tag 8: **CTA Clicked**
**Tag Type:** Custom HTML  
**Trigger:** Click - All CTA buttons (class or ID based)

```html
<script>
window.trackLeadAction('CTA Clicked', {
  ctaText: '{{Click Text}}',
  ctaLocation: '{{Click Classes}}'
});
</script>
```

---

### Tag 9: **About Page Viewed**
**Tag Type:** Custom HTML  
**Trigger:** Page View - URL contains `/about`

```html
<script>
window.trackLeadAction('About Page Viewed', {
  page: 'about'
});
</script>
```

---

### Tag 10: **Blog Read**
**Tag Type:** Custom HTML  
**Trigger:** Page View - URL contains `/blog`

```html
<script>
window.trackLeadAction('Blog Read', {
  blogTitle: '{{Page Title}}'
});
</script>
```

---

### Tag 11: **Return Visit**
**Tag Type:** Custom HTML  
**Trigger:** Page View - All Pages (with condition: returning visitor)

```html
<script>
// This is automatically tracked by the main calculator
// But you can manually trigger it if needed
if (!localStorage.getItem('leadScore_visited')) {
  localStorage.setItem('leadScore_visited', 'true');
} else {
  window.trackLeadAction('Return Visit', {
    visitCount: '{{Visit Count}}' // Use GTM variable if available
  });
}
</script>
```

---

### Tag 12: **5+ min Session**
**Tag Type:** Custom HTML  
**Trigger:** Timer - 5 minutes (300 seconds)

```html
<script>
window.trackLeadAction('5+ min Session', {
  sessionTime: 300 // 5 minutes in seconds
});
</script>
```

---

## 🎯 STEP 4: Create GTM Triggers

### Trigger 1: **Lead Action Event**
- **Type:** Custom Event
- **Event Name:** `lead_action`
- **Fires on:** All Custom Events

### Trigger 2: **Lead Score Calculated**
- **Type:** Custom Event
- **Event Name:** `lead_score_calculated`
- **Fires on:** All Custom Events

### Trigger 3: **Category Changed**
- **Type:** Custom Event
- **Event Name:** `lead_category_changed`
- **Fires on:** All Custom Events

### Trigger 4: **Timer - 3 Minutes**
- **Type:** Timer
- **Event Name:** `gtm.timer`
- **Interval:** 180000 milliseconds (3 minutes)
- **Limit:** 1

### Trigger 5: **Timer - 5 Minutes**
- **Type:** Timer
- **Event Name:** `gtm.timer`
- **Interval:** 300000 milliseconds (5 minutes)
- **Limit:** 1

### Trigger 6: **YouTube Video Complete**
- **Type:** YouTube Video
- **Capture:** Player ID or Video Title
- **Trigger when:** Video Complete

### Trigger 7: **Form Submit - Trial**
- **Type:** Form Submission
- **Fires on:** Form ID = `trial-form` or Form Class contains `trial`

### Trigger 8: **Form Submit - Demo**
- **Type:** Form Submission
- **Fires on:** Form ID = `demo-form` or Form Class contains `demo`

### Trigger 9: **Click - CTA Buttons**
- **Type:** Click - All Elements
- **Fires on:** Click Classes contains `cta` or `btn-primary`

### Trigger 10: **Page View - Pricing**
- **Type:** Page View
- **Fires on:** Page URL contains `/pricing`

### Trigger 11: **Page View - About**
- **Type:** Page View
- **Fires on:** Page URL contains `/about`

### Trigger 12: **Page View - Blog**
- **Type:** Page View
- **Fires on:** Page URL contains `/blog`

---

## 🎯 STEP 5: Create Data Layer Variables

### Variable 1: **Lead Total Score**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.totalScore`

### Variable 2: **Lead Category**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.leadCategory`

### Variable 3: **Normalized Score**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.normalizedScore`

### Variable 4: **Score Added**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.scoreAdded`

### Variable 5: **Action Name**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.action`

### Variable 6: **Category Changed**
- **Type:** Data Layer Variable
- **Variable Name:** `leadScoring.categoryChanged`

---

## 🎯 STEP 6: Create Integration Tags

### Send to Google Analytics 4

**Tag Name:** `GA4 - Lead Score Event`  
**Type:** Google Analytics: GA4 Event  
**Event Name:** `lead_score_action`

**Event Parameters:**
- `action`: `{{leadScoring.action}}`
- `score_added`: `{{leadScoring.scoreAdded}}`
- `total_score`: `{{leadScoring.totalScore}}`
- `lead_category`: `{{leadScoring.leadCategory}}`
- `normalized_score`: `{{leadScoring.normalizedScore}}`

**Trigger:** `lead_score_calculated`

---

### Send to Make.com Webhook

**Tag Name:** `Make.com - Lead Score Update`  
**Type:** Custom HTML

```html
<script>
(function() {
  var leadScoring = {{leadScoring}};
  
  // Only send for high-value actions
  var highValueActions = ['Trial Started', 'Demo Requested'];
  if (highValueActions.indexOf(leadScoring.action) === -1) {
    return;
  }
  
  var webhookUrl = 'https://hook.eu1.make.com/7pg5oiucajn3zqla49eqxrh8j5ngfi8v';
  
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: leadScoring.action,
      totalScore: leadScoring.totalScore,
      leadCategory: leadScoring.leadCategory,
      normalizedScore: leadScoring.normalizedScore,
      timestamp: leadScoring.timestamp
    })
  }).then(function() {
    console.log('✅ Sent to Make.com');
  }).catch(function(err) {
    console.error('❌ Make.com error:', err);
  });
})();
</script>
```

**Trigger:** `lead_score_calculated`

---

### Send to Facebook Pixel

**Tag Name:** `Facebook Pixel - Lead Score`  
**Type:** Custom HTML

```html
<script>
(function() {
  if (typeof fbq === 'undefined') return;
  
  var leadScoring = {{leadScoring}};
  
  fbq('trackCustom', 'LeadScoreUpdate', {
    action: leadScoring.action,
    score: leadScoring.totalScore,
    category: leadScoring.leadCategory,
    normalized_score: leadScoring.normalizedScore
  });
  
  console.log('📘 Facebook Pixel - Lead Score Updated');
})();
</script>
```

**Trigger:** `lead_score_calculated`

---

## 🧪 Testing Your Setup

### 1. Enable GTM Preview Mode
- Open GTM
- Click **Preview**
- Enter your website URL

### 2. Test in Browser Console

```javascript
// Check if manager is loaded
console.log(window.LeadScoreManager);

// Manually trigger an action
window.trackLeadAction('Trial Started');

// Check current score
console.log('Score:', window.LeadScoreManager.getTotalScore());
console.log('Category:', window.LeadScoreManager.getLeadCategory());

// View all tracked actions
console.table(window.LeadScoreManager.getActions());

// Check dataLayer
console.table(dataLayer);

// Reset for testing
window.LeadScoreManager.reset();
```

### 3. Verify Events Fire

In GTM Preview, perform these actions:
1. ✅ View pricing page → Should add 25 points
2. ✅ Click CTA button → Should add 10 points
3. ✅ Submit trial form → Should add 30 points
4. ✅ Watch video to completion → Should add 25 points
5. ✅ Stay on page for 3+ minutes → Should add 20 points

Check console for:
```
🎯 LEAD SCORING EVENT: Pricing Viewed
Score Added: +25 points (High Intent)
Total Score: 25
Lead Category: Cold Lead
```

### 4. Test Duplicate Prevention

```javascript
// Try same action twice
window.trackLeadAction('Pricing Viewed');
window.trackLeadAction('Pricing Viewed'); // Should show warning

// Console should show:
// ⚠️ Action "Pricing Viewed" already tracked, skipping duplicate
```

### 5. Test Category Changes

Watch as score increases:
- 0-30 points: Cold Lead
- 31-60 points: Warm Lead → `lead_became_warm` fires
- 61-100 points: Hot Lead → `lead_became_hot` fires  
- 100+ points: Very Hot Lead → `lead_became_very_hot` fires

---

## 📊 Score Calculation Flow

```
User Action (e.g., clicks CTA)
    ↓
GTM Trigger fires (e.g., Click - CTA Buttons)
    ↓
Custom HTML Tag executes: window.trackLeadAction('CTA Clicked')
    ↓
Dispatches 'lead_action_trigger' event
    ↓
Lead Score Manager processes:
    1. Check if action already tracked (duplicate prevention)
    2. Get score from SCORE_CONFIG (10 points for CTA)
    3. Save to localStorage
    4. Calculate new total (previous + 10)
    5. Determine category (Cold/Warm/Hot/Very Hot)
    ↓
Push to dataLayer: { event: 'lead_score_calculated', leadScoring: {...} }
    ↓
Integration tags fire:
    - GA4 Event
    - Make.com Webhook
    - Facebook Pixel
    - Any other platforms
```

---

## 🛠️ Customization

### Change Score Values

Edit the `SCORE_CONFIG` in the **Lead Score Calculator** tag:

```javascript
var SCORE_CONFIG = {
  'Trial Started': { score: 40, category: 'High Intent' }, // Changed from 30
  'Demo Requested': { score: 35, category: 'High Intent' }, // Changed from 30
  // ... rest of config
};
```

### Add New Actions

1. Add to `SCORE_CONFIG`:
```javascript
'White Paper Downloaded': { score: 15, category: 'Medium Intent' }
```

2. Create trigger in GTM (e.g., PDF download click)

3. Create Custom HTML tag:
```html
<script>
window.trackLeadAction('White Paper Downloaded', {
  pdfName: '{{Click URL}}'
});
</script>
```

### Change Category Thresholds

Edit `getLeadCategory` function:

```javascript
getLeadCategory: function(score) {
  if (score >= 120) return 'Very Hot Lead';  // Changed from 100
  if (score >= 80) return 'Hot Lead';         // Changed from 61
  if (score >= 40) return 'Warm Lead';        // Changed from 31
  return 'Cold Lead';
}
```

---

## ✅ Implementation Checklist

- [ ] Create **Lead Score Calculator** tag (fires on all pages)
- [ ] Create **Lead Score Helper Function** tag (fires on all pages)
- [ ] Create 12 individual event tags
- [ ] Create all GTM triggers (timers, clicks, form submits, page views)
- [ ] Create data layer variables
- [ ] Create GA4 integration tag
- [ ] Create Make.com webhook tag (optional)
- [ ] Create Facebook Pixel tag (optional)
- [ ] Test in GTM Preview mode
- [ ] Verify duplicate prevention works
- [ ] Verify category changes fire correctly
- [ ] Test all 12 actions
- [ ] Publish GTM container

---

## 🎉 You're Done!

All lead scoring now happens in **Google Tag Manager** using Custom HTML tags!

**Key Features:**
✅ All 12 actions tracked with correct scores  
✅ Duplicate prevention built-in  
✅ Category calculation automatic  
✅ Persistent across sessions (localStorage)  
✅ Integrates with GA4, Facebook, Make.com  
✅ Easy to modify scoring rules  
✅ No website code changes needed  

**Test Command:**
```javascript
window.trackLeadAction('Trial Started');
```

Check console to see score calculation in action! 🚀
