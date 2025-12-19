"use client"

import { useState } from "react"
import { Bot, Send, X, Minimize2, Maximize2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: number
  role: "bot" | "user"
  content: string
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content:
        "Chào Huy 👋 Dựa trên điểm GPA 3.2 của bạn, mình gợi ý lộ trình trở thành Fullstack Developer nhé. Bạn có muốn tìm hiểu thêm không?",
      timestamp: new Date(),
    },
  ])

  const suggestionChips = ["Review CV của tôi", "Lộ trình Web Dev", "Việc thực tập gần đây"]

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newUserMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages([...messages, newUserMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        role: "bot",
        content:
          "Để trở thành Fullstack Developer, bạn cần: 1) Học Frontend (React, Next.js) - 3 tháng, 2) Backend (Node.js, Express) - 2 tháng, 3) Database (PostgreSQL) - 1 tháng. Tổng thời gian: 6 tháng. Bạn muốn xem danh sách khóa học không?",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleChipClick = (chip: string) => {
    setInputValue(chip)
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
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 z-50 bg-white shadow-2xl border-0 transition-all duration-300 ${
        isMinimized ? "h-16 w-80" : "h-[600px] w-96"
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
                  className={`max-w-[75%] rounded-2xl p-3 ${
                    message.role === "bot" ? "bg-white border border-border" : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span
                    className={`text-xs mt-1 block ${message.role === "bot" ? "text-muted-foreground" : "text-blue-100"}`}
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
