"use client"

import Link from "next/link"
import { GraduationCap, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MainHeaderProps {
  activeRole: string
  onRoleChange: (role: string) => void
}

export function MainHeader({ activeRole, onRoleChange }: MainHeaderProps) {
  const roles = [
    { id: "student", label: "🎓 Sinh viên", emoji: "🎓" },
    { id: "recruiter", label: "🏢 Doanh nghiệp", emoji: "🏢" },
    { id: "jobfair", label: "📅 Job Fair (Sự kiện)", emoji: "📅" },
    { id: "university", label: "🏫 Nhà trường", emoji: "🏫" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-border shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-primary p-2">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            DUTCareers
          </span>
        </Link>

        {/* Center Role Switcher - The key feature */}
        <div className="hidden lg:flex items-center gap-2 bg-secondary/50 p-1.5 rounded-xl">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onRoleChange(role.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeRole === role.id
                  ? "bg-primary text-white shadow-md"
                  : "text-foreground hover:bg-white hover:shadow-sm"
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent animate-pulse" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button className="bg-primary hover:bg-primary-dark text-white font-medium rounded-xl">Đăng nhập</Button>
        </div>
      </div>
    </header>
  )
}
