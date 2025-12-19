"use client"

import { useState, useEffect } from "react"

import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [placeholder, setPlaceholder] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = ["Java Developer", "Xây dựng cầu đường", "Thực tập sinh Marketing", "Kế toán tổng hợp", "Kỹ sư điện"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullPhrase = phrases[i]

      setPlaceholder(
        isDeleting ? fullPhrase.substring(0, placeholder.length - 1) : fullPhrase.substring(0, placeholder.length + 1),
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && placeholder === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && placeholder === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [placeholder, isDeleting, loopNum, typingSpeed, phrases])

  const popularTags = ["Internship", "Kế Toán", "Xây Dựng", "Part-time"]

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 flex items-center min-h-[600px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/university-students-working-in-modern-tech-lab.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/80 bg-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight text-balance drop-shadow-lg">
              Tìm kiếm cơ hội thực tập <br />& việc làm{" "}
              <span className="text-yellow-400">dành riêng cho sinh viên Bách Khoa Đà Nẵng</span>
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto opacity-90">
              Kết nối sinh viên Bách Khoa với hàng trăm doanh nghiệp hàng đầu trong và ngoài nước
            </p>
          </div>

          {/* Search Bar - Large Floating Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-3 lg:p-4 border border-white/20">
            <div className="grid md:grid-cols-[1fr_auto_auto] gap-3">
              {/* Keyword Input */}
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600 group-focus-within:text-blue-800 transition-colors" />
                <Input
                  placeholder={`Tìm kiếm "${placeholder}"...`}
                  className="pl-14 h-14 lg:h-16 text-lg border-transparent bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl shadow-sm transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Location Input */}
              <div className="relative md:w-64 group">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600 group-focus-within:text-blue-800 transition-colors" />
                <Input
                  placeholder="Địa điểm (Đà Nẵng...)"
                  className="pl-14 h-14 lg:h-16 text-lg border-transparent bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl shadow-sm transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Search Button */}
              <Button className="h-14 lg:h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-blue-600/30 transition-all duration-300">
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <span className="text-blue-100/80 font-medium">Từ khóa hot:</span>
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 px-4 py-1.5 text-sm transition-all cursor-pointer"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
