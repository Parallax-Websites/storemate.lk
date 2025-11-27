# n8n Debugging Guide - "Cannot read properties of undefined" Error

## Quick Fix Checklist

### Step 1: Verify the "To" Field Configuration
1. Open your Email node in n8n
2. Check the **"To"** field
3. It should show: `{{ $json.email }}`
4. Do NOT leave it as: `{{ $json.senderName }}`

### Step 2: Add a Debug Node to Inspect Data

1. **Click "+"** after your Webhook node
2. **Search for "Debug"** and select it
3. **Connect** Webhook → Debug → Email
4. **Run workflow** and check output

The Debug node will show you the exact data structure being received.

### Step 3: Check the Data Structure

In the Debug output, you should see:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "companyName": "Acme Corp",
  "phoneNumber": "+1234567890",
  "courierCompanies": "Royal Express",
  "ordersPerDay": "50",
  "timestamp": "2025-11-12T10:00:00Z"
}
```

**If "email" is missing**, the problem is in your frontend code.

### Step 4: Verify Frontend Code (Header.jsx)

Check that your `handleDemoSubmit` function includes:

```javascript
const demoData = {
    courierCompanies: formData.courierCompanies,
    ordersPerDay: formData.ordersPerDay,
    fullName: formData.fullName,
    phoneNumber: formData.phoneNumber,
    email: formData.email,  // ← This MUST be here
    companyName: formData.companyName,
    timestamp: new Date().toISOString()
};
```

### Step 5: Test with Static Email

Temporarily change your Email node's "To" field:
- **From**: `{{ $json.email }}`
- **To**: `support@storemate.cloud`

If the email sends successfully, the problem is with the dynamic field mapping.

---

## Common Causes & Solutions

### Cause 1: Data not sent from Frontend
**Symptom**: Debug node shows empty data or missing "email" field
**Solution**: 
- Check Header.jsx `handleDemoSubmit` function
- Verify `email: formData.email` is in the demoData object
- Test by adding `console.log(demoData)` before fetch

### Cause 2: Wrong Field Name in "To"
**Symptom**: Error "Cannot read properties of undefined"
**Solution**:
- Change "To" to exactly: `{{ $json.email }}`
- Case-sensitive: must be lowercase "email"
- Not "Email" or "EMAIL"

### Cause 3: Data not reaching n8n Webhook
**Symptom**: Debug node shows no data at all
**Solution**:
- Check browser console for fetch errors
- Verify webhook URL in Header.jsx is correct
- Check n8n webhook is activated
- Look at n8n webhook execution logs

### Cause 4: Wrong Webhook URL
**Symptom**: No data received or 404 errors
**Solution**:
- Your webhook URL should be:
  ```
  https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f
  ```
- Make sure it matches exactly in Header.jsx

---

## Step-by-Step Debugging Process

### 1. Check Browser Console
```
Open your website → Open DevTools (F12) → Console tab
Fill form and click "Try Live Demo"
Look for any red error messages
```

### 2. Check n8n Webhook Logs
```
Go to your n8n workflow
Click "Executions" tab
Look at recent executions
Check if data is being received
```

### 3. Add Console Logging
In Header.jsx, add this to `handleDemoSubmit`:

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

    // LOG THE DATA BEFORE SENDING
    console.log('Sending demo data:', demoData);

    fetch('https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoData)
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (response.ok) {
            console.log('✅ Demo signup data sent successfully');
        } else {
            console.error('❌ Error sending data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('❌ Fetch error:', error);
    });

    // Rest of function...
};
```

### 4. Check n8n Email Node Settings

In your Email node, verify ALL of these:

| Setting | Value | Status |
|---------|-------|--------|
| Resource | Message | ✅ Required |
| Operation | Send | ✅ Required |
| To | `{{ $json.email }}` | ✅ **CRITICAL** |
| Subject | Your Storemate OMS Demo Account - Login Details | ✅ Required |
| Email Type | HTML | ✅ Required |
| Message | [HTML template] | ✅ Required |

---

## Testing the Webhook Directly

You can test without using the frontend:

```bash
curl -X POST https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "your-email@gmail.com",
    "companyName": "Test Company",
    "phoneNumber": "+94701234567",
    "courierCompanies": "Royal Express",
    "ordersPerDay": "100",
    "timestamp": "2025-11-12T10:00:00Z"
  }'
```

Replace `your-email@gmail.com` with your actual email and run this command in Terminal/Command Prompt.

---

## n8n Workflow Structure Should Be

```
[Webhook] → [Debug] → [Email]
```

Or if working:

```
[Webhook] → [Email]
```

**Not recommended:**
```
[Webhook] → [Function] → [Email]  (only add if needed)
```

---

## Need More Help?

1. **Check Debug Node Output**: This is the most important step
2. **Verify All Field Names**: Case-sensitive!
3. **Test Static Email First**: Confirms Email node works
4. **Check Browser Console**: Frontend errors?
5. **Check n8n Logs**: Backend errors?

**After fixing, you should see:**
1. ✅ Data arriving in n8n (check Executions)
2. ✅ Email being sent (check Email node output)
3. ✅ Email received in inbox

---

## Summary of Common Fixes

| Error | Fix |
|-------|-----|
| "Cannot read properties of undefined" | Change "To" to `{{ $json.email }}` |
| "No data received" | Check webhook URL matches exactly |
| "Email not sending" | Verify Gmail credentials are authorized |
| "Wrong email content" | Add Debug node to inspect data |
| "Template not showing" | Change Email Type to "HTML" |

Good luck! 🚀
