"use client"

import { MapPin, DollarSign, Heart, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const topJobs = [
  {
    id: 1,
    title: "Senior Backend Developer",
    company: "FPT Software",
    logo: "/fpt-logo.jpg",
    location: "Đà Nẵng",
    salary: "15-25 triệu",
    hot: true,
    deadline: "Còn 3 ngày",
  },
  {
    id: 2,
    title: "Kỹ sư Xây dựng",
    company: "Coteccons",
    logo: "/construction-company-site.png",
    location: "Đà Nẵng",
    salary: "Thỏa thuận",
    hot: true,
    deadline: "Còn 5 ngày",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    company: "VNG Corporation",
    logo: "/vng-logo.jpg",
    location: "Hà Nội",
    salary: "12-18 triệu",
    hot: false,
    deadline: "Còn 7 ngày",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Viettel Digital",
    logo: "/viettel-logo.png",
    location: "Hồ Chí Minh",
    salary: "10-15 triệu",
    hot: true,
    deadline: "Còn 2 ngày",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "LG Display Vietnam",
    logo: "/lg-logo.jpg",
    location: "Hải Phòng",
    salary: "18-30 triệu",
    hot: false,
    deadline: "Còn 10 ngày",
  },
  {
    id: 6,
    title: "Kỹ sư Cơ khí",
    company: "Thaco Auto",
    logo: "/automotive-company.jpg",
    location: "Quảng Nam",
    salary: "12-20 triệu",
    hot: true,
    deadline: "Còn 4 ngày",
  },
]

export function TopCVJobGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Việc làm tốt nhất</h2>
          <p className="text-muted-foreground">Phù hợp với bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topJobs.map((job) => (
            <Card
              key={job.id}
              className="group relative bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer overflow-hidden"
            >
              {job.hot && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-gradient-to-r from-accent to-red-600 text-white border-0 rounded-tl-none rounded-br-none">
                    Super Hot
                  </Badge>
                </div>
              )}

              <div className="p-4">
                <div className="mb-3">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    className="h-14 w-14 rounded-md border border-border object-cover"
                  />
                </div>

                <h3 className="text-base font-bold text-foreground mb-1 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
                  {job.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">{job.company}</p>

                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">{job.salary}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{job.location}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{job.deadline}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-accent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
