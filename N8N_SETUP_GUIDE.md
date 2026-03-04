# n8n Setup Guide for Demo Signup Email

This guide will help you set up n8n to automatically send demo signup emails with login credentials when users fill out the "Try Live Demo" form.

## Prerequisites
- n8n account (sign up at https://n8n.cloud)
- Email service credentials (Gmail, SendGrid, etc.)
- Access to your OMS application

---

## Step 1: Create an n8n Account

1. Go to https://n8n.cloud
2. Click **"Sign Up"** and create your account
3. Verify your email address
4. Log in to your n8n dashboard

---

## Step 2: Create a New Workflow

1. Click **"+ New"** button in the top left
2. Select **"Create Workflow"**
3. Name your workflow: `Demo Signup Email`
4. Click **"Create"**

---

## Step 3: Add a Webhook Trigger Node

1. In the workflow editor, click the **"+"** button to add a node
2. Search for **"Webhook"** and select it
3. Click **"Webhook"** in the dropdown that appears
4. Configure the webhook:
   - **Method**: Select `POST`
   - Leave other settings as default
5. Click **"Copy Webhook URL"** - save this URL somewhere safe

**Your webhook URL will look like:**
```
https://hook.us.n8n.cloud/webhook/xxxxxxxxxxxxxxxx
```

> **Important**: Update your Header.jsx with this URL if it's different from the default one in the code.

---

## Step 4: Add an Email Node with Detailed Configuration

### Adding the Email Node

1. Click the **"+"** button on the right side of the Webhook node
2. Search for **"Email"** and select it
3. Click **"Email"** from the dropdown
4. You now have the Email node added to your workflow

---

## Step 5: Configure Email Node Parameters

### 5.1 Credentials Setup

1. In the Email node, go to the **"Settings"** tab at the top
2. Under **"Credential to connect with"**, you should see **"Gmail account"**
3. If you haven't created credentials yet:
   - Click **"+ Create New Credential"**
   - Select your email provider (Gmail recommended)
   - Click "Connect" and authenticate with your Google account
   - Grant n8n permission to send emails
4. Click the **"Parameters"** tab to continue

### 5.2 Main Configuration (Parameters Tab)

You should now see the **Parameters** tab with these fields:

#### 1. **Resource**: Message
- This should already be selected
- Click the dropdown and select **"Message"**

#### 2. **Operation**: Send
- Click the dropdown and select **"Send"**

#### 3. **To** (RECIPIENT EMAIL) ⚠️ IMPORTANT
**CHANGE THIS FROM:** `{{ $json.senderName }}`  
**TO:** `{{ $json.email }}`

This field should contain the email address where you want to send the message. It maps to the email address submitted in the form.

#### 4. **Subject**
**CHANGE THIS FROM:** `Hello World!`  
**TO:** 
```
Your Storemate OMS Demo Account - Login Details
```

Or use a dynamic subject:
```
Welcome {{ $json.fullName }} - Your Demo Account is Ready!
```

#### 5. **Email Type**
- Select: **"HTML"** (it's already set correctly in your screenshot ✓)
- This allows formatted emails with styling and images

#### 6. **Message** (THE BODY)
Click in the **"Message"** field and paste the complete HTML template below:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #0066cc; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background-color: #f0f0f0; padding: 15px; font-size: 12px; text-align: center; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .details-table td { padding: 10px; border: 1px solid #ddd; }
        .details-table .label { font-weight: bold; background-color: #f0f0f0; width: 35%; }
        .cta-button { 
            display: inline-block; 
            background-color: #0066cc; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 5px; 
            margin: 20px 0;
        }
        .info-box { background-color: #e3f2fd; padding: 15px; border-left: 4px solid #0066cc; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Storemate OMS Demo! 🎉</h1>
        </div>
        
        <div class="content">
            <p>Hi <strong>{{ $json.fullName }}</strong>,</p>
            
            <p>Thank you for signing up for a demo of Storemate OMS. Your demo account has been created successfully and is ready to use!</p>
            
            <h2>📋 Your Login Details:</h2>
            
            <table class="details-table">
                <tr>
                    <td class="label">Company Name:</td>
                    <td>{{ $json.companyName }}</td>
                </tr>
                <tr>
                    <td class="label">Login Email:</td>
                    <td>{{ $json.email }}</td>
                </tr>
                <tr>
                    <td class="label">Phone Number:</td>
                    <td>{{ $json.phoneNumber }}</td>
                </tr>
                <tr>
                    <td class="label">Login URL:</td>
                    <td><a href="https://oms.storemate.cloud/login?courierCompanies={{ encodeURIComponent($json.courierCompanies) }}&ordersPerDay={{ encodeURIComponent($json.ordersPerDay) }}&fullName={{ encodeURIComponent($json.fullName) }}&phoneNumber={{ encodeURIComponent($json.phoneNumber) }}&email={{ encodeURIComponent($json.email) }}&companyName={{ encodeURIComponent($json.companyName) }}">https://oms.storemate.cloud/login?courierCompanies={{ encodeURIComponent($json.courierCompanies) }}&ordersPerDay={{ encodeURIComponent($json.ordersPerDay) }}&fullName={{ encodeURIComponent($json.fullName) }}&phoneNumber={{ encodeURIComponent($json.phoneNumber) }}&email={{ encodeURIComponent($json.email) }}&companyName={{ encodeURIComponent($json.companyName) }}</a></td>
                </tr>
            </table>
            
            <div class="info-box">
                <h3 style="margin-top: 0;">ℹ️ Your Business Information</h3>
                <p>
                    <strong>Courier Companies:</strong> {{ $json.courierCompanies }}<br>
                    <strong>Orders Per Day:</strong> {{ $json.ordersPerDay }}
                </p>
            </div>
            
            <center>
                <a href="https://oms.storemate.cloud/login?courierCompanies={{ encodeURIComponent($json.courierCompanies) }}&ordersPerDay={{ encodeURIComponent($json.ordersPerDay) }}&fullName={{ encodeURIComponent($json.fullName) }}&phoneNumber={{ encodeURIComponent($json.phoneNumber) }}&email={{ encodeURIComponent($json.email) }}&companyName={{ encodeURIComponent($json.companyName) }}" class="cta-button">
                    Access Your Demo Now
                </a>
            </center>
            
            <h2>🚀 Getting Started:</h2>
            <ol>
                <li>Click the button above or visit <a href="https://oms.storemate.cloud/login?courierCompanies={{ encodeURIComponent($json.courierCompanies) }}&ordersPerDay={{ encodeURIComponent($json.ordersPerDay) }}&fullName={{ encodeURIComponent($json.fullName) }}&phoneNumber={{ encodeURIComponent($json.phoneNumber) }}&email={{ encodeURIComponent($json.email) }}&companyName={{ encodeURIComponent($json.companyName) }}">your personalized login link</a></li>
                <li>Log in using your email: <strong>{{ $json.email }}</strong></li>
                <li>Complete your account setup</li>
                <li>Start managing your orders right away</li>
            </ol>
            
            <h2>❓ Need Help?</h2>
            <p>
                If you have any questions or need assistance, please don't hesitate to reach out to our support team:
            </p>
            <ul>
                <li>📧 Email: support@storemate.cloud</li>
                <li>📱 Phone: +94 (0) 11 123 4567</li>
                <li>💬 WhatsApp: Click <a href="https://wa.me/94xxxxxxxxxx">here</a></li>
            </ul>
            
            <p>Best regards,<br>
            <strong>The Storemate OMS Team</strong></p>
        </div>
        
        <div class="footer">
            <p>© 2025 Storemate OMS. All rights reserved. | Built for Sri Lankan E-Commerce</p>
            <p>
                <a href="https://storemate.cloud">Website</a> | 
                <a href="https://storemate.cloud/terms">Terms</a> | 
                <a href="https://storemate.cloud/privacy">Privacy</a>
            </p>
        </div>
    </div>
</body>
</html>
```

---

## Step 6: Options and Additional Settings

In the **"Options"** section (currently showing "No properties"):

Click **"Add option"** to add any of these (optional):

### Option 1: From Email (Sender)
```
noreply@storemate.cloud
```

### Option 2: From Name (Sender Name)
```
Storemate OMS Demo
```

### Option 3: CC (Carbon Copy)
```
admin@storemate.cloud
```

### Option 4: BCC (Blind Carbon Copy)
```
{{ $json.email }}
```

### Option 5: Reply-To
```
support@storemate.cloud
```

---

## Step 7: Configuration Summary - What Your Screen Should Look Like

| Field | Value |
|-------|-------|
| **Resource** | Message |
| **Operation** | Send |
| **To** | `{{ $json.email }}` |
| **Subject** | Your Storemate OMS Demo Account - Login Details |
| **Email Type** | HTML |
| **Message** | [Paste HTML template above] |

---

## Step 8: Common Mistakes to Avoid

❌ **DON'T:** Leave "To" as `{{ $json.senderName }}`  
✅ **DO:** Change it to `{{ $json.email }}`

❌ **DON'T:** Use "Plain Text" for Email Type  
✅ **DO:** Select "HTML" to enable formatting

❌ **DON'T:** Leave Message field empty  
✅ **DO:** Paste the complete HTML template

❌ **DON'T:** Use just "Hello World!" for subject  
✅ **DO:** Use a descriptive subject line

---

## Step 9: Save and Test

1. Click **"Save"** (or it auto-saves)
2. Click **"Test Workflow"** to verify everything works
3. Check if email is received successfully

### 8.1 Connect Nodes

1. Connect the Webhook node output to the Email node
2. The arrow should go from Webhook → Email node

### 8.2 Test Before Activation

1. Click **"Test Workflow"** button
2. The system will show a test Webhook URL
3. Use this to send test data:

```bash
curl -X POST https://hook.us.n8n.cloud/webhook/YOUR_TEST_ID \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "companyName": "Acme Corp",
    "phoneNumber": "+1234567890",
    "courierCompanies": "Royal Express, Trans Express",
    "ordersPerDay": "50"
  }'
```

4. Check if email arrives in your test inbox

### 8.3 Activate Workflow

1. Click **"Activate"** button (top right)
2. Confirm activation
3. Wait for green checkmark showing it's active

---

## Step 9: Update Your Frontend Code

Update the webhook URL in `Header.jsx`:

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

    console.log('Sending demo data to n8n:', demoData);

    // Send data to n8n webhook - WAIT for response before redirecting
    fetch('https://storemateoms.app.n8n.cloud/webhook-test/f8df809e-732a-420d-824d-8ca58f8ed85f', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoData)
    })
    .then(response => {
        console.log('n8n Response status:', response.status);
        if (response.ok) {
            console.log('✅ Demo signup data sent successfully to n8n');
        } else {
            console.error('❌ n8n Error:', response.statusText);
        }
        
        // Now redirect regardless of response
        redirectToDemoLogin(formData);
    })
    .catch(error => {
        console.error('❌ Error sending to n8n:', error);
        
        // Still redirect even if n8n fails
        redirectToDemoLogin(formData);
    });
};

const redirectToDemoLogin = (formData) => {
    // Create URL with form data as query parameters
    const params = new URLSearchParams({
        courierCompanies: formData.courierCompanies,
        ordersPerDay: formData.ordersPerDay,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        companyName: formData.companyName
    });

    console.log('Redirecting to login with params:', params.toString());
    window.open(`https://oms.storemate.cloud/login?${params.toString()}`, '_blank');
    setShowDemoModal(false);
    
    // Reset form
    setFormData({
        courierCompanies: '',
        ordersPerDay: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: ''
    });
};
```

---

## Step 10: Monitor & Debug

### Check Workflow Executions

1. Go to your workflow
2. Click **"Executions"** tab
3. You'll see:
   - ✅ Successful emails sent (green checkmark)
   - ❌ Failed attempts (red X)
   - Execution time
   - Input/output data

### View Email Logs

For each execution:
1. Click on the execution row
2. Click on the Email node
3. See the exact HTML sent and delivery status

---

## Email Configuration Quick Reference

| Field | Value |
|-------|-------|
| **Resource** | Mail |
| **Operation** | Send |
| **MIME Type** | HTML |
| **Sender Email** | noreply@storemate.cloud |
| **Sender Name** | Storemate OMS Demo |
| **Recipient Email** | `{{ $json.email }}` |
| **Subject** | Your Storemate OMS Demo Account - Login Details |

---

## Troubleshooting Email Issues

### ❌ Error: "Cannot read properties of undefined (reading 'split')"

This error means the "To" field is not receiving the email address properly.

**Solution:**

1. **Check the "To" field** in your Email node:
   - Make sure it's set to: `{{ $json.email }}`
   - NOT: `{{ $json.senderName }}`

2. **Test the webhook data** by adding a Debug node:
   - Click "+" after the Webhook node
   - Search for "Debug" and add it
   - Connect Webhook → Debug → Email
   - Run the workflow
   - Check the Debug output to see the actual data structure

3. **Verify field mapping**:
   - The "To" field should contain: `{{ $json.email }}`
   - Make sure your frontend is sending "email" field (check Header.jsx line with `email: formData.email`)

4. **Try using fixed email first**:
   - Temporarily change "To" from `{{ $json.email }}` to a static email like `test@gmail.com`
   - If it works with static email, the problem is with the dynamic field mapping
   - Then fix the dynamic field mapping

5. **Check the Webhook node**:
   - Click on the Webhook node
   - Check if it shows any incoming data in "Test"
   - Verify the data format matches what the Email node expects

### If still not working:

Add a **Function node** between Webhook and Email to log the data:

1. Click "+" after Webhook
2. Search for "Function" and select it
3. Add this code:

```javascript
console.log('Incoming data:', $json);
return $json;
```

4. Connect: Webhook → Function → Email
5. Run test and check the execution logs

---

### Email not sending?
✓ Check credential is valid and authorized  
✓ Verify recipient email is in correct format  
✓ Check spam/junk folder  
✓ Review execution logs for errors  

### Template not rendering?
✓ Change MIME Type to **"HTML"**  
✓ Check all template variables exist in form data  
✓ Use `{{ $json.fieldName }}` syntax exactly  

### Credential errors?
✓ For Gmail: Check if "Less secure app access" is enabled  
✓ For SendGrid: Verify API key is correct  
✓ Re-authenticate if needed  

---

## Next Steps

After email is working:
1. ✅ Add Google Sheets to log all signups
2. ✅ Add Slack notification for your team
3. ✅ Add database storage for user records
4. ✅ Create follow-up email sequence

Would you like help setting up any of these additional features?

