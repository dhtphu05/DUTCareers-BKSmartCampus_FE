"use client"

import { useState } from "react"
import { Search, Sparkles, X, Lightbulb, User, GraduationCap, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Mock Data
const MOCK_CANDIDATES = [
    {
        id: 1,
        name: "Trần Thị B",
        major: "Khoa học Dữ liệu",
        gpa: 3.8,
        matchRate: 98,
        skills: ["Python", "SQL", "Machine Learning"],
        insight: "Phù hợp 98% với yêu cầu Data Analyst của bạn. Đã có chứng chỉ Google Data Analytics.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        name: "Lê Văn C",
        major: "Hệ thống thông tin",
        gpa: 3.2,
        matchRate: 85,
        skills: ["Java", "Spring Boot", "MySQL"],
        insight: "Có kinh nghiệm 6 tháng thực tập Backend. Cần đào tạo thêm về Docker.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        name: "Nguyễn Quốc D",
        major: "Công nghệ Phần mềm",
        gpa: 3.5,
        matchRate: 78,
        skills: ["React", "Node.js", "AWS"],
        insight: "Có tư duy sản phẩm tốt, đã từng deploy dự án thực tế lên AWS.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    }
];

export function SmartHeadhunting() {
    // State
    const [skills, setSkills] = useState<string[]>([])
    const [skillInput, setSkillInput] = useState("")
    const [gpa, setGpa] = useState("3.0")
    const [language, setLanguage] = useState("all")
    const [filters, setFilters] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<typeof MOCK_CANDIDATES | null>(null)

    // Handlers
    const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === "Enter" || e.key === ",") && skillInput.trim()) {
            e.preventDefault()
            if (!skills.includes(skillInput.trim())) {
                setSkills([...skills, skillInput.trim()])
            }
            setSkillInput("")
        }
    }

    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter(s => s !== skillToRemove))
    }

    const toggleFilter = (tag: string) => {
        if (filters.includes(tag)) {
            setFilters(filters.filter(t => t !== tag))
        } else {
            setFilters([...filters, tag])
        }
    }

    const handleSearch = () => {
        setIsLoading(true)
        setResults(null)
        setTimeout(() => {
            setIsLoading(false)
            setResults(MOCK_CANDIDATES)
        }, 2000)
    }

    return (
        <div className="space-y-8">
            {/* SEARCH SECTION */}
            <Card className="rounded-xl shadow-sm border-slate-100 bg-white">
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl text-slate-900">Tìm kiếm nhân tài (Smart Headhunting)</CardTitle>
                            <CardDescription>Sử dụng AI để tìm ứng viên phù hợp nhất</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Skills Input (Tag Input) */}
                        <div className="lg:col-span-6 space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Kỹ năng chuyên môn</label>
                            <div className="flex flex-wrap gap-2 p-2 border border-slate-200 rounded-xl bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all min-h-[44px]">
                                {skills.map(skill => (
                                    <Badge key={skill} className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 pl-2 pr-1 py-1 h-7 flex items-center gap-1">
                                        {skill}
                                        <X className="w-3 h-3 cursor-pointer hover:bg-blue-300 rounded-full" onClick={() => removeSkill(skill)} />
                                    </Badge>
                                ))}
                                <input
                                    className="flex-1 outline-none bg-transparent text-sm min-w-[120px] px-1 h-7 text-slate-700 placeholder:text-slate-400"
                                    placeholder={skills.length === 0 ? "Nhập kỹ năng (Java, React...) rồi Enter" : ""}
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleSkillKeyDown}
                                />
                            </div>
                        </div>

                        {/* GPA Input */}
                        <div className="lg:col-span-3 space-y-2">
                            <label className="text-sm font-semibold text-slate-700">GPA Tối thiểu</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    type="number"
                                    min="0" max="4.0" step="0.1"
                                    value={gpa}
                                    onChange={(e) => setGpa(e.target.value)}
                                    className="pl-10 h-11 rounded-xl border-slate-200"
                                />
                            </div>
                        </div>

                        {/* Language Dropdown */}
                        <div className="lg:col-span-3 space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Ngoại ngữ</label>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white">
                                    <SelectValue placeholder="Chọn trình độ" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tất cả</SelectItem>
                                    <SelectItem value="toeic600">TOEIC 600+</SelectItem>
                                    <SelectItem value="toeic750">TOEIC 750+</SelectItem>
                                    <SelectItem value="ielts6">IELTS 6.0+</SelectItem>
                                    <SelectItem value="jlptn3">JLPT N3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap gap-2">
                        {["Đã tốt nghiệp", "Sinh viên năm 4", "Có kinh nghiệm thực tập", "Sẵn sàng đi công tác"].map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleFilter(tag)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                                    filters.includes(tag)
                                        ? "bg-blue-50 text-blue-700 border-blue-200"
                                        : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100"
                                )}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <Button
                        onClick={handleSearch}
                        disabled={isLoading}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-bold shadow-lg shadow-blue-200"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                AI đang phân tích hồ sơ...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Search className="w-5 h-5" /> Tìm kiếm
                            </span>
                        )}
                    </Button>
                </CardContent>
            </Card>

            {/* RESULTS SECTION */}
            {results && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        Kết quả phân tích từ AI
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">{results.length} hồ sơ</Badge>
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {results.map(candidate => (
                            <Card key={candidate.id} className="rounded-xl border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden group">
                                <div className="p-6 space-y-4">
                                    {/* Header Matches */}
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                                <AvatarImage src={candidate.avatar} />
                                                <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{candidate.name}</h4>
                                                <p className="text-xs text-slate-500 font-medium">{candidate.major}</p>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "flex items-center justify-center w-12 h-12 rounded-full border-4 text-xs font-bold",
                                            candidate.matchRate >= 90 ? "border-emerald-100 bg-emerald-50 text-emerald-700" : "border-yellow-100 bg-yellow-50 text-yellow-700"
                                        )}>
                                            {candidate.matchRate}%
                                        </div>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline" className="border-slate-200 bg-slate-50 text-slate-700 font-bold">GPA {candidate.gpa}</Badge>
                                        {candidate.skills.slice(0, 2).map((skill, idx) => (
                                            <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">{skill}</Badge>
                                        ))}
                                        {candidate.skills.length > 2 && (
                                            <Badge variant="secondary" className="bg-slate-100 text-slate-500">+{candidate.skills.length - 2}</Badge>
                                        )}
                                    </div>

                                    {/* AI Insight */}
                                    <div className="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
                                        <div className="flex gap-2">
                                            <Lightbulb className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                                            <p className="text-xs text-slate-700 italic leading-relaxed">
                                                {candidate.insight.split("**").map((part, i) =>
                                                    i % 2 === 1 ? <span key={i} className="font-bold text-slate-900">{part}</span> : part
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Button variant="ghost" className="h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                            Xem CV
                                        </Button>
                                        <Button className="h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm">
                                            Mời Phỏng vấn
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
