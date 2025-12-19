"use client"

import { Briefcase, MapPin, Clock, BookmarkPlus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobs = [
  {
    id: 1,
    title: "Kỹ sư Xây dựng Cầu đường",
    company: "Tập đoàn Coteccons",
    logo: "/construction-company-site.png",
    location: "Đà Nẵng",
    salary: "Thỏa thuận",
    type: "Full-time",
    urgent: true,
    skills: ["AutoCAD", "Tekla", "ETABS"],
  },
  {
    id: 2,
    title: "Lập trình viên Backend",
    company: "LG Display Vietnam",
    logo: "/lg-logo.jpg",
    location: "Hải Phòng",
    salary: "15-20 triệu",
    type: "Full-time",
    urgent: false,
    skills: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "Kỹ sư Cơ khí Tự động hóa",
    company: "Thaco Auto",
    logo: "/automotive-company.jpg",
    location: "Quảng Nam",
    salary: "12-18 triệu",
    type: "Full-time",
    urgent: true,
    skills: ["PLC", "SCADA", "Automation"],
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "FPT Software",
    logo: "/fpt-logo.jpg",
    location: "Đà Nẵng",
    salary: "10-15 triệu",
    type: "Full-time",
    urgent: false,
    skills: ["Python", "SQL", "PowerBI"],
  },
  {
    id: 5,
    title: "Kỹ sư Điện",
    company: "Schneider Electric",
    logo: "/electrical-company.jpg",
    location: "Đà Nẵng",
    salary: "Thỏa thuận",
    type: "Full-time",
    urgent: false,
    skills: ["Electrical Design", "AutoCAD", "PLC"],
  },
]

export function JobListings() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Việc làm hấp dẫn</h2>
            <p className="text-slate-600">Cập nhật mới nhất từ các doanh nghiệp</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-xl border-slate-200 hover:bg-slate-100 bg-transparent">
              Lọc
            </Button>
            <Button variant="outline" className="rounded-xl border-slate-200 hover:bg-slate-100 bg-transparent">
              Sắp xếp
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="group border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-5 flex-1">
                    <div className="flex-shrink-0">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-14 w-14 rounded-xl border border-slate-100 object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200 rounded-full px-3">
                            Tuyển gấp
                          </Badge>
                        )}
                      </div>
                      <p className="mb-3 font-medium text-slate-700">{job.company}</p>
                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span className="font-semibold text-rose-600">{job.salary}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-3 py-1 font-normal"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 md:flex-col md:items-end">
                    <Button className="flex-1 bg-rose-600 text-white hover:bg-rose-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all md:flex-none group">
                      Ứng tuyển
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-shrink-0 border-slate-200 hover:bg-slate-100 rounded-xl bg-transparent"
                    >
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold rounded-xl px-8 bg-transparent"
          >
            Xem thêm việc làm
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
