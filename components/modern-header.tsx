"use client"

import { Bell, Briefcase, Calendar, Building2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { ViewType } from "@/app/page"

interface ModernHeaderProps {
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
}

export function ModernHeader({ currentView, setCurrentView }: ModernHeaderProps) {
  const navItems = [
    { id: "student-home" as ViewType, label: "Việc làm", icon: Briefcase },
    { id: "event-hub" as ViewType, label: "Sự kiện", icon: Calendar },
    { id: "recruiter-dashboard" as ViewType, label: "Công ty", icon: Building2 },
    { id: "admin-dashboard" as ViewType, label: "Nhà trường", icon: Shield },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <button onClick={() => setCurrentView("student-home")} className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-lg">
            DC
          </div>
          <span className="text-xl font-bold text-blue-800">DUTCareers</span>
        </button>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-blue-800 ${
                  currentView === item.id ? "text-blue-800" : "text-slate-600"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </span>
                {currentView === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800 rounded-full" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
          </Button>

          <div className="relative">
            <Avatar className="h-9 w-9 ring-2 ring-blue-100">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Nguyễn Văn A" />
              <AvatarFallback className="bg-blue-100 text-blue-800 text-sm font-semibold">NVA</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white flex items-center justify-center">
              <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                <path
                  d="M6.5 1L2.5 5L1 3.5"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
