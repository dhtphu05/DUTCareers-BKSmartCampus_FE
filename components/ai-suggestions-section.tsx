"use client"

import { Sparkles, TrendingUp, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const aiJobs = [
  {
    id: 1,
    title: "Thực tập sinh Phát triển Web",
    company: "FPT Software",
    logo: "/fpt-logo.png",
    location: "Đà Nẵng",
    salary: "8 - 12 Triệu",
    match: 95,
    missingSkills: [],
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "Junior Backend Developer",
    company: "Viettel Digital",
    logo: "/viettel-logo.jpg",
    location: "Đà Nẵng",
    salary: "12 - 18 Triệu",
    match: 88,
    missingSkills: ["Docker"],
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 3,
    title: "Mobile Developer Intern",
    company: "Enclave",
    logo: "/tech-company-logo.jpg",
    location: "Remote",
    salary: "10 - 15 Triệu",
    match: 92,
    missingSkills: [],
    tags: ["Flutter", "Dart", "Firebase"],
  },
]

export function AISuggestionsSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-amber-50/30 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header with AI Badge */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Gợi ý việc làm từ AI cho Nguyễn Văn A</h2>
          </div>
          <p className="text-slate-600 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Dựa trên hồ sơ GPA 3.2 và kỹ năng của bạn
          </p>
        </div>

        {/* AI Job Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {aiJobs.map((job) => (
            <Card
              key={job.id}
              className="group relative overflow-hidden border-2 border-amber-200/50 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />

              <div className="p-6 space-y-5">
                {/* Match Score Circle */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-14 w-14 rounded-xl border-2 border-slate-100 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-800 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-slate-600">{job.company}</p>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    <svg className="h-16 w-16 -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-slate-100"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - job.match / 100)}`}
                        className="text-green-500 transition-all duration-1000"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-green-600">{job.match}%</span>
                      <span className="text-[10px] text-slate-500">Match</span>
                    </div>
                  </div>
                </div>

                {/* Missing Skills Alert */}
                {job.missingSkills.length > 0 && (
                  <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 border border-amber-200">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-medium text-amber-900">Thiếu: </span>
                      <span className="text-amber-700">{job.missingSkills.join(", ")}</span>
                    </div>
                  </div>
                )}

                {/* Job Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{job.location}</span>
                    <span className="font-bold text-red-600">{job.salary}</span>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 border-0 px-2.5 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl h-11">
                  Ứng tuyển ngay
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
