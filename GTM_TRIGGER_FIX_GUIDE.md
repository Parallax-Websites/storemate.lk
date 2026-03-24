# GTM Lead Scoring - Quick Fix for Form Triggers

## ✅ What Was Fixed

Your forms now have IDs and classes that GTM can detect, PLUS they manually fire GTM events.

### **Website Changes (Already Applied)**

1. **Trial Form** - Added ID and class:
```html
<form id="trial-form" className="space-y-4 trial-signup-form">
```

2. **Demo Form** - Added ID and class:
```html
<form id="demo-form" className="space-y-4 demo-request-form">
```

3. **Manual GTM Events** - Added in both `handleTrialSubmit` and `handleDemoSubmit`:
```javascript
window.dispatchEvent(new CustomEvent('lead_action_trigger', {
  detail: {
    action: 'Trial Started',
    metadata: { formType: 'trial', source: trialButtonSource }
  }
}));
```

---

## 🎯 GTM Setup (Do This Now)

### **Option 1: Use Custom Event Trigger (RECOMMENDED - Most Reliable)**

This method uses the manual event we're already firing from your code.

#### **1. Create Data Layer Variable**
- **Variables → New**
- **Type:** Data Layer Variable
- **Variable Name:** `leadAction`  
- **Data Layer Variable Name:** `leadAction`
- **Save**

#### **2. Create Trigger for Trial**
- **Triggers → New**
- **Name:** `Custom Event - Trial Started`
- **Type:** Custom Event
- **Event Name:** `lead_action_trigger`
- **This trigger fires on:** Some Custom Events
- **Fire this trigger when:** `leadAction` equals `Trial Started`
- **Save**

#### **3. Create Trigger for Demo**
- **Triggers → New**
- **Name:** `Custom Event - Demo Requested`
- **Type:** Custom Event
- **Event Name:** `lead_action_trigger`
- **This trigger fires on:** Some Custom Events
- **Fire this trigger when:** `leadAction` equals `Demo Requested`
- **Save**

#### **4. Update Your Tags**

Edit your existing tags:

**Tag: "Lead Score - Trial Started"**
- **Trigger:** Change to `Custom Event - Trial Started` ✅

**Tag: "Lead Score - Demo Requested"**
- **Trigger:** Change to `Custom Event - Demo Requested` ✅

---

### **Option 2: Use Form Submission Trigger (Backup Method)**

If you prefer traditional form submission detection:

#### **1. Enable Built-in Form Variables**
- **Variables → Configure**
- **Forms section** → Check these boxes:
  - ✅ Form ID
  - ✅ Form Classes
  - ✅ Form Element
  - ✅ Form Target
  - ✅ Form Text

#### **2. Create Form Trigger for Trial**
- **Triggers → New**
- **Name:** `Form Submit - Trial`
- **Type:** Form Submission
- **This trigger fires on:** Some Forms
- **Fire this trigger when:**
  - `Form ID` equals `trial-form`
  - **OR**
  - `Form Classes` contains `trial-signup-form`
- **Save**

#### **3. Create Form Trigger for Demo**
- **Triggers → New**
- **Name:** `Form Submit - Demo`
- **Type:** Form Submission
- **This trigger fires on:** Some Forms
- **Fire this trigger when:**
  - `Form ID` equals `demo-form`
  - **OR**
  - `Form Classes` contains `demo-request-form`
- **Save**

#### **4. Update Your Tags**

**Tag: "Lead Score - Trial Started"**
- **Trigger:** Change to `Form Submit - Trial` ✅

**Tag: "Lead Score - Demo Requested"**
- **Trigger:** Change to `Form Submit - Demo` ✅

---

## 🧪 Testing

### **1. Test in GTM Preview Mode**

1. Open GTM → Click **Preview**
2. Enter your website URL
3. GTM Preview window opens

### **2. Submit Trial Form**

1. Fill out the trial form on your website
2. Click "Start Free Trial"
3. **In GTM Preview, you should see:**
   - Event: `lead_action_trigger` (if using Custom Event)
   - OR Event: `gtm.formSubmit` (if using Form Submission)
   - Tag fires: "Lead Score - Trial Started" ✅
   - Tag fires: "Lead Score - Calculator Core" ✅
   - Console shows: `🎯 Trial Started (+30 pts) → Total: X`

