"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Users, Building, DollarSign, ShieldPlus, BookOpen, CheckCircle, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface CompanyProfileViewProps {
    onBack: () => void
}

const companyData = {
    name: "Coteccons Group",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2ZOdegRv0Q3uC9BBBoZ513MtWr0XGG9X1w&s",
    coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    slogan: "Xây dựng những công trình biểu tượng",
    website: "coteccons.vn",
    locations: ["Bình Thạnh, TP.HCM", "Hai Bà Trưng, Hà Nội"],
    size: "2000+ nhân viên",
    industry: "Xây dựng / Kiến trúc",
    overview: "Coteccons là tập đoàn xây dựng hàng đầu Việt Nam, nổi tiếng với việc thi công các công trình siêu cao tầng và phức tạp nhất như Landmark 81. Chúng tôi tiên phong áp dụng mô hình Design & Build, cam kết về Chất lượng, An toàn và Tiến độ. Gia nhập Coteccons là gia nhập đội ngũ của những người kiến tạo biểu tượng.",
    benefits: [
        { title: "Thưởng dự án hấp dẫn", icon: DollarSign },
        { title: "Bảo hiểm sức khỏe cao cấp", icon: ShieldPlus },
        { title: "Đào tạo tại Coteccons Academy", icon: BookOpen },
    ],
    techStack: ["BIM", "Revit", "AutoCAD", "Primavera", "LEED Standard", "Green Construction"],
    gallery: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",

    ]
};

const jobs = [

    {
        id: 3,
        title: "Chuyên viên QS (Quantity Surveyor)",
        salary: "15 - 25 Triệu",
        location: "Đà Nẵng",
        tags: ["Dự toán", "Hợp đồng", "Excel"],
        posted: "5 ngày trước",
        isHot: false,
        type: "Full-time"
    },
    {
        id: 4,
        title: "Kỹ sư An toàn (HSE Supervisor)",
        salary: "18 - 25 Triệu",
        location: "Bình Dương",
        tags: ["An toàn lao động", "Chứng chỉ HSE", "ISO 45001"],
        posted: "1 tuần trước",
        isHot: false,
        type: "Contract"
    }
];

