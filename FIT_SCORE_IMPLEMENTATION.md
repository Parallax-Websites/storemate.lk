# Fit Score Implementation Guide
## Monthly Inquiries/Orders Based Scoring System

This guide shows you how to add a **Fit Score** system based on monthly order volume alongside your existing behavioral Lead Score system.

---

## 📊 What is Fit Score?

**Fit Score** measures how well a prospect fits your ideal customer profile based on their **business size** (monthly orders/inquiries).

**Fit Score vs Lead Score:**
- **Lead Score** (Behavioral): Based on actions (Trial Started, Video Watched, etc.)
- **Fit Score** (Firmographic): Based on business size (Monthly Orders)

**Combined = Complete Picture:**
- High Lead Score + High Fit Score = 🔥 Perfect customer
- High Lead Score + Low Fit Score = Interested but too small
- Low Lead Score + High Fit Score = Right size but not engaged yet

---

## 📈 Fit Score Tiers

Based on **Monthly Inquiries/Orders** (captured in `ordersPerDay` field):

| Monthly Range | Fit Score | Suitable Plan | Monthly Revenue | Business Size | Priority |
|---------------|-----------|---------------|-----------------|---------------|----------|
| 0-100 | 5 | Starter | LKR 5,000 | Micro | Very Low |
| 100-250 | 10 | Starter | LKR 5,000 | Small Startup | Low |
| 250-500 | 20 | Starter/Business | LKR 5,000-12,000 | Small | Medium-Low |
| 500-1,000 | 30 | Business | LKR 12,000 | Growing | Medium |
| 1,000-2,000 | 40 | Business | LKR 12,000 | Established | High |
| 2,000-5,000 | 50 | Business/Premium | LKR 12,000-25,000 | Medium | Very High |
| 5,000-10,000 | 60 | Premium | LKR 25,000 | Large | Priority |
| 10,000-50,000 | 70 | Premium | LKR 25,000 | Enterprise | Top Priority |
| 50,000+ | 80 | Premium/Custom | LKR 25,000+ | Major Enterprise | VIP |

---

## 🎯 Implementation Overview

**What We'll Build:**
1. **Fit Score Calculator** in GTM (calculates score from ordersPerDay)
2. **Combined Scoring System** (Lead Score + Fit Score)
3. **Priority Matrix** (determines final priority based on both scores)
4. **Zapier Integration** (receives all scoring data)

**No Frontend Changes Needed!** Everything is done in GTM.

---

## Step 1: Update GTM Calculator Core

We'll enhance the existing `Lead Score - Calculator Core` tag to include Fit Score calculation.

### **1.1: Add Fit Score Calculator**

Go to your GTM container → Find tag **"Lead Score - Calculator Core"**

**Add this code AFTER the existing LeadScoreManager code (before the closing script tag):**

