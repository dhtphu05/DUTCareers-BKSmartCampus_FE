"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Users, Sparkles, Calendar, Building2, Settings, LogOut } from "lucide-react"

const menuItems = [
  { href: "/recruiter", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/recruiter/post-job", label: "Đăng tin tuyển dụng", icon: FileText },
  { href: "/recruiter/applications", label: "Hồ sơ ứng tuyển", icon: Users },
  { href: "/recruiter/search", label: "Tìm ứng viên (AI)", icon: Sparkles },
  { href: "/recruiter/events", label: "Quản lý sự kiện", icon: Calendar },
  { href: "/recruiter/company", label: "Thông tin công ty", icon: Building2 },
  { href: "/recruiter/settings", label: "Cài đặt", icon: Settings },
]

export function RecruiterSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white overflow-y-auto">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <Link href="/recruiter" className="flex items-center gap-3 group">
          <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-2 transition-transform group-hover:scale-105">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">DUTCareers</h1>
            <p className="text-xs text-slate-500">Nhà tuyển dụng</p>
          </div>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive ? "bg-blue-700 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all">
          <LogOut className="h-5 w-5" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  )
}
