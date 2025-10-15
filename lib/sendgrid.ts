import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key from environment variable
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export interface ServiceSignupData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  serviceType: string
}

export async function sendServiceSignupEmail(data: ServiceSignupData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Service Signup - Mike's Trash</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          .header {
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
          }
          .header-content {
            position: relative;
            z-index: 1;
          }
          .truck-icon {
            font-size: 48px;
            margin-bottom: 10px;
            display: inline-block;
            animation: bounce 2s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 10px 0 5px 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header p {
            font-size: 16px;
            opacity: 0.95;
            font-weight: 500;
          }
          .content {
            padding: 40px 30px;
          }
          .alert-banner {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-left: 4px solid #16a34a;
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .alert-banner::before {
            content: '✓';
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background-color: #16a34a;
            color: white;
            border-radius: 50%;
            font-weight: bold;
            font-size: 18px;
            flex-shrink: 0;
          }
          .alert-text {
            color: #15803d;
            font-weight: 600;
            font-size: 15px;
          }
          .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
          }
          .info-grid {
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 12px;
          }
          .info-row {
            display: table-row;
          }
          .info-label {
            display: table-cell;
            font-weight: 600;
            color: #6b7280;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-right: 20px;
            vertical-align: top;
            padding-top: 12px;
            width: 140px;
          }
          .info-value {
            display: table-cell;
            background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 16px;
            color: #111827;
            font-weight: 500;
            border: 1px solid #e5e7eb;
            vertical-align: middle;
          }
          .info-value a {
            color: #16a34a;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
          }
          .info-value a:hover {
            color: #15803d;
          }
          .service-badge {
            display: inline-block;
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 15px;
            box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3);
          }
          .cta-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-radius: 12px;
            padding: 24px;
            margin-top: 30px;
            text-align: center;
            border: 2px solid #fbbf24;
          }
          .cta-title {
            font-size: 18px;
            font-weight: 700;
            color: #92400e;
            margin-bottom: 10px;
          }
          .cta-text {
            color: #78350f;
            font-size: 14px;
            margin-bottom: 20px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            color: white !important;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            margin: 5px;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
            margin: 30px 0;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer-text {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.8;
          }
          .footer-logo {
            font-size: 20px;
            font-weight: 700;
            color: #16a34a;
            margin-bottom: 10px;
          }
          .contact-info {
            display: inline-flex;
            gap: 20px;
            margin-top: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .contact-item {
            color: #16a34a;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
          }
          @media only screen and (max-width: 600px) {
            body {
              padding: 20px 10px;
            }
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 30px 20px;
            }
            .info-label {
              display: block;
              padding: 0 0 5px 0;
            }
            .info-value {
              display: block;
              margin-bottom: 15px;
            }
            .info-grid {
              display: block;
            }
            .info-row {
              display: block;
              margin-bottom: 15px;
            }
            .cta-button {
              display: block;
              width: 100%;
              margin: 10px 0 !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper" style="border: 3px solid #16a34a; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
          <!-- Header -->
          <div class="header" style="background-color: #16a34a; color: #ffffff; padding: 40px 30px; text-align: center;">
            <div class="header-content" style="position: relative; z-index: 1;">
              <div class="truck-icon" style="font-size: 48px; margin-bottom: 10px;">🚛</div>
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 10px 0 5px 0;">New Customer Signup</h1>
              <p style="color: #ffffff; font-size: 16px; font-weight: 500; margin: 0; opacity: 0.95;">Website Form Submission</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content" style="padding: 40px 30px; background-color: #ffffff;">
            <!-- Service Type Badge - Prominent -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; background-color: transparent;">SERVICE REQUESTED</div>
              <span style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 32px; border-radius: 30px; font-weight: 700; font-size: 18px; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);">${getServiceTypeLabel(data.serviceType)}</span>
            </div>

            <!-- Alert Banner -->
            <div class="alert-banner" style="background-color: #ecfdf5; border-left: 4px solid #16a34a; border-radius: 8px; padding: 16px 20px; margin-bottom: 30px;">
              <div class="alert-text" style="color: #15803d; font-weight: 600; font-size: 15px;">
                ✓ Address verified and within service area
              </div>
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Customer Information -->
            <h2 class="section-title" style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">Customer Details</h2>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Name</div>
                <div class="info-value" style="font-size: 18px; font-weight: 600; color: #111827;">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone</div>
                <div class="info-value">
                  <a href="tel:${data.phone}" style="font-size: 17px;">${data.phone}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Address</div>
                <div class="info-value" style="line-height: 1.6;">${data.address}</div>
              </div>
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Call to Action -->
            <div class="cta-section" style="background-color: #fef3c7; border-radius: 12px; padding: 24px; margin-top: 30px; text-align: center; border: 2px solid #fbbf24;">
              <div class="cta-title" style="font-size: 18px; font-weight: 700; color: #92400e; margin-bottom: 10px;">Next Steps</div>
              <div class="cta-text" style="color: #78350f; font-size: 14px; margin-bottom: 20px;">
                Contact this customer to confirm service details, pricing, and schedule their first pickup.
              </div>
              <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <a href="tel:${data.phone}" class="cta-button" style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 5px;">📞 Call Now</a>
                <a href="mailto:${data.email}" class="cta-button" style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 5px;">✉️ Send Email</a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer" style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Submitted: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
New Service Signup Request - Mike's Trash Service

Customer Information:
---------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Service Type: ${getServiceTypeLabel(data.serviceType)}

The address has been verified and is within your service area.

Next Steps:
Contact the customer to confirm service details and schedule their first pickup.
  `

  const msg = {
    to: 'dennis@splitroadmedia.com',
    cc: 'trevor@splitroadmedia.com',
    from: {
      email: 'noreply@splitroadmedia.com', // Using verified Split Road Media sender
      name: "Mike's Trash Service"
    },
    subject: `New Service Signup: ${data.firstName} ${data.lastName} - ${getServiceTypeLabel(data.serviceType)}`,
    text: textContent,
    html: htmlContent,
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid Error:', error)
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body)
    }
    throw new Error('Failed to send email')
  }
}

// Contact Form Email
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  serviceType: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Mike's Trash</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #667eea;
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
          }
          .content {
            padding: 40px 30px;
            background-color: #ffffff;
          }
          .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
          }
          .info-grid {
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 12px;
          }
          .info-row {
            display: table-row;
          }
          .info-label {
            display: table-cell;
            font-weight: 600;
            color: #6b7280;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-right: 20px;
            vertical-align: top;
            padding-top: 12px;
            width: 140px;
          }
          .info-value {
            display: table-cell;
            background-color: #f9fafb;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 16px;
            color: #111827;
            font-weight: 500;
            border: 1px solid #e5e7eb;
            vertical-align: middle;
          }
          .info-value a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
          }
          .message-box {
            background-color: #f9fafb;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            margin-top: 20px;
          }
          .message-content {
            color: #374151;
            line-height: 1.8;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .badge {
            display: inline-block;
            background-color: #667eea;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 15px;
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 30px 0;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .cta-button {
            display: inline-block;
            background-color: #667eea;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            margin: 5px;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper" style="border: 3px solid #667eea; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div class="header" style="background-color: #667eea; color: #ffffff; padding: 40px 30px; text-align: center;">
            <div style="position: relative; z-index: 1;">
              <div style="font-size: 48px; margin-bottom: 10px;">💬</div>
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 10px 0 5px 0;">New Contact Form Message</h1>
              <p style="color: #ffffff; font-size: 16px; font-weight: 500; margin: 0; opacity: 0.95;">Website Contact Form</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content" style="padding: 40px 30px; background-color: #ffffff;">
            <!-- Inquiry Type Badge -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">INQUIRY TYPE</div>
              <span style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 14px 32px; border-radius: 30px; font-weight: 700; font-size: 18px;">${getContactTypeLabel(data.serviceType)}</span>
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Customer Information -->
            <h2 class="section-title" style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">Contact Details</h2>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Name</div>
                <div class="info-value" style="font-size: 18px; font-weight: 600; color: #111827;">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone</div>
                <div class="info-value">
                  <a href="tel:${data.phone}" style="font-size: 17px; color: #667eea;">${data.phone}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value">
                  <a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a>
                </div>
              </div>
              ${data.address ? `
              <div class="info-row">
                <div class="info-label">Address</div>
                <div class="info-value" style="line-height: 1.6;">${data.address}</div>
              </div>
              ` : ''}
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Message -->
            <h2 class="section-title" style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">Message</h2>
            <div class="message-box" style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p class="message-content" style="color: #374151; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${data.message}</p>
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Quick Actions -->
            <div style="text-align: center;">
              <h3 style="font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 20px;">Quick Actions</h3>
              <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <a href="tel:${data.phone}" class="cta-button" style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">📞 Call Now</a>
                <a href="mailto:${data.email}" class="cta-button" style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">✉️ Reply via Email</a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer" style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Submitted: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
New Contact Form Submission - Mike's Trash Service

Contact Information:
---------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}` : ''}
Inquiry Type: ${getContactTypeLabel(data.serviceType)}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
  `

  const msg = {
    to: 'dennis@splitroadmedia.com',
    cc: 'trevor@splitroadmedia.com',
    from: {
      email: 'noreply@splitroadmedia.com',
      name: "Mike's Trash Service"
    },
    subject: `New Contact: ${data.firstName} ${data.lastName} - ${getContactTypeLabel(data.serviceType)}`,
    text: textContent,
    html: htmlContent,
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid Error:', error)
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body)
    }
    throw new Error('Failed to send email')
  }
}

// Referral Form Email
export interface ReferralFormData {
  referrerFirstName: string
  referrerLastName: string
  referrerEmail: string
  referrerPhone: string
  referrerAddress: string
  referredFirstName: string
  referredLastName: string
  referredEmail: string
  referredPhone: string
  referredAddress: string
  relationship: string
}

export async function sendReferralEmail(data: ReferralFormData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Referral - Mike's Trash</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
          }
          .content {
            padding: 40px 30px;
            background-color: #ffffff;
          }
          .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
          }
          .info-grid {
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 12px;
          }
          .info-row {
            display: table-row;
          }
          .info-label {
            display: table-cell;
            font-weight: 600;
            color: #6b7280;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding-right: 20px;
            vertical-align: top;
            padding-top: 12px;
            width: 140px;
          }
          .info-value {
            display: table-cell;
            background-color: #f9fafb;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 16px;
            color: #111827;
            font-weight: 500;
            border: 1px solid #e5e7eb;
            vertical-align: middle;
          }
          .info-value a {
            color: #f59e0b;
            text-decoration: none;
            font-weight: 600;
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 30px 0;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .cta-button {
            display: inline-block;
            background-color: #f59e0b;
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            margin: 5px;
          }
          .highlight-box {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-left: 4px solid #f59e0b;
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 30px;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper" style="border: 3px solid #f59e0b; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div class="header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #ffffff; padding: 40px 30px; text-align: center;">
            <div style="position: relative; z-index: 1;">
              <div style="font-size: 48px; margin-bottom: 10px;">🎁</div>
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 10px 0 5px 0;">New Referral Received!</h1>
              <p style="color: #ffffff; font-size: 16px; font-weight: 500; margin: 0; opacity: 0.95;">Customer Referral Program</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content" style="padding: 40px 30px; background-color: #ffffff;">
            <!-- Highlight -->
            <div class="highlight-box" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px 20px; margin-bottom: 30px;">
              <p style="color: #92400e; font-weight: 600; font-size: 15px; margin: 0;">
                💰 Remember: $25 credit for referrer, $25 off for new customer!
              </p>
            </div>

            <!-- Referrer Information -->
            <h2 class="section-title" style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">👤 Existing Customer (Referrer)</h2>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Name</div>
                <div class="info-value" style="font-size: 18px; font-weight: 600; color: #111827;">${data.referrerFirstName} ${data.referrerLastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone</div>
                <div class="info-value">
                  <a href="tel:${data.referrerPhone}" style="font-size: 17px; color: #f59e0b;">${data.referrerPhone}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value">
                  <a href="mailto:${data.referrerEmail}" style="color: #f59e0b;">${data.referrerEmail}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Address</div>
                <div class="info-value" style="line-height: 1.6;">${data.referrerAddress}</div>
              </div>
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Referred Person Information -->
            <h2 class="section-title" style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">✨ New Potential Customer (Referral)</h2>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Name</div>
                <div class="info-value" style="font-size: 18px; font-weight: 600; color: #111827;">${data.referredFirstName} ${data.referredLastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone</div>
                <div class="info-value">
                  <a href="tel:${data.referredPhone}" style="font-size: 17px; color: #f59e0b;">${data.referredPhone}</a>
                </div>
              </div>
              ${data.referredEmail ? `
              <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value">
                  <a href="mailto:${data.referredEmail}" style="color: #f59e0b;">${data.referredEmail}</a>
                </div>
              </div>
              ` : ''}
              <div class="info-row">
                <div class="info-label">Address</div>
                <div class="info-value" style="line-height: 1.6;">${data.referredAddress}</div>
              </div>
              ${data.relationship ? `
              <div class="info-row">
                <div class="info-label">Relationship</div>
                <div class="info-value">${data.relationship}</div>
              </div>
              ` : ''}
            </div>

            <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 30px 0;"></div>

            <!-- Next Steps -->
            <div style="background-color: #fef3c7; border-radius: 12px; padding: 24px; text-align: center; border: 2px solid #fbbf24;">
              <h3 style="font-size: 18px; font-weight: 700; color: #92400e; margin-bottom: 10px;">Next Steps</h3>
              <p style="color: #78350f; font-size: 14px; margin-bottom: 20px;">
                Contact the new customer to offer their $25 discount and set up service. Don't forget to apply the $25 credit to the referrer's account!
              </p>
              <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                <a href="tel:${data.referredPhone}" class="cta-button" style="display: inline-block; background-color: #f59e0b; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">📞 Call New Customer</a>
                <a href="tel:${data.referrerPhone}" class="cta-button" style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">📞 Call Referrer</a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer" style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Submitted: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
New Customer Referral - Mike's Trash Service

Existing Customer (Referrer):
------------------------------
Name: ${data.referrerFirstName} ${data.referrerLastName}
Email: ${data.referrerEmail}
Phone: ${data.referrerPhone}
Address: ${data.referrerAddress}

New Potential Customer (Referral):
-----------------------------------
Name: ${data.referredFirstName} ${data.referredLastName}
Email: ${data.referredEmail || 'Not provided'}
Phone: ${data.referredPhone}
Address: ${data.referredAddress}
${data.relationship ? `Relationship: ${data.relationship}` : ''}

Remember:
- $25 credit for ${data.referrerFirstName} ${data.referrerLastName}
- $25 off first month for ${data.referredFirstName} ${data.referredLastName}

Submitted: ${new Date().toLocaleString()}
  `

  const msg = {
    to: 'dennis@splitroadmedia.com',
    cc: 'trevor@splitroadmedia.com',
    from: {
      email: 'noreply@splitroadmedia.com',
      name: "Mike's Trash Service"
    },
    subject: `New Referral: ${data.referrerFirstName} ${data.referrerLastName} → ${data.referredFirstName} ${data.referredLastName}`,
    text: textContent,
    html: htmlContent,
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid Error:', error)
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body)
    }
    throw new Error('Failed to send email')
  }
}

function getServiceTypeLabel(serviceType: string): string {
  const labels: Record<string, string> = {
    residential: 'Residential Pickup',
    dumpster: 'Dumpster Rental',
    bulk: 'Bulk Pickup',
    rolloff: 'Roll-Off Container',
  }
  return labels[serviceType] || serviceType
}

function getContactTypeLabel(serviceType: string): string {
  const labels: Record<string, string> = {
    general: 'General Question',
    residential: 'Residential Pickup',
    dumpster: 'Dumpster Rental',
    bulk: 'Bulk Item Pickup',
    rolloff: 'Roll-Off Container',
    billing: 'Billing Question',
    complaint: 'Service Issue',
    compliment: 'Compliment',
  }
  return labels[serviceType] || serviceType
}

export default sgMail


