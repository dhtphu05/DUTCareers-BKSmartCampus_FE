"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function FixedAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Chào bạn, mình có thể giúp gì cho CV của bạn?",
      timestamp: "10:30",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickReplies = ["Tìm việc IT", "Sửa CV", "Lộ trình học"]

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          type: "user",
          text: inputValue,
          timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setInputValue("")

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            type: "bot",
            text: "Mình đang xử lý yêu cầu của bạn...",
            timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[380px] h-[500px] flex flex-col shadow-2xl border-2 border-blue-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">DUT AI Mentor</h3>
                <p className="text-xs text-blue-100">Online - Luôn sẵn sàng</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 bg-slate-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      message.type === "user"
                        ? "bg-blue-800 text-white"
                        : "bg-white border border-slate-200 text-slate-900"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-200" : "text-slate-500"}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quick Reply Chips (only show after bot message) */}
              {messages[messages.length - 1]?.type === "bot" && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((reply) => (
                    <Badge
                      key={reply}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 px-3 py-1.5"
                      onClick={() => setInputValue(reply)}
                    >
                      {reply}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Nhập tin nhắn..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-xl"
              />
              <Button onClick={handleSend} className="bg-blue-800 hover:bg-blue-900 rounded-xl px-4">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl hover:scale-110 transition-transform"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  )
}
