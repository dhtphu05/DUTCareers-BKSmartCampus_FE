import { RecruiterSidebar } from "@/components/recruiter-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, FileText, Users, TrendingUp, Plus, ChevronRight } from "lucide-react"

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
  return (
    <div className="flex min-h-screen bg-slate-50">
      <RecruiterSidebar />

      <main className="ml-64 flex-1">
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Bảng điều khiển</h1>
              <p className="text-sm text-slate-500 mt-1">Trang chủ / Bảng điều khiển</p>
            </div>
            <Button className="bg-rose-600 text-white hover:bg-rose-700 font-semibold gap-2 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Plus className="h-5 w-5" />
              ĐĂNG TIN MỚI
            </Button>
          </div>
        </div>

        <div className="p-8 space-y-8">
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
                          className={`${
                            applicant.match >= 90
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

          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 shadow-md rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-2.5">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Tìm kiếm nhân tài (Smart Headhunting)
                  </CardTitle>
                  <p className="text-sm text-slate-600 mt-1">Sử dụng AI để tìm ứng viên phù hợp nhất</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Kỹ năng</label>
                  <input
                    type="text"
                    placeholder="VD: AutoCAD, Java..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">GPA tối thiểu</label>
                  <input
                    type="number"
                    placeholder="3.0"
                    step="0.1"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Trình độ ngoại ngữ</label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tất cả</option>
                    <option>TOEIC 600+</option>
                    <option>TOEIC 750+</option>
                    <option>IELTS 6.0+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-blue-700 text-white hover:bg-blue-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all">
                    Tìm kiếm
                  </Button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-4 py-1.5 transition-colors"
                >
                  Đã tốt nghiệp
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-4 py-1.5 transition-colors"
                >
                  Sinh viên năm 4
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-4 py-1.5 transition-colors"
                >
                  Có kinh nghiệm thực tập
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-4 py-1.5 transition-colors"
                >
                  Sẵn sàng đi công tác
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
