"use client"

import Link from "next/link"
import { GraduationCap, Bell, Briefcase, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function StudentHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-2 transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              DUTCareers
            </span>
          </Link>

          <Tabs defaultValue="jobs" className="hidden md:block">
            <TabsList className="bg-slate-100 p-1">
              <TabsTrigger value="jobs" className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Briefcase className="h-4 w-4" />
                Việc làm
              </TabsTrigger>
              <TabsTrigger value="events" className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Calendar className="h-4 w-4" />
                Sự kiện
              </TabsTrigger>
              <TabsTrigger
                value="companies"
                className="gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <Building2 className="h-4 w-4" />
                Doanh nghiệp
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-600 ring-2 ring-white" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 gap-2 px-2 hover:bg-slate-100">
                <Avatar className="h-8 w-8 ring-2 ring-amber-400">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-semibold">
                    NVA
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline-block font-medium text-slate-700">Nguyễn Văn A</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
              <DropdownMenuItem>Việc làm đã lưu</DropdownMenuItem>
              <DropdownMenuItem>Cài đặt</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-rose-600">Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
