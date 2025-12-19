"use client"

import { MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ViewType } from "@/app/page"

interface WorkshopsSectionProps {
  setCurrentView: (view: ViewType) => void
}

const workshops = [
  {
    id: 1,
    title: "CV Clinic - Sửa CV cùng FPT Software",
    date: "15 THG 12",
    location: "Hội trường F",
    registered: 120,
    image: "/professional-workshop-event.jpg",
  },
  {
    id: 2,
    title: "Workshop Java Spring Boot với Viettel",
    date: "22 THG 12",
    location: "Phòng Lab A203",
    registered: 85,
    image: "/coding-workshop-java.jpg",
  },
  {
    id: 3,
    title: "Kỹ năng phỏng vấn cùng Google Engineer",
    date: "28 THG 12",
    location: "Online (Zoom)",
    registered: 240,
    image: "/interview-skills-workshop.jpg",
  },
  {
    id: 4,
    title: "Thiết kế hệ thống với Senior từ Amazon",
    date: "05 THG 01",
    location: "Hội trường C",
    registered: 156,
    image: "/system-design-workshop.jpg",
  },
]

export function WorkshopsSection({ setCurrentView }: WorkshopsSectionProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Sự kiện & Workshop nổi bật</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop) => (
            <Card
              key={workshop.id}
              onClick={() => setCurrentView("event-hub")}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Floating Date Badge */}
                <Badge className="absolute top-3 left-3 bg-white text-slate-900 border-0 shadow-lg px-3 py-1.5 font-semibold">
                  {workshop.date}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="font-semibold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-800 transition-colors">
                  {workshop.title}
                </h3>

                {/* Meta Info */}
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span>{workshop.registered} đã đăng ký</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-blue-800 text-blue-800 hover:bg-blue-50 rounded-xl bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentView("event-hub")
                  }}
                >
                  Đăng ký ngay
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
