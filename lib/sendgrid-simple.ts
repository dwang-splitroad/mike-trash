// SIMPLIFIED EMAIL TEMPLATES - Better Deliverability
// Use these if emails are still going to junk

import sgMail from '@sendgrid/mail'

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

// SIMPLER EMAIL TEMPLATE - Less spam triggers
export async function sendSimpleServiceSignupEmail(data: ServiceSignupData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #16a34a; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Customer Signup</h1>
          <p style="margin: 5px 0 0 0;">Mike's Trash Service</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; margin: 20px 0;">
          <h2 style="color: #16a34a; font-size: 20px; margin-top: 0;">Service Requested</h2>
          <p style="font-size: 18px; font-weight: bold; color: #333;">${getServiceTypeLabel(data.serviceType)}</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h3 style="color: #333; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Customer Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #333;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #666;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #16a34a; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #16a34a; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #666; vertical-align: top;">Address:</td>
              <td style="padding: 10px 0; color: #333;">${data.address}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e; font-weight: bold;">Next Steps:</p>
          <p style="margin: 10px 0 0 0; color: #78350f;">Contact this customer to confirm service details and schedule their first pickup.</p>
          <p style="margin: 15px 0 0 0;">
            <a href="tel:${data.phone}" style="display: inline-block; background-color: #16a34a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-right: 10px;">Call Customer</a>
            <a href="mailto:${data.email}" style="display: inline-block; background-color: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Send Email</a>
          </p>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px; text-align: center; color: #666; font-size: 13px;">
          <p>Submitted: ${new Date().toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit'
          })}</p>
        </div>
      </body>
    </html>
  `

  const textContent = `
New Service Signup - Mike's Trash Service

Customer Information:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Service Type: ${getServiceTypeLabel(data.serviceType)}

Next Steps:
Contact the customer to confirm service details and schedule their first pickup.
  `

  const msg = {
    to: 'mikestrash@rtcol.com',
    cc: 'dennis@splitroadmedia.com',
    from: {
      email: 'no-reply@mikestrashllc.com',
      name: "Mike's Trash Service"
    },
    replyTo: {
      email: 'mikestrash@rtcol.com',
      name: "Mike's Trash Service"
    },
    subject: `New Service Signup: ${data.firstName} ${data.lastName} - ${getServiceTypeLabel(data.serviceType)}`,
    text: textContent,
    html: htmlContent,
    categories: ['service-signup', 'website-form'],
    customArgs: {
      service_type: data.serviceType,
      source: 'website'
    },
    trackingSettings: {
      clickTracking: {
        enable: true,
        enableText: false
      },
      openTracking: {
        enable: true
      }
    }
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

// SIMPLER CUSTOMER WELCOME EMAIL
export async function sendSimpleCustomerWelcomeEmail(data: ServiceSignupData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #16a34a; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Welcome to Mike's Trash Service</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Thank you for choosing us, ${data.firstName}!</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #16a34a; font-size: 22px;">We've Received Your Request</h2>
          <p style="font-size: 16px; line-height: 1.8;">
            Thank you for submitting your service request. We've received your information and one of our team members will contact you shortly to finalize the details and schedule your first pickup.
          </p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0 0 5px 0; font-weight: bold; color: #666; font-size: 14px;">YOUR REQUESTED SERVICE</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #16a34a;">${getServiceTypeLabel(data.serviceType)}</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h3 style="color: #333; font-size: 18px;">What Happens Next</h3>
          <ul style="line-height: 1.8;">
            <li><strong>Within 24-48 hours:</strong> We'll call you to confirm your service details and pricing</li>
            <li><strong>Service Setup:</strong> We'll schedule your first pickup and arrange delivery of any necessary equipment</li>
            <li><strong>Get Started:</strong> Your reliable trash service begins on your scheduled pickup day</li>
          </ul>
        </div>
        
        <div style="padding: 20px 0;">
          <h3 style="color: #333; font-size: 18px;">Why Choose Mike's Trash</h3>
          <ul style="line-height: 1.8;">
            <li>Over 30 Years of Service - Trusted by Fulton County and Rochester families</li>
            <li>Friendly and Reliable - We never miss a pickup</li>
            <li>Fair Pricing - Transparent rates with no hidden fees</li>
            <li>Local Family Business - We live and work in the community we serve</li>
          </ul>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; text-align: center; border-radius: 4px; margin: 20px 0;">
          <h3 style="color: #92400e; font-size: 18px; margin-top: 0;">Have Questions?</h3>
          <p style="margin: 5px 0;"><strong>Call us:</strong> (574) 223-6429</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> info@mikestrashservice.com</p>
          <p style="margin: 15px 0 0 0; font-size: 14px; color: #78350f;">Monday through Friday, 8 AM - 5 PM</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0 0 5px 0; font-weight: bold; color: #666; font-size: 14px;">Your Service Address</p>
          <p style="margin: 0; color: #333;">${data.address}</p>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center; color: #666; font-size: 13px;">
          <p style="margin: 0;"><strong>Mike's Trash Service</strong></p>
          <p style="margin: 5px 0;">Serving Fulton County & Rochester, IN</p>
          <p style="margin: 5px 0;">Phone: (574) 223-6429</p>
          <p style="margin: 15px 0 0 0; font-size: 12px; color: #999;">
            This email was sent because you submitted a service request on our website.
          </p>
        </div>
      </body>
    </html>
  `

  const textContent = `
Welcome to Mike's Trash Service!

Hi ${data.firstName},

Thank you for choosing Mike's Trash Service! We've received your service request and we're excited to serve you.

YOUR REQUESTED SERVICE: ${getServiceTypeLabel(data.serviceType)}
SERVICE ADDRESS: ${data.address}

WHAT HAPPENS NEXT:
- Within 24-48 hours, we'll call you to confirm your service details and pricing
- We'll schedule your first pickup and arrange delivery of any necessary equipment
- Your reliable trash service begins on your scheduled pickup day

WHY CHOOSE MIKE'S TRASH:
- Over 30 Years of Service - Trusted by Fulton County and Rochester families
- Friendly & Reliable - We never miss a pickup
- Fair Pricing - Transparent rates with no hidden fees
- Local Family Business - We live and work in the community we serve

HAVE QUESTIONS?
Call us: (574) 223-6429
Email: info@mikestrashservice.com
Hours: Monday through Friday, 8 AM - 5 PM

We look forward to serving you!

Mike's Trash Service
Serving Fulton County & Rochester, IN
  `

  const msg = {
    to: data.email,
    from: {
      email: 'no-reply@mikestrashllc.com',
      name: "Mike's Trash Service"
    },
    replyTo: {
      email: 'mikestrash@rtcol.com',
      name: "Mike's Trash Service"
    },
    subject: `Welcome to Mike's Trash Service`,
    text: textContent,
    html: htmlContent,
    categories: ['customer-welcome', 'transactional'],
    customArgs: {
      service_type: data.serviceType,
      customer_type: 'new'
    },
    trackingSettings: {
      clickTracking: {
        enable: true,
        enableText: false
      },
      openTracking: {
        enable: true
      }
    }
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid Error (Customer Welcome):', error)
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body)
    }
    throw new Error('Failed to send customer welcome email')
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


