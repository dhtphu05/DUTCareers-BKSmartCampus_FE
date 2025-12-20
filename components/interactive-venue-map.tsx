"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Users,
  Briefcase,
  Clock,
  Navigation,
  Maximize2,
  Search,
  ZoomIn,
  ZoomOut,
  Info,
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

interface Booth {
  id: string
  companyName: string
  boothNumber: string
  tier: "diamond" | "gold" | "silver"
  crowdLevel: number
  recruitingPositions: string[]
  status: "open" | "busy" | "break"
  description: string
  isometricPath: string
  labelPosition: { x: number; y: number }
  zone: "A" | "B" | "C"
}

// Professional booth layout - clustered by zones, not scattered
const booths: Booth[] = [
  // ===== ZONE A - DIAMOND TIER (Center VIP Area) =====
  // Row 1 - Large premium booths
  {
    id: "d1",
    companyName: "FPT Software",
    boothNumber: "A1",
    tier: "diamond",
    crowdLevel: 95,
    recruitingPositions: ["Software Engineer", "AI Engineer", "DevOps Engineer", "Cloud Architect"],
    status: "open",
    description: "Leading software company in Vietnam with 30,000+ employees worldwide",
    // Large L-shaped booth
    isometricPath: "M 150 140 L 280 100 L 280 180 L 230 200 L 230 240 L 150 280 Z",
    labelPosition: { x: 215, y: 190 },
    zone: "A",
  },
  {
    id: "d2",
    companyName: "Viettel Digital",
    boothNumber: "A2",
    tier: "diamond",
    crowdLevel: 88,
    recruitingPositions: ["Backend Developer", "Frontend Developer", "Mobile Developer", "Data Engineer"],
    status: "open",
    description: "Digital transformation leader in telecommunications",
    // Large hexagonal booth
    isometricPath: "M 310 100 L 440 60 L 490 100 L 490 180 L 440 220 L 310 260 L 260 220 L 260 140 Z",
    labelPosition: { x: 375, y: 160 },
    zone: "A",
  },
  {
    id: "d3",
    companyName: "LG Display",
    boothNumber: "A3",
    tier: "diamond",
    crowdLevel: 92,
    recruitingPositions: ["Hardware Engineer", "Quality Engineer", "R&D Engineer", "Process Engineer"],
    status: "open",
    description: "World-leading display technology manufacturer",
    // Large rectangular booth with depth
    isometricPath: "M 520 60 L 650 20 L 700 60 L 700 160 L 650 200 L 520 240 Z",
    labelPosition: { x: 610, y: 130 },
    zone: "A",
  },

  // ===== ZONE B - GOLD TIER (Middle Area) =====
  // Row 2 - Medium booths in clusters
  {
    id: "g1",
    companyName: "VNG Corporation",
    boothNumber: "B1",
    tier: "gold",
    crowdLevel: 72,
    recruitingPositions: ["Game Developer", "Data Scientist", "Product Manager"],
    status: "open",
    description: "Vietnam's leading internet and online game company",
    isometricPath: "M 150 310 L 250 270 L 250 340 L 150 380 Z",
    labelPosition: { x: 200, y: 325 },
    zone: "B",
  },
  {
    id: "g2",
    companyName: "Bosch Vietnam",
    boothNumber: "B2",
    tier: "gold",
    crowdLevel: 65,
    recruitingPositions: ["Embedded Engineer", "IoT Developer", "Automotive Engineer"],
    status: "open",
    description: "Global engineering and technology solutions",
    isometricPath: "M 280 270 L 380 230 L 380 300 L 280 340 Z",
    labelPosition: { x: 330, y: 285 },
    zone: "B",
  },
  {
    id: "g3",
    companyName: "CMC Global",
    boothNumber: "B3",
    tier: "gold",
    crowdLevel: 58,
    recruitingPositions: ["Full-stack Developer", "Cloud Engineer", "DevSecOps"],
    status: "open",
    description: "Leading IT solutions and outsourcing services",
    isometricPath: "M 410 230 L 510 190 L 510 260 L 410 300 Z",
    labelPosition: { x: 460, y: 245 },
    zone: "B",
  },
  {
    id: "g4",
    companyName: "Gameloft",
    boothNumber: "B4",
    tier: "gold",
    crowdLevel: 45,
    recruitingPositions: ["Unity Developer", "3D Artist", "Game Designer"],
    status: "break",
    description: "International mobile game development studio",
    isometricPath: "M 540 190 L 640 150 L 640 220 L 540 260 Z",
    labelPosition: { x: 590, y: 205 },
    zone: "B",
  },
  {
    id: "g5",
    companyName: "Grab Vietnam",
    boothNumber: "B5",
    tier: "gold",
    crowdLevel: 68,
    recruitingPositions: ["Backend Engineer", "Mobile Engineer", "Data Analyst"],
    status: "open",
    description: "Southeast Asia's leading super app",
    isometricPath: "M 670 150 L 770 110 L 770 180 L 670 220 Z",
    labelPosition: { x: 720, y: 165 },
    zone: "B",
  },

  // ===== ZONE C - SILVER TIER (Outer Area) =====
  // Row 3 - Small standard booths in long rows
  {
    id: "s1",
    companyName: "Tech Startup A",
    boothNumber: "C1",
    tier: "silver",
    crowdLevel: 35,
    recruitingPositions: ["Junior Developer", "Intern"],
    status: "open",
    description: "Innovative fintech startup",
    isometricPath: "M 150 410 L 230 380 L 230 430 L 150 460 Z",
    labelPosition: { x: 190, y: 420 },
    zone: "C",
  },
  {
    id: "s2",
    companyName: "Tech Startup B",
    boothNumber: "C2",
    tier: "silver",
    crowdLevel: 28,
    recruitingPositions: ["Frontend Intern", "Marketing Intern"],
    status: "open",
    description: "E-commerce platform startup",
    isometricPath: "M 250 380 L 330 350 L 330 400 L 250 430 Z",
    labelPosition: { x: 290, y: 390 },
    zone: "C",
  },
  {
    id: "s3",
    companyName: "Tech Startup C",
    boothNumber: "C3",
    tier: "silver",
    crowdLevel: 42,
    recruitingPositions: ["Mobile Developer", "UI/UX Designer"],
    status: "open",
    description: "EdTech platform for students",
    isometricPath: "M 350 350 L 430 320 L 430 370 L 350 400 Z",
    labelPosition: { x: 390, y: 360 },
    zone: "C",
  },
  {
    id: "s4",
    companyName: "Tech Startup D",
    boothNumber: "C4",
    tier: "silver",
    crowdLevel: 38,
    recruitingPositions: ["Content Creator", "Social Media Manager"],
    status: "open",
    description: "Digital marketing agency",
    isometricPath: "M 450 320 L 530 290 L 530 340 L 450 370 Z",
    labelPosition: { x: 490, y: 330 },
    zone: "C",
  },
  {
    id: "s5",
    companyName: "Tech Startup E",
    boothNumber: "C5",
    tier: "silver",
    crowdLevel: 31,
    recruitingPositions: ["Data Analyst Intern"],
    status: "open",
    description: "AI-powered analytics platform",
    isometricPath: "M 550 290 L 630 260 L 630 310 L 550 340 Z",
    labelPosition: { x: 590, y: 300 },
    zone: "C",
  },
  {
    id: "s6",
    companyName: "Tech Startup F",
    boothNumber: "C6",
    tier: "silver",
    crowdLevel: 44,
    recruitingPositions: ["QA Tester", "Technical Writer"],
    status: "open",
    description: "SaaS platform for businesses",
    isometricPath: "M 650 260 L 730 230 L 730 280 L 650 310 Z",
    labelPosition: { x: 690, y: 270 },
    zone: "C",
  },
]

