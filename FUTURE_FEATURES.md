# Future Features - Implementation Notes

This document outlines features that have been temporarily removed or are planned for future implementation. These features should be discussed and reviewed before re-implementation.

## Service Area Validation

### Overview
The service area validation feature allowed users to check if their address is within Mike's Trash Service coverage area before signing up. This feature was removed in favor of directing all signups to the external TrashJoes portal.

### Previous Implementation
- **Component**: `components/address-checker.tsx`
- **Functionality**:
  - Address input with autocomplete suggestions using Nominatim geocoding
  - Real-time address validation and geocoding
  - Service zone checking against defined boundaries
  - Visual feedback (in-service, out-of-service, error states)
  - Interactive map showing service zones and user location
  - Form submission after validation

### Key Files
- `components/address-checker.tsx` - Main component (still exists but not used)
- `lib/geocoding.ts` - Geocoding and address suggestion functions
- `lib/service-zone.ts` - Service zone boundary definitions and validation logic
- `components/service-zone-map.tsx` - Map visualization component
- `components/service-zone-map-wrapper.tsx` - Map wrapper component

### API Endpoints
- `app/api/signup/route.ts` - Handled form submissions after validation
- Used SendGrid to send signup notifications and welcome emails

### Current Status
- **Status**: Hidden/Removed
- **Reason**: All signups now redirect to external TrashJoes portal (`https://app.trashjoes.com/h/mikes-trash`)
- **Component**: Still exists in codebase but not imported/used on any pages

### Re-implementation Considerations
1. **Decision Point**: Determine if we want to keep validation on-site or rely on external portal
2. **Service Zone Boundaries**: Review and update service zone definitions in `lib/service-zone.ts`
3. **User Experience**: Decide if validation should be:
   - Required before redirecting to external portal
   - Optional informational check
   - Completely removed if external portal handles validation
4. **Geocoding Service**: Current implementation uses Nominatim (OpenStreetMap)
   - Consider rate limits (1 req/sec)
   - May need to switch to paid service for production scale
5. **Map Integration**: Review map component dependencies and ensure they're still compatible
6. **Form Integration**: If re-implementing, decide if we want:
   - On-site form after validation
   - Just validation then redirect
   - Hybrid approach

### Pages That Previously Used This Feature
- Home page (`app/page.tsx`) - Hero section
- Residential page (`app/residential/page.tsx`) - Top section
- Roll-Offs page (`app/roll-offs/page.tsx`) - Top and bottom sections
- Dumpsters page (`app/dumpsters/page.tsx`) - Top and bottom sections
- Bulk Pickup page (`app/bulk-pickup/page.tsx`) - Top and bottom sections

---

## Signup Form

### Overview
The signup form was integrated into the address checker component and appeared after successful service area validation. It collected customer information and sent notifications via email. This feature was removed in favor of directing all signups to the external TrashJoes portal.

### Previous Implementation
- **Location**: Integrated within `components/address-checker.tsx`
- **Trigger**: Appeared after address validation confirmed service area coverage
- **Form Fields**:
  - First Name (required)
  - Last Name (required)
  - Email (required, validated)
  - Phone Number (required)
  - Service Address (pre-filled from validation, locked/verified)
  - Service Type (dropdown: Residential Pickup, Dumpster Rental, Bulk Pickup, Roll-Off Container)

### Key Features
- Form validation (required fields, email format)
- Pre-filled verified address from service area check
- Service type selection
- Success/error message handling
- Email notifications:
  - Company notification email (`sendServiceSignupEmail`)
  - Customer welcome email (`sendCustomerWelcomeEmail`)

### Key Files
- `components/address-checker.tsx` - Form was part of this component (now removed)
- `app/api/signup/route.ts` - API endpoint for form submissions (still exists)
- `lib/sendgrid.ts` - Email functions:
  - `sendServiceSignupEmail()` - Notifies company of new signup (line 17)
  - `sendCustomerWelcomeEmail()` - Sends welcome email to customer (line 1026)
- `components/form-success.tsx` - Success message component
- `components/form-error.tsx` - Error message component

### API Endpoint
- **Route**: `POST /api/signup`
- **Validation**:
  - Required fields: firstName, lastName, email, phone, address, serviceType
  - Email format validation
- **Response**: JSON with success/error status
- **Email Integration**: Sends both company notification and customer welcome emails via SendGrid

### Current Status
- **Status**: Removed from UI, but API and email functions remain
- **Reason**: All signups now redirect to external TrashJoes portal (`https://app.trashjoes.com/h/mikes-trash`)
- **Form UI**: Completely removed from `address-checker.tsx` component
- **API**: Still functional at `/api/signup` but not called from frontend
- **Email Functions**: Still available in `lib/sendgrid.ts`

### Re-implementation Considerations
1. **Decision Point**: 
   - Do we want on-site form or rely entirely on external portal?
   - If external portal handles everything, may not need custom form
   - If we want to collect leads before redirect, form could be useful

2. **Form Location**:
   - Previously appeared after address validation
   - Could be standalone page
   - Could appear before or after validation
   - Could be modal/popup

3. **Data Collection**:
   - Review required fields - are they all necessary?
   - Consider adding additional fields (preferred contact method, special instructions, etc.)
   - Decide if we need to store data in database or just send emails

4. **Email Integration**:
   - Review email templates in `lib/sendgrid.ts`
   - Update messaging if needed
   - Ensure deliverability (see `CUSTOMER_EMAIL_DELIVERABILITY.md`)
   - Consider if we need both company notification and customer welcome emails

5. **Validation Flow**:
   - If re-implementing with address validation:
     - Form appears after successful validation
     - Address is pre-filled and locked
   - If standalone form:
     - Address input in form itself
     - Validation happens on submit or separately

