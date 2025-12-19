"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, TrendingUp } from "lucide-react"

const booths = [
  { id: 1, name: "FPT Software", x: 20, y: 30, zone: "A", crowd: 95, color: "red" },
  { id: 2, name: "Viettel", x: 45, y: 30, zone: "A", crowd: 88, color: "red" },
  { id: 3, name: "VNG Corp", x: 70, y: 30, zone: "A", crowd: 92, color: "red" },
  { id: 4, name: "Bosch Vietnam", x: 20, y: 55, zone: "B", crowd: 65, color: "orange" },
  { id: 5, name: "LG Display", x: 45, y: 55, zone: "B", crowd: 58, color: "orange" },
  { id: 6, name: "CMC Global", x: 70, y: 55, zone: "B", crowd: 72, color: "orange" },
  { id: 7, name: "Gameloft", x: 20, y: 80, zone: "C", crowd: 35, color: "green" },
  { id: 8, name: "Startup A", x: 45, y: 80, zone: "C", crowd: 28, color: "green" },
]

export function InteractiveVenueMap() {
  const [hoveredBooth, setHoveredBooth] = useState<number | null>(null)

  const getBoothColor = (crowd: number) => {
    if (crowd > 80) return "#ef4444" // red
    if (crowd > 50) return "#f97316" // orange
    return "#22c55e" // green
  }

  return (
    <Card className="bg-slate-900 border-slate-700 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-400" />
            Bản đồ Hội trường (Live)
          </h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xs text-slate-300">Đông</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-xs text-slate-300">Vừa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-300">Thưa</span>
            </div>
          </div>
        </div>

        <div className="relative bg-slate-800/50 rounded-xl p-8 border-2 border-slate-700 aspect-[4/3]">
          {/* Stage */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg border-2 border-blue-400">
            MAIN STAGE
          </div>

          {/* Zone Labels */}
          <div className="absolute top-[25%] left-4 text-slate-400 font-bold text-xs">ZONE A (VIP)</div>
          <div className="absolute top-[50%] left-4 text-slate-400 font-bold text-xs">ZONE B</div>
          <div className="absolute top-[75%] left-4 text-slate-400 font-bold text-xs">ZONE C</div>

          {/* Booths */}
          {booths.map((booth) => (
            <div
              key={booth.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${booth.x}%`, top: `${booth.y}%` }}
              onMouseEnter={() => setHoveredBooth(booth.id)}
              onMouseLeave={() => setHoveredBooth(null)}
            >
              {/* Booth Circle with Heatmap */}
              <div
                className="relative h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl"
                style={{
                  backgroundColor: getBoothColor(booth.crowd),
                  boxShadow: `0 0 30px ${getBoothColor(booth.crowd)}80`,
                }}
              >
                <Users className="h-6 w-6 text-white" />

                {/* Pulse animation for crowded booths */}
                {booth.crowd > 80 && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: getBoothColor(booth.crowd) }}
                  />
                )}
              </div>

              {/* Tooltip */}
              {hoveredBooth === booth.id && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-24 bg-white rounded-lg shadow-2xl p-3 min-w-[200px] z-10 border border-slate-200">
                  <div className="text-center">
                    <p className="font-bold text-foreground mb-1">{booth.name}</p>
                    <Badge variant="secondary" className="mb-2">
                      Booth {booth.zone}
                      {booth.id}
                    </Badge>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-semibold">{booth.crowd}% Đầy</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 h-3 w-3 bg-white border-r border-b border-slate-200" />
                </div>
              )}
            </div>
          ))}

          {/* Entrance */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-green-400 font-bold text-sm flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            ENTRANCE
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Xem toàn màn hình</Button>
        </div>
      </div>
    </Card>
  )
}
