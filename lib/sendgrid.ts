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
            color: white;
            padding: 14px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
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
            padding: 30px;
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
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <!-- Header -->
          <div class="header">
            <div class="header-content">
              <div class="truck-icon">🚛</div>
              <h1>New Service Signup!</h1>
              <p>Mike's Trash Service</p>
            </div>
          </div>

          <!-- Content -->
          <div class="content">
            <!-- Alert Banner -->
            <div class="alert-banner">
              <div class="alert-text">
                Address verified and ready for service setup!
              </div>
            </div>

            <!-- Customer Information -->
            <h2 class="section-title">📋 Customer Information</h2>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Customer Name</div>
                <div class="info-value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  <a href="tel:${data.phone}">${data.phone}</a>
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">Service Address</div>
                <div class="info-value">${data.address}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Service Type</div>
                <div class="info-value">
                  <span class="service-badge">${getServiceTypeLabel(data.serviceType)}</span>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <!-- Call to Action -->
            <div class="cta-section">
              <div class="cta-title">⚡ Action Required</div>
              <div class="cta-text">
                Contact this customer within 24 hours to confirm service details and schedule their first pickup.
              </div>
              <a href="tel:${data.phone}" class="cta-button">Call Customer Now</a>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <div class="footer-logo">Mike's Trash Service</div>
            <div class="footer-text">
              This notification was automatically generated from your website's service signup form.
            </div>
            <div class="contact-info">
              <a href="tel:+15742236429" class="contact-item">📞 (574) 223-6429</a>
              <a href="mailto:info@mikestrashllc.com" class="contact-item">✉️ Email Us</a>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Mike's Trash Service. All rights reserved.
              </p>
            </div>
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

function getServiceTypeLabel(serviceType: string): string {
  const labels: Record<string, string> = {
    residential: 'Residential Pickup',
    dumpster: 'Dumpster Rental',
    bulk: 'Bulk Pickup',
    rolloff: 'Roll-Off Container',
  }
  return labels[serviceType] || serviceType
}

export default sgMail

