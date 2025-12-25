"use client";

import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  Building2, 
  BarChart3, 
  Settings, 
  LogOut,
  Calculator
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transactions", href: "/transactions", icon: Receipt },
    { name: "Payroll", href: "/payroll", icon: Users },
    { name: "Tax Calculator", href: "/tax-calculator", icon: Calculator },
    { name: "Tax Filings", href: "/tax-filings", icon: Building2 },
    { name: "Reports", href: "/reports", icon: BarChart3 },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-20 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
          <span className="text-xl font-bold">K</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">KEO</h1>
          <p className="text-xs text-gray-500">Accounting Platform</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.name === "Dashboard"; // Hardcoded active state for now or use pathname

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-900"}`} />
              {item.name}
            </Link>
          );
        })}

        <div className="my-4 border-t border-gray-100"></div>

        <Link
          href="/settings"
          className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
          Settings
        </Link>
      </nav>

      {/* User Profile & Logout */}
      <div className="border-t border-gray-200 p-4">
        <div className="mb-4 flex items-center gap-3 px-2">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center">
             <div className="h-5 w-5 bg-orange-300 rounded-sm"></div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Adeola O.</p>
            <p className="text-xs text-gray-500">SME Admin</p>
          </div>
        </div>
        
        <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
          <LogOut className="h-5 w-5 text-gray-500" />
          Log Out
        </button>
      </div>
    </div>
  );
}
