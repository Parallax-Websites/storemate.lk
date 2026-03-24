# Facebook Lead Ads Debugging Guide - Make.com/n8n

## Error: [400] Object with ID does not exist

### Error Details
```
[400] The HTTP request that was sent to the server has invalid syntax.

Unsupported get request. Object with ID 'a082b834fadc4ee89a9a3f53b5ec94b9' 
does not exist, cannot be loaded due to missing permissions, or does not 
support this operation.
```

---

## Common Causes & Solutions

### 🔴 Cause 1: Missing Facebook Permissions

**Problem**: Your Facebook app or page doesn't have permission to access lead data.

**Required Permissions**:
- `leads_retrieval` - To read lead information
- `pages_manage_ads` - To manage ads
- `pages_read_engagement` - To read page engagement
- `pages_show_list` - To show pages list

**Solution**:
1. Go to Facebook App Settings: https://developers.facebook.com/apps/
2. Click your app → **App Review** → **Permissions and Features**
3. Request `leads_retrieval` permission (requires Business Verification)
4. Or test with **Test Users** during development

### 🔴 Cause 2: Lead ID Has Expired or Been Deleted

**Problem**: The lead ID exists but is no longer accessible (older than 90 days or deleted).

**Solution**:
- Facebook leads expire after **90 days**
- Test with recent leads only
- Check if lead still exists in Facebook Ads Manager

### 🔴 Cause 3: Wrong Access Token or Expired Token

**Problem**: Your access token doesn't have access to this specific lead.

**Solution**:
1. **Regenerate Access Token**:
   - Go to Facebook Graph API Explorer: https://developers.facebook.com/tools/explorer/
   - Select your app
   - Select the correct **Page** (not User)
   - Add permissions: `leads_retrieval`, `pages_manage_ads`
   - Click **Generate Access Token**
   - Use this new token in Make.com

2. **Use Long-Lived Token**:
   - Short-lived tokens expire in 1-2 hours
   - Exchange for 60-day token using Graph API:
   ```
   GET /oauth/access_token?
       grant_type=fb_exchange_token&
       client_id={app-id}&
       client_secret={app-secret}&
       fb_exchange_token={short-lived-token}
   ```

### 🔴 Cause 4: Lead Belongs to Different Page/Form

**Problem**: You're trying to access a lead from a different page than the one your token is authorized for.

**Solution**:
1. Verify the **Page ID** in your scenario matches: `1696705263990725`
2. Verify the **Form ID** matches: `1339749734315028`
3. In Make.com connection settings:
   - Ensure you're using the correct **Page Access Token**
   - Re-authorize the connection if needed

### 🔴 Cause 5: Test Lead vs Real Lead

**Problem**: Using a test lead ID that's not accessible via API.

**Solution**:
- Test leads generated manually may not be accessible
- Use **real leads** from actual form submissions
- Or use Facebook's Lead Ads Testing Tool

---

## Quick Debugging Steps

### Step 1: Verify Lead Exists in Facebook
1. Go to **Facebook Ads Manager**: https://business.facebook.com/
2. Navigate to **Forms Library**
3. Click on form: `1339749734315028`
4. Check if lead `a082b834fadc4ee89a9a3f53b5ec94b9` exists
5. Check the lead's date (must be within 90 days)

### Step 2: Test with Graph API Explorer
1. Go to: https://developers.facebook.com/tools/explorer/
2. Select your app
3. Set permissions: `leads_retrieval`
4. Try this request:
   ```
   GET /{lead-id}?fields=id,created_time,field_data
   ```
5. If this fails with same error → **Permissions issue**
6. If this works → **Make.com connection issue**

### Step 3: Check Make.com Connection

1. In Make.com, go to your scenario
2. Click the **Facebook Lead Ads** module
3. Click **Change** next to the connection
4. Click **Reconnect**
5. Make sure you select the correct **Page** when authorizing
6. Re-test the scenario

### Step 4: Use Webhook Instead of Polling

**More Reliable Method**: Use Facebook webhooks to push leads instead of pulling them.

1. In Make.com, use **Webhooks → Custom Webhook** module
2. Copy the webhook URL
3. In Facebook:
   - Go to **App Dashboard** → **Webhooks**
   - Subscribe to `leadgen` topic
   - Add your page
   - Paste the webhook URL
   - Subscribe to `page` object with `leadgen` field

---

## Recommended Workflow Structure

### Option 1: Direct Lead Retrieval (Current - Has Issues)
```
Facebook Lead Ads (Watch Leads) → Process Data → Send Email
```
**Problem**: Requires `leads_retrieval` permission (Business Verification needed)

### Option 2: Webhook-Based (Recommended)
```
Webhook → HTTP Request (Get Lead Details) → Process Data → Send Email
```

