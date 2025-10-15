import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/sendgrid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const { firstName, lastName, email, phone, serviceType, message } = data

    if (!firstName || !lastName || !email || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Send email via SendGrid
    await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      address: data.address || '',
      serviceType,
      message,
    })

    return NextResponse.json(
      { success: true, message: 'Contact email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form', details: error.message },
      { status: 500 }
    )
  }
}

