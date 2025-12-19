"use client"

import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const popularTags = ["Internship", "Kế Toán", "Xây Dựng", "Part-time"]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-white py-16 lg:py-20">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Tìm kiếm cơ hội thực tập & việc làm chuẩn Bách Khoa
          </h1>

          {/* Search Bar - Floating White Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="grid md:grid-cols-[1fr_auto_auto] gap-3">
              {/* Keyword Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Từ khóa (Java, React, Sales...)"
                  className="pl-12 h-12 border-slate-200 focus-visible:ring-blue-600"
                />
              </div>

              {/* Location Input */}
              <div className="relative md:w-48">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input placeholder="Địa điểm" className="pl-12 h-12 border-slate-200 focus-visible:ring-blue-600" />
              </div>

              {/* Search Button */}
              <Button className="h-12 px-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl">
                Tìm kiếm
              </Button>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm text-slate-600">Từ khóa hot:</span>
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-blue-50 text-blue-800 hover:bg-blue-100 cursor-pointer border-0 px-3 py-1"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
