"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, MapPin, Users, Info, FileText, User, Scan, Check, MessageSquare, ArrowUp, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

interface WorkshopDetailViewProps {
    onBack: () => void
}

export function WorkshopDetailView({ onBack }: WorkshopDetailViewProps) {
    const [activeTab, setActiveTab] = useState("intro")
    const [isCheckedIn, setIsCheckedIn] = useState(false)

    return (
        <div className="min-h-screen bg-[#F8F9FA] py-8">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Back Button */}
                <Button variant="ghost" onClick={onBack} className="mb-6 hover:bg-slate-200">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Quay lại danh sách
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8">
                    {/* Left Column (Main Content - 70%) */}
                    <div className="space-y-8">
                        {/* Hero Section */}
                        <div className="space-y-6">
                            {/* Image Banner */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/567337698_1224458426377857_5974413929857536544_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2o4oiruzYTDv7S17zhFLmIKVXQ3-euv4gpVdDf566_mRSs3LXgHNEUAe94y6ZEqZbZhLu2nMhuIg3HI4DXUzB&_nc_ohc=lCqHsT3rW3nQ7kNvwFiUG03&_nc_oc=Adkm_BDkfppSFQokASKoWcIIaQk8vmj900CjuaEpo4422zzMD0_0mmUskPh0fB5Im8U&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=8x-kJ0MOtd81hqCE0XkVPw&oh=00_Afk0REnVEQN6-zi3GalnmdDzjJEUs0HF7AGDod7nYvLevw&oe=694B4927"
                                    alt="Workshop Banner"
                                    className="w-full h-full object-cover"
                                />
                                {/* Live Badge */}
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-red-600 hover:bg-red-700 text-white border-0 px-3 py-1 text-sm animate-pulse flex items-center gap-2 shadow-lg">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                        </span>
                                        Đang diễn ra
                                    </Badge>
                                </div>
                            </div>

                            {/* Title & Meta */}
                            <div className="space-y-4">
                                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                                    READY4AI_DUT | KHI SINH VIÊN BÁCH KHOA LÀM CHỦ TƯƠNG LAI CÙNG TRÍ TUỆ NHÂN TẠO
                                </h1>

                                {/* Meta Bar */}
                                <div className="flex flex-wrap items-center gap-6 text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium">23/10/2025 - 14:00</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium">Hội trường F, ĐH Bách Khoa</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                            <Users className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium">358 Đã đăng ký</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Navigation */}
                        <Tabs defaultValue="intro" value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="w-full justify-start bg-white p-1 rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
                                <TabsTrigger value="intro" className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 font-semibold">
                                    <Info className="h-4 w-4 mr-2" /> Giới thiệu
                                </TabsTrigger>
                                <TabsTrigger value="speakers" className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 font-semibold">
                                    <User className="h-4 w-4 mr-2" /> Diễn giả
                                </TabsTrigger>
                                <TabsTrigger value="docs" className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 font-semibold">
                                    <FileText className="h-4 w-4 mr-2" /> Tài liệu
                                </TabsTrigger>
                            </TabsList>

                            <div className="mt-6">
                                <TabsContent value="intro" className="space-y-6 animate-in fade-in-50 duration-500">
                                    <div className="prose max-w-none text-slate-700 space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                            <p className="italic font-medium text-blue-800">
                                                "Trong kỷ nguyên trí tuệ nhân tạo đang thay đổi thế giới từng ngày, bạn sẽ đứng ở đâu? Là người chỉ quan sát hay là người tận dụng công nghệ để bứt phá?"
                                            </p>
                                        </div>

                                        <p className="leading-relaxed">
                                            Nếu bạn vẫn đang loay hoay tìm hướng đi cho mình, hãy đến với <strong>#Ready4AIDUT</strong>: nơi giúp bạn tìm thấy câu trả lời về bản thân, về công nghệ và về hành trình làm chủ tương lai thời đại mới!
                                        </p>

                                        <p className="leading-relaxed">
                                            <strong>#Ready4AI</strong> là chuỗi workshop do <strong>Dev Plus</strong> cùng các Trường Đại học phối hợp triển khai. Điểm đến tiếp theo là <strong>Trường Đại học Bách Khoa – Đại học Đà Nẵng (DUT)</strong>, hứa hẹn sẽ là một sự kiện bùng nổ với hàng ngàn "chiến binh công nghệ".
                                        </p>

                                        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Đặc quyền khi tham gia</h3>
                                        <ul className="space-y-3 list-none pl-0">
                                            <li className="flex gap-3 items-start">
                                                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">1</div>
                                                <span>Được đánh giá năng lực sử dụng AI qua bài test <strong>AICP</strong> (đầu tiên tại Việt Nam).</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">2</div>
                                                <span>Tham dự <strong>Panel Discussion</strong>: đặt câu hỏi về con đường học tập & nghề nghiệp.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">3</div>
                                                <span>Kết nối & học hỏi cùng hàng trăm sinh viên công nghệ khác.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </TabsContent>

                                <TabsContent value="speakers">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Card className="p-6 border-0 shadow-md flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-20 rounded-full bg-slate-200 border-2 border-blue-100 overflow-hidden">
                                                    <img src="/placeholder.svg" alt="Bùi Xuân Thiện" className="h-full w-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900">Anh Bùi Xuân Thiện</h3>
                                                    <p className="text-blue-600 font-medium text-sm">Full-stack Developer @ ST United</p>
                                                </div>
                                            </div>
                                            <div className="text-sm text-slate-600 space-y-2">
                                                <p>• Sở hữu 13 công trình nghiên cứu khoa học.</p>
                                                <p>• Giảng viên đào tạo OJT cho sinh viên quốc tế.</p>
                                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 mt-2">
                                                    <span className="font-bold text-slate-800">Keynote:</span> "Khởi đầu thông minh trong thời đại AI"
                                                </div>
                                            </div>
                                        </Card>

                                        <Card className="p-6 border-0 shadow-md flex flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-20 rounded-full bg-slate-200 border-2 border-blue-100 overflow-hidden">
                                                    <img src="/placeholder.svg" alt="Trần Kim Vinh" className="h-full w-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900">Anh Trần Kim Vinh</h3>
                                                    <p className="text-blue-600 font-medium text-sm">Tech Operation & Delivery Trainer</p>
                                                </div>
                                            </div>
                                            <div className="text-sm text-slate-600 space-y-2">
                                                <p>• 15+ năm kinh nghiệm quản lý & đào tạo.</p>
                                                <p>• Tư vấn cho FPT Software, CMC Global.</p>
                                                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 mt-2">
                                                    <span className="font-bold text-slate-800">Keynote:</span> "Not Prompts, but Leadership – A New Paradigm for AI Collaboration"
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </TabsContent>

                                <TabsContent value="docs">
                                    <div className="space-y-3">
                                        <Card className="p-4 border border-slate-200 shadow-sm flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">Slide_Keynote_Khoi_Dau_Thong_Minh.pdf</h4>
                                                    <p className="text-sm text-slate-500">4.2 MB • PDF</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" className="text-blue-600 border-blue-200">Tải xuống</Button>
                                        </Card>
                                        <Card className="p-4 border border-slate-200 shadow-sm flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">Hướn_Dẫn_Làm_Bài_Test_AICP.pptx</h4>
                                                    <p className="text-sm text-slate-500">12.5 MB • PowerPoint</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" className="text-blue-600 border-blue-200">Tải xuống</Button>
                                        </Card>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>

                    {/* Right Column (Sticky Sidebar - 30%) */}
                    <div className="lg:sticky lg:top-24 h-[calc(100vh-100px)] flex flex-col gap-6">
                        {/* Module 1: Smart Check-in */}
                        <Card className={`p-6 border-0 shadow-lg text-white transition-all duration-500 ${isCheckedIn ? 'bg-emerald-50 border-emerald-200' : 'bg-gradient-to-br from-blue-700 to-indigo-800'}`}>
                            {!isCheckedIn ? (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-lg">Điểm danh sự kiện</h3>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Nhập mã PIN (VD: 8932)"
                                            className="w-full h-12 rounded-xl text-center text-xl font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                                        />
                                        <Button
                                            className="w-full bg-white text-blue-800 hover:bg-blue-50 font-bold h-11"
                                            onClick={() => setIsCheckedIn(true)}
                                        >
                                            Xác nhận
                                        </Button>
                                    </div>
                                    <div className="text-center">
                                        <button className="text-sm text-blue-200 hover:text-white underline underline-offset-2 flex items-center justify-center w-full gap-2">
                                            <Scan className="h-4 w-4" />
                                            Tôi muốn quét QR bằng điện thoại
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center space-y-3 py-2">
                                    <div className="bg-emerald-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                                        <Check className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <h3 className="font-bold text-xl text-emerald-800">Điểm danh thành công!</h3>
                                    <p className="text-emerald-600 font-medium">+5 Điểm rèn luyện</p>
                                </div>
                            )}
                        </Card>

                        {/* Module 2: Live Q&A */}
                        <Card className="flex-1 flex flex-col border-0 shadow-lg bg-white overflow-hidden">
                            {/* Header */}
                            <div className="p-4 border-b border-slate-100 bg-white flex justify-between items-center sticky top-0 z-10">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-bold text-slate-800">Hỏi đáp & Thảo luận</h3>
                                </div>
                                <select className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 font-medium text-slate-600 outline-none">
                                    <option>Mới nhất</option>
                                    <option>Nổi bật (Top Vote)</option>
                                </select>
                            </div>

                            {/* Q&A List */}
                            <ScrollArea className="flex-1 p-4 bg-slate-50/50">
                                <div className="space-y-4">
                                    {/* Empty State (Hidden for demo) */}
                                    {/* 
                     <div className="flex flex-col items-center justify-center h-40 text-slate-400 text-center">
                        <Bot className="h-12 w-12 mb-3 opacity-50" />
                        <p className="text-sm">Sân khấu đang chờ câu hỏi của bạn!</p>
                     </div> 
                     */}

                                    {/* Sample Question 1 */}
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex justify-between items-start gap-3">
                                            <div className="flex gap-3">
                                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0">
                                                    MH
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-700">Minh Hoàng</p>
                                                    <p className="text-sm text-slate-800 mt-1 leading-relaxed">
                                                        Cho em hỏi về cơ hội việc làm về mảng Trí tuệ nhân tạo tại Đà Nẵng ạ 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <button className="text-slate-400 hover:text-orange-500 transition-colors">
                                                    <ArrowUp className="h-5 w-5" />
                                                </button>
                                                <span className="text-xs font-bold text-orange-500">12</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sample Question 2 */}
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex justify-between items-start gap-3">
                                            <div className="flex gap-3">
                                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                                    <div className="h-4 w-4 bg-slate-900 mask-squircle" /> {/* Simulating anonymous icon */}
                                                    <span className="text-lg">🎭</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-500 italic">Ẩn danh</p>
                                                    <p className="text-sm text-slate-800 mt-1 leading-relaxed">
                                                        Anh có thể đề xuất 1 vài nguồn lộ trình chi tiết về NLP Engineer được không ạ ?
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <button className="text-slate-400 hover:text-orange-500 transition-colors">
                                                    <ArrowUp className="h-5 w-5" />
                                                </button>
                                                <span className="text-xs font-bold text-slate-400">5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>

                            {/* Input Area */}
                            <div className="p-3 bg-white border-t border-slate-100 sticky bottom-0 z-20">
                                <div className="relative">
                                    <Textarea
                                        placeholder="Đặt câu hỏi cho diễn giả..."
                                        className="min-h-[50px] pr-12 resize-none bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl text-sm"
                                    />
                                    <Button
                                        size="icon"
                                        className="absolute right-2 bottom-2 h-8 w-8 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Checkbox id="anonymous" />
                                    <label htmlFor="anonymous" className="text-xs text-slate-500 cursor-pointer select-none">
                                        Đặt câu hỏi ẩn danh
                                    </label>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
