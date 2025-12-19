"use client"

import { Award, Download, Mail, MapPin, Phone, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function CVProfileSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Hồ sơ năng lực</h2>
          <p className="text-muted-foreground">Xây dựng hồ sơ của bạn để tăng cơ hội được nhà tuyển dụng tìm thấy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="bg-card border border-border p-6">
              <div className="text-center mb-4">
                <Avatar className="h-24 w-24 mx-auto mb-3 border-4 border-primary">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="text-2xl bg-primary text-white">NVA</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg text-foreground">Nguyễn Văn A</h3>
                <p className="text-sm text-muted-foreground mb-2">Full Stack Developer</p>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Xác thực bởi DUT
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-foreground">nguyenvana@dut.udn.vn</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-foreground">0901 234 567</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-foreground">Đà Nẵng, Việt Nam</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                <Download className="h-4 w-4 mr-2" />
                Tải CV PDF
              </Button>
            </Card>

            {/* Progress card */}
            <Card className="bg-card border border-border p-4">
              <h4 className="font-semibold text-foreground mb-3">Độ hoàn thiện hồ sơ</h4>
              <Progress value={75} className="mb-2" />
              <p className="text-sm text-muted-foreground">75% hoàn thành</p>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Card className="bg-card border border-border p-6">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Kinh nghiệm làm việc
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white" />
                  <div className="mb-1">
                    <h4 className="font-semibold text-foreground">Thực tập sinh Backend Developer</h4>
                    <p className="text-sm text-primary font-medium">FPT Software</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">06/2023 - 12/2023</p>
                  <p className="text-sm text-foreground">
                    Phát triển REST API cho hệ thống quản lý nhân sự. Sử dụng Node.js, Express, PostgreSQL.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-border pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border border-4 border-white" />
                  <div className="mb-1">
                    <h4 className="font-semibold text-foreground">Trợ lý nghiên cứu</h4>
                    <p className="text-sm text-primary font-medium">Trường ĐH Bách Khoa</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">01/2023 - 05/2023</p>
                  <p className="text-sm text-foreground">
                    Hỗ trợ nghiên cứu về AI và Machine Learning. Xử lý dữ liệu và training models.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border border-border p-6">
              <h3 className="font-bold text-lg text-foreground mb-4">Kỹ năng</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">JavaScript / TypeScript</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="bg-secondary [&>div]:bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">React / Next.js</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="bg-secondary [&>div]:bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Node.js / Express</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="bg-secondary [&>div]:bg-emerald-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">SQL / PostgreSQL</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="bg-secondary [&>div]:bg-amber-500" />
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="bg-card border border-border p-6">
              <h3 className="font-bold text-lg text-foreground mb-4">Học vấn</h3>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Kỹ sư Công nghệ Thông tin</h4>
                  <p className="text-sm text-primary font-medium">Đại học Bách Khoa - ĐHĐN</p>
                  <p className="text-sm text-muted-foreground">2020 - 2024 | GPA: 3.45/4.0</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
