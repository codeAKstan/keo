"use client";

import { Mail, Lock, Eye, EyeOff, CheckCircle, Shield, BarChart3, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "User", // Default name or add field
    businessName: "My Business", // Default or add field
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === "email" ? "email" : "password"]: e.target.value });
    // Note: The original form only had email, password, confirm password. 
    // I'll update to handle specific fields correctly based on the input structure.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: "New User", // Placeholder since design didn't have name field
          businessName: "My Business", // Placeholder
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to login or onboarding
      router.push("/onboarding");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Section - Image & Testimonial */}
      <div className="relative flex w-full flex-col gap-6 bg-black p-8 text-white lg:w-1/2 lg:p-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/signup-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">KEO</span>
        </div>

        {/* Testimonial & Social Proof */}
        <div className="relative z-10">
          <div className="mb-12 rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10">
            <p className="mb-6 text-xl font-medium leading-relaxed text-white">
              "KEO transformed how we handle our payroll and tax compliance. It's built specifically for Nigeria's unique business landscape."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-400 border-2 border-white/20 overflow-hidden">
                 {/* Placeholder for Amina's avatar */}
                 <div className="h-full w-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">A</div>
              </div>
              <div>
                <h4 className="font-bold text-white">Amina Okafor</h4>
                <p className="text-sm text-gray-300">CEO, TechGrowth Lagos</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-gray-600 flex items-center justify-center text-xs text-white overflow-hidden">
                   {/* Fallback avatar */}
                   <span className="opacity-50">U{i}</span>
                </div>
              ))}
            </div>
            <span className="font-medium text-white">Join 5,000+ businesses</span>
          </div>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="flex w-full flex-col justify-center bg-[#F9FAFB] p-8 lg:w-1/2 lg:p-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="text-gray-500">Start managing your finances today with a 14-day free trial.</p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
               <svg className="h-5 w-5" viewBox="0 0 23 23">
                 <path fill="#f35325" d="M1 1h10v10H1z"/>
                 <path fill="#81bc06" d="M12 1h10v10H12z"/>
                 <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                 <path fill="#ffba08" d="M12 12h10v10H12z"/>
               </svg>
              Microsoft
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#F9FAFB] px-4 text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 z-10 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                 <CheckCircle className="h-3.5 w-3.5" />
                 <span>At least 8 characters</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Re-enter password"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
                 <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 z-10 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 py-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-xs font-medium text-gray-600">NDPR Compliant & 256-bit Encrypted</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 focus:outline-none disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Free Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/" className="font-semibold text-blue-600 hover:underline">
              Log In
            </Link>
          </p>

          <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-center text-xs text-gray-500 leading-relaxed">
                  By clicking "Create Free Account", you agree to our <a href="#" className="underline decoration-gray-400 underline-offset-2 hover:text-gray-700">Terms of Service</a> and <a href="#" className="underline decoration-gray-400 underline-offset-2 hover:text-gray-700">Privacy Policy</a>.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