```javascript
// ==============================================
// FIT SCORE CALCULATOR
// Based on Monthly Orders/Inquiries
// ==============================================

window.FitScoreCalculator = {
  
  // Calculate fit score from monthly orders
  calculateFromOrders: function(ordersPerDay) {
    if (!ordersPerDay) return { score: 0, tier: 'Unknown', priority: 'Very Low', plan: 'None' };
    
    // Extract number from string (handles "50-100", "100-200", "200-500", etc.)
    var orderCount = this.parseOrderCount(ordersPerDay);
    
    // Determine tier based on monthly volume
    if (orderCount >= 50000) {
      return {
        score: 80,
        tier: 'Major Enterprise',
        priority: 'VIP',
        plan: 'Premium/Custom',
        revenue: 'LKR 25,000+',
        monthlyRange: '50,000+'
      };
    } else if (orderCount >= 10000) {
      return {
        score: 70,
        tier: 'Enterprise',
        priority: 'Top Priority',
        plan: 'Premium',
        revenue: 'LKR 25,000',
        monthlyRange: '10,000-50,000'
      };
    } else if (orderCount >= 5000) {
      return {
        score: 60,
        tier: 'Large',
        priority: 'Priority',
        plan: 'Premium',
        revenue: 'LKR 25,000',
        monthlyRange: '5,000-10,000'
      };
    } else if (orderCount >= 2000) {
      return {
        score: 50,
        tier: 'Medium',
        priority: 'Very High',
        plan: 'Business/Premium',
        revenue: 'LKR 12,000-25,000',
        monthlyRange: '2,000-5,000'
      };
    } else if (orderCount >= 1000) {
      return {
        score: 40,
        tier: 'Established',
        priority: 'High',
        plan: 'Business',
        revenue: 'LKR 12,000',
        monthlyRange: '1,000-2,000'
      };
    } else if (orderCount >= 500) {
      return {
        score: 30,
        tier: 'Growing',
        priority: 'Medium',
        plan: 'Business',
        revenue: 'LKR 12,000',
        monthlyRange: '500-1,000'
      };
    } else if (orderCount >= 250) {
      return {
        score: 20,
        tier: 'Small',
        priority: 'Medium-Low',
        plan: 'Starter/Business',
        revenue: 'LKR 5,000-12,000',
        monthlyRange: '250-500'
      };
    } else if (orderCount >= 100) {
      return {
        score: 10,
        tier: 'Small Startup',
        priority: 'Low',
        plan: 'Starter',
        revenue: 'LKR 5,000',
        monthlyRange: '100-250'
      };
    } else {
      return {
        score: 5,
        tier: 'Micro',
        priority: 'Very Low',
        plan: 'Starter',
        revenue: 'LKR 5,000',
        monthlyRange: '0-100'
      };
    }
  },
  
  // Parse order count from various formats
  parseOrderCount: function(ordersPerDay) {
    if (typeof ordersPerDay === 'number') return ordersPerDay;
    if (!ordersPerDay) return 0;
    
    var str = ordersPerDay.toString().toLowerCase();
    
    // Handle "50,000+" format
    if (str.indexOf('+') > -1) {
      return parseInt(str.replace(/[^0-9]/g, '')) || 0;
    }
    
    // Handle "50-100", "100-200", etc.
    if (str.indexOf('-') > -1) {
      var parts = str.split('-');
      // Take the higher number for tier calculation
      return parseInt(parts[1].replace(/[^0-9]/g, '')) || 0;
    }
    
    // Handle "1000", "2000", etc.
    return parseInt(str.replace(/[^0-9]/g, '')) || 0;
  },
  
  // Get priority matrix combining lead score and fit score
  getPriorityMatrix: function(leadScore, fitScore) {
    // High = 60+, Medium = 30-59, Low = 0-29
    var leadLevel = leadScore >= 60 ? 'High' : (leadScore >= 30 ? 'Medium' : 'Low');
    var fitLevel = fitScore >= 60 ? 'High' : (fitScore >= 30 ? 'Medium' : 'Low');
    
    // Priority matrix
    var matrix = {
      'High-High': { priority: 'P1 - Immediate Action', color: '#FF0000', salesAction: 'Call within 1 hour' },
      'High-Medium': { priority: 'P2 - High Priority', color: '#FF6600', salesAction: 'Call within 4 hours' },
      'High-Low': { priority: 'P3 - Follow Up', color: '#FFCC00', salesAction: 'Email + Call within 24h' },
      'Medium-High': { priority: 'P2 - High Priority', color: '#FF6600', salesAction: 'Call within 4 hours' },
      'Medium-Medium': { priority: 'P3 - Follow Up', color: '#FFCC00', salesAction: 'Email within 24h' },
      'Medium-Low': { priority: 'P4 - Nurture', color: '#99CC00', salesAction: 'Add to drip campaign' },
      'Low-High': { priority: 'P3 - Follow Up', color: '#FFCC00', salesAction: 'Email + Call within 24h' },
      'Low-Medium': { priority: 'P4 - Nurture', color: '#99CC00', salesAction: 'Add to drip campaign' },
      'Low-Low': { priority: 'P5 - Monitor', color: '#CCCCCC', salesAction: 'Monitor activity' }
    };
    
    var key = leadLevel + '-' + fitLevel;
    return matrix[key] || matrix['Low-Low'];
  },
  
  // Calculate all scores for a form submission
  calculateAll: function(formData, leadScore) {
    var ordersPerDay = formData.ordersPerDay || formData.orders_per_day || '';
    var fitData = this.calculateFromOrders(ordersPerDay);
    var priorityData = this.getPriorityMatrix(leadScore, fitData.score);
    
    return {
      // Fit Score Data
      fitScore: fitData.score,
      businessSize: fitData.tier,
      fitPriority: fitData.priority,
      suitablePlan: fitData.plan,
      estimatedRevenue: fitData.revenue,
      monthlyOrderRange: fitData.monthlyRange,
      
      // Lead Score Data (from existing system)
      leadScore: leadScore,
      
      // Combined Priority
      finalPriority: priorityData.priority,
      priorityColor: priorityData.color,
      salesAction: priorityData.salesAction,
      
      // Raw input
      ordersPerDayInput: ordersPerDay
    };
  }
};

console.log('✅ Fit Score Calculator loaded');
```

