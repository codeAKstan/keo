import { BarChart3, User, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function OnboardingHeader() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
            <BarChart3 className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-gray-900">KEO</span>
        </Link>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Help Center
          </a>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
              <User className="h-5 w-5 text-orange-600" />
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
