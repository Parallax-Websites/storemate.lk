# n8n Function Node - Build Parameterized Login URL

This guide shows you how to add a Function node to build the complete login URL with all query parameters for the email.

## Problem
The email template variables can't automatically build URL parameters. We need a Function node to construct the full URL.

## Solution: Add Function Node After Set Node

### Step 1: Add Function Node

1. In your n8n workflow, click **"+"** after the **Set node** (or after Webhook if you don't have Set node yet)
2. Search for **"Function"** and select it
3. You now have a Function node added

### Step 2: Copy This Code

In the Function node, paste this code:

```javascript
// Get the data from previous node
const data = items[0].json;

// Build the login URL with all parameters
const baseUrl = 'https://oms.storemate.cloud/login';
const params = new URLSearchParams({
  courierCompanies: data.courierCompanies || '',
  ordersPerDay: data.ordersPerDay || '',
  fullName: data.fullName || '',
  phoneNumber: data.phoneNumber || '',
  email: data.email || '',
  companyName: data.companyName || ''
});

const loginUrl = `${baseUrl}?${params.toString()}`;

// Add the loginUrl to the data
data.loginUrl = loginUrl;

return [{ json: data }];
```

### Step 3: Update Email Template

Now use this in your email template:

**Original (WRONG):**
```html
<a href="https://oms.storemate.cloud/login">https://oms.storemate.cloud/login</a>
```

**New (CORRECT):**
```html
<a href="{{ $json.loginUrl }}">{{ $json.loginUrl }}</a>
```

### Step 4: Update CTA Button

**Original:**
```html
<a href="https://oms.storemate.cloud/login" class="cta-button">
    Access Your Demo Now
</a>
```

**New:**
```html
<a href="{{ $json.loginUrl }}" class="cta-button">
    Access Your Demo Now
</a>
```

### Step 5: Update Getting Started Link

**Original:**
```html
<a href="https://oms.storemate.cloud/login?courierCompanies={{ $json.courierCompanies }}...">
```

**New:**
```html
<a href="{{ $json.loginUrl }}">your personalized login link</a>
```

## Complete Updated Email Template

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
        .url-box { background-color: #f0f0f0; padding: 10px; border-radius: 3px; word-break: break-all; }
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
                    <td>
                        <div class="url-box">
                            <a href="{{ $json.loginUrl }}">{{ $json.loginUrl }}</a>
                        </div>
                    </td>
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
                <a href="{{ $json.loginUrl }}" class="cta-button">
                    Access Your Demo Now
                </a>
            </center>
            
            <h2>🚀 Getting Started:</h2>
            <ol>
                <li>Click the button above or visit <a href="{{ $json.loginUrl }}">your personalized login link</a></li>
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

## Workflow Flow

Your n8n workflow should now be:

```
Webhook (receive form data)
    ↓
Set Node (flatten nested fields)
    ↓
Function Node (build loginUrl)
    ↓
Email Node (send with full URL)
```

## Test It

1. Fill the form on your website
2. Click "Continue to Demo"
3. Check n8n Executions tab
4. Click the execution and check Email node
5. Check your inbox for the email with the full login URL like:

```
https://oms.storemate.cloud/login?courierCompanies=test&ordersPerDay=200&fullName=test&phoneNumber=0772003045&email=codeburgtec@gmail.com&companyName=test
```

Done! ✅
