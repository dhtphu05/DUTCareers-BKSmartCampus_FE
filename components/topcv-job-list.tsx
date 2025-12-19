"use client"

import { MapPin, DollarSign, Heart, Clock, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const listJobs = [
  {
    id: 1,
    title: "Full Stack Developer (React/Node.js)",
    company: "CMC Global",
    logo: "/placeholder.svg",
    location: "Đà Nẵng",
    salary: "15-22 triệu",
    type: "Full-time",
    hot: true,
    deadline: "Còn 5 ngày",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Kỹ sư Xây dựng Dân dụng - Công nghiệp",
    company: "Hòa Bình Construction",
    logo: "/placeholder.svg",
    location: "Đà Nẵng",
    salary: "12-18 triệu",
    type: "Full-time",
    hot: false,
    deadline: "Còn 8 ngày",
    skills: ["AutoCAD", "Revit", "ETABS"],
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    company: "Bosch Vietnam",
    logo: "/placeholder.svg",
    location: "Hồ Chí Minh",
    salary: "20-35 triệu",
    type: "Full-time",
    hot: true,
    deadline: "Còn 3 ngày",
    skills: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    id: 4,
    title: "QA Automation Engineer",
    company: "Gameloft Danang",
    logo: "/placeholder.svg",
    location: "Đà Nẵng",
    salary: "10-15 triệu",
    type: "Full-time",
    hot: false,
    deadline: "Còn 12 ngày",
    skills: ["Selenium", "Java", "Testing"],
  },
]

const topCompanies = [
  { name: "FPT Software", logo: "/fpt-logo.jpg" },
  { name: "Viettel", logo: "/viettel-logo.png" },
  { name: "VNG Corporation", logo: "/vng-logo.jpg" },
  { name: "LG Display", logo: "/lg-logo.jpg" },
]

export function TopCVJobList() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Việc làm hấp dẫn</h2>
          <p className="text-muted-foreground">Cập nhật liên tục</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Main List */}
          <div className="space-y-3">
            {listJobs.map((job) => (
              <Card
                key={job.id}
                className="group bg-card border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer"
              >
                <div className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-16 w-16 rounded-md border border-border object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {job.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        {job.hot && (
                          <Badge className="bg-gradient-to-r from-accent to-red-600 text-white border-0 flex-shrink-0">
                            HOT
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm mb-2">
                        <div className="flex items-center gap-1.5 font-semibold text-accent">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{job.deadline}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-accent">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="text-center pt-4">
              <Button variant="outline" size="lg">
                Xem thêm việc làm
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-card border border-border p-4">
              <h3 className="font-bold text-foreground mb-4">Top Công ty</h3>
              <div className="space-y-3">
                {topCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center gap-3 p-2 rounded hover:bg-secondary cursor-pointer transition-colors"
                  >
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="h-10 w-10 rounded border border-border object-cover"
                    />
                    <span className="text-sm font-medium text-foreground">{company.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Banner placeholder */}
            <Card className="bg-gradient-to-br from-primary to-blue-700 p-6 text-white border-0">
              <h4 className="font-bold mb-2">Tạo CV chuyên nghiệp</h4>
              <p className="text-sm mb-4 opacity-90">Nổi bật với nhà tuyển dụng</p>
              <Button variant="secondary" size="sm" className="w-full">
                Tạo ngay
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
