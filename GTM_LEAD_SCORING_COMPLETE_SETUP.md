# Google Tag Manager Lead Scoring - Complete Setup Guide

This guide shows you how to set up **complete lead scoring in Google Tag Manager** (GTM). All score calculations, duplicate prevention, and category tracking happen in GTM instead of your website code.

---

## 📋 Overview

**What Changed:**
- ✅ Website now only pushes **raw events** to `dataLayer`
- ✅ GTM handles **all score calculations**
- ✅ GTM tracks **action history** and prevents duplicates
- ✅ GTM calculates **lead categories** (Cold/Warm/Hot/Very Hot)
- ✅ GTM stores data in **localStorage** for persistence

**Benefits:**
- No code deployment needed to change scoring rules
- Centralized scoring logic in GTM
- Easy A/B testing of different scoring models
- Better integration with GA4, Facebook Pixel, etc.

---

## 🎯 Step 1: Create Custom JavaScript Variables in GTM

### Variable 1: **Lead Score Configuration**

**Variable Name:** `JS - Lead Score Config`  
**Type:** Custom JavaScript  
**Code:**
```javascript
function() {
  return {
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
}
```

---

### Variable 2: **Lead Score Manager** (Main Logic)

**Variable Name:** `JS - Lead Score Manager`  
**Type:** Custom JavaScript  
**Code:**
```javascript
function() {
  return {
    // Get action history from localStorage
    getActions: function() {
      try {
        var data = localStorage.getItem('gtm_lead_actions');
        return data ? JSON.parse(data) : [];
      } catch(e) {
        return [];
      }
    },
    
    // Save action history to localStorage
    saveActions: function(actions) {
      try {
        localStorage.setItem('gtm_lead_actions', JSON.stringify(actions));
      } catch(e) {
        console.error('Error saving lead actions:', e);
      }
    },
    
    // Check if action already tracked
    hasAction: function(actionName) {
      var actions = this.getActions();
      return actions.some(function(a) { return a.action === actionName; });
    },
    
    // Add new action
    addAction: function(actionName, scoreConfig) {
      if (this.hasAction(actionName)) {
        console.log('⚠️ Action "' + actionName + '" already tracked, skipping duplicate');
        return null;
      }
      
      var config = scoreConfig[actionName];
      if (!config) {
        console.warn('Unknown action: ' + actionName);
        return null;
      }
      
      var actions = this.getActions();
      var newAction = {
        action: actionName,
        score: config.score,
        category: config.category,
        timestamp: new Date().toISOString()
      };
      
      actions.push(newAction);
      this.saveActions(actions);
      
      return newAction;
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
    
    // Reset all data
    reset: function() {
      localStorage.removeItem('gtm_lead_actions');
      console.log('✅ Lead scoring data reset');
    }
  };
}
```

---

### Variable 3: **Current Lead Score**

**Variable Name:** `JS - Current Lead Score`  
**Type:** Custom JavaScript  
**Code:**
```javascript
function() {
  var manager = {{JS - Lead Score Manager}};
  return manager.getTotalScore();
}
```

---

### Variable 4: **Current Lead Category**

**Variable Name:** `JS - Current Lead Category`  
**Type:** Custom JavaScript  
**Code:**
```javascript
function() {
  var manager = {{JS - Lead Score Manager}};
  var score = manager.getTotalScore();
  return manager.getLeadCategory(score);
}
```

---

### Variable 5: **Normalized Lead Score**

**Variable Name:** `JS - Normalized Lead Score`  
**Type:** Custom JavaScript  
**Code:**
```javascript
function() {
  var manager = {{JS - Lead Score Manager}};
  return manager.getNormalizedScore();
}
```

---

### Variable 6: **Lead Action Data**

**Variable Name:** `DL - Lead Action`  
**Type:** Data Layer Variable  
**Data Layer Variable Name:** `leadAction`

---

### Variable 7: **Action Metadata**

