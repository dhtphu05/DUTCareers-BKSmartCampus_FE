"use client"

import { Calendar, MapPin, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Ngày hội việc làm DUT Job Fair 2025",
    date: "20/12/2025",
    location: "Nhà Thi Đấu DUT",
    attendees: 2500,
    image: "/job-fair.png",
  },
  {
    id: 2,
    title: "Workshop: AI trong kỷ nguyên mới",
    date: "15/01/2025",
    location: "Hội trường A",
    attendees: 300,
    image: "/ai-workshop.png",
  },
  {
    id: 3,
    title: "Talkshow: Chinh phục nhà tuyển dụng",
    date: "22/01/2025",
    location: "Hội trường B",
    attendees: 400,
    image: "/career-talkshow.jpg",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Sự kiện sắp diễn ra</h2>
            <p className="text-slate-600">Cơ hội networking và học hỏi từ các chuyên gia</p>
          </div>
          <Button variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-50 gap-1 group">
            Xem tất cả
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge className="absolute left-4 top-4 bg-white/90 backdrop-blur-sm text-blue-700 border-0 rounded-full px-3 py-1 shadow-md">
                    <Calendar className="mr-1 h-3 w-3" />
                    {event.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <h3 className="mb-4 text-lg font-semibold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span>{event.attendees} người quan tâm</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 font-semibold rounded-xl transition-all bg-transparent"
                >
                  Đăng ký ngay
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