**Click Save**

---

## Step 2: Create New GTM Tag for Fit Score Calculation

This tag calculates fit score when forms are submitted.

### **2.1: Create Fit Score Calculator Tag**

1. Go to GTM → **Tags** → **New**
2. Select **Custom HTML**
3. **Name:** `Lead Score - Fit Score Calculator`
4. **Paste this code:**

```html
<script>
(function() {
  'use strict';
  
  // Get form data from dataLayer
  var formData = {{DL - Form Data}} || {};
  var leadScoring = {{DL - Lead Scoring Object}} || {};
  
  // Get current lead score
  var leadScore = window.LeadScoreManager ? window.LeadScoreManager.getTotalScore() : 0;
  
  // Calculate fit score
  if (!window.FitScoreCalculator) {
    console.error('❌ FitScoreCalculator not loaded');
    return;
  }
  
  var fitScoreData = window.FitScoreCalculator.calculateAll(formData, leadScore);
  
  console.log('📊 Fit Score Calculated:', fitScoreData);
  
  // Push to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'fit_score_calculated',
    fitScoring: fitScoreData
  });
  
})();
</script>
```

5. **Triggering:** Select these triggers (use existing ones):
   - `Custom Event - Lead Score Calculated`

6. **Click Save**

---

## Step 3: Create GTM Variables for Fit Score

Create these variables to access fit score data:

### **Variables to Create:**

Go to **Variables** → **User-Defined Variables** → **New**

| Variable Name | Type | Data Layer Variable Name |
|---------------|------|-------------------------|
| `DL - Fit Score Object` | Data Layer Variable | `fitScoring` |
| `DL - Fit Score` | Data Layer Variable | `fitScoring.fitScore` |
| `DL - Business Size` | Data Layer Variable | `fitScoring.businessSize` |
| `DL - Suitable Plan` | Data Layer Variable | `fitScoring.suitablePlan` |
| `DL - Final Priority` | Data Layer Variable | `fitScoring.finalPriority` |
| `DL - Sales Action` | Data Layer Variable | `fitScoring.salesAction` |
| `DL - Estimated Revenue` | Data Layer Variable | `fitScoring.estimatedRevenue` |

---

## Step 4: Update Zapier Tags to Include Fit Score

Update your existing Zapier tags to send fit score data.

### **4.1: Update Trial Form Zapier Tag**

Find tag: **"Zapier - Trial Form Complete"**

**Replace the payload section with this:**

```javascript
  var fitData = {{DL - Fit Score Object}} || {};
  
  // Prepare complete payload
  var payload = {
    // Form fields
    fullName: formData.fullName || '',
    phoneNumber: formData.phoneNumber || '',
    email: formData.email || '',
    companyName: formData.companyName || '',
    courierCompanies: formData.courierCompanies || '',
    ordersPerDay: formData.ordersPerDay || '',
    
    // Lead Score (Behavioral)
    leadScore: scoring ? scoring.getTotalScore() : 0,
    normalizedScore: scoring ? scoring.getNormalizedScore() : 0,
    leadCategory: scoring ? scoring.getLeadCategory() : 'Cold Lead',
    actionHistory: scoring ? scoring.getActions() : [],
    
    // Fit Score (Firmographic) - NEW!
    fitScore: fitData.fitScore || 0,
    businessSize: fitData.businessSize || 'Unknown',
    fitPriority: fitData.fitPriority || 'Very Low',
    suitablePlan: fitData.suitablePlan || 'Starter',
    estimatedRevenue: fitData.estimatedRevenue || 'LKR 5,000',
    monthlyOrderRange: fitData.monthlyOrderRange || '0',
    
    // Combined Priority - NEW!
    finalPriority: fitData.finalPriority || 'P5 - Monitor',
    priorityColor: fitData.priorityColor || '#CCCCCC',
    salesAction: fitData.salesAction || 'Monitor activity',
    
    // Metadata
    registrationUrl: {{DL - Registration URL}} || '',
    utmSource: {{DL - UTM Source}} || '',
    formType: 'trial',
    timestamp: {{DL - Timestamp}} || new Date().toISOString()
  };
```

