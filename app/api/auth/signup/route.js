import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from '@/lib/email';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request) {
  try {
    await dbConnect();

    const { email, password, name, businessName } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      businessName,
    });

    // Send welcome email
    await sendWelcomeEmail(email, name);

    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        name: user.name,
        onboardingCompleted: false
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return NextResponse.json(
      { message: 'User created successfully', userId: user._id, token },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
