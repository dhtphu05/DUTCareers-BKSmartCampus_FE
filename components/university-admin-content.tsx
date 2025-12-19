"use client"

import { Users, TrendingUp, AlertTriangle, CheckCircle, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const employmentData = [
  { major: "CNTT", rate: 85 },
  { major: "Xây dựng", rate: 78 },
  { major: "Cơ khí", rate: 72 },
  { major: "Điện-Điện tử", rate: 80 },
  { major: "Hóa", rate: 65 },
]

const trafficData = [
  { month: "T7", visits: 4500 },
  { month: "T8", visits: 5200 },
  { month: "T9", visits: 6800 },
  { month: "T10", visits: 7200 },
  { month: "T11", visits: 8100 },
  { month: "T12", visits: 9500 },
]

const jobTypeData = [
  { name: "Full-time", value: 65, color: "#0F62AC" },
  { name: "Part-time", value: 20, color: "#DA251C" },
  { name: "Thực tập", value: 15, color: "#FFD700" },
]

const companies = [
  { name: "FPT Software", booth: "A12", payment: "Đã thanh toán", status: "success" },
  { name: "Viettel", booth: "A13", payment: "Đã thanh toán", status: "success" },
  { name: "VNG Corp", booth: "B05", payment: "Chờ xử lý", status: "warning" },
  { name: "Bosch Vietnam", booth: "A08", payment: "Đã thanh toán", status: "success" },
]

export function UniversityAdminContent() {
  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Analytics Section */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Tỷ lệ sinh viên có việc làm (Phân theo Khoa)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={employmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="major" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rate" fill="#0F62AC" name="Tỷ lệ (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Lưu lượng truy cập hệ thống (Monthly)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#0F62AC" strokeWidth={2} name="Lượt truy cập" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Phân loại Công việc</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={jobTypeData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                  {jobTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {jobTypeData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Giám sát Job Fair trực tiếp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-3xl font-bold text-primary">2,458</p>
                <p className="text-sm text-muted-foreground">Sinh viên tham gia</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-3xl font-bold text-green-600">52</p>
                <p className="text-sm text-muted-foreground">Doanh nghiệp</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-3xl font-bold text-orange-600">85%</p>
                <p className="text-sm text-muted-foreground">Mức độ hài lòng</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Khu vực A (VIP)</span>
                <span className="text-sm font-semibold text-red-600">120% Đầy</span>
              </div>
              <Progress value={120} className="h-3" />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Khu vực B (Standard)</span>
                <span className="text-sm font-semibold text-orange-600">80%</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Khu vực C (Startup)</span>
                <span className="text-sm font-semibold text-green-600">45%</span>
              </div>
              <Progress value={45} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Alert */}
      <Card className="mb-8 border-l-4 border-l-red-600">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1">Cảnh báo: Khu vực A đang quá tải người (120%)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Số lượng sinh viên vượt mức cho phép. Đề nghị điều phối hoặc mở rộng khu vực.
              </p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Xử lý ngay
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách Doanh nghiệp tham gia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold">Công ty</th>
                  <th className="text-left p-3 text-sm font-semibold">Booth</th>
                  <th className="text-left p-3 text-sm font-semibold">Trạng thái</th>
                  <th className="text-left p-3 text-sm font-semibold">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, idx) => (
                  <tr key={idx} className="border-t hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-medium text-sm">{company.name}</td>
                    <td className="p-3 text-sm">
                      <Badge variant="outline">{company.booth}</Badge>
                    </td>
                    <td className="p-3">
                      {company.status === "success" ? (
                        <Badge className="bg-green-100 text-green-700 border-0">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {company.payment}
                        </Badge>
                      ) : (
                        <Badge className="bg-orange-100 text-orange-700 border-0">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {company.payment}
                        </Badge>
                      )}
                    </td>
                    <td className="p-3">
                      <Button size="sm" variant="outline">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
