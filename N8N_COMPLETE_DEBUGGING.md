# Complete Email Debugging Guide - Not Receiving Emails

## Quick Diagnosis Checklist

### ✅ Step 1: Check Browser Console
1. Open your local website: `http://127.0.0.1:8000/home`
2. Open DevTools (F12)
3. Go to **Console** tab
4. Fill the "Try Live Demo" form and click **"Continue to Demo"**
5. Look for console logs:

**You should see:**
```
✅ Sending demo data to n8n: {fullName: "...", email: "...", ...}
✅ n8n Response status: 200
✅ Demo signup data sent successfully to n8n
✅ Redirecting to login with params: ...
```

**If you see errors**, note them down and continue to next steps.

---

### ✅ Step 2: Check n8n Webhook Logs

1. Go to n8n: https://storemateoms.app.n8n.cloud/
2. Open your "Demo Signup Email" workflow
3. Click **"Executions"** tab
4. **Refresh the page** (F5)
5. Do you see any new executions after you submitted the form?

**If YES:** Data is reaching n8n ✅
**If NO:** The webhook is not receiving data ❌

---

### ✅ Step 3: Test Webhook Directly

Test if the webhook works independently:

**Option A: Using cURL (Terminal/Command Prompt)**

```bash
curl -X POST "https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "codeburgtec@gmail.com",
    "companyName": "Test Company",
    "phoneNumber": "+94701234567",
    "courierCompanies": "Royal Express",
    "ordersPerDay": "100",
    "timestamp": "2025-11-12T10:00:00Z"
  }'
```

**Option B: Using an Online Tool**
1. Go to https://www.postman.com/downloads/
2. Download and install Postman
3. Create new POST request to your webhook URL
4. Add JSON body above
5. Send and check response

**Expected Response:**
- Status: **200** (or 2xx)
- Body: Could be empty or contain success message

**If webhook test works but form doesn't:**
- Problem is in frontend code
- Problem is in form data

**If webhook test fails:**
- Problem is with n8n webhook URL
- Problem is with n8n workflow

---

### ✅ Step 4: Verify Webhook URL

Your webhook URL should be EXACTLY:
```
https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f
```

**Check in Header.jsx:**
1. Search for `storemateoms.app.n8n.cloud`
2. Verify it matches exactly above
3. No typos, extra spaces, or characters

---

### ✅ Step 5: Check n8n Workflow Nodes

In your n8n workflow:

1. **Webhook Node:**
   - Click on it
   - What's the webhook URL shown? Does it match?
   - Method should be: **POST**

2. **Email Node:**
   - Click on it
   - **"To" field should be:** `{{ $json.email }}`
   - NOT: `{{ $json.senderName }}`
   - Resource: **Message**
   - Operation: **Send**
   - Email Type: **HTML**

3. **Workflow Status:**
   - Is it **ACTIVATED**? (Green checkmark?)
   - If not, click **"Activate"**

---

## Complete Testing Flow

### Test 1: Frontend to n8n
```
http://127.0.0.1:8000/home 
  → Fill form
  → Click "Continue to Demo"
  → Check browser console (F12)
  → Check n8n Executions tab
```

### Test 2: Direct Webhook
```
Terminal → curl command
  → Check n8n Executions tab
  → Did it receive the data?
```

### Test 3: Email Node
```
n8n Executions
  → Click latest execution
  → Click Email node
  → See what happened
```

---

## Common Issues & Fixes

### Issue: No logs in browser console
**Cause:** JavaScript error or fetch not executing  
**Fix:**
1. Check browser console for errors
2. Hard refresh: Ctrl+Shift+R
3. Clear browser cache
4. Restart development server

### Issue: Console shows logs but no n8n execution
**Cause:** Webhook URL is wrong or n8n workflow not activated  
**Fix:**
1. Copy webhook URL from n8n and paste in code
2. Verify workflow is activated (green checkmark)
3. Check URL has no extra spaces/characters

### Issue: n8n receives data but no email
**Cause:** Email node configuration wrong  
**Fix:**
1. Check "To" field: `{{ $json.email }}`
2. Check Email Type: HTML
3. Check Resource: Message
4. Check Operation: Send
5. Check Gmail credentials are still valid

### Issue: Email node shows error "Cannot read properties..."
**Cause:** Data not in correct format  
**Fix:**
1. Add Debug node after Webhook
2. Check debug output format
3. Verify all field names match (case-sensitive)

---

## Advanced Debugging

### Add Console Logging to Header.jsx

Find this in Header.jsx:

```javascript
const handleDemoSubmit = (e) => {
    e.preventDefault();
    
    const demoData = {
        courierCompanies: formData.courierCompanies,
        ordersPerDay: formData.ordersPerDay,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        companyName: formData.companyName,
        timestamp: new Date().toISOString()
    };

    console.log('1️⃣ Form data received:', formData);
    console.log('2️⃣ Demo data prepared:', demoData);
    console.log('3️⃣ Webhook URL:', 'https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f');
```

Then in browser console, you'll see exactly what's being sent.

---

## Verify Each Component

### Component 1: Form Modal
- [ ] Can you open the form? (Click "Try Live Demo" button)
- [ ] Can you fill all fields?
- [ ] Can you see "Continue to Demo" button?

### Component 2: Frontend Code
- [ ] Webhook URL in Header.jsx is correct?
- [ ] `fetch()` is being called?
- [ ] Console logs appear? (F12 → Console)

### Component 3: n8n Webhook
- [ ] Webhook node is activated?
- [ ] Webhook method is POST?
- [ ] Executions tab shows incoming requests?

### Component 4: n8n Email Node
- [ ] "To" field is: `{{ $json.email }}`?
- [ ] Email Type is: HTML?
- [ ] Gmail credentials valid?
- [ ] All required fields filled?

### Component 5: Gmail
- [ ] Check spam folder?
- [ ] Less secure app access enabled?
- [ ] No 2FA blocking n8n?

---

## Quick Fix Checklist

- [ ] Restarted development server? (`npm run dev`)
- [ ] Hard refreshed browser? (`Ctrl+Shift+R`)
- [ ] Activated n8n workflow? (Green checkmark visible?)
- [ ] Verified webhook URL matches exactly?
- [ ] Checked "To" field in Email node?
- [ ] Checked n8n Executions tab?
- [ ] Checked browser console (F12)?
- [ ] Checked Gmail spam folder?
- [ ] Tested with cURL command?

---

## Still Not Working?

**Provide these details:**

1. **Browser console output** (F12 → Console → Screenshot)
2. **n8n Executions tab** (Does it show any executions?)
3. **n8n Email node settings** (Screenshot of "To" field)
4. **Webhook URL in code** (Is it exactly correct?)
5. **cURL test result** (Did direct webhook test work?)

---

## Success Indicators

You'll know it's working when:

✅ Browser console shows all 4 log messages  
✅ n8n Executions tab shows a new execution  
✅ Email execution shows green checkmark  
✅ Email arrives in inbox within 1 minute  
✅ Email contains all form data (name, company, etc.)

---

## If Everything Seems Correct

Sometimes issues are:
- Browser cache (clear it)
- Development server cache (restart `npm run dev`)
- n8n needs refresh
- Gmail rate limiting (wait a few minutes)
- Firewall/VPN blocking

**Try:**
1. Close all tabs
2. Clear browser cache completely
3. Restart development server
4. Test again
