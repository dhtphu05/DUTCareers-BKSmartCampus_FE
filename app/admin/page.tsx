"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, Building2, FileText, CheckCircle, XCircle } from "lucide-react"

const employmentByDepartment = [
  { department: "CNTT", employed: 85, total: 100 },
  { department: "Cơ khí", employed: 78, total: 95 },
  { department: "Xây dựng", employed: 82, total: 98 },
  { department: "Điện", employed: 80, total: 92 },
  { department: "Hóa", employed: 75, total: 88 },
  { department: "Môi trường", employed: 70, total: 85 },
]

const jobTypeDistribution = [
  { name: "Full-time", value: 65 },
  { name: "Part-time", value: 20 },
  { name: "Thực tập", value: 15 },
]

const COLORS = ["#0F62AC", "#DA251C", "#FFD700"]

const pendingJobs = [
  { id: 1, title: "Tuyển Kỹ sư Điện", company: "Cty ABC", date: "20/12/2024", status: "pending" },
  { id: 2, title: "Lập trình viên Java", company: "FPT Software", date: "19/12/2024", status: "pending" },
  { id: 3, title: "Kỹ sư Xây dựng", company: "Coteccons", date: "18/12/2024", status: "pending" },
]

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="ml-64 flex-1">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 border-b bg-card px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Thống kê chung</h1>
            <p className="text-sm text-muted-foreground">Dashboard / Tổng quan hệ thống</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tổng sinh viên</p>
                    <p className="text-4xl font-bold text-foreground">2,458</p>
                    <p className="text-xs text-green-600 mt-1">+12% so với năm ngoái</p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Doanh nghiệp</p>
                    <p className="text-4xl font-bold text-foreground">156</p>
                    <p className="text-xs text-green-600 mt-1">+8 doanh nghiệp mới</p>
                  </div>
                  <div className="rounded-full bg-accent/10 p-3 text-accent">
                    <Building2 className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tin tuyển dụng</p>
                    <p className="text-4xl font-bold text-foreground">342</p>
                    <p className="text-xs text-highlight mt-1">45 tin mới tuần này</p>
                  </div>
                  <div className="rounded-full bg-highlight/10 p-3 text-highlight">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tỷ lệ có việc</p>
                    <p className="text-4xl font-bold text-foreground">82%</p>
                    <p className="text-xs text-green-600 mt-1">Đạt tiêu chuẩn AUN-QA</p>
                  </div>
                  <div className="rounded-full bg-green-500/10 p-3 text-green-600">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Employment by Department */}
            <Card>
              <CardHeader>
                <CardTitle>Tỷ lệ có việc làm theo Khoa</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={employmentByDepartment}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="employed" fill="#0F62AC" name="Đã có việc" />
                    <Bar dataKey="total" fill="#DA251C" name="Tổng số" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Job Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Phân bố loại hình công việc</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={jobTypeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {jobTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Live Event Monitoring */}
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-highlight/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Trạng thái Sự kiện DUT Job Fair 2025
                    <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Giám sát thời gian thực</p>
                </div>
                <Button variant="outline" className="bg-transparent">
                  Xem chi tiết →
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Heatmap Visualization */}
                <div>
                  <h3 className="font-semibold mb-3">Bản đồ nhiệt (Heatmap)</h3>
                  <div className="relative bg-muted rounded-lg p-4" style={{ paddingBottom: "80%" }}>
                    <div className="absolute inset-4 grid grid-cols-2 gap-2">
                      {/* Zone A - High */}
                      <div className="bg-red-500/60 rounded border-2 border-red-500 p-2 flex flex-col justify-between">
                        <Badge className="bg-red-500 text-white w-fit text-xs">Zone A</Badge>
                        <p className="text-xs font-bold text-white">FPT, Viettel</p>
                      </div>
                      {/* Zone B - Low */}
                      <div className="bg-green-500/60 rounded border-2 border-green-500 p-2 flex flex-col justify-between">
                        <Badge className="bg-green-500 text-white w-fit text-xs">Zone B</Badge>
                        <p className="text-xs font-bold text-white">SMEs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Counters */}
                <div className="space-y-4">
                  <h3 className="font-semibold mb-3">Số liệu trực tiếp</h3>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-1">Tổng lượt Check-in</p>
                      <p className="text-5xl font-bold text-primary">5,420</p>
                      <Badge className="mt-2 bg-green-100 text-green-700">↑ +120 (10 phút qua)</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-1">Hồ sơ đã nộp</p>
                      <p className="text-5xl font-bold text-accent">2,100</p>
                      <Badge className="mt-2 bg-red-100 text-accent">↑ +45 (10 phút qua)</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Hàng chờ duyệt tin</CardTitle>
                <Badge className="bg-highlight text-highlight-foreground">{pendingJobs.length} tin chờ duyệt</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {job.company} - Đăng ngày {job.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Duyệt
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1 bg-transparent border-accent text-accent">
                        <XCircle className="h-4 w-4" />
                        Từ chối
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
