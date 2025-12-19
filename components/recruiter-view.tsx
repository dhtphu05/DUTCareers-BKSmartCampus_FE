"use client"

import { Users, Eye, FileText, CheckCircle, TrendingUp, Search, Filter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function RecruiterView() {
  const stats = [
    { label: "Tin tuyển dụng", value: "5", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "CV Mới", value: "12", icon: Users, color: "text-green-600", bg: "bg-green-50" },
    { label: "Lượt xem", value: "1.2k", icon: Eye, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Đã tuyển", value: "8", icon: CheckCircle, color: "text-orange-600", bg: "bg-orange-50" },
  ]

  const candidates = [
    {
      name: "Trần Thị Mai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
      major: "Khoa CNTT",
      gpa: "3.6",
      skills: ["React", "Node.js", "TypeScript"],
      english: "IELTS 7.0",
      verified: true,
      status: "new",
    },
    {
      name: "Nguyễn Văn Hùng",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hung",
      major: "Khoa Cơ khí",
      gpa: "3.4",
      skills: ["AutoCAD", "SolidWorks", "Python"],
      english: "TOEIC 750",
      verified: true,
      status: "review",
    },
    {
      name: "Lê Minh Tuấn",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
      major: "Khoa Xây dựng",
      gpa: "3.8",
      skills: ["Civil 3D", "SAP2000", "Revit"],
      english: "IELTS 6.5",
      verified: true,
      status: "new",
    },
    {
      name: "Phạm Thu Hà",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ha",
      major: "Khoa Điện",
      gpa: "3.5",
      skills: ["PLC", "Arduino", "MATLAB"],
      english: "TOEIC 800",
      verified: false,
      status: "contacted",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Nhà tuyển dụng</h1>
          <p className="text-muted-foreground">Quản lý tuyển dụng và ứng viên</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark text-white rounded-xl">
          <FileText className="mr-2 h-4 w-4" />
          Đăng tin mới
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="border-border bg-white hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Talent Pool Section */}
      <Card className="border-border bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Talent Pool - Ứng viên nổi bật</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Tìm ứng viên..." className="pl-10 w-64 rounded-xl" />
              </div>
              <Button variant="outline" className="rounded-xl bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Lọc
              </Button>
            </div>
          </div>

          {/* Dense Data Table */}
          <div className="space-y-3">
            {candidates.map((candidate, idx) => (
              <Card
                key={idx}
                className="border border-border hover:border-primary transition-colors cursor-pointer bg-secondary/30"
              >
                <div className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar & Info */}
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground">{candidate.name}</h3>
                        {candidate.verified && <CheckCircle className="h-4 w-4 text-green-500" title="Đã xác minh" />}
                        {candidate.status === "new" && <Badge className="bg-green-500 text-white text-xs">Mới</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {candidate.major} - GPA {candidate.gpa}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="hidden lg:flex gap-2 flex-wrap max-w-xs">
                      {candidate.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* English Level */}
                    <div className="hidden md:block">
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">{candidate.english}</Badge>
                    </div>

                    {/* Action */}
                    <Button
                      variant="outline"
                      className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      Mời phỏng vấn
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
