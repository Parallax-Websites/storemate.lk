# Facebook Pixel Setup in Google Tag Manager

**Pixel ID:** `733398852839008`


Simple guide to install Facebook Pixel on your website using Google Tag Manager.

---

## 🚀 SETUP STEPS

### **STEP 1: Go to Google Tag Manager**

1. Open Google Tag Manager: https://tagmanager.google.com
2. Select your container
3. Click **Tags** → **New**

---

### **STEP 2: Create the Facebook Pixel Tag**

**Tag Configuration:**
- Click **Tag Configuration**
- Choose **Custom HTML**
- Name: `Facebook Pixel`

**Copy and paste this code:**

```html
<!-- Facebook Pixel Code (Base - No Auto Tracking) -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '733398852839008');
// Automatic PageView tracking disabled - use manual tracking
</script>
<!-- End Facebook Pixel Code -->
```

**Note:** This only loads the pixel. Nothing is tracked automatically. You'll add tracking events later as needed.

---

### **STEP 3: Set the Trigger**

**Triggering:**
- Click **Triggering**
- Select **All Pages**

This loads the pixel base code on every page, but doesn't track anything yet.

---

### **STEP 4: Save the Tag**

- Click **Save**
- Click **Submit** (top right)
- Add a version name (e.g., "Added Facebook Pixel")
- Click **Publish**

---

## ✅ VERIFY IT'S WORKING

### **FIRST: Check if GTM is installed on your website**

Open your website, right-click → **Inspect** → **Console** tab, paste this:

```javascript
console.log('GTM Installed:', typeof google_tag_manager !== 'undefined');
console.log('Facebook Pixel:', typeof fbq);
```

**Expected result:**
```
GTM Installed: true
Facebook Pixel: function
```

If GTM shows `false`, you need to install GTM on your website first!

This confirms the pixel is loaded and ready. No events tracked yet - you control when to track.

### **Method 1: Browser Console (Instant Check)**

1. Open your website
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Type: `fbq`
5. Press Enter

**✅ Working:** You'll see `function` or pixel details  
**❌ Not Working:** You'll see `undefined`

Pixel is loaded and ready. You can manually track events when needed:
```javascript
// When YOU want to track something:
fbq('track', 'PageView');  // Track page view
fbq('track', 'Lead');      // Track lead
fbq('track', 'Purchase');  // Track purchase
```

---

### **Method 2: GTM Preview Mode (Most Important)**

1. In GTM, click **Preview** button
2. Enter your website URL and click **Connect**
3. Your website opens with GTM debugger
4. Check **Tags Fired** section
5. Look for "Facebook Pixel" tag

**If tag is NOT firing:**
- Check if it's in "Tags Not Fired" section
- Verify trigger is set to "All Pages"
- Make sure you **PUBLISHED** the container (not just saved)

**If tag IS firing:**
- Click on the tag name
- Check for errors in the execution log
- Go to browser Console tab and check for JavaScript errors

---

### **Method 3: Facebook Pixel Helper**

1. Install: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your website
3. Click the e pixel `733398852839008` is loaded (no events yet)

The pixel is initialized but not tracking automatically - this is correct!
- "Pixel activated multiple times" = Tag firing multiple times

---

### **Method 4: Facebook Events Manager**

1. Go to: https://business.facebook.com/events_manager2/
2. Find pixel: **733398852839008**
3. Click **Test Events**
4. Enter your website URL
5. Click **Open Website**
6. You should see events appearing in real-time
No events will appear yet - pixel is loaded but waiting for your tracking commands

You'll add specific tracking events later as needed.
---

## 🐛 TROUBLESHOOTING - Not Tracking?

### **Issue 1: GTM Container Not Published**

**Problem:** You saved the tag but didn't publish

**Solution:**
1. Go to GTM
2. Click **Submit** (top right, blue button)
3. Add version name: "Added Facebook Pixel"
4. Click **Publish**
5. Wait 1-2 minutes, then refresh your website

---

### **Issue 2: GTM Not Installed on Website**

**Problem:** GTM container code not on your website

**Check:** View page source, search for `googletagmanager.com/gtm.js`

**Solution:** Add GTM container code to your website:

In your `<head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

Replace `GTM-XXXXXX` with your actual GTM container ID.

After `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

