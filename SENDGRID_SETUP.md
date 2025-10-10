# SendGrid Email Setup Guide

## Overview
This guide will help you set up email notifications for service signups using SendGrid.

## Features Implemented
✅ Service signup form emails sent to `dennis@splitroadmedia.com`  
✅ Beautiful HTML email template with all customer information  
✅ Verified address included in email  
✅ Service type clearly displayed  
✅ Professional email design matching Mike's Trash branding  

## Setup Steps

### 1. Install SendGrid Package
```bash
npm install @sendgrid/mail
```

### 2. Get Your SendGrid API Key

1. Go to [SendGrid](https://app.sendgrid.com/)
2. Sign in to your account
3. Navigate to **Settings** → **API Keys**
4. Click **Create API Key**
5. Give it a name (e.g., "Mikes Trash Website")
6. Select **Full Access** or at minimum **Mail Send** permission
7. Click **Create & View**
8. **Copy the API key immediately** (you won't be able to see it again!)

### 3. Verify Your Sender Email

Before sending emails, you need to verify your sender email address:

1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Enter your details:
   - From Name: `Mike's Trash Service`
   - From Email: `noreply@mikestrash.com` (or your preferred email)
4. Check your email and click the verification link

**Note:** If you don't own the domain, use a personal email for testing, then switch to a verified domain email later.

### 4. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# .env.local
SENDGRID_API_KEY=SG.your_actual_api_key_here
```

**Important:** Never commit this file to Git! It's already in `.gitignore`.

### 5. Update Sender Email (if needed)

Edit `lib/sendgrid.ts` line 88 to match your verified sender:

```typescript
from: {
  email: 'your-verified-email@yourdomain.com', // Replace with your verified sender
  name: "Mike's Trash Service"
},
```

### 6. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to any service page (Residential, Dumpsters, etc.)

3. Click "Get Services" and fill out the form:
   - Enter an address
   - Wait for verification
   - Fill in customer details
   - Submit the form

4. Check `dennis@splitroadmedia.com` for the email!

## Email Template Details

### What's Included in the Email:
- **Customer Name**: Full name from form
- **Email**: Clickable mailto link
- **Phone**: Clickable tel link  
- **Verified Address**: The geocoded, official address
- **Service Type**: Badge showing requested service
- **Verification Status**: Confirms address is in service area
- **Next Steps**: Instructions for follow-up

### Email Template Features:
- ✨ Professional HTML design
- 📱 Mobile responsive
- 🎨 Mike's Trash green branding (#16a34a)
- 📋 Clean layout with sections
- ✅ Verified address badge
- 📧 Plain text fallback included

## Files Created

### Core Files:
- `lib/sendgrid.ts` - SendGrid configuration and email template
- `app/api/signup/route.ts` - API endpoint for form submissions
- `components/address-checker.tsx` - Updated with API integration

### Configuration:
- `.env.local.example` - Environment variable template
- `SENDGRID_SETUP.md` - This setup guide

## Troubleshooting

### Email not sending?

1. **Check API Key**: Make sure it's in `.env.local` and starts with `SG.`
2. **Verify Sender**: Ensure your sender email is verified in SendGrid
3. **Check Console**: Look for errors in terminal/browser console
4. **SendGrid Dashboard**: Check Activity → Email Activity for errors

### Common Errors:

**"Forbidden" Error**:
- Your API key doesn't have Mail Send permission
- Create a new API key with proper permissions

**"Sender not verified"**:
- Go to SendGrid Settings → Sender Authentication
- Verify your sender email address

**"Invalid API key"**:
- Check that `.env.local` exists and has the correct key
- Restart your dev server after adding the key

## Testing Recipients

### Current Setup:
- Test emails go to: `dennis@splitroadmedia.com`
- Located in: `lib/sendgrid.ts` line 86

### To Change Recipient:
Edit `lib/sendgrid.ts`:
```typescript
to: 'your-email@example.com', // Line 86
```

### To Add Multiple Recipients:
```typescript
to: ['dennis@splitroadmedia.com', 'another@email.com'],
```

## Production Considerations

### Before Going Live:

1. **Update Recipient Email**:
   - Change from test email to actual business email
   - Add multiple recipients if needed

2. **Domain Verification** (Recommended):
   - Instead of single sender, verify your entire domain
   - This improves deliverability and looks more professional
   - Go to SendGrid → Settings → Sender Authentication → Authenticate Your Domain

3. **Email Templates** (Optional):
   - Create reusable templates in SendGrid dashboard
   - Use template IDs instead of inline HTML

4. **Rate Limits**:
   - Free tier: 100 emails/day
   - Upgrade if you expect more signups

5. **Monitoring**:
   - Check SendGrid dashboard regularly
   - Monitor email delivery rates
   - Set up webhook for bounce notifications

## Support

- SendGrid Docs: https://docs.sendgrid.com/
- SendGrid Support: https://support.sendgrid.com/
- API Reference: https://docs.sendgrid.com/api-reference/mail-send/mail-send

## Next Steps

Once testing is complete:
1. ✅ Verify emails are arriving correctly
2. ✅ Update recipient email for production
3. ✅ Consider domain authentication
4. ✅ Monitor email deliverability
5. ✅ Set up email notifications/alerts (optional)

