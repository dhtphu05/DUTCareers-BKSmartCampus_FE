import { Calendar, MapPin, Users, ArrowRight, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { EventTimeline } from "@/components/event-timeline"
import { CompanySponsors } from "@/components/company-sponsors"
import { Footer } from "@/components/footer"
import { InteractiveVenueMap } from "@/components/interactive-venue-map"
import { SmartFeatures } from "@/components/smart-features"
import { AIChatbotFAB } from "@/components/ai-chatbot-fab"
import { SpeakerGrid } from "@/components/speaker-grid"

export default function JobFair2025Page() {
  const eventDate = new Date("2025-12-20T07:30:00")

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - DevDay Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300f2ff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated Neon Blobs */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
        <div
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-5 py-2.5 border border-cyan-400/30 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">BIGGEST CAREER EVENT 2025</span>
          </div>

          {/* Title with Mixed Effects */}
          <h1 className="text-6xl font-black text-white mb-6 md:text-8xl lg:text-9xl leading-tight">
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
                textShadow: "0 0 30px rgba(0, 242, 255, 0.5)",
              }}
            >
              DUT
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              JOB FAIR
            </span>
            <br />
            <span className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              2025
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-2 md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto font-light">
            Ngày hội Việc làm & Kết nối Doanh nghiệp
            <br />
            <span className="text-cyan-400 font-semibold">lớn nhất Miền Trung</span>
          </p>

          <div className="mb-12 mt-8">
            <CountdownTimer targetDate={eventDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 font-bold text-lg px-10 py-7 h-auto rounded-2xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all"
            >
              ĐĂNG KÝ THAM GIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-white hover:bg-purple-500/20 hover:border-purple-400 font-bold text-lg px-10 py-7 h-auto rounded-2xl backdrop-blur-sm bg-purple-500/10"
            >
              Dành cho Doanh nghiệp
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-slate-300">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-cyan-400/30">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="font-medium text-white">20/12/2025</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-purple-400/30">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="font-medium text-white">Nhà Thi Đấu DUT</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-pink-400/30">
              <Users className="h-5 w-5 text-pink-400" />
              <span className="font-medium text-white">2500+ Sinh viên</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-8 rounded-full border-2 border-cyan-400/50 flex items-start justify-center p-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Interactive Floor Plan Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23bc13fe' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 md:text-6xl">
              Bản đồ{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tương tác
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Khám phá vị trí gian hàng và mật độ người theo thời gian thực
            </p>
          </div>
          <InteractiveVenueMap />
        </div>
      </section>

      {/* Speaker Grid Section */}
      <SpeakerGrid />

      {/* Smart Features Section */}
      <SmartFeatures />

      {/* Timeline Section */}
      <EventTimeline />

      {/* Sponsors Section */}
      <CompanySponsors />

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300f2ff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-cyan-400">
            <Sparkles className="h-6 w-6" />
            <Sparkles className="h-8 w-8" />
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 md:text-6xl">
            Sẵn sàng cho{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              sự nghiệp
            </span>{" "}
            của bạn?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Đừng bỏ lỡ cơ hội kết nối với hơn 50+ doanh nghiệp hàng đầu
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400 font-bold text-lg px-12 py-8 h-auto rounded-2xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all"
          >
            ĐĂNG KÝ NGAY
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Chatbot Floating Button */}
      <AIChatbotFAB />
    </div>
  )
}