### **Issue 3: Ad Blocker Blocking Pixel**

**Problem:** Browser extension blocking Facebook

**Solution:**
- Disable ad blockers (uBlock Origin, AdBlock, etc.)
- Test in Incognito/Private mode
- Test on mobile device

---

### **Issue 4: Wrong Trigger**

**Problem:** Tag trigger not set correctly

**Solution:**
1. Go to GTM → Tags → Click your "Facebook Pixel" tag
2. Check **Triggering** section
3. Should say: "All Pages - Page View"
4. If not, click **Triggering** → Select **All Pages**
5. Click Save → Submit → Publish

---

### **Issue 5: JavaScript Errors**

**Problem:** Code has errors preventing execution

**Solution:**
1. Open browser Console (F12)
2. Reload page
3. Look for red error messages
4. If you see errors related to `fbq`, check:
   - Code was copied completely
   - No extra characters added
   - Pixel ID is correct: `733398852839008`

---

### **Issue 6: Cached GTM Container**

**Problem:** Browser using old version of GTM

**Solution:**
- Clear browser cache completely
- Hard reload: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Test in Incognito mode
- Wait 5 minutes and try again

---

## 🔍 QUICK DIAGNOSTIC CHECKLIST

Run through this checklist in order:

- [ ] **GTM container published** (not just saved)
- [ ] **GTM installed on website** (check page source)
- [ ] **Tag created** in GTM with Custom HTML
- [ ] **Pixel code pasted** correctly with ID `733398852839008`
- [ ] **Trigger set** to "All Pages"
- [ ] **Cache cleared** and page hard-reloaded
- [ ] **Ad blockers disabled** for testing
- [ ] **Browser console** shows no errors
- [ ] **GTM Preview Mode** shows tag firing
- [ ] **Network tab** shows requests to facebook.com

---

## 💡 FAST DEBUG SCRIPT

Paste this in browser console to diagnose:

```javascript
// Facebook Pixel Diagnostic
console.log('=== FACEBOOK PIXEL DIAGNOSTIC ===');
console.log('1. GTM Loaded:', typeof google_tag_manager !== 'undefined' ? '✅ YES' : '❌ NO');
console.log('2. DataLayer exists:', typeof dataLayer !== 'undefined' ? '✅ YES' : '❌ NO');
console.log('3. Facebook Pixel (fbq):', typeof fbq !== 'undefined' ? '✅ YES' : '❌ NO');
console.log('4. Facebook Pixel loaded:', typeof fbq === 'function' ? '✅ YES' : '❌ NO');

if (typeof fbq === 'function') {
  console.log('5. Testing PageView event...');
  fbq('track', 'PageView');
  console.log('✅ PageView event sent! Check Network tab for facebook.com/tr request');
} else {
  console.log('❌ Pixel not loaded. Check GTM tag and container publication.');
}
```

**Use this to identify which step is failing!**

---

## ✅ CHECKLIST

- [ ] Created tag in GTM
- [ ] Pasted pixel code with ID `733398852839008`
- [ ] Set trigger to "All Pages"
- [ ] Published container
- [ ] Verified with Pixel Helper
- [ ] Checked Events Manager

---

---

## 🎯 STEP-BY-STEP: TRACK REGISTRATION FORM SUBMISSIONS

Follow these steps to automatically track when users submit your registration form and capture UTM parameters.

---

## 📋 STEP 1: Create UTM Variables (5 minutes)

These variables capture campaign parameters from the URL.

### **1.1 - Go to Variables**
1. In GTM, click **Variables** in left sidebar
2. Scroll to **User-Defined Variables**
3. Click **New**

### **1.2 - Create First Variable (utm_source)**
1. Click the variable box (where it says "Untitled Variable")
2. Select **Variable Configuration**
3. In the list, find and click **URL**
4. You'll see two dropdowns appear
5. **Component Type:** Click dropdown → Select **Query**
6. **Query Key:** Type exactly: `utm_source`
7. At the top, name it: `URL - utm_source`
8. Click **Save**

### **1.3 - Repeat for 3 More Variables**

Click **New** and repeat the process for each:

**Variable 2:**
- Type: **URL**
- Component Type: **Query**
- Query Key: `utm_medium`
- Name: `URL - utm_medium`
- Save

