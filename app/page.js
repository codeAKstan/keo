import { Mail, Lock, Eye, CheckCircle, Shield, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Section - Dark Blue */}
      <div className="relative flex w-full flex-col justify-between bg-[#0F1629] p-8 text-white lg:w-1/2 lg:p-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">KEO</span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center py-12 lg:mt-8 lg:py-0">
          {/* Dashboard Preview Placeholder */}
          <div className="relative mb-12 w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#1A2333] p-4 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="mt-4 space-y-4">
              {/* Fake Chart */}
              <div className="h-48 w-full rounded-lg bg-gradient-to-t from-[#0F1629] to-[#1A2333] relative">
                <svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveAspectRatio="none">
                   <path d="M0,150 C50,140 100,100 150,90 C200,80 250,40 300,30 L300,200 L0,200 Z" fill="rgba(34, 197, 94, 0.1)" />
                   <path d="M0,150 C50,140 100,100 150,90 C200,80 250,40 300,30" stroke="#22c55e" strokeWidth="2" fill="none" />
                   
                   <path d="M0,120 C50,110 100,130 150,80 C200,60 250,90 300,50" stroke="#fbbf24" strokeWidth="2" fill="none" />
                </svg>
              </div>
              {/* Fake Data Rows */}
              <div className="flex gap-4">
                 <div className="h-2 w-1/3 rounded bg-white/10"></div>
                 <div className="h-2 w-1/3 rounded bg-white/10"></div>
                 <div className="h-2 w-1/3 rounded bg-white/10"></div>
              </div>
              <div className="flex gap-4">
                 <div className="h-2 w-1/4 rounded bg-white/10"></div>
                 <div className="h-2 w-1/4 rounded bg-white/10"></div>
                 <div className="h-2 w-1/4 rounded bg-white/10"></div>
              </div>
            </div>
          </div>

          <div className="max-w-lg text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Smart Accounting for Nigerian Business
            </h1>
            <p className="text-lg text-gray-400">
              The complete financial operating system for SMEs. Payroll, Tax Compliance, and Bookkeeping in one secure platform.
            </p>
          </div>
        </div>

        {/* Footer Badges */}
        <div className="flex flex-col gap-6 text-sm text-gray-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-3 w-3 text-white" />
            </div>
            <span>Bank-Grade Security</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
            <span>FIRS Compliant</span>
          </div>
        </div>
      </div>

      {/* Right Section - White Form */}
      <div className="flex w-full flex-col justify-center bg-white p-8 lg:w-1/2 lg:p-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500">Enter your credentials to access your KEO workspace.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F1629] px-6 py-3 text-white transition-colors hover:bg-[#1a2440] focus:ring-4 focus:ring-[#0F1629]/20 focus:outline-none"
            >
              Log In
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 focus:outline-none"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-medium">Google Account</span>
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            New to KEO?{" "}
            <a href="/signup" className="font-bold text-gray-900 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
