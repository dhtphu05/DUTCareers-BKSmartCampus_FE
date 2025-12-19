"use client"

import { Briefcase, FileText, Eye, Star, Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const candidates = [
  {
    id: 1,
    name: "Nguyễn Văn Huy",
    avatar: "/placeholder-user.jpg",
    match: 92,
    major: "CNTT",
    gpa: 3.5,
    skills: ["React", "Node.js"],
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    avatar: "/placeholder-user.jpg",
    match: 88,
    major: "CNTT",
    gpa: 3.3,
    skills: ["Java", "Spring"],
  },
  {
    id: 3,
    name: "Lê Minh Tuấn",
    avatar: "/placeholder-user.jpg",
    match: 85,
    major: "Xây dựng",
    gpa: 3.2,
    skills: ["AutoCAD", "Revit"],
  },
]

export function RecruiterDashboardContent() {
  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="border-l-4 border-l-blue-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tin tuyển dụng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">24</p>
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">CV Mới</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">156</p>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-orange-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Lượt xem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">2.4K</p>
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-yellow-600">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Đánh giá</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">4.8</p>
              <Star className="h-8 w-8 text-yellow-600 fill-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Board ATS */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bảng quản lý ứng viên (ATS)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Mới nhận", "Đã duyệt CV", "Phỏng vấn", "Offer", "Tuyển dụng"].map((stage, idx) => (
              <div key={stage} className="bg-muted/50 rounded-lg p-4 min-h-[300px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-sm">{stage}</h3>
                  <Badge variant="secondary">{[12, 8, 5, 3, 2][idx]}</Badge>
                </div>
                <div className="space-y-3">
                  {candidates.slice(0, idx === 0 ? 3 : 2).map((candidate) => (
                    <Card
                      key={candidate.id}
                      className="p-3 bg-white border-border hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm line-clamp-1">{candidate.name}</p>
                          <p className="text-xs text-muted-foreground">{candidate.major}</p>
                          <Badge className="mt-2 bg-green-100 text-green-700 border-0 text-xs">
                            Match {candidate.match}%
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 text-xs bg-transparent">
                        Xem CV
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Talent Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Tìm kiếm Nhân tài
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <Input placeholder="Tìm theo kỹ năng, chuyên ngành..." className="flex-1" />
            <Select defaultValue="all">
              <SelectTrigger className="lg:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả GPA</SelectItem>
                <SelectItem value="high">GPA &gt; 3.5</SelectItem>
                <SelectItem value="mid">GPA 3.0-3.5</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-primary hover:bg-primary-dark">Tìm kiếm</Button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold">Ứng viên</th>
                  <th className="text-left p-3 text-sm font-semibold">Chuyên ngành</th>
                  <th className="text-left p-3 text-sm font-semibold">GPA</th>
                  <th className="text-left p-3 text-sm font-semibold">Kỹ năng</th>
                  <th className="text-left p-3 text-sm font-semibold">Khớp</th>
                  <th className="text-left p-3 text-sm font-semibold">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-t hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">{candidate.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{candidate.major}</td>
                    <td className="p-3 text-sm font-semibold">{candidate.gpa}</td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className="bg-green-100 text-green-700 border-0">{candidate.match}%</Badge>
                    </td>
                    <td className="p-3">
                      <Button size="sm" variant="outline">
                        Xem Profile
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
