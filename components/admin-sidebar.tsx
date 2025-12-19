"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, FileText, Radio, FileBarChart, Settings, LogOut, Shield } from "lucide-react"

const menuItems = [
  { href: "/admin", label: "Thống kê chung", icon: BarChart3 },
  { href: "/admin/companies", label: "Duyệt doanh nghiệp", icon: Building2 },
  { href: "/admin/jobs", label: "Duyệt tin đăng", icon: FileText },
  { href: "/admin/live-event", label: "Giám sát Job Fair", icon: Radio },
  { href: "/admin/reports", label: "Báo cáo AUN-QA", icon: FileBarChart },
  { href: "/admin/settings", label: "Cài đặt hệ thống", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-950 overflow-y-auto">
      <div className="border-b border-slate-800 p-6">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-2 transition-transform group-hover:scale-105">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">DUTCareers</h1>
            <p className="text-xs text-slate-400">Quản trị hệ thống</p>
          </div>
        </Link>
      </div>

      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-700/30"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
          <LogOut className="h-5 w-5" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  )
}
