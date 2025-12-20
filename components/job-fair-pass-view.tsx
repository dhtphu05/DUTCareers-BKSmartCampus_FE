"use client"

import { useState } from "react"
import { QrCode, Scan, Camera, X, Check, CheckCircle, Zap, FileText, ChevronDown, Repeat, Star, Send, Building2, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const studentData = {
    name: "Nguyễn Văn A",
    id: "102210045",
    major: "Kỹ thuật phần mềm",
    gpa: "3.2/4.0",
    cv: "CV_NguyenVanA_2025.pdf",
    status: "Verified"
}

const mockCompany = {
    name: "FPT Software",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png",
    positions: ["Fresher Java Developer", "Automation Tester", "AI Engineer"]
}

export function JobFairPassView() {
    const [view, setView] = useState<"student-pass" | "scan-booth" | "apply-form" | "success">("student-pass")
    const [isScanning, setIsScanning] = useState(false)
    const [scanProgress, setScanProgress] = useState(0)

    // Simulation: Student scans Booth QR code
    const handleSimulateScan = () => {
        setIsScanning(true)
        let progress = 0
        const interval = setInterval(() => {
            progress += 20
            setScanProgress(progress)
            if (progress >= 100) {
                clearInterval(interval)
                setIsScanning(false)
                setView("apply-form")
            }
        }, 200)
    }

    // Simulation: Submit Application
    const handleSubmit = () => {
        setView("success")
    }

    const handleReset = () => {
        setView("student-pass")
    }

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            {/* Mobile Frame */}
            <div className="w-full max-w-[390px] h-[844px] bg-white rounded-[40px] overflow-hidden relative shadow-2xl border-[8px] border-slate-800">

                {/* VIEW A: STUDENT PASS (My QR) */}
                {view === "student-pass" && (
                    <div className="h-full bg-slate-900 relative flex flex-col items-center pt-12 px-6 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                        {/* Backdrop Blur */}
                        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-md" />

                        <div className="relative z-10 w-full flex flex-col h-full">
                            {/* Floating Scan Button */}
                            <div className="flex justify-end mb-6">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md rounded-full text-xs h-8 pl-3 pr-4"
                                    onClick={() => setView("scan-booth")}
                                >
                                    <Camera className="mr-2 h-3 w-3" /> Quét QR Gian hàng
                                </Button>
                            </div>

                            {/* The Wallet Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                {/* Header */}
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
                                <div className="p-6 pb-8 flex flex-col items-center text-center space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">DC</div>
                                        <span className="font-bold text-slate-800 tracking-tight">DUTCareers</span>
                                    </div>

                                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-wider">Vé Vào Cửa Job Fair 2025</h2>

                                    {/* QR Code */}
                                    <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DUT-JOBFAIR-2025-102210045" alt="QR" className="w-48 h-48 mix-blend-multiply" />
                                    </div>

                                    {/* Student Info */}
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-slate-900">{studentData.name}</h3>
                                        <p className="text-sm font-medium text-slate-500">MSSV: {studentData.id} • Khoa CNTT</p>
                                    </div>

                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 px-3 py-1 rounded-full text-sm">
                                        <CheckCircle className="w-4 h-4 mr-1.5" />
                                        Đã xác thực
                                    </Badge>
                                </div>

                                {/* Footer Hint */}
                                <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                                    <p className="text-xs text-slate-400 font-medium">Đưa mã này cho BTC để check-in</p>
                                </div>

                                {/* Punch Hole Simulation */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 bg-slate-900 rounded-full" />
                            </div>

                            <div className="mt-8 text-center text-white/60 text-sm">
                                <p>Vé có hiệu lực trong ngày 29/12/2025</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW B: BOOTH SCANNER (Student scanning Company) */}
                {view === "scan-booth" && (
                    <div className="h-full bg-black relative flex flex-col">
                        {/* Camera Feed Simulation */}
                        <div className="flex-1 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-80">
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Scanning Animation */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] absolute top-0 animate-[scan_3s_ease-in-out_infinite]" />
                            </div>

                            {/* Overlay Frame */}
                            <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                                <div className="w-64 h-64 border-2 border-white/30 rounded-3xl relative">
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl" />
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl" />
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl" />
                                </div>
                            </div>

                            {/* Hint Text */}
                            <div className="absolute bottom-32 left-0 right-0 text-center px-6">
                                <p className="text-white font-medium bg-black/50 backdrop-blur-md py-2 px-4 rounded-full inline-block">
                                    Di chuyển camera đến QR tại Gian hàng
                                </p>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="h-24 bg-black/90 flex items-center justify-center relative z-20">
                            {isScanning ? (
                                <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                            ) : (
                                <Button
                                    size="lg"
                                    className="rounded-full h-14 w-14 p-0 bg-white border-4 border-slate-300 hover:bg-slate-100"
                                    onClick={handleSimulateScan}
                                >
                                    <div className="w-10 h-10 bg-black rounded-full" />
                                </Button>
                            )}
                            <p className="absolute bottom-2 text-slate-500 text-[10px]">Mô phỏng Quét</p>
                        </div>

                        {/* Floating Back Button */}
                        <div className="absolute top-12 left-6 z-20">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 border-0"
                                onClick={() => setView("student-pass")}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* VIEW C: APPLY FORM (Student Fills) */}
                {view === "apply-form" && (
                    <div className="h-full bg-slate-50 relative flex flex-col">
                        {/* Header */}
                        <div className="bg-white px-6 pt-12 pb-4 border-b border-slate-200 sticky top-0 z-20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 border border-slate-100 rounded-lg p-1 bg-white">
                                    <img src={mockCompany.logo} className="w-full h-full object-contain" alt="Logo" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Ứng tuyển vào</p>
                                    <h2 className="text-sm font-bold text-slate-900">{mockCompany.name}</h2>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-slate-100" onClick={handleReset}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            {/* Section 1: My Profile (Auto-filled) */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-500 fill-current" />
                                        Thông tin từ Hồ sơ
                                    </h3>
                                    <span className="text-xs text-blue-600 font-medium">Chỉnh sửa</span>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-slate-200">
                                            {studentData.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{studentData.name}</p>
                                            <p className="text-xs text-slate-500">MSSV: {studentData.id}</p>
                                            <p className="text-xs text-slate-500">{studentData.major}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-medium border border-slate-100">
                                            GPA: <span className="text-slate-900 font-bold">{studentData.gpa}</span>
                                        </div>
                                        <div className="px-3 py-1.5 bg-blue-50 rounded-lg text-xs font-medium text-blue-700 border border-blue-100 flex items-center gap-1">
                                            <FileText className="w-3 h-3" /> {studentData.cv}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Application Details (Student Fills) */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-blue-600" />
                                    Chi tiết Ứng tuyển
                                </h3>

                                <div className="space-y-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-700 uppercase">Vị trí quan tâm <span className="text-red-500">*</span></label>
                                        <Select>
                                            <SelectTrigger className="w-full h-11 rounded-lg bg-slate-50 border-slate-200">
                                                <SelectValue placeholder="Chọn vị trí..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {mockCompany.positions.map(pos => (
                                                    <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-700 uppercase">Giới thiệu ngắn gọn</label>
                                        <Textarea
                                            className="resize-none bg-slate-50 border-slate-200 min-h-[80px]"
                                            placeholder="Em có thể bắt đầu làm việc từ..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-700 uppercase">Link Portfolio / Github</label>
                                        <Input
                                            className="h-11 bg-slate-50 border-slate-200"
                                            placeholder="https://github.com/..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-200 bg-white pb-8">
                            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-bold shadow-lg shadow-blue-200 flex items-center gap-2" onClick={handleSubmit}>
                                <Send className="w-4 h-4" /> Nộp Đơn Ứng Tuyển
                            </Button>
                        </div>
                    </div>
                )}

                {/* VIEW D: SUCCESS */}
                {view === "success" && (
                    <div className="h-full bg-white flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-300">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <Check className="h-12 w-12 text-green-600" strokeWidth={3} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-2">Ứng tuyển Thành công!</h2>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 w-full max-w-xs">
                            <p className="text-slate-500 text-sm">Hồ sơ của bạn đã được gửi đến</p>
                            <p className="text-slate-900 font-bold text-lg">{mockCompany.name}</p>
                        </div>

                        <div className="space-y-3 w-full">
                            <Button className="w-full h-12 rounded-xl font-bold" onClick={handleReset}>
                                Về Ví Vé
                            </Button>
                            <Button variant="ghost" className="w-full h-12 rounded-xl text-slate-500 hover:text-slate-900">
                                Xem danh sách đã nộp
                            </Button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
