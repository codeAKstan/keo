import Sidebar from "@/components/Sidebar";
import { 
  Calendar, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Building,
  AlertTriangle,
  FileText,
  Banknote,
  ShoppingBag
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      
      <main className="ml-64">
        {/* Top Header */}
        <header className="fixed left-64 right-0 top-0 z-10 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">KEO Dashboard</h1>
            <p className="text-sm text-gray-500">Overview of your financial health</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Calendar className="h-4 w-4 text-gray-500" />
              Oct 2023
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              New Invoice
            </button>
          </div>
        </header>

        <div className="mt-20 p-8">
          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Income */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Income</p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">₦4.25M</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">+12%</span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Expenses</p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">₦1.80M</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">-5%</span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>

            {/* Profit */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Profit</p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">₦2.45M</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <Wallet className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">+15%</span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>

            {/* Estimated Tax Liability */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Estimated Tax Liability</p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">₦183k</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50">
                  <Building className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">Due soon</span>
                <span className="text-xs text-gray-500">Q3 Filing</span>
              </div>
            </div>
          </div>

          {/* Attention Banner */}
          <div className="mb-8 flex flex-col items-start justify-between rounded-xl border border-yellow-200 bg-yellow-50 p-4 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900">Attention Needed</h3>
                  <span className="rounded bg-yellow-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-800">Compliance</span>
                </div>
                <p className="mt-1 text-sm text-gray-700 max-w-2xl">
                  Your VAT filing for Q3 is due in 5 days. Please review your pending tax obligations to avoid penalties from FIRS.
                </p>
              </div>
            </div>
            <button className="mt-4 rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 md:mt-0">
              View Tax Details
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Chart Section */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Monthly Income vs. Expenses</h3>
                  <p className="text-sm text-gray-500">Financial overview (Last 6 Months)</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                    <span>Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                    <span>Expense</span>
                  </div>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="flex h-64 items-end justify-between gap-4 pt-4">
                {/* May */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '40%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '30%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">May</span>
                </div>
                {/* Jun */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '55%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '45%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Jun</span>
                </div>
                {/* Jul */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '35%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '25%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Jul</span>
                </div>
                {/* Aug */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '60%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '40%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Aug</span>
                </div>
                {/* Sep */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '75%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '50%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Sep</span>
                </div>
                {/* Oct */}
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-3 rounded-t bg-blue-500" style={{ height: '85%' }}></div>
                    <div className="w-3 rounded-t bg-gray-300" style={{ height: '55%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Oct</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Recent Activity</h3>
                <button className="text-xs font-bold text-blue-600 hover:underline">VIEW ALL</button>
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Inv #1023 - Dangote</p>
                      <p className="text-xs text-gray-500">Oct 24, 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">₦450k</p>
                    <div className="flex items-center justify-end gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] text-gray-500">Paid</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                      <Banknote className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Payroll - Oct</p>
                      <p className="text-xs text-gray-500">Oct 22, 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">-₦1.2M</p>
                    <div className="flex items-center justify-end gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                      <span className="text-[10px] text-gray-500">Processed</span>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                      <ShoppingBag className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Office Supplies</p>
                      <p className="text-xs text-gray-500">Oct 20, 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">-₦25k</p>
                    <div className="flex items-center justify-end gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                      <span className="text-[10px] text-gray-500">Pending</span>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Inv #1022 - GTBank</p>
                      <p className="text-xs text-gray-500">Oct 18, 2023</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">₦850k</p>
                    <div className="flex items-center justify-end gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] text-gray-500">Paid</span>
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