**Variable Name:** `DL - Action Metadata`  
**Type:** Data Layer Variable  
**Data Layer Variable Name:** `actionMetadata`

---

## 🎯 Step 2: Create Triggers

### Trigger 1: **Lead Action Event**

**Trigger Name:** `Event - Lead Action`  
**Type:** Custom Event  
**Event Name:** `lead_action`  
**This trigger fires on:** All Custom Events

---

### Trigger 2: **Score Calculation Complete**

**Trigger Name:** `Event - Score Calculated`  
**Type:** Custom Event  
**Event Name:** `lead_score_calculated`  
**This trigger fires on:** All Custom Events

---

## 🎯 Step 3: Create Tags

### Tag 1: **Calculate Lead Score** (Main Tag)

**Tag Name:** `Calculate Lead Score`  
**Type:** Custom HTML  
**HTML:**
```html
<script>
(function() {
  // Get the lead action from dataLayer
  var leadAction = {{DL - Lead Action}};
  
  if (!leadAction) {
    console.warn('No lead action found');
    return;
  }
  
  // Get score manager and config
  var manager = {{JS - Lead Score Manager}};
  var scoreConfig = {{JS - Lead Score Config}};
  
  // Get previous score and category
  var previousScore = manager.getTotalScore();
  var previousCategory = manager.getLeadCategory(previousScore);
  
  // Add the action
  var actionData = manager.addAction(leadAction, scoreConfig);
  
  if (!actionData) {
    // Action was duplicate or invalid
    return;
  }
  
  // Get new score and category
  var newScore = manager.getTotalScore();
  var newCategory = manager.getLeadCategory(newScore);
  var normalizedScore = manager.getNormalizedScore();
  
  // Check if category changed
  var categoryChanged = previousCategory !== newCategory;
  
  // Log to console
  console.log('🎯 LEAD SCORING EVENT:', leadAction);
  console.log('Score Added: +' + actionData.score + ' points');
  console.log('Total Score:', newScore);
  console.log('Lead Category:', newCategory);
  console.log('Normalized Score:', normalizedScore);
  
  // Push calculated score back to dataLayer
  window.dataLayer.push({
    event: 'lead_score_calculated',
    leadScoring: {
      action: leadAction,
      scoreAdded: actionData.score,
      actionCategory: actionData.category,
      totalScore: newScore,
      leadCategory: newCategory,
      normalizedScore: normalizedScore,
      categoryChanged: categoryChanged,
      previousCategory: previousCategory,
      timestamp: actionData.timestamp
    }
  });
  
  // If category changed, fire milestone event
  if (categoryChanged) {
    var categoryLevel = 'cold';
    if (newCategory.indexOf('Warm') !== -1) categoryLevel = 'warm';
    else if (newCategory.indexOf('Very Hot') !== -1) categoryLevel = 'very_hot';
    else if (newCategory.indexOf('Hot') !== -1) categoryLevel = 'hot';
    
    window.dataLayer.push({
      event: 'lead_became_' + categoryLevel,
      score: newScore,
      normalizedScore: normalizedScore,
      timestamp: new Date().toISOString()
    });
    
    console.log('🔥 Category Changed:', previousCategory, '→', newCategory);
  }
})();
</script>
```

**Firing Trigger:** `Event - Lead Action`

---

### Tag 2: **Send to Google Analytics 4**

**Tag Name:** `GA4 - Lead Score Event`  
**Type:** Google Analytics: GA4 Event  
**Event Name:** `lead_score_action`  
**Event Parameters:**
- `action`: `{{DL - Lead Action}}`
- `score_added`: `{{leadScoring.scoreAdded}}`
- `total_score`: `{{JS - Current Lead Score}}`
- `lead_category`: `{{JS - Current Lead Category}}`
- `normalized_score`: `{{JS - Normalized Lead Score}}`

**Firing Trigger:** `Event - Score Calculated`

---

### Tag 3: **Send to Make.com (Webhook)**