**Setup**:
1. **Webhook Module** (receives lead notification)
2. **HTTP Request Module**:
   - URL: `https://graph.facebook.com/v18.0/{{leadId}}`
   - Query: `access_token={{your-token}}&fields=id,created_time,field_data`
3. **Iterator** (loop through field_data)
4. **Your processing** (email, CRM, etc.)

---

## Permission Requirements

### During Development (Testing)
- Use **Test Users**
- Test leads work without Business Verification
- Limited to test environment

### Production
✅ **Required**:
- Facebook Business Verification
- `leads_retrieval` permission approved
- Valid Page Access Token (60-day or never-expiring)

❌ **Common Mistake**:
- Using User Access Token instead of Page Access Token
- Using short-lived token (expires in 1-2 hours)

---

## Troubleshooting Checklist

- [ ] **App has `leads_retrieval` permission approved**
- [ ] **Using Page Access Token, not User token**
- [ ] **Token is long-lived (60 days or permanent)**
- [ ] **Lead is less than 90 days old**
- [ ] **Lead ID is from the correct Page and Form**
- [ ] **Page ID matches**: `1696705263990725`
- [ ] **Form ID matches**: `1339749734315028`
- [ ] **Make.com connection is authorized with correct page**
- [ ] **Lead exists in Facebook Ads Manager → Forms Library**
- [ ] **Tested with Graph API Explorer first**

---

## Getting Access Token with Correct Permissions

### Method 1: Graph API Explorer (Quick Test)
1. Visit: https://developers.facebook.com/tools/explorer/
2. Select your app from dropdown
3. Click **User or Page** → Select your page
4. Add these permissions:
   - `leads_retrieval`
   - `pages_manage_ads`
   - `pages_read_engagement`
5. Click **Generate Access Token**
6. Copy the token and use in Make.com

⚠️ **This token expires in 1-2 hours**

### Method 2: Long-Lived Token (Production)
1. Get short-lived token from Graph API Explorer
2. Exchange for long-lived token:
   ```
   https://graph.facebook.com/v18.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id=YOUR_APP_ID&
     client_secret=YOUR_APP_SECRET&
     fb_exchange_token=SHORT_LIVED_TOKEN
   ```
3. This gives you a 60-day token

### Method 3: Never-Expiring Page Token (Best)
1. Get long-lived User token (Method 2)
2. Get Page token:
   ```
   GET /me/accounts?access_token=LONG_LIVED_USER_TOKEN
   ```
3. Find your page in the response
4. Use that page's `access_token` - it never expires!

---

## Alternative: n8n Setup (If Using n8n Instead of Make.com)

### n8n Facebook Lead Ads Node Configuration

1. **Add Facebook Lead Ads Trigger Node**
   - Operation: `New Lead`
   - Form: Select your form `1339749734315028`
   - Page: Select your page `1696705263990725`

2. **Authentication**:
   - Create OAuth2 credential
   - Add permissions: `leads_retrieval`, `pages_manage_ads`
   - Authorize with the page owner account

3. **Process the Data**:
   ```json
   {
     "id": "{{ $json.id }}",
     "created_time": "{{ $json.created_time }}",
     "field_data": "{{ $json.field_data }}"
   }
   ```

---

## Testing Your Setup

### Test 1: Manual Lead Submission
1. Go to your Facebook Page
2. View your Lead Ad
3. Submit a test lead
4. Check if Make.com/n8n receives it within 5 minutes

### Test 2: Graph API Direct Call
```bash
curl -X GET \
  "https://graph.facebook.com/v18.0/YOUR_LEAD_ID?fields=id,created_time,field_data&access_token=YOUR_TOKEN"
```

Expected Response:
```json
{
  "id": "a082b834fadc4ee89a9a3f53b5ec94b9",
  "created_time": "2025-12-01T10:30:00+0000",
  "field_data": [
    {
      "name": "full_name",
      "values": ["John Doe"]
    },
    {
      "name": "email",
      "values": ["john@example.com"]
    }
  ]
}
```

If you get the same error → **Permission problem**

---

## Support Resources

- **Facebook Lead Ads API**: https://developers.facebook.com/docs/marketing-api/guides/lead-ads
- **Graph API Explorer**: https://developers.facebook.com/tools/explorer/
- **Make.com Facebook Docs**: https://www.make.com/en/help/apps/marketing/facebook-lead-ads
- **Business Verification**: https://business.facebook.com/settings/security

---

## Quick Fix Summary

**Most likely cause**: Missing `leads_retrieval` permission or wrong access token.

**Immediate action**:
1. Verify permissions in Facebook App Dashboard
2. Regenerate Page Access Token with correct permissions
3. Update token in Make.com connection
4. Re-test with a fresh lead (less than 24 hours old)

**If still failing**: Switch to webhook-based approach instead of polling for leads.
