"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, TrendingUp, X, Briefcase, Clock } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

interface Booth {
    id: string
    companyName: string
    position: { x: number; y: number }
    size: { width: number; height: number }
    tier: "diamond" | "gold" | "silver"
    crowdLevel: number
    recruitingPositions: string[]
    status: "open" | "busy" | "break"
    boothNumber: string
    description: string
}

const booths: Booth[] = [
    {
        id: "1",
        companyName: "FPT Software",
        position: { x: 15, y: 25 },
        size: { width: 120, height: 80 },
        tier: "diamond",
        crowdLevel: 95,
        recruitingPositions: ["Software Engineer", "AI Engineer", "DevOps"],
        status: "open",
        boothNumber: "A1-A3",
        description: "Leading software company in Vietnam",
    },
    {
        id: "2",
        companyName: "Viettel Digital",
        position: { x: 150, y: 25 },
        size: { width: 120, height: 80 },
        tier: "diamond",
        crowdLevel: 88,
        recruitingPositions: ["Backend Developer", "Frontend Developer", "Mobile Developer"],
        status: "open",
        boothNumber: "B1-B3",
        description: "Digital transformation leader",
    },
    {
        id: "3",
        companyName: "VNG Corporation",
        position: { x: 285, y: 25 },
        size: { width: 120, height: 80 },
        tier: "diamond",
        crowdLevel: 92,
        recruitingPositions: ["Game Developer", "Data Scientist", "Product Manager"],
        status: "open",
        boothNumber: "C1-C3",
        description: "Vietnam's leading internet company",
    },
    {
        id: "4",
        companyName: "Bosch Vietnam",
        position: { x: 15, y: 120 },
        size: { width: 90, height: 70 },
        tier: "gold",
        crowdLevel: 65,
        recruitingPositions: ["Embedded Engineer", "IoT Developer"],
        status: "open",
        boothNumber: "D1",
        description: "Global engineering and technology company",
    },
    {
        id: "5",
        companyName: "LG Display",
        position: { x: 120, y: 120 },
        size: { width: 90, height: 70 },
        tier: "gold",
        crowdLevel: 58,
        recruitingPositions: ["Hardware Engineer", "Quality Engineer"],
        status: "open",
        boothNumber: "D2",
        description: "Display technology innovator",
    },
    {
        id: "6",
        companyName: "CMC Global",
        position: { x: 225, y: 120 },
        size: { width: 90, height: 70 },
        tier: "gold",
        crowdLevel: 72,
        recruitingPositions: ["Full-stack Developer", "Cloud Engineer"],
        status: "open",
        boothNumber: "D3",
        description: "IT solutions and services",
    },
    {
        id: "7",
        companyName: "Gameloft",
        position: { x: 330, y: 120 },
        size: { width: 90, height: 70 },
        tier: "gold",
        crowdLevel: 45,
        recruitingPositions: ["Unity Developer", "3D Artist"],
        status: "break",
        boothNumber: "D4",
        description: "Mobile game development",
    },
    {
        id: "8",
        companyName: "Startup A",
        position: { x: 15, y: 205 },
        size: { width: 70, height: 60 },
        tier: "silver",
        crowdLevel: 35,
        recruitingPositions: ["Junior Developer"],
        status: "open",
        boothNumber: "E1",
        description: "Innovative tech startup",
    },
    {
        id: "9",
        companyName: "Startup B",
        position: { x: 100, y: 205 },
        size: { width: 70, height: 60 },
        tier: "silver",
        crowdLevel: 28,
        recruitingPositions: ["Intern Developer"],
        status: "open",
        boothNumber: "E2",
        description: "Fast-growing startup",
    },
]