**Click Save**

### **4.2: Update Demo Form Zapier Tag**

Find tag: **"Zapier - Demo Form Complete"**

**Make the same update** (add fit score fields to payload).

---

## Step 5: Update Zapier Code Step

Update your Zapier phone formatter code to pass through fit score data.

### **5.1: Update Code by Zapier**

In your Zapier workflow, find the **Code by Zapier** step.

**Update the return statement to include fit score fields:**

```javascript
// Return formatted data
return {
  // Form fields
  courierCompanies: inputData.courierCompanies || '',
  ordersPerDay: inputData.ordersPerDay || '',
  fullName: inputData.fullName || '',
  phoneNumber: formattedPhone,
  email: inputData.email || '',
  companyName: inputData.companyName || '',
  
  // Lead Score (Behavioral)
  leadScore: inputData.leadScore || 0,
  normalizedScore: inputData.normalizedScore || 0,
  leadCategory: inputData.leadCategory || 'Cold Lead',
  actionHistory: inputData.actionHistory || [],
  
  // Fit Score (Firmographic) - NEW!
  fitScore: inputData.fitScore || 0,
  businessSize: inputData.businessSize || 'Unknown',
  fitPriority: inputData.fitPriority || 'Very Low',
  suitablePlan: inputData.suitablePlan || 'Starter',
  estimatedRevenue: inputData.estimatedRevenue || 'LKR 5,000',
  monthlyOrderRange: inputData.monthlyOrderRange || '0',
  
  // Combined Priority - NEW!
  finalPriority: inputData.finalPriority || 'P5 - Monitor',
  priorityColor: inputData.priorityColor || '#CCCCCC',
  salesAction: inputData.salesAction || 'Monitor activity',
  
  // Metadata
  timestamp: inputData.timestamp || new Date().toISOString(),
  registrationUrl: inputData.registrationUrl || '',
  utmSource: inputData.utmSource || '',
  formType: inputData.formType || ''
};
```

**Click Test & Continue**

---

## Step 6: Update CRM/Google Sheets Mapping

Update your final Zapier action to include the new fields.

### **6.1: Add Fit Score Columns**

If sending to **Google Sheets**, add these columns:

| Column | Zapier Field |
|--------|--------------|
| Lead Score | {{leadScore}} |
| Lead Category | {{leadCategory}} |
| Fit Score | {{fitScore}} |
| Business Size | {{businessSize}} |
| Suitable Plan | {{suitablePlan}} |
| Monthly Revenue | {{estimatedRevenue}} |
| Final Priority | {{finalPriority}} |
| Sales Action | {{salesAction}} |

If sending to **CRM** (Salesforce/HubSpot), map to custom fields:
- Create custom fields for fit score, business size, priority
- Map Zapier data to these fields

---

## Step 7: Testing

### **7.1: Test in GTM Preview Mode**

1. Open GTM → Click **Preview**
2. Enter your website URL
3. Fill out and submit a form with different `ordersPerDay` values

### **7.2: Test Different Order Volumes**

**Test Case 1: Micro Business (0-100 orders)**
```
ordersPerDay: "50"
Expected: fitScore = 5, businessSize = "Micro", priority = "Very Low"
```

**Test Case 2: Growing Business (500-1,000 orders)**
```
ordersPerDay: "500-1000"
Expected: fitScore = 30, businessSize = "Growing", priority = "Medium"
```

**Test Case 3: Enterprise (10,000+ orders)**
```
ordersPerDay: "10000+"
Expected: fitScore = 70, businessSize = "Enterprise", priority = "Top Priority"
```

### **7.3: Verify in Browser Console**

```javascript
// Check fit score calculator loaded
window.FitScoreCalculator

// Test calculation manually
window.FitScoreCalculator.calculateFromOrders("500-1000")

// Check dataLayer
console.table(dataLayer.filter(item => item.event === 'fit_score_calculated'))
```

### **7.4: Verify in Zapier**

