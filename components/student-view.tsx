"use client"

import { Search, MapPin, Sparkles, MapPinIcon, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function StudentView() {
  const aiMatches = [
    {
      title: "Fresher Java Developer",
      company: "FPT Software",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=FPT",
      matchScore: 95,
      salary: "12.000.000 - 18.000.000₫",
      missingSkill: "Docker",
      tags: ["Full-time", "Đà Nẵng"],
    },
    {
      title: "React Developer Intern",
      company: "Viettel Solutions",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Viettel",
      matchScore: 88,
      salary: "8.000.000 - 12.000.000₫",
      missingSkill: "TypeScript",
      tags: ["Internship", "Hà Nội"],
    },
    {
      title: "Backend NodeJS Junior",
      company: "Enclave",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Enclave",
      matchScore: 92,
      salary: "15.000.000 - 20.000.000₫",
      missingSkill: "PostgreSQL",
      tags: ["Full-time", "Đà Nẵng"],
    },
  ]

  const workshops = [
    {
      title: "CV Clinic - Sửa CV cùng HR",
      date: "12/05/2025",
      time: "14:00",
      location: "Hội trường F",
      attendees: 45,
    },
    {
      title: "Talkshow: AI & GenZ Career",
      date: "18/05/2025",
      time: "09:00",
      location: "Phòng A301",
      attendees: 120,
    },
    {
      title: "Workshop: Phỏng vấn kỹ thuật",
      date: "25/05/2025",
      time: "15:30",
      location: "Lab D",
      attendees: 60,
    },
  ]

  const jobs = [
    {
      id: 1,
      title: "Kỹ sư Cầu đường",
      company: "Tổng công ty Cầu đường bộ",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Bridge",
      salary: "15.000.000₫",
      location: "Đà Nẵng",
      type: "Full-time",
      hot: true,
    },
    {
      id: 2,
      title: "Lập trình viên ReactJS",
      company: "LG Electronics",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=LG",
      salary: "18.000.000₫",
      location: "Hải Phòng",
      type: "Full-time",
      hot: true,
    },
    {
      id: 3,
      title: "Thực tập sinh Marketing",
      company: "Sun Group",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Sun",
      salary: "6.000.000₫",
      location: "Quảng Nam",
      type: "Internship",
      hot: false,
    },
    {
      id: 4,
      title: "Kỹ sư Điện - Tự động hóa",
      company: "Vingroup",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Vin",
      salary: "20.000.000₫",
      location: "Hà Nội",
      type: "Full-time",
      hot: true,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-12">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Kết nối Sự nghiệp - Kiến tạo Tương lai</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Khám phá hơn 5,000+ cơ hội việc làm từ các doanh nghiệp hàng đầu
          </p>

          {/* Large Search Bar */}
          <Card className="p-6 shadow-xl border-0 bg-white">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Kỹ năng (Java, React...)"
                    className="h-14 pl-12 text-base rounded-xl border-border"
                  />
                </div>
              </div>
              <div className="lg:w-64">
                <Select defaultValue="danang">
                  <SelectTrigger className="h-14 rounded-xl">
                    <MapPin className="mr-2 h-5 w-5" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="danang">Đà Nẵng</SelectItem>
                    <SelectItem value="hanoi">Hà Nội</SelectItem>
                    <SelectItem value="hcm">Hồ Chí Minh</SelectItem>
                    <SelectItem value="quangnam">Quảng Nam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl">
                Tìm kiếm
              </Button>
            </div>
          </Card>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      </section>

      {/* AI CAREER MATCH - The Highlight Section */}
      <section>
        <Card className="border-2 border-highlight bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-highlight/20 rounded-xl">
                <Sparkles className="h-6 w-6 text-highlight-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Gợi ý từ AI cho Nguyễn Văn A</h2>
                <p className="text-sm text-muted-foreground">Dựa trên GPA 3.2 và kỹ năng của bạn</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiMatches.map((match, idx) => (
                <Card
                  key={idx}
                  className="bg-white hover:-translate-y-1 transition-all duration-200 hover:shadow-xl border-border"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <img
                        src={match.logo || "/placeholder.svg"}
                        alt={match.company}
                        className="w-12 h-12 rounded-xl"
                      />
                      {/* Circular Match Score */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - match.matchScore / 100)}`}
                            className="text-primary"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{match.matchScore}%</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-2">{match.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{match.company}</p>
                    <p className="text-lg font-bold text-accent mb-4">{match.salary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {match.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-accent font-medium">
                        Thiếu: {match.missingSkill}{" "}
                        <a href="#" className="underline hover:text-accent/80">
                          Học ngay
                        </a>
                      </p>
                    </div>

                    <Button className="w-full rounded-xl bg-primary hover:bg-primary-dark">Ứng tuyển ngay</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* UPCOMING WORKSHOPS - Carousel Style */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Sự kiện sắp diễn ra</h2>
          <Button variant="ghost" className="text-primary hover:text-primary-dark">
            Xem tất cả →
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {workshops.map((workshop, idx) => (
            <Card
              key={idx}
              className="hover:-translate-y-1 transition-all duration-200 hover:shadow-xl border-border bg-white"
            >
              <div className="p-6">
                <Badge className="bg-primary text-white mb-4">{workshop.date}</Badge>
                <h3 className="font-bold text-lg text-foreground mb-4">{workshop.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{workshop.attendees} người tham gia</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 rounded-xl border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* JOB LIST - Modern Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Việc làm nổi bật</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              Mới nhất
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              Lương cao
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              Gần tôi
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="hover:-translate-y-1 hover:border-primary transition-all duration-200 hover:shadow-xl border-border bg-white cursor-pointer"
            >
              <div className="p-6">
                {job.hot && (
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white mb-3 border-0">
                    🔥 Super Hot
                  </Badge>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground truncate">{job.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{job.company}</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-accent mb-4">{job.salary}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {job.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {job.location}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
