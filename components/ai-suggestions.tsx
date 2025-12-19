"use client"

import { Sparkles, TrendingUp, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const suggestedJobs = [
  {
    id: 1,
    title: "Thực tập sinh Lập trình Java",
    company: "FPT Software",
    logo: "/fpt-logo.jpg",
    match: 95,
    salary: "8-10 triệu",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Viettel Digital",
    logo: "/viettel-logo.png",
    match: 92,
    salary: "12-15 triệu",
    skills: ["ReactJS", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Mobile App Developer",
    company: "VNG Corporation",
    logo: "/vng-logo.jpg",
    match: 88,
    salary: "10-13 triệu",
    skills: ["Flutter", "Dart", "Firebase"],
  },
]

export function AISuggestions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="border-amber-200 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/50 shadow-lg rounded-2xl">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-2.5">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Gợi ý dành riêng cho bạn</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Dựa trên hồ sơ <span className="font-semibold">Khoa CNTT - GPA 3.2</span>
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {suggestedJobs.map((job) => (
                <Card
                  key={job.id}
                  className="bg-white border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden group"
                >
                  <CardContent className="p-5">
                    <div className="mb-4 flex items-start justify-between">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-12 w-12 rounded-xl object-cover border border-slate-100"
                      />
                      <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 rounded-full px-3 py-1">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {job.match}%
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {job.title}
                    </h3>
                    <p className="mb-2 text-sm text-slate-600">{job.company}</p>
                    <p className="mb-4 text-sm font-semibold text-rose-600">{job.salary}</p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-slate-100 text-slate-700 rounded-full px-2.5 py-0.5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-rose-600 text-white hover:bg-rose-700 rounded-xl shadow-md hover:shadow-lg transition-all group"
                    >
                      Ứng tuyển ngay
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
