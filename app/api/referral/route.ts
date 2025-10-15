import { NextRequest, NextResponse } from 'next/server'
import { sendReferralEmail } from '@/lib/sendgrid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const {
      referrerFirstName,
      referrerLastName,
      referrerEmail,
      referrerPhone,
      referrerAddress,
      referredFirstName,
      referredLastName,
      referredPhone,
      referredAddress,
    } = data

    if (
      !referrerFirstName ||
      !referrerLastName ||
      !referrerEmail ||
      !referrerPhone ||
      !referrerAddress ||
      !referredFirstName ||
      !referredLastName ||
      !referredPhone ||
      !referredAddress
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(referrerEmail)) {
      return NextResponse.json(
        { error: 'Invalid referrer email format' },
        { status: 400 }
      )
    }

    if (data.referredEmail && !emailRegex.test(data.referredEmail)) {
      return NextResponse.json(
        { error: 'Invalid referred email format' },
        { status: 400 }
      )
    }

    // Send email via SendGrid
    await sendReferralEmail({
      referrerFirstName,
      referrerLastName,
      referrerEmail,
      referrerPhone,
      referrerAddress,
      referredFirstName,
      referredLastName,
      referredEmail: data.referredEmail || '',
      referredPhone,
      referredAddress,
      relationship: data.relationship || '',
    })

    return NextResponse.json(
      { success: true, message: 'Referral email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Referral API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process referral', details: error.message },
      { status: 500 }
    )
  }
}

