"use client"

import { useState } from "react"
import { QrCode, Camera, Gift, Calendar, CheckCircle, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function MobileEventPass() {
  const [activeTab, setActiveTab] = useState<"ticket" | "scan" | "rewards">("ticket")
  const visitedBooths = 3
  const totalBooths = 5

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Boarding Pass Style Ticket */}
      {activeTab === "ticket" && (
        <div className="space-y-4">
          <Card className="bg-white shadow-2xl overflow-hidden">
            {/* Top Section - Blue Gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">DUT JOB FAIR</h2>
                    <p className="text-sm text-blue-100">2025 Premium Pass</p>
                  </div>
                </div>
                <Badge className="bg-yellow-400 text-yellow-900 border-0 font-bold">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  VERIFIED
                </Badge>
              </div>
            </div>

            {/* Perforated Edge */}
            <div className="h-4 bg-gradient-to-r from-transparent via-slate-200 to-transparent relative">
              <div className="absolute inset-0 flex justify-around items-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-3 w-3 rounded-full bg-slate-100 border-2 border-slate-300" />
                ))}
              </div>
            </div>

            {/* QR Code Section */}
            <div className="p-6 bg-white">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="QR Code"
                    className="h-48 w-48 border-4 border-slate-200 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg" />
                </div>
              </div>

              {/* Student Info */}
              <div className="space-y-3 border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Họ và tên</span>
                  <span className="font-bold text-foreground">Nguyễn Văn Huy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Mã sinh viên</span>
                  <span className="font-bold text-foreground">102200001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Khoa</span>
                  <span className="font-bold text-foreground">Công nghệ thông tin</span>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-6 flex justify-center">
                <div className="h-16 w-full bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded flex items-center justify-center">
                  <span className="text-white font-mono text-xs tracking-widest">|||| || ||| | || |||| |</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4">
            <p className="text-sm text-white text-center">
              Xuất trình mã QR tại các gian hàng để ứng tuyển và nhận quà
            </p>
          </Card>
        </div>
      )}

      {/* Scan Mode */}
      {activeTab === "scan" && (
        <div className="space-y-4">
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="aspect-square bg-slate-900 flex items-center justify-center relative">
              <div className="absolute inset-8 border-4 border-blue-500 rounded-2xl">
                <div className="absolute top-0 left-0 h-8 w-8 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 h-8 w-8 border-t-4 border-r-4 border-blue-400 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-blue-400 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-blue-400 rounded-br-2xl" />
              </div>
              <Camera className="h-16 w-16 text-blue-400" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-white mb-2">Quét mã QR gian hàng</h3>
              <p className="text-sm text-slate-400">Đưa mã vào khung hình để quét</p>
            </div>
          </Card>

          <Card className="bg-white p-4">
            <h3 className="font-bold mb-3">
              Gian hàng đã ghé thăm ({visitedBooths}/{totalBooths})
            </h3>
            <div className="space-y-2 mb-4">
              {["FPT Software", "Viettel", "VNG Corp"].map((company) => (
                <div key={company} className="flex items-center justify-between">
                  <span className="text-sm">{company}</span>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Rewards Mode */}
      {activeTab === "rewards" && (
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 text-white">
            <Gift className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Săn quà sự kiện</h2>
            <p className="text-sm opacity-90">Ghé thăm đủ 5 gian hàng để nhận quà lưu niệm!</p>
          </Card>

          <Card className="bg-white p-6">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Tiến độ</span>
                <span className="text-sm font-bold text-primary">
                  {visitedBooths}/{totalBooths}
                </span>
              </div>
              <Progress value={(visitedBooths / totalBooths) * 100} className="h-3" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Check-in</p>
                  <p className="text-xs text-muted-foreground">Hoàn thành</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Ghé 5 gian hàng</p>
                  <p className="text-xs text-blue-600">Đang thực hiện...</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg opacity-50">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <Gift className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Nhận quà</p>
                  <p className="text-xs text-muted-foreground">Chưa hoàn thành</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="bg-white p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Lịch trình Workshop
            </h3>
            <div className="space-y-4">
              {[
                { time: "08:00", title: "Opening Ceremony", status: "done" },
                { time: "09:30", title: "AI & ML Workshop", status: "done" },
                { time: "11:00", title: "Career Talk", status: "current" },
                { time: "14:00", title: "Technical Interview Tips", status: "upcoming" },
              ].map((event) => (
                <div key={event.time} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        event.status === "done"
                          ? "bg-green-500"
                          : event.status === "current"
                            ? "bg-blue-500 animate-pulse"
                            : "bg-slate-300"
                      }`}
                    />
                    {event.status !== "upcoming" && <div className="h-full w-0.5 bg-slate-200 mt-2" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                    <p className="font-semibold text-sm">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2">
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant={activeTab === "ticket" ? "default" : "ghost"}
            className={`flex flex-col gap-1 h-auto py-3 ${activeTab === "ticket" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveTab("ticket")}
          >
            <QrCode className="h-5 w-5" />
            <span className="text-xs">Vé QR</span>
          </Button>
          <Button
            variant={activeTab === "scan" ? "default" : "ghost"}
            className={`flex flex-col gap-1 h-auto py-3 ${activeTab === "scan" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveTab("scan")}
          >
            <Camera className="h-5 w-5" />
            <span className="text-xs">Quét mã</span>
          </Button>
          <Button
            variant={activeTab === "rewards" ? "default" : "ghost"}
            className={`flex flex-col gap-1 h-auto py-3 relative ${activeTab === "rewards" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveTab("rewards")}
          >
            <Gift className="h-5 w-5" />
            <span className="text-xs">Săn quà</span>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-[10px]">
              {visitedBooths}
            </Badge>
          </Button>
        </div>
      </div>
    </div>
  )
}
