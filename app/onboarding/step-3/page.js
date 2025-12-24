"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Lock, 
  Check,
  CreditCard,
  Building
} from "lucide-react";
import Link from "next/link";
import OnboardingHeader from "@/components/OnboardingHeader";

export default function OnboardingStep3() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [currency, setCurrency] = useState("NGN");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <OnboardingHeader />

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
            <span>Step 3 of 3</span>
            <span>Preferences & Finish</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-full bg-blue-600"></div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold text-gray-900">Finalize your KEO setup</h1>
          <p className="text-gray-600">
            Configure your notification preferences and payment connections to get started.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50">
          <form className="space-y-8">
            
            {/* Notification Preferences */}
            <div className="space-y-4">
               <h3 className="font-semibold text-gray-900">Notification Preferences</h3>
               
               <div className="space-y-3">
                  {/* Email Notifications */}
                  <div 
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                     <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${emailNotifications ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'}`}>
                        {emailNotifications && <Check className="h-3.5 w-3.5 text-white" />}
                     </div>
                     <div>
                        <p className="text-sm font-semibold text-gray-900">Email Notifications</p>
                        <p className="text-xs text-gray-500">Receive weekly summaries and important tax compliance alerts via email.</p>
                     </div>
                  </div>

                  {/* SMS Alerts */}
                  <div 
                    onClick={() => setSmsAlerts(!smsAlerts)}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                     <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${smsAlerts ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'}`}>
                        {smsAlerts && <Check className="h-3.5 w-3.5 text-white" />}
                     </div>
                     <div>
                        <p className="text-sm font-semibold text-gray-900">SMS Alerts</p>
                        <p className="text-xs text-gray-500">Get instant SMS notifications for payroll approvals and urgent deadlines.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Connect Bank Account */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Connect Bank Account</h3>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Optional
                </span>
              </div>
              <p className="text-xs text-gray-500">Link your corporate bank account for seamless payroll processing and expense tracking.</p>

              <div className="grid gap-4 md:grid-cols-2">
                <button type="button" className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:border-gray-300 hover:bg-gray-50">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <Building className="h-5 w-5 text-gray-600" />
                   </div>
                   <div>
                      <p className="text-sm font-semibold text-gray-900">Connect via Mono</p>
                      <p className="text-xs text-gray-500">Recommended for Nigerian banks</p>
                   </div>
                </button>

                <button type="button" className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 text-left transition-colors hover:border-gray-300 hover:bg-gray-50">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                   </div>
                   <div>
                      <p className="text-sm font-semibold text-gray-900">Add Card Manually</p>
                      <p className="text-xs text-gray-500">Debit or Credit Card</p>
                   </div>
                </button>
              </div>
            </div>

            {/* Dashboard Currency */}
            <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700">Dashboard Currency</label>
               <select 
                 value={currency}
                 onChange={(e) => setCurrency(e.target.value)}
                 className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
               >
                 <option value="NGN">Nigerian Naira (NGN)</option>
                 <option value="USD">US Dollar (USD)</option>
                 <option value="GBP">British Pound (GBP)</option>
                 <option value="EUR">Euro (EUR)</option>
               </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4">
              <Link href="/onboarding/step-2" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Back
              </Link>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus:ring-4 focus:ring-green-600/20 focus:outline-none"
              >
                Finish Setup
                <Check className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Security Badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Lock className="h-3 w-3" />
            <span>Your data is encrypted and secure via 256-bit SSL.</span>
          </div>
        </div>
      </main>
    </div>
  );
}
