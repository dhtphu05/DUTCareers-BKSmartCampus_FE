"use client"

import { MapPin, Users, TrendingUp, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNavBar } from "@/components/mobile-nav-bar"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
        <h1 className="text-2xl font-bold text-center">Bản đồ Sự kiện</h1>
        <p className="text-center text-sm text-white/80 mt-1">Nhà Thi Đấu DUT - Live Heatmap</p>
      </div>

      {/* Legend */}
      <div className="p-4 bg-muted/30">
        <div className="flex justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span>Đông đúc</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <span>Trung bình</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span>Thoáng</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="p-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative bg-muted" style={{ paddingBottom: "100%" }}>
              {/* Floor Plan */}
              <div className="absolute inset-4">
                {/* Zone A - High Traffic (Red) */}
                <div className="absolute left-0 top-0 w-1/2 h-1/3 bg-red-500/40 rounded-lg border-2 border-red-500 p-3 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-red-500 text-white mb-2">Zone A</Badge>
                    <p className="text-xs font-bold">FPT, Viettel, LG</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-red-700">
                    <Users className="h-3 w-3" />
                    <span>Đông đúc</span>
                  </div>
                </div>

                {/* Zone B - Medium Traffic (Yellow) */}
                <div className="absolute right-0 top-0 w-1/2 h-1/3 bg-yellow-500/40 rounded-lg border-2 border-yellow-500 p-3 flex flex-col justify-between ml-2">
                  <div>
                    <Badge className="bg-yellow-500 text-black mb-2">Zone B</Badge>
                    <p className="text-xs font-bold">VNG, Thaco</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-yellow-700">
                    <Users className="h-3 w-3" />
                    <span>Trung bình</span>
                  </div>
                </div>

                {/* Zone C - Low Traffic (Green) */}
                <div className="absolute left-0 top-1/3 w-1/2 h-1/3 bg-green-500/40 rounded-lg border-2 border-green-500 p-3 flex flex-col justify-between mt-2">
                  <div>
                    <Badge className="bg-green-500 text-white mb-2">Zone C</Badge>
                    <p className="text-xs font-bold">SMEs, Startups</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-green-700">
                    <Users className="h-3 w-3" />
                    <span>Thoáng</span>
                  </div>
                </div>

                {/* Zone D - Workshop Area */}
                <div className="absolute right-0 top-1/3 w-1/2 h-1/3 bg-blue-500/40 rounded-lg border-2 border-blue-500 p-3 flex flex-col justify-between mt-2 ml-2">
                  <div>
                    <Badge className="bg-primary text-white mb-2">Zone D</Badge>
                    <p className="text-xs font-bold">Workshop & Talks</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-700">
                    <Users className="h-3 w-3" />
                    <span>Sắp bắt đầu</span>
                  </div>
                </div>

                {/* Food Court */}
                <div className="absolute left-0 bottom-0 w-1/3 h-1/4 bg-gray-300 rounded-lg border-2 border-gray-500 p-2 flex items-center justify-center mt-2">
                  <p className="text-xs font-bold text-center">Food Court</p>
                </div>

                {/* Registration Desk */}
                <div className="absolute left-1/3 bottom-0 w-1/3 h-1/4 bg-highlight/60 rounded-lg border-2 border-highlight p-2 flex items-center justify-center mt-2 ml-2">
                  <p className="text-xs font-bold text-center">Registration</p>
                </div>

                {/* Rest Area */}
                <div className="absolute right-0 bottom-0 w-1/3 h-1/4 bg-gray-300 rounded-lg border-2 border-gray-500 p-2 flex items-center justify-center mt-2 ml-2">
                  <p className="text-xs font-bold text-center">Rest Area</p>
                </div>

                {/* My Location - Pulsing Dot */}
                <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-lg" />
                    <div className="absolute inset-0 h-4 w-4 rounded-full bg-blue-400 animate-ping" />
                  </div>
                  <Badge className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] whitespace-nowrap">
                    <Navigation className="h-2 w-2 mr-1" />
                    Bạn ở đây
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">5,420</div>
                  <div className="text-xs text-muted-foreground">Tổng Check-in</div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <Badge className="mt-2 bg-green-100 text-green-700 text-xs">
                <span className="mr-1">↑</span> +120 (10 phút qua)
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">2,100</div>
                  <div className="text-xs text-muted-foreground">Hồ sơ đã nộp</div>
                </div>
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <Badge className="mt-2 bg-red-100 text-accent text-xs">
                <span className="mr-1">↑</span> +45 (10 phút qua)
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Popular Booths */}
        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Gian hàng HOT nhất
            </h3>
            <div className="space-y-2">
              {[
                { name: "FPT Software", zone: "A1-A3", visitors: 450 },
                { name: "Viettel Digital", zone: "B1-B3", visitors: 380 },
                { name: "LG Display", zone: "C1-C3", visitors: 320 },
              ].map((booth, i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b pb-2 last:border-0">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {booth.zone}
                    </Badge>
                    <span className="font-medium">{booth.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{booth.visitors}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <MobileNavBar />
    </div>
  )
}
