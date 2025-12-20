"use client"

import { useState } from "react"
import { RecruiterSidebar } from "@/components/recruiter-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, FileText, Users, TrendingUp, Plus, ChevronRight, BarChart3, LayoutGrid } from "lucide-react"
import { SmartHeadhunting } from "@/components/smart-headhunting"
import { RecruiterEventStats } from "@/components/recruiter-event-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stats = [
  { label: "Tin đang hiển thị", value: "5", icon: FileText, color: "text-blue-700", bg: "bg-blue-100" },
  { label: "Hồ sơ chưa xem", value: "12", icon: Users, color: "text-rose-600", bg: "bg-rose-100" },
  { label: "Lượt xem hồ sơ công ty", value: "1,500", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-100" },
]

const recentApplicants = [
  {
    name: "Trần Thị B",
    position: "Kỹ sư Cầu đường",
    major: "Khoa Xây dựng - GPA 3.5",
    match: 90,
    verified: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Nguyễn Văn C",
    position: "Lập trình viên Java",
    major: "Khoa CNTT - GPA 3.2",
    match: 85,
    verified: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Lê Minh D",
    position: "Kỹ sư Điện",
    major: "Khoa Điện - GPA 3.8",
    match: 92,
    verified: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Phạm Thị E",
    position: "Data Analyst",
    major: "Khoa CNTT - GPA 3.6",
    match: 88,
    verified: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function RecruiterDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-slate-50">
      <RecruiterSidebar />

      <main className="ml-64 flex-1">
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Bảng điều khiển</h1>
              <p className="text-sm text-slate-500 mt-1">Trang chủ / Bảng điều khiển</p>
            </div>
            <Button className="bg-rose-600 text-white hover:bg-rose-700 font-semibold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Plus className="h-5 w-5" />
              ĐĂNG TIN MỚI
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-[400px] grid-cols-2 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                <LayoutGrid className="w-4 h-4 mr-2" /> Tổng quan
              </TabsTrigger>
              <TabsTrigger value="event-stats" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                <BarChart3 className="w-4 h-4 mr-2" /> Thống kê Sự kiện
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="p-8 space-y-8">
          {activeTab === "overview" ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-6 md:grid-cols-3">
                {stats.map((stat, i) => (
                  <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-slate-600 mb-2">{stat.label}</p>
                          <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
                        </div>
                        <div className={`rounded-xl ${stat.bg} p-3 ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-slate-200 shadow-sm rounded-2xl">
                <CardHeader className="border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-slate-900">Ứng viên mới nhất</CardTitle>
                    <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 gap-1 group">
                      Xem tất cả
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-slate-100">
                        <TableHead className="text-slate-700 font-semibold">Ứng viên</TableHead>
                        <TableHead className="text-slate-700 font-semibold">Vị trí</TableHead>
                        <TableHead className="text-slate-700 font-semibold">Khoa/Ngành</TableHead>
                        <TableHead className="text-slate-700 font-semibold">Độ phù hợp</TableHead>
                        <TableHead className="text-right text-slate-700 font-semibold">Hành động</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentApplicants.map((applicant, i) => (
                        <TableRow key={i} className="hover:bg-slate-50 border-slate-100">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <img
                                src={applicant.avatar || "/placeholder.svg"}
                                alt={applicant.name}
                                className="h-10 w-10 rounded-xl object-cover border border-slate-200"
                              />
                              <div>
                                <p className="font-semibold text-slate-900">{applicant.name}</p>
                                {applicant.verified && (
                                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs rounded-full mt-1">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium text-slate-700">{applicant.position}</TableCell>
                          <TableCell className="text-slate-600">{applicant.major}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${applicant.match >= 90
                                ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                                : applicant.match >= 85
                                  ? "bg-blue-100 text-blue-700 border-blue-200"
                                  : "bg-slate-100 text-slate-700 border-slate-200"
                                } rounded-full px-3 py-1`}
                            >
                              {applicant.match}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 border-slate-200 hover:bg-slate-100 rounded-xl bg-transparent"
                            >
                              <Eye className="h-4 w-4" />
                              Xem CV
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <SmartHeadhunting />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <RecruiterEventStats />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