**Tag Name:** `Make.com - Lead Score Update`  
**Type:** Custom HTML  
**HTML:**
```html
<script>
(function() {
  // Only send for high-value actions
  var leadScoring = {{leadScoring}};
  var action = leadScoring.action;
  
  var highValueActions = ['Trial Started', 'Demo Requested', 'Pricing Viewed'];
  
  if (highValueActions.indexOf(action) === -1) {
    return; // Skip low-value actions
  }
  
  // Send to Make.com webhook
  var webhookUrl = 'https://hook.eu1.make.com/7pg5oiucajn3zqla49eqxrh8j5ngfi8v';
  
  var data = {
    action: action,
    totalScore: leadScoring.totalScore,
    leadCategory: leadScoring.leadCategory,
    normalizedScore: leadScoring.normalizedScore,
    timestamp: leadScoring.timestamp
  };
  
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function() {
    console.log('✅ Sent to Make.com:', data);
  }).catch(function(error) {
    console.error('❌ Make.com webhook error:', error);
  });
})();
</script>
```

**Firing Trigger:** `Event - Score Calculated`

---

### Tag 4: **Facebook Pixel - Lead Category Event**

**Tag Name:** `Facebook Pixel - Lead Milestone`  
**Type:** Custom HTML  
**HTML:**
```html
<script>
(function() {
  if (typeof fbq === 'undefined') return;
  
  var category = {{JS - Current Lead Category}};
  var score = {{JS - Current Lead Score}};
  
  fbq('trackCustom', 'LeadScoreUpdate', {
    category: category,
    score: score,
    normalized_score: {{JS - Normalized Lead Score}}
  });
  
  console.log('📘 Facebook Pixel - Lead Score Updated');
})();
</script>
```

**Firing Trigger:** `Event - Score Calculated`

---

## 🎯 Step 4: Data Layer Variables (for reading calculated data)

Create these to read the calculated score data:

1. **DL - Lead Scoring Object**
   - Type: Data Layer Variable
   - Name: `leadScoring`

2. **DL - Lead Total Score**
   - Type: Data Layer Variable
   - Name: `leadScoring.totalScore`

3. **DL - Lead Category**
   - Type: Data Layer Variable
   - Name: `leadScoring.leadCategory`

4. **DL - Normalized Score**
   - Type: Data Layer Variable
   - Name: `leadScoring.normalizedScore`

5. **DL - Score Added**
   - Type: Data Layer Variable
   - Name: `leadScoring.scoreAdded`

6. **DL - Category Changed**
   - Type: Data Layer Variable
   - Name: `leadScoring.categoryChanged`

---

## 🧪 Step 5: Testing Your Setup

### 1. Enable GTM Preview Mode
- Click **Preview** in GTM
- Enter your website URL
- Preview mode will open

### 2. Test Each Action
Perform these actions and check the **dataLayer**:

```javascript
// In browser console, check dataLayer
console.table(dataLayer);

// Check stored actions
console.table(JSON.parse(localStorage.getItem('gtm_lead_actions')));

// Check current score
console.log('Score:', {{JS - Current Lead Score}});
console.log('Category:', {{JS - Current Lead Category}});
```

### 3. Verify Events Fire
In GTM Preview, you should see:
1. `lead_action` event fires when action occurs
2. `Calculate Lead Score` tag executes
3. `lead_score_calculated` event fires
4. GA4/Facebook/Make.com tags fire
5. Score increases in localStorage

### 4. Test Duplicate Prevention
- Perform same action twice (e.g., view Pricing twice)
- Score should only increase once
- Console should show: "⚠️ Action already tracked"

### 5. Test Category Milestones
Watch the console as score increases:
- Score 0-30: Cold Lead
- Score 31-60: Warm Lead → `lead_became_warm` fires
- Score 61-100: Hot Lead → `lead_became_hot` fires
- Score 100+: Very Hot Lead → `lead_became_very_hot` fires

---

## 📊 Complete Event Flow

