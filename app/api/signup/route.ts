import { NextRequest, NextResponse } from 'next/server'
import { sendServiceSignupEmail, sendCustomerWelcomeEmail } from '@/lib/sendgrid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const { firstName, lastName, email, phone, address, serviceType } = data

    if (!firstName || !lastName || !email || !phone || !address || !serviceType) {
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

    // Send both emails: one to company, one to customer
    await Promise.all([
      sendServiceSignupEmail({
        firstName,
        lastName,
        email,
        phone,
        address,
        serviceType,
      }),
      sendCustomerWelcomeEmail({
        firstName,
        lastName,
        email,
        phone,
        address,
        serviceType,
      })
    ])

    return NextResponse.json(
      { success: true, message: 'Signup processed successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Signup API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process signup', details: error.message },
      { status: 500 }
    )
  }
}

