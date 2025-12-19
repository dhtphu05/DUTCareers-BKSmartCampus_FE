"use client"

import { QrCode, Map, ScanLine, Calendar } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNavBar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/event-mode/ticket", label: "Vé của tôi", icon: QrCode },
    { href: "/event-mode/map", label: "Bản đồ", icon: Map },
    { href: "/event-mode/scan", label: "Quét mã", icon: ScanLine },
    { href: "/event-mode/schedule", label: "Lịch trình", icon: Calendar },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card shadow-lg">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-3 transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
