"use client"

import { Calendar, MapPin, Users, QrCode, Camera, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export function JobFairView() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 32,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      {/* Dark Tech-themed Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-12 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative z-10">
          <Badge className="bg-accent text-white mb-4 border-0">🔥 Sự kiện lớn nhất năm</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            DUT JOB FAIR 2025
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Kết nối với hơn 100+ doanh nghiệp hàng đầu. Cơ hội việc làm và thực tập dành cho sinh viên DUT.
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-6 mb-8">
            {[
              { label: "Ngày", value: timeLeft.days },
              { label: "Giờ", value: timeLeft.hours },
              { label: "Phút", value: timeLeft.minutes },
              { label: "Giây", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] border border-white/20">
                  <div className="text-4xl font-bold">{String(item.value).padStart(2, "0")}</div>
                </div>
                <p className="text-sm text-blue-200 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8">Đăng ký ngay</Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl px-8"
            >
              Xem chương trình
            </Button>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      </section>

      {/* Interactive Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: QR Pass */}
        <Card className="border-border bg-white hover:shadow-xl transition-shadow overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-xl">
                <QrCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Vé tham dự</h3>
            </div>
            <p className="text-sm text-blue-100">Vé số: DUT2025-0123</p>
          </div>
          <div className="p-6 flex flex-col items-center">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-xl border-4 border-primary mb-4">
              <img src="/qr-code.png" alt="QR Code" className="w-40 h-40" />
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground">Nguyễn Văn A</p>
              <p className="text-sm text-muted-foreground">MSSV: 102200XXX</p>
              <p className="text-sm text-muted-foreground">Khoa CNTT</p>
            </div>
            <Button className="w-full mt-4 bg-primary hover:bg-primary-dark rounded-xl">Tải về</Button>
          </div>
        </Card>

        {/* Card 2: Live Heatmap */}
        <Card className="border-border bg-white hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-50 rounded-xl">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bản đồ nhiệt</h3>
                <p className="text-sm text-muted-foreground">Theo dõi thời gian thực</p>
              </div>
            </div>

            {/* Visual Heatmap */}
            <div className="relative bg-gray-100 rounded-xl p-4 mb-4 h-48">
              <img src="/venue-floor-plan.png" alt="Venue Map" className="w-full h-full object-cover rounded-lg" />
              {/* Overlay indicators */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium">Khu A: Vừa phải</span>
              </div>
              <div className="absolute top-16 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-medium">Khu B: Đông</span>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs font-medium">Khu C: Khá đông</span>
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <Badge className="bg-green-50 text-green-700 border-green-200">🟢 Ít người</Badge>
              <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">🟡 Vừa</Badge>
              <Badge className="bg-red-50 text-red-700 border-red-200">🔴 Đông</Badge>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 rounded-xl border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              Xem bản đồ chi tiết
            </Button>
          </div>
        </Card>

        {/* Card 3: Check-in Booth */}
        <Card className="border-border bg-white hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-50 rounded-xl">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Check-in Booth</h3>
                <p className="text-sm text-muted-foreground">Quét mã công ty</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-4 flex items-center justify-center h-48">
              <div className="text-center">
                <div className="mb-4 p-4 bg-white rounded-full inline-block">
                  <Camera className="h-12 w-12 text-purple-600" />
                </div>
                <p className="text-sm text-muted-foreground">Nhấn để mở camera</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Booth đã check-in:</span>
                <span className="font-bold text-primary">7/12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Điểm thưởng:</span>
                <span className="font-bold text-accent">350 XP</span>
              </div>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl">Bắt đầu quét</Button>
          </div>
        </Card>
      </div>

      {/* Event Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "Doanh nghiệp", value: "120+", icon: Users },
          { label: "Vị trí tuyển dụng", value: "500+", icon: TrendingUp },
          { label: "Sinh viên đăng ký", value: "3.2k", icon: Users },
          { label: "Ngày diễn ra", value: "28/5", icon: Calendar },
        ].map((stat, idx) => (
          <Card key={idx} className="border-border bg-white p-6 text-center">
            <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
