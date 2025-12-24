"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Lock, 
  Calendar,
  CheckCircle2,
  Info
} from "lucide-react";
import Link from "next/link";
import OnboardingHeader from "@/components/OnboardingHeader";

export default function OnboardingStep2() {
  const [accountingMethod, setAccountingMethod] = useState("accrual");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <OnboardingHeader />

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
            <span>Step 2 of 3</span>
            <span>Financial Settings</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-2/3 bg-blue-600"></div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold text-gray-900">Configure your financial year</h1>
          <p className="text-gray-600">
            Set up your accounting period to ensure accurate financial reporting and tax compliance.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50">
          <form className="space-y-8">
            
            {/* Fiscal Year Dates */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                 <Calendar className="h-5 w-5 text-blue-600" />
                 <h3 className="font-semibold text-gray-900">Fiscal Year Dates</h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Financial Year Start</label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2023-01-01"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Financial Year End</label>
                  <div className="relative">
                    <input
                      type="date"
                      defaultValue="2023-12-31"
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="flex gap-3 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
                <Info className="h-5 w-5 shrink-0 text-blue-600" />
                <div className="space-y-1">
                  <p className="font-semibold text-blue-800">Standard Fiscal Year</p>
                  <p className="text-blue-700/80">
                    Most Nigerian businesses operate on a January 1st to December 31st cycle. Changing this may affect how your taxes are calculated.
                  </p>
                </div>
              </div>
            </div>

            {/* Accounting Method */}
            <div className="space-y-4">
               <div className="flex items-center gap-2">
                 <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                 </svg>
                 <h3 className="font-semibold text-gray-900">Accounting Method</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Accrual Basis */}
                <div
                  onClick={() => setAccountingMethod("accrual")}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    accountingMethod === "accrual"
                      ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {accountingMethod === "accrual" && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  <div className="mb-2 flex items-center justify-between">
                     <h3 className="font-semibold text-gray-900">Accrual Basis</h3>
                     {accountingMethod !== "accrual" && <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Record income when you bill your customers and expenses when you receive a bill.
                  </p>
                </div>

                {/* Cash Basis */}
                <div
                  onClick={() => setAccountingMethod("cash")}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    accountingMethod === "cash"
                      ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {accountingMethod === "cash" && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  <div className="mb-2 flex items-center justify-between">
                     <h3 className="font-semibold text-gray-900">Cash Basis</h3>
                     {accountingMethod !== "cash" && <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Record income only when money is received and expenses only when money is paid.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4">
              <Link href="/onboarding" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Back
              </Link>
              <Link
                href="/onboarding/step-3"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 focus:outline-none"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </form>
        </div>

        {/* Footer Security Badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Lock className="h-3 w-3" />
            <span>Your financial data is encrypted and secure.</span>
          </div>
        </div>
      </main>
    </div>
  );
}