```
Website Event
    ↓
window.dataLayer.push({ event: 'lead_action', leadAction: 'Trial Started' })
    ↓
GTM Trigger: "Event - Lead Action" fires
    ↓
GTM Tag: "Calculate Lead Score" executes
    ↓
- Check if action already tracked (duplicate prevention)
- Add action to localStorage
- Calculate new total score
- Determine lead category
- Calculate normalized score
    ↓
window.dataLayer.push({ event: 'lead_score_calculated', leadScoring: {...} })
    ↓
GTM Trigger: "Event - Score Calculated" fires
    ↓
Multiple Tags Fire:
    - GA4 Event
    - Make.com Webhook
    - Facebook Pixel
    - Any other integrations
```

---

## 🔄 Updating Scoring Rules

To change scoring values (e.g., make Trial worth 40 points instead of 30):

1. Go to GTM → Variables
2. Edit `JS - Lead Score Config`
3. Change the score values:
```javascript
'Trial Started': { score: 40, category: 'High Intent' }, // Changed from 30
```
4. Publish changes
5. No website code changes needed! ✅

---

## 🛠️ Advanced Features

### A/B Test Different Scoring Models

Create multiple score config variables:
- `JS - Lead Score Config A` (current model)
- `JS - Lead Score Config B` (new model)

Then use GTM's built-in A/B testing to randomly assign users.

### Send Scores to Multiple Platforms

Add tags for each platform:
- Google Ads conversion tracking
- LinkedIn Insight
- TikTok Pixel
- HubSpot
- Salesforce
- Any webhook endpoint

### Create Custom Audiences

In Facebook Ads Manager, create audiences based on:
- Lead Category = "Hot Lead"
- Normalized Score >= 2
- Specific actions taken (e.g., Video Completed)

---

## 🐛 Troubleshooting

### Score Not Calculating
1. Check GTM Preview mode
2. Verify `lead_action` event appears in dataLayer
3. Check browser console for errors
4. Verify `JS - Lead Score Manager` variable exists

### Duplicate Actions Not Prevented
1. Check localStorage: `localStorage.getItem('gtm_lead_actions')`
2. Verify action names match exactly (case-sensitive)
3. Clear localStorage and test again

### Events Not Sending to GA4/Facebook
1. Verify `lead_score_calculated` event fires
2. Check trigger conditions
3. Verify platform pixels are installed correctly

### Reset Scoring for Testing
Run in browser console:
```javascript
localStorage.removeItem('gtm_lead_actions');
localStorage.removeItem('leadScore_visited');
location.reload();
```

---

## 📱 Mobile & Cross-Device Tracking

To track leads across devices:

1. **After Email Capture** (Trial/Demo form):
   - Store email in localStorage
   - Send email + score to your backend
   - Create user profile server-side

2. **On Return Visit**:
   - Check if email in localStorage
   - Fetch score from backend
   - Initialize GTM with existing score

---

## ✅ Checklist

- [ ] Created all 7 Custom JavaScript Variables
- [ ] Created all Data Layer Variables
- [ ] Created 2 Triggers (lead_action, lead_score_calculated)
- [ ] Created Calculate Lead Score tag
- [ ] Created GA4 Event tag
- [ ] Created Make.com webhook tag (optional)
- [ ] Created Facebook Pixel tag (optional)
- [ ] Tested in Preview mode
- [ ] Verified duplicate prevention works
- [ ] Verified category milestones fire
- [ ] Published GTM container
- [ ] Deployed website changes (simplified leadScoring.js)

---

## 🎉 You're Done!

Your lead scoring now runs **entirely in Google Tag Manager**! 

**Benefits:**
✅ No website deployments to change scoring  
✅ Centralized logic in GTM  
✅ Easy A/B testing  
✅ Better platform integrations  
✅ Persistent across sessions  
✅ Duplicate prevention built-in  

**Questions?** Check the GTM Preview console logs for detailed debugging information.
