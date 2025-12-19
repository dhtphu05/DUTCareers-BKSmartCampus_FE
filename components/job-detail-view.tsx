"use client"

import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Users, Building2, BookOpen, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Job } from "@/app/page"

interface JobDetailViewProps {
  job: Job
  onBack: () => void
}

export function JobDetailView({ job, onBack }: JobDetailViewProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={onBack} className="mb-6 -ml-2 hover:bg-slate-100 rounded-xl">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại danh sách việc làm
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <Card className="border-0 shadow-lg">
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    className="h-20 w-20 rounded-2xl border-2 border-slate-100 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
                        <p className="text-lg text-slate-600 flex items-center gap-2">
                          <Building2 className="h-5 w-5" />
                          {job.company}
                        </p>
                      </div>
                      {job.isHot && (
                        <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 px-3 py-1.5">
                          HOT
                        </Badge>
                      )}
                    </div>

                    {/* Key Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Mức lương</p>
                          <p className="font-bold text-red-600">{job.salary}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Địa điểm</p>
                          <p className="font-semibold text-slate-900">{job.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Loại hình</p>
                          <p className="font-semibold text-slate-900">{job.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 rounded-lg">
                          <Clock className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Đăng</p>
                          <p className="font-semibold text-slate-900">{job.postedTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} className="bg-blue-50 text-blue-700 border-0 px-4 py-2 text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Job Description */}
            <Card className="border-0 shadow-lg">
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    Mô tả công việc
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <ul className="space-y-2 text-slate-700">
                      <li>Tham gia phát triển các dự án phần mềm theo yêu cầu của khách hàng</li>
                      <li>Phối hợp với team để phân tích, thiết kế và triển khai giải pháp</li>
                      <li>Viết code clean, có khả năng mở rộng và bảo trì tốt</li>
                      <li>Tham gia review code và đóng góp ý kiến cải thiện sản phẩm</li>
                      <li>Nghiên cứu và áp dụng công nghệ mới vào dự án</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-green-600" />
                    Yêu cầu ứng viên
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <ul className="space-y-2 text-slate-700">
                      <li>Sinh viên năm 3, 4 hoặc mới tốt nghiệp ngành CNTT, Điện tử, Cơ khí</li>
                      <li>Có kiến thức về {job.tags.join(", ")}</li>
                      <li>GPA từ 2.8 trở lên (ưu tiên 3.2+)</li>
                      <li>Kỹ năng làm việc nhóm tốt, trách nhiệm cao</li>
                      <li>Có khả năng đọc hiểu tài liệu tiếng Anh</li>
                      <li>Ưu tiên ứng viên có kinh nghiệm làm việc với Git, Agile/Scrum</li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Quyền lợi</h2>
                  <div className="prose prose-slate max-w-none">
                    <ul className="space-y-2 text-slate-700">
                      <li>Lương cạnh tranh: {job.salary} (thỏa thuận theo năng lực)</li>
                      <li>Làm việc trong môi trường chuyên nghiệp, năng động</li>
                      <li>Được đào tạo và hướng dẫn bởi các Senior nhiều kinh nghiệm</li>
                      <li>Cơ hội thăng tiến rõ ràng, chuyển full-time sau 3-6 tháng</li>
                      <li>Team building, du lịch hàng năm</li>
                      <li>Bảo hiểm đầy đủ theo quy định</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="border-0 shadow-lg sticky top-20">
              <div className="p-6 space-y-4">
                <Button className="w-full h-12 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Ứng tuyển ngay
                </Button>
                <Button variant="outline" className="w-full h-12 border-2 border-slate-200 rounded-xl bg-transparent">
                  Lưu tin
                </Button>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Số lượng tuyển:</span>
                    <span className="font-semibold text-slate-900">3 - 5 người</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Hạn nộp hồ sơ:</span>
                    <span className="font-semibold text-red-600">31/12/2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Đã ứng tuyển:</span>
                    <span className="font-semibold text-slate-900">47 người</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Company Info Card */}
            <Card className="border-0 shadow-lg">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Về {job.company}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {job.company} là một trong những công ty công nghệ hàng đầu Việt Nam, chuyên cung cấp giải pháp phần
                  mềm cho các doanh nghiệp trong và ngoài nước.
                </p>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Quy mô:</span>
                    <span className="font-semibold text-slate-900">500 - 1000 người</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Lĩnh vực:</span>
                    <span className="font-semibold text-slate-900">Công nghệ</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-xl bg-transparent">
                  Xem trang công ty
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
