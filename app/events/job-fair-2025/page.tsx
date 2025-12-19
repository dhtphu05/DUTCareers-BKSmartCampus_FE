import { Calendar, MapPin, Users, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { EventTimeline } from "@/components/event-timeline"
import { CompanySponsors } from "@/components/company-sponsors"
import { Footer } from "@/components/footer"
import { InteractiveVenueMap } from "@/components/interactive-venue-map"

export default function JobFair2025Page() {
  const eventDate = new Date("2025-12-20T07:30:00")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl animate-pulse" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-rose-600/30 blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/20 blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-5 py-2.5 border border-blue-500/30 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">BIGGEST CAREER EVENT 2025</span>
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 md:text-8xl text-balance leading-tight">
            DUT JOB FAIR
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-2 md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Ngày hội Việc làm & Kết nối Doanh nghiệp lớn nhất Miền Trung
          </p>

          <div className="mb-12">
            <CountdownTimer targetDate={eventDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 font-bold text-lg px-10 py-7 h-auto rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
            >
              ĐĂNG KÝ THAM GIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-600 text-white hover:bg-white/10 hover:border-slate-400 font-bold text-lg px-10 py-7 h-auto rounded-2xl backdrop-blur-sm bg-white/5"
            >
              Dành cho Doanh nghiệp
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-slate-300">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="font-medium">20/12/2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="font-medium">Nhà Thi Đấu DUT</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="font-medium">2500+ Sinh viên</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl">Bản đồ sự kiện trực tiếp</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Theo dõi mật độ người tại các gian hàng theo thời gian thực
            </p>
          </div>
          <InteractiveVenueMap />
        </div>
      </section>

      {/* Timeline Section */}
      <EventTimeline />

      {/* Sponsors Section */}
      <CompanySponsors />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-rose-600/10 blur-3xl" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl">Sẵn sàng cho sự nghiệp của bạn?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Đừng bỏ lỡ cơ hội kết nối với hơn 50+ doanh nghiệp hàng đầu
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 font-bold text-lg px-10 py-7 h-auto rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
          >
            ĐĂNG KÝ NGAY
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