export function InteractiveVenueMap() {
  const [hoveredBooth, setHoveredBooth] = useState<string | null>(null)
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [highlightedBooth, setHighlightedBooth] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const svgRef = useRef<SVGSVGElement>(null)

  const getBoothColor = (crowd: number) => {
    if (crowd > 80) return "#ef4444"
    if (crowd > 50) return "#f97316"
    return "#22c55e"
  }

  const getTierColor = (tier: string) => {
    if (tier === "diamond") return "#00f2ff"
    if (tier === "gold") return "#fbbf24"
    return "#94a3b8"
  }

  const getTierFill = (tier: string, isHovered: boolean) => {
    if (!isHovered) return "rgba(15, 23, 42, 0.9)"
    if (tier === "diamond") return "url(#diamondGradient)"
    if (tier === "gold") return "url(#goldGradient)"
    return "rgba(148, 163, 184, 0.4)"
  }

  const handleSearch = () => {
    const found = booths.find((b) => b.companyName.toLowerCase().includes(searchQuery.toLowerCase()))
    if (found) {
      setHighlightedBooth(found.id)
      setTimeout(() => setHighlightedBooth(null), 4000)
    }
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6))

  return (
    <>
      <Card className="bg-slate-950 border-slate-800 overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="h-6 w-6 text-cyan-400" />
              Sơ đồ Mặt bằng Triển lãm
            </h3>
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Tìm kiếm công ty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-48 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button size="sm" onClick={handleSearch} className="bg-cyan-600 hover:bg-cyan-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Professional Exhibition Map */}
          <div className="relative bg-gradient-to-br from-slate-950 to-slate-900 rounded-xl p-6 border-2 border-slate-800 overflow-hidden">
            {/* Technical Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            <svg
              ref={svgRef}
              viewBox="0 0 850 550"
              className="w-full h-auto transition-transform duration-300"
              style={{ minHeight: "650px", transform: `scale(${zoom})`, transformOrigin: "center" }}
            >
              <defs>
                {/* Gradients for tiers */}
                <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#bc13fe" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
                </linearGradient>

                {/* Heatmap for pathways */}
                <linearGradient id="pathwayHeat" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                </linearGradient>

                {/* Arrow marker */}
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="#00f2ff" />
                </marker>
              </defs>

              {/* Venue Outline */}
              <rect x="50" y="50" width="750" height="450" rx="8" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="10,5" />

              {/* Main Stage */}
              <g>
                <path d="M 300 60 L 550 60 L 570 80 L 570 110 L 550 130 L 300 130 L 280 110 L 280 80 Z" fill="#1e40af" stroke="#3b82f6" strokeWidth="3" />
                <text x="425" y="100" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                  MAIN STAGE
                </text>
              </g>

              {/* Zone Background Highlights */}
              {/* Zone A - Diamond (VIP) */}
              <rect x="130" y="120" width="590" height="180" rx="8" fill="rgba(0, 242, 255, 0.03)" stroke="#00f2ff" strokeWidth="1" strokeDasharray="5,5" />

              {/* Zone B - Gold */}
              <rect x="130" y="290" width="660" height="100" rx="8" fill="rgba(251, 191, 36, 0.03)" stroke="#fbbf24" strokeWidth="1" strokeDasharray="5,5" />

              {/* Zone C - Silver */}
              <rect x="130" y="390" width="620" height="90" rx="8" fill="rgba(148, 163, 184, 0.03)" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" />

              {/* Zone Labels */}
              <text x="70" y="210" fill="#00f2ff" fontSize="16" fontWeight="bold" opacity="0.8">
                ZONE A
              </text>
              <text x="70" y="225" fill="#00f2ff" fontSize="11" opacity="0.6">
                VIP
              </text>

              <text x="70" y="340" fill="#fbbf24" fontSize="16" fontWeight="bold" opacity="0.8">
                ZONE B
              </text>
              <text x="70" y="355" fill="#fbbf24" fontSize="11" opacity="0.6">
                GOLD
              </text>

              <text x="70" y="435" fill="#94a3b8" fontSize="16" fontWeight="bold" opacity="0.8">
                ZONE C
              </text>
              <text x="70" y="450" fill="#94a3b8" fontSize="11" opacity="0.6">
                SILVER
              </text>

              {/* Main Pathways with Heatmap */}
              <path d="M 120 300 L 800 300" stroke="url(#pathwayHeat)" strokeWidth="25" strokeLinecap="round" opacity="0.6" />
              <path d="M 120 390 L 760 390" stroke="url(#pathwayHeat)" strokeWidth="20" strokeLinecap="round" opacity="0.4" />

              {/* Booths */}
              {booths.map((booth) => {
                const isHovered = hoveredBooth === booth.id
                const isHighlighted = highlightedBooth === booth.id

                return (
                  <g key={booth.id}>
                    {/* Booth Shape */}
                    <motion.path
                      d={booth.isometricPath}
                      fill={getTierFill(booth.tier, isHovered || isHighlighted)}
                      stroke={getTierColor(booth.tier)}
                      strokeWidth={isHovered || isHighlighted ? "4" : "2.5"}
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredBooth(booth.id)}
                      onMouseLeave={() => setHoveredBooth(null)}
                      onClick={() => setSelectedBooth(booth)}
                      animate={
                        isHighlighted
                          ? {
                            filter: [
                              `drop-shadow(0 0 15px ${getTierColor(booth.tier)})`,
                              `drop-shadow(0 0 30px ${getTierColor(booth.tier)})`,
                              `drop-shadow(0 0 15px ${getTierColor(booth.tier)})`,
                            ],
                          }
                          : {}
                      }
                      transition={{ duration: 1, repeat: isHighlighted ? Infinity : 0 }}
                      style={{
                        filter: isHovered || isHighlighted ? `drop-shadow(0 0 12px ${getTierColor(booth.tier)})` : "none",
                      }}
                    />

                    {/* Company Name */}
                    <text
                      x={booth.labelPosition.x}
                      y={booth.labelPosition.y - 8}
                      textAnchor="middle"
                      fill="white"
                      fontSize={booth.tier === "diamond" ? "14" : booth.tier === "gold" ? "12" : "10"}
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {booth.companyName}
                    </text>

                    {/* Booth Number */}
                    <text
                      x={booth.labelPosition.x}
                      y={booth.labelPosition.y + 8}
                      textAnchor="middle"
                      fill={getTierColor(booth.tier)}
                      fontSize="10"
                      fontWeight="600"
                      className="pointer-events-none"
                    >
                      {booth.boothNumber}
                    </text>

                    {/* Crowd Indicator */}
                    <circle cx={booth.labelPosition.x} cy={booth.labelPosition.y + 25} r="6" fill={getBoothColor(booth.crowdLevel)} className="pointer-events-none">
                      {booth.crowdLevel > 80 && <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />}
                    </circle>

                    {/* Navigation Arrow (when highlighted) */}
                    {isHighlighted && (
                      <path
                        d={`M 425 500 L ${booth.labelPosition.x} ${booth.labelPosition.y + 40}`}
                        stroke="#00f2ff"
                        strokeWidth="3"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                        strokeDasharray="8,4"
                      >
                        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="0.6s" repeatCount="indefinite" />
                      </path>
                    )}
                  </g>
                )
              })}

              {/* Entrance */}
              <g>
                <path d="M 380 520 L 470 500 L 510 520 L 510 535 L 470 555 L 380 535 Z" fill="#22c55e" stroke="#10b981" strokeWidth="2" />
                <text x="445" y="535" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                  ENTRANCE
                </text>
                <circle cx="370" cy="530" r="4" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Emergency Exits */}
              <rect x="60" y="250" width="25" height="50" rx="4" fill="#ef4444" opacity="0.7" />
              <text x="72" y="280" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" transform="rotate(-90 72 280)">
                EXIT
              </text>

              <rect x="765" y="250" width="25" height="50" rx="4" fill="#ef4444" opacity="0.7" />
              <text x="777" y="280" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" transform="rotate(90 777 280)">
                EXIT
              </text>

              {/* Smart Hub */}
              <g>
                <path d="M 730 400 L 810 370 L 830 390 L 830 450 L 810 470 L 730 500 L 710 480 L 710 420 Z" fill="none" stroke="#bc13fe" strokeWidth="2" strokeDasharray="6,3" />
                <text x="770" y="450" textAnchor="middle" fill="#bc13fe" fontSize="11" fontWeight="bold">
                  SMART
                </text>
                <text x="770" y="465" textAnchor="middle" fill="#bc13fe" fontSize="11" fontWeight="bold">
                  HUB
                </text>
              </g>

              {/* Legend Box */}
              <g>
                <rect x="620" y="490" width="200" height="50" rx="6" fill="rgba(15, 23, 42, 0.95)" stroke="#334155" strokeWidth="1.5" />
                <text x="635" y="508" fill="#94a3b8" fontSize="10" fontWeight="bold">
                  LEGEND
                </text>

                {/* Crowd indicators */}
                <circle cx="640" cy="520" r="4" fill="#ef4444" />
                <text x="650" y="523" fill="#cbd5e1" fontSize="9">
                  Đông (\u003e80%)
                </text>

                <circle cx="710" cy="520" r="4" fill="#f97316" />
                <text x="720" y="523" fill="#cbd5e1" fontSize="9">
                  Vừa (50-80%)
                </text>

                <circle cx="640" cy="533" r="4" fill="#22c55e" />
                <text x="650" y="536" fill="#cbd5e1" fontSize="9">
                  Thưa (\u003c50%)
                </text>
              </g>
            </svg>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <Button size="sm" onClick={handleZoomIn} className="bg-slate-800/90 hover:bg-slate-700 backdrop-blur-sm border border-slate-700">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={handleZoomOut} className="bg-slate-800/90 hover:bg-slate-700 backdrop-blur-sm border border-slate-700">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-slate-800/90 hover:bg-slate-700 backdrop-blur-sm border border-slate-700">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3 justify-center flex-wrap">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Maximize2 className="h-4 w-4 mr-2" />
              Toàn màn hình
            </Button>
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-900">
              <Navigation className="h-4 w-4 mr-2" />
              Chế độ dẫn đường
            </Button>
          </div>
        </div>
      </Card>

      {/* Booth Details Sheet */}
      <Sheet open={!!selectedBooth} onOpenChange={() => setSelectedBooth(null)}>
        <SheetContent className="bg-slate-950 border-slate-800 text-white overflow-y-auto w-full sm:max-w-lg">
          {selectedBooth && (
            <>
              <SheetHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <SheetTitle className="text-2xl font-bold text-white">{selectedBooth.companyName}</SheetTitle>
                    <SheetDescription className="text-slate-400 mt-1">{selectedBooth.description}</SheetDescription>
                  </div>
                  <Badge
                    className="text-xs font-bold px-3 py-1"
                    style={{
                      backgroundColor: getTierColor(selectedBooth.tier),
                      color: "black",
                    }}
                  >
                    {selectedBooth.tier.toUpperCase()}
                  </Badge>
                </div>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {/* Location Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">
                      Gian hàng {selectedBooth.boothNumber} - Zone {selectedBooth.zone}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-300">Mật độ: {selectedBooth.crowdLevel}%</span>
                    <Badge
                      className="ml-2"
                      style={{
                        backgroundColor: getBoothColor(selectedBooth.crowdLevel),
                        color: "white",
                      }}
                    >
                      {selectedBooth.crowdLevel > 80 ? "Rất đông" : selectedBooth.crowdLevel > 50 ? "Vừa phải" : "Thưa thớt"}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-300">Trạng thái: </span>
                    <Badge variant={selectedBooth.status === "open" ? "default" : "secondary"} className="bg-green-600">
                      {selectedBooth.status === "open" ? "Đang mở cửa" : selectedBooth.status === "busy" ? "Đang bận" : "Nghỉ giải lao"}
                    </Badge>
                  </div>
                </div>

                {/* Recruiting Positions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-cyan-400" />
                    Vị trí tuyển dụng ({selectedBooth.recruitingPositions.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedBooth.recruitingPositions.map((position, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 hover:border-cyan-400/50 transition-colors cursor-pointer group"
                      >
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{position}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 font-bold"
                    onClick={() => {
                      setHighlightedBooth(selectedBooth.id)
                      setSelectedBooth(null)
                      setTimeout(() => setHighlightedBooth(null), 4000)
                    }}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Nộp hồ sơ
                  </Button>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Đặt lịch phỏng vấn
                  </Button>
                  <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-900">
                    Xem thông tin chi tiết
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
