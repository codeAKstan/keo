import { Mail, ArrowLeft, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header Section with Gradient */}
        <div className="relative bg-gradient-to-br from-[#1A3D5C] to-[#0F1629] p-8">
            <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-[#0F1629]">
                    <BarChart3 className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-white">KEO</span>
            </div>
            {/* Optional: Add a subtle overlay or pattern if needed to match the "shine" effect more closely */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Forgot Password?</h1>
          <p className="mb-8 text-sm text-gray-500">
            No worries. Enter the email associated with your account and we'll send you a link to reset your password.
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="block w-full rounded-lg border border-blue-300 bg-blue-50/30 py-3 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 focus:outline-none"
            >
              Send Instructions
            </button>
          </form>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to log in
            </Link>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className="bg-gray-50 p-4 text-center">
             <p className="text-xs text-gray-500">
                Don't have access to your email? <a href="#" className="font-medium text-blue-600 hover:underline">Contact Support</a>
            </p>
        </div>
      </div>
    </div>
  );
}
