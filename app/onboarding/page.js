"use client";

import { useState } from "react";
import { 
  HelpCircle, 
  User, 
  ChevronDown, 
  Users, 
  Building2, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Lock 
} from "lucide-react";
import Link from "next/link";
import OnboardingHeader from "@/components/OnboardingHeader";

export default function Onboarding() {
  const [selectedStructure, setSelectedStructure] = useState("sole-proprietor");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <OnboardingHeader />

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
            <span>Step 1 of 3</span>
            <span>Business Info</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-1/3 bg-blue-600"></div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold text-gray-900">Let's get your business set up</h1>
          <p className="text-gray-600">
            Enter your details to streamline your accounting and tax compliance. We'll use this to configure your dashboard.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50">
          <form className="space-y-8">
            {/* Business Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">What is your Business Name?</label>
              <input
                type="text"
                placeholder="e.g. Lagos Ventures Ltd"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            {/* Business Structure */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Select your Business Structure</label>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Sole Proprietor */}
                <div
                  onClick={() => setSelectedStructure("sole-proprietor")}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    selectedStructure === "sole-proprietor"
                      ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {selectedStructure === "sole-proprietor" && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <User className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900">Sole Proprietor</h3>
                  <p className="text-xs text-gray-500">Registered as a business name.</p>
                </div>

                {/* Partnership */}
                <div
                  onClick={() => setSelectedStructure("partnership")}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    selectedStructure === "partnership"
                      ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {selectedStructure === "partnership" && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900">Partnership</h3>
                  <p className="text-xs text-gray-500">Two or more legal partners.</p>
                </div>

                {/* Limited Company */}
                <div
                  onClick={() => setSelectedStructure("limited-company")}
                  className={`relative cursor-pointer rounded-xl border p-4 transition-all ${
                    selectedStructure === "limited-company"
                      ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {selectedStructure === "limited-company" && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900">Limited Company</h3>
                  <p className="text-xs text-gray-500">Private Limited Liability (Ltd).</p>
                </div>
              </div>
            </div>

            {/* Dropdowns Row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Industry Sector</label>
                <div className="relative">
                  <select className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none">
                    <option value="" disabled selected>Select an industry</option>
                    <option value="tech">Technology</option>
                    <option value="retail">Retail</option>
                    <option value="finance">Finance</option>
                    <option value="agriculture">Agriculture</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Operating State (Nigeria)</label>
                <div className="relative">
                  <select className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none">
                    <option value="" disabled selected>Select a state</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja (FCT)</option>
                    <option value="rivers">Rivers</option>
                    <option value="kano">Kano</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* TIN Input */}
            {/* <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Tax Identification Number (TIN)</label>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Optional
                </span>
              </div>
              <input
                type="text"
                placeholder="e.g. 12345678-0001"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Info className="h-4 w-4 text-blue-500" />
                <span>Entering this now helps us automate your tax filing later.</span>
              </div>
            </div> */}

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4">
              <button type="button" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Back
              </button>
              <Link
                href="/onboarding/step-2"
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
            <span>Your data is encrypted and secure via 256-bit SSL.</span>
          </div>
        </div>
      </main>
    </div>
  );
}
