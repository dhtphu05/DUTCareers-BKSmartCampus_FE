"use client"

import { Sparkles, TrendingUp, Lightbulb, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const aiJobs = [
  {
    id: 1,
    title: "Thực tập sinh Phát triển Web",
    company: "FPT Software",
    logo: "/fpt-logo.png",
    location: "Đà Nẵng",
    salary: "8 - 12 Triệu",
    match: 95,
    matchColor: "text-green-500",
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
    matchColor: "text-emerald-500",
    missingSkills: [
      { name: "Docker", course: "Khóa học Docker cơ bản (Coursera)" },
      { name: "Microservices", course: "Kiến trúc Microservices (Udemy)" }
    ],
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
    matchColor: "text-green-500",
    missingSkills: [],
    tags: ["Flutter", "Dart", "Firebase"],
  },
]

export function AISuggestionsSection() {
  return (
    <section className="py-16 lg:py-20 bg-[url('/grid.svg')] bg-fixed bg-slate-50 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12 text-center text-balance space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 font-semibold text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Gợi ý thông minh từ AI CareerBot</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 pb-1">
            Việc làm "chuẩn gu" cho Nguyễn Văn A
          </h2>
          <p className="text-slate-600 flex items-center justify-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Dựa trên hồ sơ GPA 3.2 và kỹ năng của bạn
          </p>
        </div>

        {/* AI Job Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {aiJobs.map((job) => (
            <div key={job.id} className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300" />

              <Card className="relative h-full flex flex-col justify-between border-0 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="space-y-6">
                  {/* Header: Logo & Match Score */}
                  <div className="flex justify-between items-start">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-16 w-16 rounded-2xl border border-slate-100 shadow-sm object-contain bg-white p-1"
                    />

                    {/* Match Score Display */}
                    <div className="relative group/score cursor-help">
                      <div className="relative flex items-center justify-center h-14 w-14">
                        <svg className="h-full w-full -rotate-90">
                          <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-slate-100"
                          />
                          <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 24}`}
                            strokeDashoffset={`${2 * Math.PI * 24 * (1 - job.match / 100)}`}
                            className={`${job.match >= 90 ? 'text-green-500' : 'text-emerald-500'} transition-all duration-1000`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className={`text-sm font-extrabold ${job.match >= 90 ? 'text-green-600' : 'text-emerald-600'}`}>{job.match}%</span>
                        </div>
                      </div>
                      {/* Popover/Tooltip for Match details would go here */}
                    </div>
                  </div>

                  {/* Job Info */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-slate-500 font-medium">{job.company}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Learning Suggestion (Missing Skills) */}
                  {job.missingSkills.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <Lightbulb className="h-4 w-4 text-amber-500" />
                        <span>Gợi ý học tập để phù hợp 100%:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <TooltipProvider>
                          {job.missingSkills.map((skill: any) => (
                            <Tooltip key={skill.name}>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs font-semibold cursor-pointer hover:bg-amber-100 transition-colors">
                                  <BookOpen className="h-3 w-3" />
                                  {skill.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-slate-900 text-white border-0 shadow-xl p-3">
                                <p className="font-semibold text-amber-400 mb-1">Gợi ý khóa học:</p>
                                <p>{skill.course}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Stats & Button */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Mức lương</p>
                    <p className="font-bold text-slate-900">{job.salary}</p>
                  </div>
                  <Button className="bg-slate-900 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/10 hover:shadow-blue-700/20 transition-all">
                    Ứng tuyển ngay
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
