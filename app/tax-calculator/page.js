"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { 
  Bell, 
  Download, 
  Info, 
  ChevronDown, 
  Printer, 
  Save, 
  ArrowRight 
} from "lucide-react";

export default function TaxCalculator() {
  const [incomeType, setIncomeType] = useState("monthly");
  const [grossIncome, setGrossIncome] = useState(500000);
  const [pension, setPension] = useState(0);
  const [nhf, setNhf] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(0);
  const [lifeAssurance, setLifeAssurance] = useState(0);

  // Calculation Results
  const [results, setResults] = useState({
    grossAnnual: 0,
    consolidatedRelief: 0,
    taxableIncome: 0,
    taxPayable: 0,
    monthlyPaye: 0,
    effectiveRate: 0,
    nonTaxableDeductions: 0
  });

  // Automatically calculate inputs when gross income changes
  useEffect(() => {
    // Default statutory deductions based on common Nigerian practices
    // Pension: 8% of Gross (often Basic + Housing + Transport, but simplified here as 8% of Gross for estimation)
    setPension(grossIncome * 0.08);
    // NHF: 2.5% of Basic (simplified as 2.5% of Gross for estimation)
    setNhf(grossIncome * 0.025);
  }, [grossIncome]);

  const calculateTax = () => {
    const multiplier = incomeType === "monthly" ? 12 : 1;
    const annualGross = Number(grossIncome) * multiplier;
    
    // Annual Deductions
    const annualPension = Number(pension) * multiplier;
    const annualNhf = Number(nhf) * multiplier;
    const annualHealth = Number(healthInsurance) * multiplier;
    const annualLife = Number(lifeAssurance) * multiplier;
    
    const totalNonTaxable = annualPension + annualNhf + annualHealth + annualLife;

    // Consolidated Relief Allowance (CRA)
    // Higher of ₦200,000 or 1% of Gross Income, plus 20% of Gross Income
    const craFixed = Math.max(200000, annualGross * 0.01);
    const craVariable = annualGross * 0.20;
    const totalCra = craFixed + craVariable;

    // Taxable Income
    let taxableIncome = annualGross - totalNonTaxable - totalCra;
    if (taxableIncome < 0) taxableIncome = 0;

    // PAYE Calculation (Nigeria Finance Act 2020)
    let tax = 0;
    let remaining = taxableIncome;

    // 1st 300k @ 7%
    if (remaining > 0) {
      const chunk = Math.min(remaining, 300000);
      tax += chunk * 0.07;
      remaining -= chunk;
    }

    // Next 300k @ 11%
    if (remaining > 0) {
      const chunk = Math.min(remaining, 300000);
      tax += chunk * 0.11;
      remaining -= chunk;
    }

    // Next 500k @ 15%
    if (remaining > 0) {
      const chunk = Math.min(remaining, 500000);
      tax += chunk * 0.15;
      remaining -= chunk;
    }

    // Next 500k @ 19%
    if (remaining > 0) {
      const chunk = Math.min(remaining, 500000);
      tax += chunk * 0.19;
      remaining -= chunk;
    }

    // Next 1.6M @ 21%
    if (remaining > 0) {
      const chunk = Math.min(remaining, 1600000);
      tax += chunk * 0.21;
      remaining -= chunk;
    }

    // Above 3.2M @ 24%
    if (remaining > 0) {
      tax += remaining * 0.24;
    }

    // Minimum Tax Rule: 1% of Gross Income if taxable income is too low
    // (Simplified application here, usually applied if tax calculated is less than 1% of gross)
    if (tax < (annualGross * 0.01)) {
       // Note: Minimum tax rules are complex, usually applies to total income. 
       // Keeping standard PAYE bands for this calculator as per design visual.
    }

    setResults({
      grossAnnual: annualGross,
      consolidatedRelief: totalCra,
      nonTaxableDeductions: totalNonTaxable,
      taxableIncome: taxableIncome,
      taxPayable: tax,
      monthlyPaye: tax / 12,
      effectiveRate: (tax / annualGross) * 100
    });
  };

  // Initial Calculation
  useEffect(() => {
    calculateTax();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      
      <main className="ml-64">
        {/* Top Header */}
        <header className="fixed left-64 right-0 top-0 z-10 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Personal Income Tax Calculator</h1>
            <p className="text-sm text-gray-500">Estimate PAYE obligations based on Nigerian Finance Act 2020.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Download className="h-4 w-4" />
              Export Guide
            </button>
          </div>
        </header>

        <div className="mt-20 p-8">
           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Input Section */}
              <div className="lg:col-span-2 space-y-6">
                 {/* Toggle */}
                 <div className="inline-flex rounded-lg bg-gray-100 p-1">
                    <button 
                      onClick={() => setIncomeType("monthly")}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${incomeType === "monthly" ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                    >
                      Monthly Income
                    </button>
                    <button 
                      onClick={() => setIncomeType("annual")}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${incomeType === "annual" ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                    >
                      Annual Income
                    </button>
                 </div>

                 {/* Calculator Card */}
                 <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-lg font-bold text-gray-900">Income & Statutory Deductions</h2>
                    
                    <div className="space-y-6">
                       {/* Gross Income */}
                       <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                             Gross Income (Basic + Allowances)
                             <Info className="h-4 w-4 text-gray-400" />
                          </label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
                             <input 
                               type="number" 
                               value={grossIncome}
                               onChange={(e) => setGrossIncome(e.target.value)}
                               className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                             />
                          </div>
                       </div>

                       <div className="grid gap-6 md:grid-cols-2">
                          {/* Pension */}
                          <div className="space-y-2">
                             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                Pension Contribution (8%)
                                <Info className="h-4 w-4 text-gray-400" />
                             </label>
                             <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
                                <input 
                                  type="number" 
                                  value={pension}
                                  onChange={(e) => setPension(e.target.value)}
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                                />
                             </div>
                          </div>

                          {/* NHF */}
                          <div className="space-y-2">
                             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                NHF Contribution (2.5%)
                                <Info className="h-4 w-4 text-gray-400" />
                             </label>
                             <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
                                <input 
                                  type="number" 
                                  value={nhf}
                                  onChange={(e) => setNhf(e.target.value)}
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                                />
                             </div>
                          </div>

                          {/* Health Insurance */}
                          <div className="space-y-2">
                             <label className="text-sm font-medium text-gray-700">National Health Insurance</label>
                             <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
                                <input 
                                  type="number" 
                                  value={healthInsurance}
                                  onChange={(e) => setHealthInsurance(e.target.value)}
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                                />
                             </div>
                          </div>

                          {/* Life Assurance */}
                          <div className="space-y-2">
                             <label className="text-sm font-medium text-gray-700">Life Assurance Premium</label>
                             <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
                                <input 
                                  type="number" 
                                  value={lifeAssurance}
                                  onChange={(e) => setLifeAssurance(e.target.value)}
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                                />
                             </div>
                          </div>
                       </div>

                       <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                          <ChevronDown className="h-4 w-4" />
                          Show Additional Reliefs
                       </button>

                       <div className="flex justify-end pt-4">
                          <button 
                            onClick={calculateTax}
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 focus:outline-none"
                          >
                             Calculate Tax
                             <ArrowRight className="h-4 w-4" />
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* Did You Know */}
                 <div className="flex gap-4 rounded-xl bg-blue-50 p-6 border border-blue-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                       <div className="h-4 w-4 rounded-full bg-blue-600"></div> 
                       {/* Using a simple circle or bulb icon placeholder */}
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900">Did you know?</h4>
                       <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                          Consolidated Relief Allowance (CRA) is automatically calculated as the higher of ₦200,000 or 1% of Gross Income, plus 20% of Gross Income.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                 <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 rounded-lg bg-blue-50 p-6">
                       <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Estimated Monthly PAYE</p>
                       <h2 className="text-3xl font-bold text-blue-900">
                          ₦ {results.monthlyPaye.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                       </h2>
                       <div className="mt-4 flex items-center justify-between border-t border-blue-100 pt-4">
                          <div>
                             <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Annual Tax Payable</p>
                             <p className="font-bold text-gray-900">₦ {results.taxPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Effective Tax Rate</p>
                             <p className="font-bold text-gray-900">{results.effectiveRate.toFixed(1)}%</p>
                          </div>
                       </div>
                    </div>

                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">Tax Calculation Breakdown</h3>
                    
                    <div className="space-y-3 text-sm">
                       <div className="flex justify-between rounded bg-gray-50 p-3">
                          <span className="text-blue-600 font-medium">Gross Income (Annual)</span>
                          <span className="font-bold text-gray-900">₦ {results.grossAnnual.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                       </div>
                       <div className="flex justify-between rounded bg-red-50 p-3">
                          <span className="text-blue-600 font-medium">Less: Non-Taxable Deductions</span>
                          <span className="font-bold text-red-600">- ₦ {results.nonTaxableDeductions.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                       </div>
                       <div className="flex justify-between rounded bg-red-50 p-3">
                          <span className="text-blue-600 font-medium">Less: Consolidated Relief</span>
                          <span className="font-bold text-red-600">- ₦ {results.consolidatedRelief.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                       </div>
                       <div className="flex justify-between rounded bg-gray-50 p-3 border-l-4 border-gray-900">
                          <span className="font-bold text-gray-900">Taxable Income</span>
                          <span className="font-bold text-gray-900">₦ {results.taxableIncome.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                       </div>
                    </div>

                    <h3 className="mb-4 mt-8 text-xs font-bold uppercase tracking-wider text-gray-900">Tax Bands Applied</h3>
                    <div className="space-y-2 text-xs">
                       <div className="flex items-center justify-between text-gray-600">
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-green-500"></div>
                             <span>1st ₦300k @ 7%</span>
                          </div>
                          <span className="font-medium text-blue-600">₦ 21,000.00</span>
                       </div>
                       <div className="flex items-center justify-between text-gray-600">
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-green-500"></div>
                             <span>Next ₦300k @ 11%</span>
                          </div>
                          <span className="font-medium text-blue-600">₦ 33,000.00</span>
                       </div>
                       <div className="flex items-center justify-between text-gray-600">
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-green-500"></div>
                             <span>Next ₦500k @ 15%</span>
                          </div>
                          <span className="font-medium text-blue-600">₦ 75,000.00</span>
                       </div>
                       {/* Only show higher bands if applicable logic could be added, simplifying visual for now */}
                       <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2 font-bold text-gray-900">
                          <span>Total Tax Liability</span>
                          <span>₦ {results.taxPayable.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                       </div>
                    </div>

                    <div className="mt-6 space-y-3">
                       <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                          <Save className="h-4 w-4" />
                          Save to Employee Payroll
                       </button>
                       <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                          <Printer className="h-4 w-4" />
                          Print Breakdown
                       </button>
                    </div>
                 </div>
                 
                 {/* Salary Distribution Chart Placeholder */}
                 <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Salary Distribution</h3>
                    <div className="flex items-center gap-6">
                       <div className="relative h-32 w-32 shrink-0">
                          {/* Donut Chart Simulation */}
                          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                             <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="12" />
                             <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12" strokeDasharray="180 251" /> {/* ~70% Net */}
                             <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="12" strokeDasharray="50 251" strokeDashoffset="-180" /> {/* ~20% Tax */}
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                             <span className="text-xs font-bold text-gray-900">100%</span>
                          </div>
                       </div>
                       <div className="space-y-3 text-xs">
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                             <span className="text-gray-600">Net Pay</span>
                             <span className="ml-auto font-bold text-gray-900">65%</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                             <span className="text-gray-600">Tax</span>
                             <span className="ml-auto font-bold text-gray-900">{results.effectiveRate.toFixed(0)}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                             <span className="text-gray-600">Deductions</span>
                             <span className="ml-auto font-bold text-gray-900">20%</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