6. **Integration with External Portal**:
   - If external portal is primary, form could:
     - Collect initial info then redirect with pre-filled data
     - Be used as lead capture before redirect
     - Be backup option if external portal is down

7. **Service Type Selection**:
   - Current options: residential, dumpster, bulk, rolloff
   - Review if these are still accurate
   - Consider if multiple service types can be selected
   - May need to sync with external portal service types

### Form State Management (Previous Implementation)
The form used React state to manage:
- Form data (firstName, lastName, email, phone, address, serviceType)
- Submission state (isSubmitting)
- Success/error states (showSuccess, showError)
- Form visibility (showSignupForm)

### User Flow (Previous)
1. User enters address
2. Address is validated against service zone
3. If in service area → Form appears
4. User fills out form
5. Form is submitted to `/api/signup`
6. API validates and sends emails
7. Success message shown to user
8. Form resets

### Current User Flow
1. User clicks "Sign Up for Service" button
2. Redirects to `https://app.trashjoes.com/h/mikes-trash`
3. External portal handles all validation and signup

### Files to Review
- `components/address-checker.tsx` - Form was removed from here (lines 320-428 in previous version)
- `app/api/signup/route.ts` - API endpoint (still functional)
- `lib/sendgrid.ts` - Email functions:
  - `sendServiceSignupEmail()` - Lines 17-405
  - `sendCustomerWelcomeEmail()` - Lines 1026-1150
- `components/form-success.tsx` - Success component (if re-implementing)
- `components/form-error.tsx` - Error component (if re-implementing)

---

## Referral Program

### Overview
The referral program feature allowed customers to refer neighbors and receive credits. This feature was removed from navigation but the underlying infrastructure remains.

### Previous Implementation
- **Page**: `app/referral/page.tsx` - Full referral program page with form
- **API**: `app/api/referral/route.ts` - Handled referral form submissions
- **Email**: `lib/sendgrid.ts` - `sendReferralEmail()` function for notifications

### Key Features
- Referrer information collection (name, email, phone)
- Referred customer information collection
- $25 credit for referrer on successful signup
- $25 discount for referred customer on first month
- Email notifications to company
- Welcome emails to both parties

### Current Status
- **Status**: Hidden from navigation, but code remains
- **Navigation**: Removed from:
  - Header navigation (desktop and mobile)
  - Main navigation component
  - Footer links
- **Page**: Still exists at `/referral` route but not accessible via navigation
- **API**: Still functional at `/api/referral`
- **Email Functions**: Still available in `lib/sendgrid.ts`

### Re-implementation Considerations
1. **External Portal Integration**: 
   - Check if TrashJoes portal has referral functionality
   - May need to integrate with external system
   - Or implement custom referral tracking

2. **Credit System**:
   - Determine how credits are tracked and applied
   - Integration with billing system
   - Verification process for successful referrals

3. **User Experience**:
   - Where should referral link be placed in navigation?
   - Should it be a dedicated page or integrated elsewhere?
   - How to make it discoverable to existing customers?

4. **Tracking & Analytics**:
   - How to track referral success rates
   - Attribution of new signups to referrals
   - Reporting and analytics needs

5. **Email Notifications**:
   - Review email templates in `lib/sendgrid.ts`
   - Update messaging if needed
   - Ensure deliverability (see `CUSTOMER_EMAIL_DELIVERABILITY.md`)

6. **Alternative Approaches**:
   - Simple link to external portal if they handle referrals
   - Custom referral code system
   - Integration with customer portal/account system

### Files to Review
- `app/referral/page.tsx` - Referral form page
- `app/api/referral/route.ts` - API endpoint
- `lib/sendgrid.ts` - Email functions (lines 698-985)
- Navigation components:
  - `components/header.tsx`
  - `components/navigation.tsx`
  - `app/page.tsx` (footer)

### Previous Navigation Locations
- Header: Desktop and mobile menus
- Main Navigation: Desktop and mobile menus  
- Footer: Company section under "Referral Program"

---

## Implementation Checklist (When Ready)

### Service Area Validation
- [ ] Review service zone boundaries and update if needed
- [ ] Test geocoding service and consider alternatives
- [ ] Review map component dependencies
- [ ] Decide on user flow (validation → redirect vs validation → form)
- [ ] Update UI/UX based on decision
- [ ] Test on all pages that previously had validation
- [ ] Consider mobile experience
- [ ] Review rate limits and scaling needs

### Signup Form
- [ ] Decide if on-site form is needed or external portal is sufficient
- [ ] Review required form fields and add/remove as needed
- [ ] Review and update email templates in `lib/sendgrid.ts`
- [ ] Test email deliverability
- [ ] Decide on form location (standalone page, after validation, modal, etc.)
- [ ] Review service type options and update if needed
- [ ] Plan integration with external portal (if applicable)
- [ ] Design form UI/UX
- [ ] Test form submission flow
- [ ] Consider data storage needs (database vs email only)

### Referral Program
- [ ] Research external portal referral capabilities
- [ ] Decide on implementation approach (custom vs external)
- [ ] Review and update email templates
- [ ] Design credit tracking system
- [ ] Plan integration with billing system
- [ ] Add navigation links back
- [ ] Create analytics/tracking plan
- [ ] Test referral flow end-to-end
- [ ] Plan marketing/promotion strategy

---

## Notes
- All three features (Service Area Validation, Signup Form, Referral Program) have working code that can be re-enabled
- Consider user experience and business needs before re-implementing
- External portal (TrashJoes) may handle some functionality - verify before rebuilding
- Signup form and address validation were tightly integrated - consider this when re-implementing
- Keep this document updated as decisions are made

