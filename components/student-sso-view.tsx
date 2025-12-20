"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle2, Lock, Upload, User, Globe, Github, Linkedin, Save, ShieldCheck } from "lucide-react"

interface StudentSSOViewProps {
    onBack: () => void
}

const studentData = {
    name: "Nguyễn Văn A",
    mssv: "102200195",
    faculty: "Công nghệ Thông tin",
    major: "Kỹ thuật Phần mềm",
    gpa: 3.65,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    isVerified: true
}

export function StudentSSOView({ onBack }: StudentSSOViewProps) {
    const [step, setStep] = useState<"login" | "syncing" | "profile">("login")
    const [syncStatus, setSyncStatus] = useState("Đang khởi tạo kết nối...")

    // Simulation Logic for Step 2: Syncing
    useEffect(() => {
        if (step === "syncing") {
            const statuses = [
                "Đang xác thực danh tính...",
                "Đang kết nối đến Cổng thông tin Nhà trường...",
                "Đang tải dữ liệu GPA từ Phòng Đào tạo...",
                `Đang đồng bộ MSSV: ${studentData.mssv}...`,
                "Hoàn tất hồ sơ..."
            ]

            let i = 0
            const interval = setInterval(() => {
                if (i < statuses.length) {
                    setSyncStatus(statuses[i])
                    i++
                } else {
                    clearInterval(interval)
                    setTimeout(() => setStep("profile"), 500)
                }
            }, 800)

            return () => clearInterval(interval)
        }
    }, [step])

    // STEP 1: LOGIN SCREEN
    if (step === "login") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Cổng Sinh Viên</h1>
                        <p className="text-slate-500">Truy cập hồ sơ nghề nghiệp của bạn an toàn</p>
                    </div>

                    <Card className="p-8 border-slate-200 shadow-xl rounded-2xl bg-white space-y-6">
                        <div className="space-y-4">
                           

                            <Button
                                variant="outline"
                                className="w-full h-12 text-base font-semibold border-slate-300 hover:bg-slate-50 hover:text-slate-900 relative group overflow-hidden"
                                onClick={() => setStep("syncing")}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="w-5 h-5 mr-3" alt="Microsoft" />
                                Đăng nhập bằng Tài khoản Microsoft
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-slate-400">Kết nối tin cậy</span>
                            </div>
                        </div>

                        <p className="text-center text-xs text-slate-400">
                            Bằng việc tiếp tục, bạn xác nhận rằng mình đang là sinh viên của trường.
                        </p>
                    </Card>
                </div>
            </div>
        )
    }

    // STEP 2: SYNCING SCREEN
    if (step === "syncing") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
                <div className="w-full max-w-md text-center space-y-8">
                    <div className="relative mx-auto w-24 h-24">
                        <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                        <ShieldCheck className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-slate-900">Đang đồng bộ hồ sơ</h2>
                        <p className="text-slate-500 text-sm animate-pulse">{syncStatus}</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm max-w-sm mx-auto">
                        <div className="flex items-center gap-3 opacity-60">
                            <Lock className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-slate-500">Đang mã hóa dữ liệu cá nhân...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // STEP 3: PROFILE DASHBOARD
    return (
        <div className="min-h-screen bg-slate-50 pb-12 font-sans">
            {/* Header - Simple version for this view */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Button variant="ghost" onClick={onBack} className="hover:bg-slate-100 text-slate-600">
                        Quay về Trang chủ
                    </Button>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-600">Hệ thống Online</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: Read-only Identity */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20 flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" /> Sinh viên xác thực
                                </div>
                            </div>
                            <div className="px-6 pb-6 relative">
                                <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-md -mt-12 bg-white overflow-hidden mb-4">
                                    <img src={studentData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-2xl font-bold text-slate-900">{studentData.name}</h2>
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-100" />
                                    </div>
                                    <p className="text-slate-500 font-medium">MSSV: {studentData.mssv}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Khoa</label>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="font-medium text-slate-700">{studentData.faculty}</span>
                                            <Lock className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ngành</label>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="font-medium text-slate-700">{studentData.major}</span>
                                            <Lock className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GPA tích lũy</label>
                                        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                            <span className="font-bold text-emerald-700 text-lg">{studentData.gpa}/4.0</span>
                                            <div className="flex items-center gap-2">
                                                <Badge className="bg-emerald-200 text-emerald-800 hover:bg-emerald-200 border-0">Top 10%</Badge>
                                                <Lock className="w-4 h-4 text-emerald-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800 flex items-start gap-3">
                            <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <p>Dữ liệu này được đồng bộ trực tiếp từ Phòng Đào tạo Nhà trường và không thể tự chỉnh sửa.</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Editable Portfolio */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-0 shadow-lg rounded-2xl p-6 lg:p-8 space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-1">Portfolio Của Bạn</h2>
                                <p className="text-slate-500">Thể hiện kỹ năng để gây ấn tượng với nhà tuyển dụng</p>
                            </div>

                            {/* CV Upload */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-slate-700">CV / Hồ sơ</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">Tải lên CV / Resume của bạn</h3>
                                    <p className="text-slate-500 text-sm mt-1">PDF, DOCX tối đa 10MB</p>
                                </div>
                            </div>

                            {/* About Me */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-slate-700">Giới thiệu bản thân</label>
                                <Textarea
                                    placeholder="Hãy cho nhà tuyển dụng biết về bản thân, mục tiêu nghề nghiệp và những điều khiến bạn trở nên đặc biệt..."
                                    className="min-h-[150px] border-slate-200 focus:ring-blue-500/20 focus:border-blue-500 rounded-xl resize-none p-4"
                                />
                            </div>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-slate-700">Kết nối mạng xã hội</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Linkedin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                        <Input placeholder="LinkedIn URL" className="pl-10 h-11 rounded-xl border-slate-200" />
                                    </div>
                                    <div className="relative">
                                        <Github className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                        <Input placeholder="GitHub URL" className="pl-10 h-11 rounded-xl border-slate-200" />
                                    </div>
                                    <div className="relative md:col-span-2">
                                        <Globe className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                        <Input placeholder="Website cá nhân / Blog" className="pl-10 h-11 rounded-xl border-slate-200" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex items-center justify-end border-t border-slate-100">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md h-12 px-8 rounded-xl font-semibold">
                                    <Save className="w-4 h-4 mr-2" />
                                    Lưu & Xuất bản Hồ sơ
                                </Button>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}