1. Go to Zapier → Zap History
2. Find recent submission
3. Verify new fields are present:
   - ✅ fitScore
   - ✅ businessSize
   - ✅ suitablePlan
   - ✅ finalPriority
   - ✅ salesAction

---

## 📊 Priority Matrix Explained

The system combines Lead Score and Fit Score to determine final priority:

### **Priority Levels:**

| Lead Score | Fit Score | Final Priority | Sales Action |
|------------|-----------|----------------|--------------|
| High (60+) | High (60+) | P1 - Immediate Action | Call within 1 hour |
| High (60+) | Medium (30-59) | P2 - High Priority | Call within 4 hours |
| High (60+) | Low (0-29) | P3 - Follow Up | Email + Call within 24h |
| Medium (30-59) | High (60+) | P2 - High Priority | Call within 4 hours |
| Medium (30-59) | Medium (30-59) | P3 - Follow Up | Email within 24h |
| Medium (30-59) | Low (0-29) | P4 - Nurture | Add to drip campaign |
| Low (0-29) | High (60+) | P3 - Follow Up | Email + Call within 24h |
| Low (0-29) | Medium (30-59) | P4 - Nurture | Add to drip campaign |
| Low (0-29) | Low (0-29) | P5 - Monitor | Monitor activity |

### **Example Scenarios:**

**Scenario 1: Perfect Lead**
- Lead Score: 80 (Trial Started + Video Watched + Pricing Viewed)
- Fit Score: 70 (10,000 orders/month - Enterprise)
- **Result:** P1 - Immediate Action (Call within 1 hour) 🔥

**Scenario 2: Interested But Too Small**
- Lead Score: 80 (High engagement)
- Fit Score: 10 (100 orders/month - Small Startup)
- **Result:** P3 - Follow Up (Email + Call within 24h)

**Scenario 3: Right Size But Not Engaged**
- Lead Score: 15 (Just visited website)
- Fit Score: 60 (5,000 orders/month - Large)
- **Result:** P3 - Follow Up (Email + Call within 24h)

**Scenario 4: Not a Good Fit**
- Lead Score: 15 (Low engagement)
- Fit Score: 5 (50 orders/month - Micro)
- **Result:** P5 - Monitor (Monitor activity)

---

## 🎨 Zapier Automation Ideas

### **Workflow 1: Priority-Based Routing**

```
Trigger: Catch Hook
Filter: finalPriority equals "P1 - Immediate Action"
Action 1: Send Slack DM to Sales Manager
Action 2: Create high-priority Salesforce lead
Action 3: Send SMS to sales rep
Action 4: Create calendar event for follow-up
```

### **Workflow 2: Plan Recommendation Email**

```
Trigger: Catch Hook
Action 1: Lookup pricing for suitablePlan
Action 2: Send personalized email with plan details
Action 3: Include estimated ROI based on business size
```

### **Workflow 3: Revenue-Based Assignment**

```
Trigger: Catch Hook
Paths:
  - If estimatedRevenue contains "25,000+" → Assign to Enterprise team
  - If estimatedRevenue contains "12,000" → Assign to SMB team
  - Else → Assign to Starter team
```

---

## 📋 Complete Data Structure

### **What Zapier Now Receives:**

```json
{
  // Form Data
  "fullName": "John Doe",
  "phoneNumber": "+94771234567",
  "email": "john@example.com",
  "companyName": "Acme Corp",
  "courierCompanies": "DHL, FedEx",
  "ordersPerDay": "2000-5000",
  
  // Lead Score (Behavioral)
  "leadScore": 55,
  "normalizedScore": 1,
  "leadCategory": "Warm Lead",
  "actionHistory": [
    {
      "action": "Pricing Viewed",
      "score": 25,
      "timestamp": "2025-12-22T10:00:00Z"
    },
    {
      "action": "Trial Started",
      "score": 30,
      "timestamp": "2025-12-22T10:05:00Z"
    }
  ],
  
  // Fit Score (Firmographic) - NEW!
  "fitScore": 50,
  "businessSize": "Medium",
  "fitPriority": "Very High",
  "suitablePlan": "Business/Premium",
  "estimatedRevenue": "LKR 12,000-25,000",
  "monthlyOrderRange": "2,000-5,000",
  
  // Combined Priority - NEW!
  "finalPriority": "P2 - High Priority",
  "priorityColor": "#FF6600",
  "salesAction": "Call within 4 hours",
  
  // Metadata
  "registrationUrl": "https://welcome.oms.storemate.cloud/...",
  "utmSource": "btn_start_a_free_trial_header_pricing",
  "formType": "trial",
  "timestamp": "2025-12-22T10:05:30.123Z"
}
```

