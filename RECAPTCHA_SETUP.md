# reCAPTCHA Setup Guide

This guide will help you set up Google reCAPTCHA v3 to protect your contact form from spam submissions.

## Overview

reCAPTCHA v3 is an invisible CAPTCHA that runs in the background and doesn't interrupt users. It provides a score (0.0 to 1.0) indicating how likely the interaction is legitimate.

## Setup Steps

### 1. Get reCAPTCHA Keys from Google

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"+"** to create a new site
3. Fill in the form:
   - **Label**: Mike's Trash Website (or any name you prefer)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `yourdomain.com` (your production domain)
     - `*.vercel.app` (if using Vercel for preview deployments)
   - Accept the reCAPTCHA Terms of Service
   - Click **Submit**

4. You'll receive two keys:
   - **Site Key** (public) - Used in the frontend
   - **Secret Key** (private) - Used in the backend API

### 2. Configure Environment Variables

Add the following to your `.env.local` file (create it if it doesn't exist):

```bash
# .env.local
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important Notes:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` must start with `NEXT_PUBLIC_` to be accessible in the browser
- `RECAPTCHA_SECRET_KEY` should NOT have `NEXT_PUBLIC_` prefix (it's server-side only)
- Never commit `.env.local` to Git (it's already in `.gitignore`)

### 3. For Production (Vercel)

If you're deploying to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add both variables:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = your site key
   - `RECAPTCHA_SECRET_KEY` = your secret key
4. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 4. Test the Implementation

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to the contact page (`/contact`)

3. Fill out and submit the form

4. Check the browser console - you should see reCAPTCHA loading (no errors)

5. Check your server logs - the form should submit successfully

## How It Works

### Frontend (Contact Form)
- The form uses `react-google-recaptcha-v3` to load reCAPTCHA
- When the form is submitted, it executes reCAPTCHA and gets a token
- The token is sent along with the form data to the API

### Backend (API Route)
- The API receives the reCAPTCHA token
- It verifies the token with Google's servers
- Google returns a score (0.0 to 1.0) indicating legitimacy
- If score is >= 0.5, the submission is accepted
- If score is < 0.5 or verification fails, the submission is rejected

## Configuration Details

### Score Threshold

The current threshold is set to **0.5** in `app/api/contact/route.ts`:

```typescript
return data.success === true && data.score >= 0.5
```

You can adjust this threshold:
- **Lower (e.g., 0.3)**: More lenient, may allow some spam
- **Higher (e.g., 0.7)**: Stricter, may block some legitimate users

### Fallback Behavior

If reCAPTCHA keys are not configured:
- Frontend: Form will still work but without spam protection
- Backend: Submissions will be accepted (to prevent breaking the form)

This ensures the form continues to work even if reCAPTCHA isn't set up yet.

## Troubleshooting

### Form not submitting?

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
3. Make sure the domain is registered in reCAPTCHA admin console
4. Check that the reCAPTCHA script is loading (check Network tab)

### Getting "reCAPTCHA verification failed" errors?

1. Verify `RECAPTCHA_SECRET_KEY` is set correctly
2. Check server logs for detailed error messages
3. Ensure the secret key matches the site key
4. Verify the domain is registered in reCAPTCHA admin console

### reCAPTCHA not loading?

1. Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` starts with `NEXT_PUBLIC_`
2. Restart your dev server after adding environment variables
3. Clear browser cache
4. Check browser console for script loading errors

### Still getting spam?

1. Consider lowering the score threshold (currently 0.5)
2. Check reCAPTCHA admin console for analytics
3. Review spam submissions to see if they're getting through
4. You may need to implement additional spam filtering

## Files Modified

- `app/contact/page.tsx` - Added reCAPTCHA integration to contact form
- `app/api/contact/route.ts` - Added reCAPTCHA verification on server
- `components/recaptcha-provider.tsx` - reCAPTCHA provider component (created)
- `package.json` - Added `react-google-recaptcha-v3` dependency

## Additional Resources

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/v3)
- [react-google-recaptcha-v3 GitHub](https://github.com/t49tran/react-google-recaptcha-v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

## Notes

- reCAPTCHA v3 is free for up to 1 million requests per month
- The CAPTCHA runs invisibly in the background
- Users won't see any CAPTCHA challenges (unlike v2)
- Scores are based on user behavior and Google's machine learning models


