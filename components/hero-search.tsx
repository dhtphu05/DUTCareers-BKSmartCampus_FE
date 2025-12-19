"use client"

import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function HeroSearch() {
  const suggestedTags = ["#ThựcTậpSinh", "#Java", "#XâyDựng", "#CơKhí"]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-20">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gradient-to-r from-rose-400/20 to-rose-600/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-slate-200">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-700">Nền tảng việc làm #1 cho sinh viên DUT</span>
          </div>

          <h1 className="mb-4 text-5xl font-bold text-slate-900 text-balance md:text-6xl leading-tight">
            Kết nối Sự nghiệp
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Kiến tạo Tương lai
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-600 leading-relaxed">
            Khám phá hơn 500+ cơ hội việc làm từ các doanh nghiệp hàng đầu tại Việt Nam
          </p>

          <div className="flex flex-col gap-3 sm:flex-row mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Tìm theo kỹ năng, vị trí, công ty..."
                className="h-14 pl-12 text-base border-slate-200 rounded-xl shadow-sm focus-visible:ring-blue-600"
              />
            </div>
            <Button
              size="lg"
              className="h-14 bg-rose-600 text-white hover:bg-rose-700 font-semibold px-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              TÌM KIẾM
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-slate-500">Gợi ý:</span>
            {suggestedTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors rounded-full px-4 py-1 border-slate-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