---

## ✅ Final Checklist

### **GTM Setup:**
- [ ] Updated Tag 1A: Lead Score - Calculator Core (added FitScoreCalculator)
- [ ] Created Tag: Lead Score - Fit Score Calculator
- [ ] Created 7 new variables for fit score data
- [ ] Updated Tag 3A: Zapier - Trial Form Complete (includes fit score)
- [ ] Updated Tag 3B: Zapier - Demo Form Complete (includes fit score)
- [ ] Tested in Preview mode
- [ ] Published container

### **Zapier Setup:**
- [ ] Updated Code by Zapier step (returns fit score fields)
- [ ] Updated CRM/Sheets action (maps new fields)
- [ ] Created priority-based workflows
- [ ] Tested with different order volumes
- [ ] Zap turned ON

### **Testing:**
- [ ] Tested micro business (0-100 orders)
- [ ] Tested growing business (500-1,000 orders)
- [ ] Tested enterprise (10,000+ orders)
- [ ] Verified priority matrix works correctly
- [ ] Checked Zapier receives all data

---

## 🎉 Result

**You now have TWO scoring systems:**

1. **Lead Score (Behavioral)** - Existing system
   - Based on user actions
   - Tracks engagement level
   - Categories: Cold/Warm/Hot Lead

2. **Fit Score (Firmographic)** - New system
   - Based on business size
   - Tracks revenue potential
   - Categories: Micro → Enterprise

3. **Combined Priority** - Best of both
   - Combines both scores
   - Determines sales priority (P1-P5)
   - Recommends sales actions

**Sales team can now prioritize based on:**
- ✅ Engagement level (how interested they are)
- ✅ Business size (how much they can pay)
- ✅ Combined priority (which leads to call first)

---

## 🔧 Customization

### **Change Score Thresholds:**

Edit `FitScoreCalculator.calculateFromOrders()` in Tag 1A:

```javascript
// Change this line:
} else if (orderCount >= 5000) {

// To a different threshold:
} else if (orderCount >= 3000) {
```

### **Change Priority Matrix:**

Edit `FitScoreCalculator.getPriorityMatrix()` in Tag 1A:

```javascript
// Change thresholds:
var leadLevel = leadScore >= 70 ? 'High' : (leadScore >= 40 ? 'Medium' : 'Low');
var fitLevel = fitScore >= 50 ? 'High' : (fitScore >= 25 ? 'Medium' : 'Low');
```

### **Add More Plans:**

Edit the tier calculations to add more plans:

```javascript
} else if (orderCount >= 1500) {
  return {
    score: 45,
    tier: 'Growing Plus',
    priority: 'High',
    plan: 'Business Plus',
    revenue: 'LKR 15,000',
    monthlyRange: '1,500-2,000'
  };
```

---

## 🆘 Troubleshooting

### **Issue: Fit score is always 0**

**Solution:**
```javascript
// Check if ordersPerDay is being captured
console.log('Form data:', {{DL - Form Data}}.ordersPerDay);

// Test calculator manually
window.FitScoreCalculator.calculateFromOrders("500-1000");
```

### **Issue: Priority matrix not working**

**Solution:**
```javascript
// Check both scores
console.log('Lead Score:', window.LeadScoreManager.getTotalScore());
console.log('Fit Data:', {{DL - Fit Score Object}});
```

### **Issue: Zapier not receiving fit score**

**Solution:**
1. Check GTM Debug Panel → fit_score_calculated event fires
2. Check Zapier Task History → Raw data
3. Verify Code step returns fit score fields

---

## 📞 Support

**Debug Commands:**

```javascript
// Check if fit calculator loaded
window.FitScoreCalculator

// Test calculation
window.FitScoreCalculator.calculateFromOrders("2000-5000")

// Test priority matrix
window.FitScoreCalculator.getPriorityMatrix(55, 50)

// Check dataLayer
console.table(dataLayer)
```

---

**🎯 Your lead qualification is now enterprise-grade!**

You can identify not just WHO is interested, but WHO is worth pursuing based on business size and revenue potential.
