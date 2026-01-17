import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, businessName, businessType } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'ელექტრონული ფოსტა აუცილებელია' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'არასწორი ელექტრონული ფოსტის ფორმატი' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email }
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: 'ეს ელექტრონული ფოსტა უკვე რეგისტრირებულია' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase().trim(),
        businessName: businessName?.trim() || null,
        businessType: businessType || null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'წარმატებით დარეგისტრირდი waitlist-ში!',
        id: waitlistEntry.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist API Error:', error);
    
    return NextResponse.json(
      { error: 'სერვერის შეცდომა. სცადე ხელმეორედ.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await prisma.waitlistEntry.count();
    const recentEntries = await prisma.waitlistEntry.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        businessName: true,
        businessType: true,
        createdAt: true,
      }
    });

    return NextResponse.json({
      count,
      recentEntries
    });
  } catch (error) {
    console.error('Waitlist GET Error:', error);
    return NextResponse.json(
      { error: 'მონაცემების წაღების შეცდომა' },
      { status: 500 }
    );
  }
}