export function InteractiveFloorPlan() {
    const [hoveredBooth, setHoveredBooth] = useState<string | null>(null)
    const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null)

    const getBoothColor = (crowd: number) => {
        if (crowd > 80) return "#ef4444" // red
        if (crowd > 50) return "#f97316" // orange
        return "#22c55e" // green
    }

    const getTierColor = (tier: string) => {
        if (tier === "diamond") return "#00f2ff" // cyan
        if (tier === "gold") return "#fbbf24" // yellow
        return "#94a3b8" // slate
    }

    return (
        <>
            <Card className="bg-slate-950 border-slate-800 overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-cyan-400" />
                            Sơ đồ Gian hàng Tương tác
                        </h3>
                        <div className="flex gap-3 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="relative h-3 w-3">
                                    <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse" />
                                    <div className="absolute inset-0 rounded-full bg-red-500" />
                                </div>
                                <span className="text-xs text-slate-300">Đông</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative h-3 w-3">
                                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-pulse opacity-75" />
                                    <div className="absolute inset-0 rounded-full bg-orange-500" />
                                </div>
                                <span className="text-xs text-slate-300">Vừa</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                                <span className="text-xs text-slate-300">Thưa</span>
                            </div>
                        </div>
                    </div>

                    {/* Floor Plan SVG */}
                    <div className="relative bg-slate-900/50 rounded-xl p-8 border-2 border-slate-800">
                        <svg viewBox="0 0 450 300" className="w-full h-auto">
                            {/* Stage */}
                            <rect x="150" y="5" width="150" height="10" fill="#3b82f6" rx="2" />
                            <text x="225" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                                MAIN STAGE
                            </text>

                            {/* Zone Labels */}
                            <text x="5" y="65" fill="#94a3b8" fontSize="10" fontWeight="bold">
                                ZONE A (VIP)
                            </text>
                            <text x="5" y="155" fill="#94a3b8" fontSize="10" fontWeight="bold">
                                ZONE B
                            </text>
                            <text x="5" y="235" fill="#94a3b8" fontSize="10" fontWeight="bold">
                                ZONE C
                            </text>

                            {/* Booths */}
                            {booths.map((booth) => (
                                <g key={booth.id}>
                                    {/* Booth Rectangle */}
                                    <motion.rect
                                        x={booth.position.x}
                                        y={booth.position.y}
                                        width={booth.size.width}
                                        height={booth.size.height}
                                        fill={hoveredBooth === booth.id ? getTierColor(booth.tier) : "rgba(15, 23, 42, 0.8)"}
                                        stroke={getTierColor(booth.tier)}
                                        strokeWidth={hoveredBooth === booth.id ? "3" : "1.5"}
                                        rx="4"
                                        className="cursor-pointer transition-all"
                                        onMouseEnter={() => setHoveredBooth(booth.id)}
                                        onMouseLeave={() => setHoveredBooth(null)}
                                        onClick={() => setSelectedBooth(booth)}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            filter:
                                                hoveredBooth === booth.id
                                                    ? `drop-shadow(0 0 10px ${getTierColor(booth.tier)})`
                                                    : "none",
                                        }}
                                    />

                                    {/* Company Name */}
                                    <text
                                        x={booth.position.x + booth.size.width / 2}
                                        y={booth.position.y + booth.size.height / 2 - 8}
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="11"
                                        fontWeight="bold"
                                        className="pointer-events-none"
                                    >
                                        {booth.companyName}
                                    </text>

                                    {/* Booth Number */}
                                    <text
                                        x={booth.position.x + booth.size.width / 2}
                                        y={booth.position.y + booth.size.height / 2 + 5}
                                        textAnchor="middle"
                                        fill={getTierColor(booth.tier)}
                                        fontSize="9"
                                        className="pointer-events-none"
                                    >
                                        {booth.boothNumber}
                                    </text>

                                    {/* Crowd Indicator */}
                                    <circle
                                        cx={booth.position.x + booth.size.width - 10}
                                        cy={booth.position.y + 10}
                                        r="5"
                                        fill={getBoothColor(booth.crowdLevel)}
                                        className="pointer-events-none"
                                    >
                                        {booth.crowdLevel > 80 && (
                                            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                                        )}
                                    </circle>
                                </g>
                            ))}

                            {/* Entrance */}
                            <rect x="200" y="285" width="50" height="10" fill="#22c55e" rx="2" />
                            <text x="225" y="292" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                                ENTRANCE
                            </text>
                        </svg>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-slate-400 mb-4">Click vào gian hàng để xem chi tiết</p>
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Xem toàn màn hình</Button>
                    </div>
                </div>
            </Card>

            {/* Side Drawer for Booth Details */}
            <Sheet open={!!selectedBooth} onOpenChange={() => setSelectedBooth(null)}>
                <SheetContent className="bg-slate-950 border-slate-800 text-white overflow-y-auto">
                    {selectedBooth && (
                        <>
                            <SheetHeader>
                                <SheetTitle className="text-2xl font-bold text-white">{selectedBooth.companyName}</SheetTitle>
                                <SheetDescription className="text-slate-400">{selectedBooth.description}</SheetDescription>
                            </SheetHeader>

                            <div className="mt-6 space-y-6">
                                {/* Booth Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-cyan-400">
                                        <MapPin className="h-5 w-5" />
                                        <span className="font-semibold">Gian hàng: {selectedBooth.boothNumber}</span>
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
                                            {selectedBooth.crowdLevel > 80 ? "Đông" : selectedBooth.crowdLevel > 50 ? "Vừa" : "Thưa"}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-slate-400" />
                                        <span className="text-slate-300">
                                            Trạng thái:{" "}
                                            <Badge variant={selectedBooth.status === "open" ? "default" : "secondary"}>
                                                {selectedBooth.status === "open" ? "Đang mở" : "Nghỉ"}
                                            </Badge>
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Badge
                                            className="text-sm"
                                            style={{
                                                backgroundColor: getTierColor(selectedBooth.tier),
                                                color: "black",
                                            }}
                                        >
                                            {selectedBooth.tier.toUpperCase()} SPONSOR
                                        </Badge>
                                    </div>
                                </div>

                                {/* Recruiting Positions */}
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <Briefcase className="h-5 w-5 text-cyan-400" />
                                        Vị trí tuyển dụng
                                    </h4>
                                    <div className="space-y-2">
                                        {selectedBooth.recruitingPositions.map((position, index) => (
                                            <div
                                                key={index}
                                                className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 hover:border-cyan-400/50 transition-colors"
                                            >
                                                <p className="text-white font-medium">{position}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-4">
                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Đặt lịch phỏng vấn</Button>
                                    <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-900">
                                        Xem thông tin công ty
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
