"use client"

import { Briefcase, MapPin, Heart, Clock, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Job } from "@/app/page"

interface JobBoardSectionProps {
  onJobClick: (job: Job) => void
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Kỹ sư Cầu đường",
    company: "Tập đoàn Coteccons",
    logo: "/construction-company-site.png",
    location: "Đà Nẵng",
    salary: "15 - 20 Triệu",
    type: "Full-time",
    tags: ["AutoCAD", "Civil 3D", "Xây Dựng"],
    postedTime: "2 giờ trước",
    isHot: true,
  },
  {
    id: 2,
    title: "Thực tập sinh Marketing",
    company: "Sun Group",
    logo: "/sun-group-logo.jpg",
    location: "Đà Nẵng",
    salary: "5 - 8 Triệu",
    type: "Internship",
    tags: ["Social Media", "Content", "SEO"],
    postedTime: "5 giờ trước",
    isHot: false,
  },
  {
    id: 3,
    title: "Lập trình viên .NET",
    company: "LG Electronics",
    logo: "/lg-electronics-logo.jpg",
    location: "Hải Châu, Đà Nẵng",
    salary: "18 - 25 Triệu",
    type: "Full-time",
    tags: ["C#", ".NET Core", "SQL Server"],
    postedTime: "1 ngày trước",
    isHot: true,
  },
  {
    id: 4,
    title: "Business Analyst",
    company: "Bosch Global Software",
    logo: "/bosch-logo.jpg",
    location: "Ngũ Hành Sơn, Đà Nẵng",
    salary: "12 - 18 Triệu",
    type: "Full-time",
    tags: ["SQL", "Power BI", "Agile"],
    postedTime: "3 giờ trước",
    isHot: false,
  },
  {
    id: 5,
    title: "Frontend Developer (React)",
    company: "Enclave",
    logo: "/tech-startup-logo.png",
    location: "Remote",
    salary: "15 - 22 Triệu",
    type: "Full-time",
    tags: ["React", "TypeScript", "Tailwind"],
    postedTime: "4 giờ trước",
    isHot: true,
  },
  {
    id: 6,
    title: "Kế toán tổng hợp",
    company: "KPMG Vietnam",
    logo: "/kpmg-logo.jpg",
    location: "Đà Nẵng",
    salary: "10 - 15 Triệu",
    type: "Full-time",
    tags: ["Excel", "SAP", "Thuế"],
    postedTime: "1 ngày trước",
    isHot: false,
  },
]

export function JobBoardSection({ onJobClick }: JobBoardSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Tabs defaultValue="best" className="space-y-6">
          <TabsList className="bg-slate-100 p-1 rounded-xl">
            <TabsTrigger
              value="best"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm px-6"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Việc làm tốt nhất
            </TabsTrigger>
            <TabsTrigger
              value="latest"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm px-6"
            >
              <Clock className="h-4 w-4 mr-2" />
              Việc làm mới nhất
            </TabsTrigger>
            <TabsTrigger
              value="internship"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm px-6"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Thực tập
            </TabsTrigger>
          </TabsList>

          <TabsContent value="best" className="space-y-4">
            {jobs.map((job) => (
              <Card
                key={job.id}
                onClick={() => onJobClick(job)}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-6 p-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-16 w-16 rounded-xl border-2 border-slate-100 object-cover"
                    />
                  </div>

                  {/* Job Info */}
                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-800 transition-colors">
                          {job.title}
                        </h3>
                        {job.isHot && (
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 px-2 py-0.5 text-xs">
                            HOT
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-600">{job.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-0 px-3 py-1">
                        {job.type}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 border-0 px-3 py-1 flex items-center gap-1"
                      >
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 border-0 px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {job.postedTime}
                    </p>
                  </div>

                  <div className="flex-shrink-0 text-right space-y-3">
                    <div className="text-xl font-bold text-red-600">{job.salary}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-xl border border-slate-200 hover:border-red-500 hover:text-red-500"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="latest" className="space-y-4">
            <div className="text-center py-12 text-slate-500">Nội dung việc làm mới nhất...</div>
          </TabsContent>

          <TabsContent value="internship" className="space-y-4">
            <div className="text-center py-12 text-slate-500">Nội dung thực tập...</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