**Variable 3:**
- Type: **URL**
- Component Type: **Query**
- Query Key: `utm_campaign`
- Name: `URL - utm_campaign`
- Save

**Variable 4:**
- Type: **URL**
- Component Type: **Query**
- Query Key: `utm_content`
- Name: `URL - utm_content`
- Save

✅ **Checkpoint:** You should now see 4 variables in your User-Defined Variables list

---

## 🎯 STEP 2: Create Form Submit Trigger (3 minutes)

This tells GTM when to fire the tracking tag.

### **2.1 - Go to Triggers**
1. Click **Triggers** in left sidebar
2. Click **New**

### **2.2 - Configure Trigger**
1. Click trigger configuration area
2. Find and click **Form Submission**
3. You'll see options appear

### **2.3 - Set Options**
- ✅ Check **Wait for Tags**
  - Max wait time: `2000` milliseconds
- ✅ Check **Check Validation**
- **This trigger fires on:** Select **Some Forms**

### **2.4 - Add Condition**
1. Click **Add** to add a firing condition
2. First dropdown: Select **Page URL**
3. Second dropdown: Select **contains**
4. Text box: Type `welcome.oms.storemate.cloud/register`

### **2.5 - Name and Save**
1. At top, name it: `Form Submit - OMS Registration`
2. Click **Save**

✅ **Checkpoint:** Trigger created and saved

---

## 🏷️ STEP 3: Create Facebook Pixel Tag (5 minutes)

This sends the Lead event to Facebook when form is submitted.

### **3.1 - Go to Tags**
1. Click **Tags** in left sidebar
2. Click **New**

### **3.2 - Configure Tag**
1. Click tag configuration area
2. Scroll down and select **Custom HTML**

### **3.3 - Paste the Code**

Copy and paste this EXACT code:

```html
<script>
(function() {
  // Check if Facebook Pixel is loaded
  if (typeof fbq !== 'function') {
    console.warn('❌ Facebook Pixel not loaded');
    return;
  }
  
  // Get UTM parameters from URL
  var utmSource = {{URL - utm_source}} || 'direct';
  var utmMedium = {{URL - utm_medium}} || 'none';
  var utmCampaign = {{URL - utm_campaign}} || 'none';
  var utmContent = {{URL - utm_content}} || 'none';
  
  // Track Lead event
  fbq('track', 'Lead', {
    content_name: 'OMS Registration Form Submit',
    content_category: 'Registration',
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    event_source: 'website'
  });
  
  // Track CompleteRegistration event
  fbq('track', 'CompleteRegistration', {
    content_name: 'OMS Registration',
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent
  });
  
  // Log to console
  console.log('✅ Facebook Pixel: Registration submitted');
  console.log('📊 UTM Source:', utmSource);
  console.log('📊 UTM Medium:', utmMedium);
  console.log('📊 UTM Campaign:', utmCampaign);
  console.log('📊 UTM Content:', utmContent);
})();
</script>
```

### **3.4 - Set Trigger**
1. Click **Triggering** section (below the code)
2. Select: `Form Submit - OMS Registration`

### **3.5 - Name and Save**
1. At top, name it: `Facebook Pixel - Registration Form`
2. Click **Save**

✅ **Checkpoint:** Tag created and saved

---

## 🚀 STEP 4: Publish Everything (2 minutes)

### **4.1 - Submit Changes**
1. Click **Submit** button (blue, top right)
2. Version Name: Type `Added registration form tracking`
3. Version Description (optional): `Tracks Lead event on form submit with UTM params`
4. Click **Publish**

### **4.2 - Wait**
- Wait 1-2 minutes for changes to propagate

✅ **Checkpoint:** Container published

---

## ✅ STEP 5: Test It! (5 minutes)

### **5.1 - Test with GTM Preview Mode**

1. In GTM, click **Preview** button (top right)
2. Paste this URL: `https://welcome.oms.storemate.cloud/register?utm_source=test&utm_medium=test&utm_campaign=test&utm_content=test`
3. Click **Connect**
4. Your site opens with GTM debugger

### **5.2 - Submit the Form**
1. Fill out the registration form
2. Click **Submit** button
3. Watch the GTM debugger

