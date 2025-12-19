"use client"

import Link from "next/link"
import { GraduationCap, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopCVHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">DUTCareers</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Việc làm
          </Link>
          <Link
            href="/profile"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Hồ sơ & CV
          </Link>
          <Link
            href="/companies"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Công ty
          </Link>
          <Link
            href="/events/job-fair-2025"
            className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sự kiện (Job Fair)
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/recruiter">
            <Button variant="ghost" className="bg-gray-700 text-white hover:bg-gray-800 font-medium">
              Nhà tuyển dụng
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button className="bg-primary text-white hover:bg-primary-dark font-medium">Đăng nhập</Button>
        </div>
      </div>
    </header>
  )
}
