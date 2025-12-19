"use client"

import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { ViewType } from "@/app/page"

interface WorkshopsSectionProps {
  setCurrentView: (view: ViewType) => void
}

const workshops = [
  {
    id: 1,
    title: "READY4AI_DUT | KHI SINH VIÊN BÁCH KHOA LÀM CHỦ TƯƠNG LAI CÙNG TRÍ TUỆ NHÂN TẠO",
    date: { day: "15", month: "THG 12" },
    location: "Hội trường F",
    registered: 358,
    capacity: 500,
    image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/567337698_1224458426377857_5974413929857536544_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2o4oiruzYTDv7S17zhFLmIKVXQ3-euv4gpVdDf566_mRSs3LXgHNEUAe94y6ZEqZbZhLu2nMhuIg3HI4DXUzB&_nc_ohc=lCqHsT3rW3gQ7kNvwFiUG03&_nc_oc=Adkm_BDkfppSFQokASKoWcIIaQk8vmj900CjuaEpo4422zzMD0_0mmUskPh0fB5Im8U&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=8x-kJ0MOtd81hqCE0XkVPw&oh=00_Afk0REnVEQN6-zi3GalnmdDzjJEUs0HF7AGDod7nYvLevw&oe=694B4927",
    tags: ["Interview", "CV"],
  },
  {
    id: 2,
    title: "Vòng Chung kết cuộc thi BK Smart Campus 2025 - Bứt phá giới hạn, định hình tương lai công nghệ ",
    date: { day: "28", month: "THG 12" },
    location: "Hội Trường F",
    registered: 240,
    capacity: 300,
    image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/578275540_816478774357367_6087239409276285853_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2KqE6UVA6z9GZbIPOOtWx_--xFzEAY8L_77EXMQBjwnYRRc6CgAnONclW5u7_mYWZPjNgvLk4exdXR7_IJgH7&_nc_ohc=4vQ9ZOyOk7YQ7kNvwHKvTKj&_nc_oc=AdmO5jFzgw8Tp3okIlVplAXtqAQyBxmOm865QZBYL3jsDA-jP8UNPR5BFpMzsN_GtzM&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=OSJZG_f9YS2IDpvNu0c6nA&oh=00_AfmHe9tYuSQxPFCQTOJeXgplW0-iVn0m2PWzveX88Z0-Cg&oe=694B7FB2",
    tags: ["Học thuật", "Công nghệ", "Thuyết trình", "AI"],
  },
  {
    id: 3,
    title: "LGD TRACK PROGRAM 2025",
    date: { day: "22", month: "THG 12" },
    location: "A203",
    registered: 92,
    capacity: 100,
    image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/547580227_1194616189362081_2987992703467485170_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFu8xOP7uaFgdIQQrOX_ZEpZTyrIibctoBlPKsiJty2gCasWvACk4rK5q2BLy3D4wluGo-62txLuQKBu_BPY6JU&_nc_ohc=wt36pfIlDPIQ7kNvwFyyVHr&_nc_oc=AdlbCPtOOSvLQFVs8elCq0IOH_CjmxPaJcz8MdFhG1MWcHr7c9AlCC-AhR_RHxuIDdg&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=HDkWQGHwoto5GfsyLPEdSQ&oh=00_Afmbtvg7GnlZmwC9ynRZCnZPvyUv58d0s-iO7ZPQ_cImcg&oe=694B4BD2",
    tags: ["Tech", "Java"],
  },
  
  {
    id: 4,
    title: "System Design: Thiết kế hệ thống lớn với Senior từ Amazon",
    date: { day: "05", month: "THG 01" },
    location: "Hội trường C",
    registered: 156,
    capacity: 200,
    image: "/system-design-workshop.jpg",
    tags: ["Architecture", "Advanced"],
  },
  {
    id: 5,
    title: "Career Talk: Định hướng nghề nghiệp ngành AI/Data",
    date: { day: "10", month: "THG 01" },
    location: "Hội trường A",
    registered: 45,
    capacity: 150,
    image: "/career-talkshow.jpg",
    tags: ["AI", "Career"],
  },
]

export function WorkshopsSection({ setCurrentView }: WorkshopsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Sự kiện & Workshop nổi bật
            </h2>
            <p className="text-slate-600 text-lg">Đừng bỏ lỡ các cơ hội học hỏi và kết nối doanh nghiệp</p>
          </div>
          <Button
            variant="ghost"
            className="text-blue-600 font-semibold hover:text-blue-700 hover:bg-blue-50 group w-fit"
            onClick={() => setCurrentView("event-hub")}
          >
            Xem tất cả sự kiện
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pb-4">
            {workshops.map((workshop) => (
              <CarouselItem key={workshop.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                <Card
                  onClick={() => setCurrentView("event-hub")}
                  className="group h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white rounded-2xl"
                >
                  {/* Image Area - 55% height */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    {/* Date Block */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-lg min-w-[70px]">
                      <div className="text-xl font-extrabold text-blue-700 leading-none">{workshop.date.day}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{workshop.date.month}</div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-4 right-4 flex gap-1">
                      {workshop.tags.map(tag => (
                        <Badge key={tag} className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border-0 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                        {workshop.title}
                      </h3>

                      <div className="flex items-center text-slate-500 text-sm font-medium">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        {workshop.location}
                      </div>
                    </div>

                    {/* Progress & Stats */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium">Đã đăng ký</span>
                        <span className="text-blue-700 font-bold">{workshop.registered}/{workshop.capacity}</span>
                      </div>
                      <Progress value={(workshop.registered / workshop.capacity) * 100} className="h-2 bg-slate-100" />
                      <p className="text-xs text-orange-500 font-medium italic mt-1">
                        🔥 Chỉ còn {workshop.capacity - workshop.registered} chỗ trống!
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-12 h-12 w-12 border-slate-200 bg-white hover:bg-slate-50 text-slate-700" />
            <CarouselNext className="-right-12 h-12 w-12 border-slate-200 bg-white hover:bg-slate-50 text-slate-700" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
