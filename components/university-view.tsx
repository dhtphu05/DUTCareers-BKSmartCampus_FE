"use client"

import { Building2, Users, Briefcase, TrendingUp, CheckCircle, Clock, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function UniversityView() {
  const stats = [
    {
      label: "Sinh viên đã có việc",
      value: "87%",
      icon: Users,
      trend: "+12%",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Doanh nghiệp liên kết",
      value: "250+",
      icon: Building2,
      trend: "+35",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Tin tuyển dụng",
      value: "1.2k",
      icon: Briefcase,
      trend: "+120",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Mức lương TB",
      value: "15M",
      icon: TrendingUp,
      trend: "+2M",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ]

  const pendingApprovals = [
    {
      company: "VNG Corporation",
      type: "Tin tuyển dụng",
      position: "Senior Backend Engineer",
      date: "10/05/2025",
      status: "pending",
    },
    {
      company: "Grab Vietnam",
      type: "Sự kiện Career Day",
      position: "Workshop: Phỏng vấn kỹ thuật",
      date: "12/05/2025",
      status: "pending",
    },
    {
      company: "Samsung R&D",
      type: "Tin tuyển dụng",
      position: "IoT Developer Intern",
      date: "11/05/2025",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Nhà trường</h1>
          <p className="text-muted-foreground">Quản lý việc làm và đối tác doanh nghiệp</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark text-white rounded-xl">
          <FileText className="mr-2 h-4 w-4" />
          Báo cáo tháng
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="border-border bg-white hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge className="bg-green-50 text-green-700 border-green-200">{stat.trend}</Badge>
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Pending Approvals Queue */}
      <Card className="border-border bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Yêu cầu chờ duyệt</h2>
            <Badge className="bg-accent/10 text-accent border-accent/20">3 mới</Badge>
          </div>

          <div className="space-y-3">
            {pendingApprovals.map((item, idx) => (
              <Card key={idx} className="border border-border hover:border-primary transition-colors bg-secondary/30">
                <div className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {item.company[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground">{item.company}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{item.position}</p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary hover:bg-primary-dark text-white rounded-xl">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Duyệt
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-xl bg-transparent">
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* Live Job Fair Monitor */}
      <Card className="border-border bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-xl">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Job Fair 2025 - Theo dõi trực tiếp</h2>
              <p className="text-sm text-blue-200">Cập nhật mỗi 30 giây</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-sm text-blue-200 mb-2">Sinh viên tham gia</p>
              <p className="text-4xl font-bold">2,847</p>
              <Badge className="bg-green-500/20 text-green-300 border-green-400/30 mt-2">+124 trong 1h</Badge>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-sm text-blue-200 mb-2">CV đã nộp</p>
              <p className="text-4xl font-bold">1,523</p>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mt-2">+87 trong 1h</Badge>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-sm text-blue-200 mb-2">Booth hoạt động</p>
              <p className="text-4xl font-bold">98/120</p>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mt-2">82% tỷ lệ</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
