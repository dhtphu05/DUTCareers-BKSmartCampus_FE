"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flag, MessageCircle, Bell, User } from "lucide-react"

const morningSchedule = [
  {
    time: "07:30",
    title: "Check-in & Khai mạc",
    icon: Flag,
    speaker: null,
    description: "Đăng ký tham dự và lễ khai mạc sự kiện",
  },
  {
    time: "09:00",
    title: "Workshop: AI trong kỷ nguyên mới",
    icon: User,
    speaker: "Diễn giả từ FPT Software",
    description: "Khám phá xu hướng AI và ứng dụng trong công nghiệp",
    image: "/ai-workshop.png",
  },
  {
    time: "10:30",
    title: "Talkshow: Chinh phục nhà tuyển dụng",
    icon: MessageCircle,
    speaker: "Ông Nguyễn Văn B - HR Director Viettel",
    description: "Bí quyết để gây ấn tượng trong phỏng vấn",
  },
]

const afternoonSchedule = [
  {
    time: "13:00",
    title: "Phiên trao đổi với doanh nghiệp",
    icon: MessageCircle,
    speaker: null,
    description: "Gặp gỡ trực tiếp các nhà tuyển dụng",
  },
  {
    time: "14:30",
    title: "Workshop: Kỹ năng mềm trong công việc",
    icon: User,
    speaker: "Chuyên gia từ LG Display",
    description: "Phát triển kỹ năng giao tiếp và làm việc nhóm",
  },
  {
    time: "16:00",
    title: "Trao giải & Bế mạc",
    icon: Flag,
    speaker: null,
    description: "Trao giải Lucky Draw và kết thúc sự kiện",
  },
]

export function EventTimeline() {
  const [activeTab, setActiveTab] = useState("morning")

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Lịch trình Sự kiện</h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="morning" className="text-base font-semibold">
              Sáng (Morning)
            </TabsTrigger>
            <TabsTrigger value="afternoon" className="text-base font-semibold">
              Chiều (Afternoon)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="morning">
            <TimelineList schedule={morningSchedule} />
          </TabsContent>

          <TabsContent value="afternoon">
            <TimelineList schedule={afternoonSchedule} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function TimelineList({ schedule }: { schedule: typeof morningSchedule }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {schedule.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 mb-2">{item.time}</Badge>
                <item.icon className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                {item.speaker && (
                  <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {item.speaker}
                  </p>
                )}
                <p className="text-muted-foreground mb-3">{item.description}</p>
                {item.image && (
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="rounded-lg w-full max-w-sm h-32 object-cover mb-3"
                  />
                )}
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Bell className="h-4 w-4" />
                  Nhắc nhở tôi
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