### **3. Check Browser Console**

You should see:
```
📊 Event → GTM: Trial Started
🎯 Trial Started (+30 pts) → Total: 30
✅ Lead Score Manager Ready
📊 Current Score: 30
```

### **4. Verify in dataLayer**

Open console and run:
```javascript
// Check if event was pushed
console.table(dataLayer.filter(e => e.event === 'lead_action_trigger'));

// Check score calculation
window.LeadScoreManager.getTotalScore()
// Should show: 30

// Check if action was tracked
window.LeadScoreManager.getActions()
// Should show array with "Trial Started"
```

---

## 🔍 Troubleshooting

### **Issue: "Trigger not firing" in GTM Preview**

**Solution:** Use **Option 1 (Custom Event)** instead of Form Submission trigger.

Your code is already firing the custom event:
```javascript
window.dispatchEvent(new CustomEvent('lead_action_trigger', {...}));
```

So the Custom Event trigger will definitely work!

---

### **Issue: "Duplicate action" in console**

This is **NORMAL** and **EXPECTED**. You'll see:
```
⚠️ Action "Trial Started" already tracked, skipping duplicate
```

This happens because:
1. Your website's `leadScoring.trackAction()` already tracked it
2. GTM's `LeadScoreManager.trackAction()` sees it's a duplicate and skips

**This is actually GOOD** - duplicate prevention is working! ✅

---

### **Issue: Score not increasing**

**Check:**
1. Open console: `window.LeadScoreManager.getTotalScore()`
2. Check localStorage: `localStorage.getItem('gtm_lead_actions')`
3. If actions are there, score should be calculated
4. If not, check if "Lead Score - Calculator Core" tag fired

---

## ✅ Final Checklist

After deploying your website code:

- [ ] Website code updated (forms have IDs)
- [ ] GTM: Created `leadAction` Data Layer Variable
- [ ] GTM: Created `Custom Event - Trial Started` trigger
- [ ] GTM: Created `Custom Event - Demo Requested` trigger
- [ ] GTM: Updated "Lead Score - Trial Started" tag trigger
- [ ] GTM: Updated "Lead Score - Demo Requested" tag trigger
- [ ] GTM: Tested in Preview mode
- [ ] GTM: Verified events fire correctly
- [ ] GTM: Published container
- [ ] Website: Deployed updated Header.jsx

---

## 🎉 What You'll See When It Works

### **In GTM Preview:**
```
✅ Event: lead_action_trigger
    - leadAction: "Trial Started"
✅ Tag Fired: Lead Score - Trial Started
✅ Tag Fired: Lead Score - Calculator Core
✅ Event: lead_score_calculated
    - leadScoring.totalScore: 30
    - leadScoring.leadCategory: "Cold Lead"
✅ Tag Fired: GA4 - Lead Score Event
✅ Tag Fired: Make.com - Lead Score Webhook
```

### **In Browser Console:**
```
📊 Event → GTM: Trial Started
🎯 Trial Started (+30 pts) → Total: 30
✅ Lead Score Manager Ready
📊 Current Score: 30
```

### **In dataLayer:**
```javascript
{
  event: 'lead_action_trigger',
  leadAction: 'Trial Started',
  actionMetadata: { formType: 'trial', source: 'header' }
}
{
  event: 'lead_score_calculated',
  leadScoring: {
    action: 'Trial Started',
    scoreAdded: 30,
    totalScore: 30,
    leadCategory: 'Cold Lead',
    normalizedScore: 1
  }
}
```

---

## 📞 Quick Summary

**What changed:**
1. ✅ Forms now have IDs (`trial-form`, `demo-form`)
2. ✅ Forms manually fire GTM events via `lead_action_trigger`
3. ✅ GTM can detect via **Custom Event** (recommended) or **Form Submission**

**What to do in GTM:**
1. Create `leadAction` variable
2. Create `Custom Event - Trial Started` trigger
3. Create `Custom Event - Demo Requested` trigger
4. Update your tag triggers
5. Test in Preview mode
6. Publish

**Testing:**
- Submit trial form → Should see event in GTM Preview
- Check console → Should see score increase
- Check `window.LeadScoreManager.getTotalScore()` → Should be 30+

**The fix is ready! Just update GTM triggers and test.** 🚀
