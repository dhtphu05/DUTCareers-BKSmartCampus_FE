"use client"

import { useState } from "react"
import { MessageCircle, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function AIChatbotFAB() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        size="lg"
                        className="h-16 w-16 rounded-full bg-blue-600 hover:from-blue-500 hover:to-purple-500 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 group relative"
                    >
                        <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                        {/* Pulse animation */}
                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                    </Button>
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute bottom-20 right-0 mb-2 whitespace-nowrap">
                        <Card className="bg-slate-900 border-blue-500/30 backdrop-blur-sm px-4 py-2 shadow-xl">
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-blue-400" />
                                <p className="text-sm font-semibold text-white">Cần lộ trình học để vào FPT?</p>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Hỏi AI Mentor ngay!</p>
                        </Card>
                    </div>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
                    <Card className="bg-slate-900 border-slate-700 shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-blue-600 to-purple-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Sparkles className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">AI Career Mentor</h3>
                                    <p className="text-xs text-blue-100">Luôn sẵn sàng hỗ trợ bạn</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Chat Content */}
                        <div className="p-4 h-96 bg-slate-950">
                            <div className="space-y-4">
                                <div className="bg-slate-800 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-slate-300">
                                        Xin chào! 👋 Tôi là AI Career Mentor. Tôi có thể giúp bạn:
                                    </p>
                                    <ul className="text-sm text-slate-400 mt-2 space-y-1 list-disc list-inside">
                                        <li>Tìm công ty phù hợp với kỹ năng</li>
                                        <li>Lộ trình học để đạt mục tiêu nghề nghiệp</li>
                                        <li>Gợi ý gian hàng nên ghé thăm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-slate-700 bg-slate-900">
                            <input
                                type="text"
                                placeholder="Nhập câu hỏi của bạn..."
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </Card>
                </div>
            )}
        </>
    )
}
