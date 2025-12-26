import Sidebar from "@/components/Sidebar";
import { 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal,
  FileText,
  Table,
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Clock
} from "lucide-react";

export default function Reports() {
  const recentExports = [
    { name: "VAT Return Q3", period: "Jul 1 - Sep 30, 2023", generated: "Oct 2, 2023", format: "PDF", status: "Completed" },
    { name: "Payroll Masterfile", period: "September 2023", generated: "Sep 28, 2023", format: "CSV", status: "Completed" },
    { name: "Detailed P&L", period: "Q3 2023", generated: "Sep 25, 2023", format: "XLSX", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      
      <main className="ml-64">
        {/* Top Header */}
        <header className="fixed left-64 right-0 top-0 z-10 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Reports & Exports</h1>
            <p className="text-sm text-gray-500">Access your financial summaries, payroll data, and tax estimates.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-gray-200 bg-white p-1">
               <button className="rounded p-1 hover:bg-gray-100">
                  <ChevronLeft className="h-4 w-4 text-gray-500" />
               </button>
               <span className="px-3 text-sm font-medium text-gray-700">September 2023</span>
               <button className="rounded p-1 hover:bg-gray-100">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
               </button>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              <Download className="h-4 w-4" />
              Export All Data
            </button>
          </div>
        </header>

        <div className="mt-20 p-8">
           <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Profit & Loss Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                 <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50">
                          <Banknote className="h-4 w-4 text-green-600" />
                       </div>
                       <h3 className="font-bold text-gray-900">Profit & Loss</h3>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                       <MoreHorizontal className="h-5 w-5" />
                    </button>
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-end justify-between border-b border-gray-50 pb-4">
                       <span className="text-sm font-medium text-gray-500">Total Income</span>
                       <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">₦15,000,000</p>
                          <p className="text-xs font-medium text-green-600 flex items-center justify-end gap-1">
                             <TrendingUp className="h-3 w-3" /> +12%
                          </p>
                       </div>
                    </div>
                    <div className="flex items-end justify-between border-b border-gray-50 pb-4">
                       <span className="text-sm font-medium text-gray-500">Total Expenses</span>
                       <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">₦8,200,000</p>
                          <p className="text-xs font-medium text-red-500 flex items-center justify-end gap-1">
                             <TrendingUp className="h-3 w-3" /> +5%
                          </p>
                       </div>
                    </div>
                    <div className="flex items-end justify-between pt-2">
                       <span className="text-sm font-bold text-gray-900">Net Profit</span>
                       <div className="text-right">
                          <p className="text-xl font-bold text-blue-600">₦6,800,000</p>
                          <p className="text-xs font-medium text-green-600 flex items-center justify-end gap-1">
                             <TrendingUp className="h-3 w-3" /> +18%
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-6 flex gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <FileText className="h-3.5 w-3.5 text-red-500" /> PDF
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <Table className="h-3.5 w-3.5 text-green-600" /> CSV
                    </button>
                 </div>
              </div>

              {/* Payroll Summary Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                 <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                          <Users className="h-4 w-4 text-blue-600" />
                       </div>
                       <h3 className="font-bold text-gray-900">Payroll Summary</h3>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                       <MoreHorizontal className="h-5 w-5" />
                    </button>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-gray-500">Total Staff</span>
                       <span className="text-sm font-bold text-gray-900">12 Employees</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-gray-500">Total Payout</span>
                       <span className="text-lg font-bold text-gray-900">₦3,400,000</span>
                    </div>
                    <div>
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-gray-900">Remitted PAYE</span>
                          <span className="text-lg font-bold text-gray-900">₦450,000</span>
                       </div>
                       <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-[85%] rounded-full bg-blue-600"></div>
                       </div>
                       <p className="mt-1 text-right text-xs text-gray-500">85% Processed</p>
                    </div>
                 </div>

                 <div className="mt-8 flex gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <FileText className="h-3.5 w-3.5 text-red-500" /> PDF
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <Table className="h-3.5 w-3.5 text-green-600" /> CSV
                    </button>
                 </div>
              </div>

              {/* Tax Estimates Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                 <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50">
                          <Building2 className="h-4 w-4 text-yellow-600" />
                       </div>
                       <h3 className="font-bold text-gray-900">Tax Estimates</h3>
                    </div>
                    <span className="rounded bg-yellow-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-700">Due soon</span>
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-end justify-between border-b border-gray-50 pb-4">
                       <div>
                          <p className="text-sm font-medium text-gray-900">VAT Liability</p>
                          <p className="text-xs text-gray-500">7.5% of taxable revenue</p>
                       </div>
                       <p className="text-lg font-bold text-gray-900">₦1,125,000</p>
                    </div>
                    <div className="flex items-end justify-between border-b border-gray-50 pb-4">
                       <span className="text-sm font-medium text-gray-500">Est. CIT</span>
                       <p className="text-lg font-bold text-gray-900">₦2,040,000</p>
                    </div>
                    <div className="flex items-end justify-between pt-2">
                       <span className="text-sm font-bold text-gray-900">Total Due</span>
                       <p className="text-xl font-bold text-gray-900">₦3,165,000</p>
                    </div>
                 </div>

                 <div className="mt-4 flex items-center gap-2 rounded-lg bg-yellow-50 p-3 text-xs text-yellow-800">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="font-medium">Next filing due in 14 days</span>
                 </div>

                 <div className="mt-6 flex gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <FileText className="h-3.5 w-3.5 text-red-500" /> PDF
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50">
                       <Table className="h-3.5 w-3.5 text-green-600" /> CSV
                    </button>
                 </div>
              </div>
           </div>

           <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Exports</h3>
           </div>

           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-gray-600">
                 <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                    <tr>
                       <th className="px-6 py-4">Report Name</th>
                       <th className="px-6 py-4">Period</th>
                       <th className="px-6 py-4">Generated On</th>
                       <th className="px-6 py-4">Format</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    {recentExports.map((item, index) => (
                       <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                             <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                                item.name.includes("VAT") ? "bg-blue-50" : 
                                item.name.includes("Payroll") ? "bg-purple-50" : "bg-green-50"
                             }`}>
                                <FileText className={`h-4 w-4 ${
                                   item.name.includes("VAT") ? "text-blue-600" : 
                                   item.name.includes("Payroll") ? "text-purple-600" : "text-green-600"
                                }`} />
                             </div>
                             {item.name}
                          </td>
                          <td className="px-6 py-4">{item.period}</td>
                          <td className="px-6 py-4">{item.generated}</td>
                          <td className="px-6 py-4">
                             <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase ${
                                item.format === "PDF" ? "bg-red-50 text-red-600" : 
                                item.format === "CSV" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                             }`}>
                                {item.format}
                             </span>
                          </td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                {item.status}
                             </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                             <button className="text-gray-400 hover:text-gray-600">
                                <Download className="h-4 w-4" />
                             </button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
}

function Banknote({ className }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}
