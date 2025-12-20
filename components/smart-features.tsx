"use client"

import { QrCode, Brain, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
    {
        icon: QrCode,
        title: "QR Pass",
        description: "Quét mã QR để nộp CV nhanh chóng, không cần điền form thủ công",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Brain,
        title: "AI Matching",
        description: "Hệ thống AI tự động gợi ý gian hàng phù hợp với ngành học và kỹ năng",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Zap,
        title: "One-Touch Apply",
        description: "Nộp hồ sơ chỉ với một lần chạm, tiết kiệm thời gian tối đa",
        gradient: "from-amber-500 to-orange-500",
    },
]

export function SmartFeatures() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="container relative mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-5 py-2.5 border border-blue-500/30 backdrop-blur-sm">
                        <Zap className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-400">SMART CAMPUS TECHNOLOGY</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl">
                        Tính năng{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Thông minh
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Trải nghiệm tìm việc hiện đại với công nghệ AI và tự động hóa
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
                        >
                            <div className="p-6">
                                <div
                                    className={`mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
