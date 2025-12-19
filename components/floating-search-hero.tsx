"use client"

import { Search, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FloatingSearchHero() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/university-students-working-in-modern-tech-lab.jpg" alt="Students" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70" />
      </div>

      <div className="container relative mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full pb-32">
          <h1 className="text-4xl font-bold text-white mb-2 text-pretty">
            Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
          </h1>
          <p className="text-lg text-white/90">
            Tiếp cận <span className="font-semibold">40,000+</span> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh
            nghiệp uy tín tại Việt Nam
          </p>
        </div>

        <div className="absolute left-4 right-4 -bottom-16 bg-white rounded-lg shadow-2xl p-6 border border-border">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground">Tìm kiếm</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Tên việc làm, vị trí ứng tuyển..." className="h-12 pl-10 text-base" />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground">Địa điểm</label>
              <Select defaultValue="danang">
                <SelectTrigger className="h-12">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="danang">Đà Nẵng</SelectItem>
                  <SelectItem value="hanoi">Hà Nội</SelectItem>
                  <SelectItem value="hcm">Hồ Chí Minh</SelectItem>
                  <SelectItem value="haiphong">Hải Phòng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-foreground">Ngành nghề</label>
              <Select defaultValue="it">
                <SelectTrigger className="h-12">
                  <Briefcase className="mr-2 h-5 w-5 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">Công nghệ thông tin</SelectItem>
                  <SelectItem value="civil">Xây dựng</SelectItem>
                  <SelectItem value="mechanical">Cơ khí</SelectItem>
                  <SelectItem value="electrical">Điện - Điện tử</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button size="lg" className="h-12 bg-primary hover:bg-primary-dark text-white font-semibold px-10">
              TÌM KIẾM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