### **5.3 - Check Tags Fired**
In the GTM debugger, you should see:
- ✅ **Facebook Pixel - Registration Form** tag FIRED
- If it's in "Tags Not Fired", there's an issue with the trigger

### **5.4 - Check Browser Console**
1. Press **F12** to open console
2. You should see:
```
✅ Facebook Pixel: Registration submitted
📊 UTM Source: test
📊 UTM Medium: test
📊 UTM Campaign: test
📊 UTM Content: test
```

### **5.5 - Check Network Tab**
1. Click **Network** tab in browser dev tools
2. Filter by: `facebook`
3. Look for request to `facebook.com/tr`
4. Click it and check **Payload** - should show:
   - `ev=Lead`
   - `cd[utm_source]=test`
   - `cd[utm_medium]=test`
   - etc.

---

## 🔍 STEP 6: Verify in Facebook (5 minutes)

### **6.1 - Go to Events Manager**
1. Open: https://business.facebook.com/events_manager2/
2. Find your pixel: **733398852839008**
3. Click **Test Events** in left menu

### **6.2 - Test Again**
1. In "Test Events" section, paste: `https://welcome.oms.storemate.cloud/register?utm_source=test&utm_medium=test&utm_campaign=test&utm_content=test`
2. Click **Open Website**
3. Fill and submit the form
4. Watch the Test Events panel

### **6.3 - Check for Events**
You should see appear in real-time:
- ✅ **Lead** event
- ✅ **CompleteRegistration** event

Click on them to see UTM parameter data.

---

## ⚠️ TROUBLESHOOTING

### **Tag Not Firing?**

**Check:**
1. Container published? (Step 4)
2. Trigger condition correct? Should be: Page URL **contains** `welcome.oms.storemate.cloud/register`
3. Form actually submitting? Check console for errors

**Fix:**
- Use GTM Preview Mode to debug
- Check if trigger appears in "Triggers Fired" when you submit form
- Verify you're on the correct page (must have `/register` in URL)

---

### **Variables Showing "undefined"?**

**Check:**
1. Did you visit page WITH UTM parameters? Must have `?utm_source=...` in URL
2. Variable names exactly match: `URL - utm_source`, `URL - utm_medium`, etc.
3. Component Type set to **Query**, not Path or Fragment

---

### **Events Not in Facebook?**

**Check:**
1. Ad blocker disabled?
2. Wait 20 minutes - events can be delayed
3. Use "Test Events" mode in Events Manager (shows real-time)
4. Check Network tab shows request to `facebook.com/tr` with status 200

---

## ✅ SUCCESS CHECKLIST

- [ ] 4 UTM variables created
- [ ] Form submit trigger created
- [ ] Facebook Pixel tag created with code
- [ ] Container published
- [ ] Tested with GTM Preview Mode - tag fires
- [ ] Console shows UTM parameters
- [ ] Network tab shows facebook.com/tr request
- [ ] Events appear in Facebook Test Events

---

## 🎯 WHAT HAPPENS NOW?

**Every time someone submits the registration form:**

1. ✅ GTM detects form submission
2. ✅ Captures UTM parameters from URL
3. ✅ Sends **Lead** event to Facebook with UTM data
4. ✅ Sends **CompleteRegistration** event to Facebook
5. ✅ You can see which campaigns drive registrations!

**In Facebook Ads Manager, you can now:**
- See which `utm_campaign` drives most registrations
- Create audiences based on `utm_source` or `utm_medium`
- Optimize ad spend by `utm_content` performance
- Build lookalike audiences from high-converting campaigns

---

## 📞 NEED HELP?

**Common Questions:**

**Q: Do I need to add code to my website?**  
A: No! Everything is done in GTM. Your website just needs the GTM container code (which you already have).

**Q: Will this track registrations without UTM parameters?**  
A: Yes! If no UTM params exist, it defaults to "direct" / "none". The tracking still works.

**Q: How long until I see data in Facebook?**  
A: Test Events shows real-time. Regular reporting can take 20+ minutes.

**Q: Can I test without actually registering?**  
A: Yes! Use GTM Preview Mode - you can just click Submit and see if tag fires (form validation may prevent actual submission, but tag still fires).

---

**🎉 Congratulations! Your Facebook Pixel is now tracking registration form submissions with UTM parameters!**