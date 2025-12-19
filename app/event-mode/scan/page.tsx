"use client"

import { useState } from "react"
import { X, CheckCircle, Briefcase, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MobileNavBar } from "@/components/mobile-nav-bar"

export default function ScanPage() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Camera Viewfinder */}
      <div className="relative h-screen bg-black">
        {/* Simulated Camera Feed */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-90" />

        {/* Scanning Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64">
            {/* Corner Borders */}
            <div className="absolute top-0 left-0 h-16 w-16 border-t-4 border-l-4 border-highlight" />
            <div className="absolute top-0 right-0 h-16 w-16 border-t-4 border-r-4 border-highlight" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b-4 border-l-4 border-highlight" />
            <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-highlight" />

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-1 bg-highlight animate-[scan_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Instruction Overlay */}
        <div className="absolute top-8 left-0 right-0 px-6">
          <div className="rounded-lg bg-black/60 backdrop-blur-sm p-4 text-center">
            <p className="text-white font-medium">Quét mã QR tại gian hàng để nộp hồ sơ</p>
            <p className="text-white/70 text-sm mt-1">Đặt mã QR vào giữa khung hình</p>
          </div>
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20"
          onClick={() => (window.location.href = "/event-mode/ticket")}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Bottom Stats */}
        <div className="absolute bottom-24 left-0 right-0 px-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-black/60 backdrop-blur-sm p-3 text-center">
              <div className="text-2xl font-bold text-highlight">5</div>
              <div className="text-xs text-white">Hồ sơ đã nộp</div>
            </div>
            <div className="rounded-lg bg-black/60 backdrop-blur-sm p-3 text-center">
              <div className="text-2xl font-bold text-green-400">12</div>
              <div className="text-xs text-white">Gian hàng đã thăm</div>
            </div>
          </div>
        </div>

        {/* Simulate Scan Success */}
        <div className="absolute bottom-32 left-0 right-0 px-6 text-center">
          <Button
            onClick={() => setShowConfirmation(true)}
            className="bg-highlight text-highlight-foreground hover:bg-highlight/90 font-bold"
          >
            [Demo] Kích hoạt quét thành công
          </Button>
        </div>
      </div>

      {/* Confirmation Bottom Sheet */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end animate-in fade-in duration-200">
          <Card className="w-full rounded-t-3xl rounded-b-none animate-in slide-in-from-bottom duration-300">
            <CardHeader className="relative pb-2">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => setShowConfirmation(false)}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-center">Quét thành công!</h3>
            </CardHeader>

            <CardContent className="pb-8">
              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                  <img src="/fpt-logo.jpg" alt="FPT Software" className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">FPT Software</h4>
                    <p className="text-sm text-muted-foreground">Đang nộp hồ sơ vào:</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="font-medium">Vị trí: Fresher Java Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Gian hàng: A1-A3</span>
                  </div>
                </div>

                <div className="rounded-lg bg-highlight/10 border border-highlight/30 p-3">
                  <p className="text-sm text-center">Hồ sơ của bạn sẽ được gửi đến nhà tuyển dụng ngay lập tức</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark font-bold py-6 text-lg"
                  onClick={() => {
                    setShowConfirmation(false)
                    alert("Đã nộp hồ sơ thành công!")
                  }}
                >
                  Xác nhận nộp
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowConfirmation(false)}>
                  Hủy bỏ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <MobileNavBar />

      <style jsx>{`
        @keyframes scan {
          0%,
          100% {
            top: 0;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  )
}
