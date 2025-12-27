import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-in-production'
  );

  const { pathname } = request.nextUrl;

  // Define public paths that don't require authentication
  const publicPaths = ['/', '/signup', '/forgot-password'];
  
  // Check if the current path is exactly one of the public paths
  const isPublicPath = publicPaths.includes(pathname);

  // Function to verify token
  async function verifyToken(token) {
    try {
      const { payload } = await jwtVerify(token, secret);
      return payload;
    } catch (error) {
      return null;
    }
  }

  // Scenario 1: User is on a public path (Login, Signup)
  if (isPublicPath) {
    if (token) {
      const payload = await verifyToken(token);
      if (payload) {
        // Check onboarding status
        if (!payload.onboardingCompleted) {
          return NextResponse.redirect(new URL('/onboarding', request.url));
        }
        // If user is already logged in and onboarding completed, redirect to dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }
    // Allow access to public path
    return NextResponse.next();
  }

  // Scenario 2: User is on a protected path
  if (!token) {
    // No token, redirect to login
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Verify token for protected paths
  const payload = await verifyToken(token);
  if (!payload) {
    // Invalid token, redirect to login
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('token');
    return response;
  }

  // Check onboarding status for protected paths
  // If user is trying to access dashboard (or any non-onboarding page) but hasn't completed onboarding
  if (!payload.onboardingCompleted && !pathname.startsWith('/onboarding')) {
     return NextResponse.redirect(new URL('/onboarding', request.url));
  }

  // If user has completed onboarding but tries to access onboarding pages, redirect to dashboard
  if (payload.onboardingCompleted && pathname.startsWith('/onboarding')) {
     return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Token is valid, proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public images (images in public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg).*)',
  ],
};