export function CompanyProfileView({ onBack }: CompanyProfileViewProps) {
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-[#F3F5F7] font-sans">
            {/* Navbar Placeholder/Back Button */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center">
                    <Button variant="ghost" onClick={onBack} className="hover:bg-slate-100">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                    </Button>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto pb-12">
                {/* HERO SECTION */}
                <div className="relative mb-8">
                    {/* Cover Image */}
                    <div className="h-[350px] w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <img src={companyData.coverImage} className="w-full h-full object-cover object-center" alt="Cover" />
                    </div>

                    {/* Info Block - Overlapping */}
                    <div className="container mx-auto px-4 relative z-20 -mt-20">
                        <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-t-xl border-t-4 border-blue-600 p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start md:items-end">
                            {/* Logo */}
                            <div className="h-32 w-32 bg-white rounded-lg border border-slate-200 shadow-md p-2 flex-shrink-0 -mt-16 md:-mt-0 relative z-30">
                                <img src={companyData.logo} className="w-full h-full object-contain" alt="Logo" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                <h1 className="text-3xl font-bold text-slate-900">{companyData.name}</h1>
                                <p className="text-lg text-slate-600 font-medium">{companyData.slogan}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2">
                                    <div className="flex items-center gap-1"><MapPin className="h-4 w-4 text-blue-600" /> TP.HCM</div>
                                    <div className="flex items-center gap-1"><Users className="h-4 w-4 text-blue-600" /> {companyData.size}</div>
                                    <div className="flex items-center gap-1"><Building className="h-4 w-4 text-blue-600" /> {companyData.industry}</div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6">
                                    Theo dõi
                                </Button>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 shadow-md shadow-blue-200">
                                    Xem {jobs.length} việc làm
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8">
                    {/* LEFT COLUMN */}
                    <div className="space-y-8">

                        {/* 3 Key Selling Points */}
                        <div className="bg-blue-50/50 border border-dashed border-blue-200 rounded-xl p-6 lg:p-8">
                            <h2 className="text-xl font-bold text-blue-900 mb-6">Tại sao bạn sẽ thích làm việc tại đây?</h2>
                            <div className="space-y-4">
                                {companyData.benefits.map((benefit, idx) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className="font-medium text-slate-700 text-lg">{benefit.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Company Overview */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 lg:p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Về chúng tôi</h2>
                            <div className={`relative overflow-hidden transition-all duration-300 ${isOverviewExpanded ? 'max-h-full' : 'max-h-32'}`}>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                                    {companyData.overview}
                                </p>
                                {!isOverviewExpanded && (
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                                )}
                            </div>

                            <Button
                                variant="link"
                                onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                                className="mt-2 pl-0 text-blue-600 font-medium hover:text-blue-800"
                            >
                                {isOverviewExpanded ? <><ChevronUp className="h-4 w-4 mr-1" /> Thu gọn</> : <><ChevronDown className="h-4 w-4 mr-1" /> Xem thêm</>}
                            </Button>

                            {/* Gallery */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {companyData.gallery.map((img, idx) => (
                                    <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden">
                                        <img src={img} alt={`Office ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Job Openings */}
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                                    Tuyển dụng ({jobs.length})
                                </h2>
                                <div className="relative w-full sm:w-72">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm vị trí..."
                                        className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {jobs.map((job) => (
                                    <Card
                                        key={job.id}
                                        className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer rounded-2xl"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6">
                                            {/* Company Logo with styling */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={companyData.logo}
                                                    alt={companyData.name}
                                                    className="h-20 w-20 rounded-2xl border border-slate-100 shadow-sm object-contain p-1 bg-white group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Job Info */}
                                            <div className="flex-1 min-w-0 space-y-3 w-full">
                                                <div className="space-y-1">
                                                    <div className="flex items-center flex-wrap gap-2">
                                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                            {job.title}
                                                        </h3>
                                                        {job.isHot && (
                                                            <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 px-2.5 py-0.5 text-xs animate-pulse">
                                                                HOT
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center text-slate-500 text-sm font-medium">
                                                        {companyData.name}
                                                        <span className="mx-2 text-slate-300">•</span>
                                                        <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs font-semibold">
                                                            {job.type || "Full-time"}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-500">
                                                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                                                        <DollarSign className="h-4 w-4 text-slate-400" />
                                                        {job.salary}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4 text-slate-400" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                                        {job.posted}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 pt-1">
                                                    {job.tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="secondary"
                                                            className="bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 font-normal"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <div className="flex-shrink-0 self-start sm:self-center mt-4 sm:mt-0">
                                                <Button className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 font-semibold transition-all shadow-sm hover:shadow-md rounded-xl px-6">
                                                    Ứng tuyển
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (SIDEBAR) */}
                    <div className="space-y-6">
                        {/* Map/Address */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-blue-600" />
                                Địa điểm
                            </h3>
                            <div className="bg-slate-100 h-40 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm border border-slate-200">
                                Map Placeholder
                            </div>
                            <ul className="space-y-3 text-sm text-slate-600">
                                {companyData.locations.map((loc, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                        <span>{loc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <div className="h-5 w-5 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                                    <BookOpen className="h-3 w-3" />
                                </div>
                                Chuyên môn / Công nghệ
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {companyData.techStack.map(tech => (
                                    <Badge key={tech} variant="outline" className="border-slate-200 text-slate-600 py-1.5 px-3 bg-slate-50">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg p-6 text-white text-center space-y-4">
                            <h3 className="font-bold text-lg">Bạn có thắc mắc?</h3>
                            <p className="text-blue-100 text-sm">Liên hệ ngay với bộ phận tuyển dụng của chúng tôi.</p>
                            <Button className="w-full bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-md border-0">
                                Gửi tin nhắn ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
