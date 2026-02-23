import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/sendgrid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log('Contact form submission received:', { 
      hasFirstName: !!data.firstName,
      hasLastName: !!data.lastName,
      hasEmail: !!data.email,
      hasPhone: !!data.phone,
      hasServiceType: !!data.serviceType,
      hasMessage: !!data.message
    })

    // Validate required fields
    const { firstName, lastName, email, phone, serviceType, message, website } = data

    // Honeypot check - if this field is filled, it's a bot
    if (website && website.trim() !== '') {
      console.warn('Bot detected via honeypot field')
      // Return success to bot (don't let them know they were caught)
      return NextResponse.json(
        { success: true, message: 'Thank you for your submission' },
        { status: 200 }
      )
    }

    if (!firstName || !lastName || !email || !phone || !serviceType || !message) {
      console.error('Missing required fields:', { firstName, lastName, email, phone, serviceType, message })
      return NextResponse.json(
        { error: 'Missing required fields. Please fill in all required fields.' },
        { status: 400 }
      )
    }


    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured')
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact us directly at (574) 223-6429.',
          details: 'SENDGRID_API_KEY environment variable is missing'
        },
        { status: 500 }
      )
    }

    // Send email via SendGrid
    try {
      await sendContactEmail({
        firstName,
        lastName,
        email,
        phone,
        address: data.address || '',
        serviceType,
        message,
      })
    } catch (emailError: any) {
      console.error('SendGrid Email Error:', emailError)
      console.error('SendGrid Error Details:', emailError.response?.body || emailError.message)
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send email. Please try again or call us at (574) 223-6429.'
      if (emailError.response?.body?.errors) {
        const errors = emailError.response.body.errors
        console.error('SendGrid validation errors:', errors)
        errorMessage = `Email error: ${errors.map((e: any) => e.message).join(', ')}`
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: emailError.message || 'Email service error'
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Contact email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact API Error:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json(
      { 
        error: 'Failed to process contact form', 
        details: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    )
  }
}


