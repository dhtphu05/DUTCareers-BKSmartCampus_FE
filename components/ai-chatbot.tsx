"use client"

import { useState } from "react"
import { Bot, Send, X, Minimize2, Maximize2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { EnhancedMessage, MessageType } from "./chatbot/types"
import { generateResponse } from "./chatbot/ai-logic"
import { CompanyList } from "./chatbot/CompanyList"
import { RoadmapTimeline } from "./chatbot/RoadmapTimeline"

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<EnhancedMessage[]>([
    {
      id: 1,
      role: "bot",
      content:
        "Xin chào! 👋 Mình là DUT AI Mentor - trợ lý ảo của DUTCareers. Mình có thể giúp bạn tìm việc làm, gợi ý lộ trình học tập, hoặc review CV. Bạn cần hỗ trợ gì nhé?",
      type: MessageType.TEXT,
      timestamp: new Date(),
    },
  ])

  const suggestionChips = [
    "Tìm việc AI Engineer",
    "Lộ trình Fullstack Developer",
    "Công ty tại Đà Nẵng",
    "Review CV của tôi",
  ]

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userQuery = inputValue
    const newUserMessage: EnhancedMessage = {
      id: messages.length + 1,
      role: "user",
      content: userQuery,
      type: MessageType.TEXT,
      timestamp: new Date(),
    }

    setMessages([...messages, newUserMessage])
    setInputValue("")

    // Generate AI response
    setTimeout(() => {
      const botResponse = generateResponse(userQuery, messages.length + 2)
      setMessages((prev) => [...prev, botResponse])
    }, 800)
  }

  const handleChipClick = (chip: string) => {
    setInputValue(chip)
  }

  const renderMessageContent = (message: EnhancedMessage) => {
    switch (message.type) {
      case MessageType.COMPANY_LIST:
        return (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{message.content}</p>
            {message.data?.companies && <CompanyList companies={message.data.companies} />}
          </div>
        )

      case MessageType.ROADMAP:
        return (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{message.content}</p>
            {message.data?.roadmap && <RoadmapTimeline roadmap={message.data.roadmap} />}
          </div>
        )

      case MessageType.COMBINED:
        return (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">{message.content}</p>
            {message.data?.companies && message.data.companies.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-slate-700 mb-2">🏢 Công ty đang tuyển dụng</h5>
                <CompanyList companies={message.data.companies} />
              </div>
            )}
            {message.data?.roadmap && (
              <div>
                <h5 className="text-sm font-semibold text-slate-700 mb-2">📚 Lộ trình học tập</h5>
                <RoadmapTimeline roadmap={message.data.roadmap} />
              </div>
            )}
          </div>
        )

      case MessageType.TEXT:
      default:
        return <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
        size="icon"
      >
        <Bot className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 z-50 bg-white shadow-2xl border-0 transition-all duration-300 ${isMinimized ? "h-16 w-80" : "h-[600px] w-96"
        }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white flex items-center gap-2">
              DUT AI Mentor
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </h3>
            <p className="text-xs text-blue-100">Tư vấn Việc làm & Học tập</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {message.role === "bot" && (
                  <Avatar className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-600">
                    <AvatarFallback className="bg-transparent text-white text-xs">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`${message.role === "bot"
                    ? message.type === MessageType.TEXT
                      ? "max-w-[75%]"
                      : "max-w-[90%]"
                    : "max-w-[75%]"
                    } rounded-2xl p-3 ${message.role === "bot" ? "bg-white border border-border" : "bg-blue-600 text-white"
                    }`}
                >
                  {message.role === "bot" ? renderMessageContent(message) : <p className="text-sm leading-relaxed">{message.content}</p>}
                  <span
                    className={`text-xs mt-2 block ${message.role === "bot" ? "text-muted-foreground" : "text-blue-100"}`}
                  >
                    {message.timestamp.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestion Chips */}
          <div className="px-4 py-3 bg-white border-t border-border flex gap-2 flex-wrap">
            {suggestionChips.map((chip) => (
              <Badge
                key={chip}
                variant="secondary"
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors text-xs"
                onClick={() => handleChipClick(chip)}
              >
                {chip}
              </Badge>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white rounded-b-lg border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Nhập câu hỏi..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
