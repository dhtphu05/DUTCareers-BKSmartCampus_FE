"use client"

import { Briefcase, MapPin, Heart, Clock, TrendingUp, ChevronRight } from "lucide-react"
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
    <section className="py-16 lg:py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Tabs defaultValue="best" className="space-y-8">
          {/* Pills Tabs List */}
          <div className="flex justify-center">
            <TabsList className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm h-auto inline-flex gap-1">
              <TabsTrigger
                value="best"
                className="rounded-full px-6 py-2.5 text-slate-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Việc làm tốt nhất
              </TabsTrigger>
              <TabsTrigger
                value="latest"
                className="rounded-full px-6 py-2.5 text-slate-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                <Clock className="h-4 w-4 mr-2" />
                Việc làm mới nhất
              </TabsTrigger>
              <TabsTrigger
                value="internship"
                className="rounded-full px-6 py-2.5 text-slate-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all font-medium"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Thực tập
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="best" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  onClick={() => onJobClick(job)}
                  className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer rounded-2xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6">
                    {/* Company Logo with styling */}
                    <div className="flex-shrink-0">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-20 w-20 rounded-2xl border border-slate-100 shadow-sm object-contain p-1 bg-white group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 min-w-0 space-y-3 w-full">
                      <div className="space-y-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {job.title}
                          </h3>
                          {job.isHot && (
                            <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 px-2.5 py-0.5 text-xs animate-pulse">
                              HOT
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-600 text-base font-medium">{job.company}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 px-3 py-1 font-normal">
                          {job.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 px-3 py-1 font-normal flex items-center gap-1"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </Badge>
                        {/* Pastel Tags */}
                        {job.tags.map((tag, idx) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className={`border-0 px-3 py-1 font-medium ${idx % 2 === 0 ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                              }`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Salary & Action */}
                    <div className="flex-shrink-0 flex flex-row sm:flex-col items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-4">
                      <div className="text-lg font-bold text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                        {job.salary}
                      </div>

                      {/* Hidden button showing on hover */}
                      <div className="hidden lg:block opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 absolute right-6 bottom-6 sm:static sm:translate-x-0">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 rounded-xl px-6">
                          Ứng tuyển ngay <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>

                      {/* Mobile/Tablet explicit button (always visible) */}
                      <div className="lg:hidden">
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                          Chi tiết
                        </Button>
                      </div>

                      <div className="text-sm text-slate-400 font-medium group-hover:opacity-0 transition-opacity absolute bottom-6 right-6 lg:static lg:group-hover:hidden">
                        {job.postedTime}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="latest" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Reusing same structure for verification */}
              {jobs.slice(0, 3).map((job) => (
                <Card key={job.id} onClick={() => onJobClick(job)} className="p-6 cursor-pointer hover:shadow-lg transition-all"><h3 className="font-bold">{job.title}</h3></Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="internship" className="space-y-4">
            <div className="text-center py-12 text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
              Đang cập nhật danh sách thực tập...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
