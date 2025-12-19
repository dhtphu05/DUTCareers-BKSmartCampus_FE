"use client"

import { QrCodeIcon, CheckCircle2, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MobileNavBar } from "@/components/mobile-nav-bar"

export default function TicketPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
        <h1 className="text-2xl font-bold text-center">DUT JOB FAIR 2025</h1>
        <p className="text-center text-sm text-white/80 mt-1">Event Mode - Vé tham dự</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Card className="mx-auto max-w-md overflow-hidden shadow-xl">
          <CardHeader className="bg-accent text-accent-foreground p-6 text-center">
            <h2 className="text-2xl font-bold">VÉ THAM DỰ SỰ KIỆN</h2>
          </CardHeader>

          <CardContent className="p-8">
            {/* QR Code */}
            <div className="mb-6 flex justify-center">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="QR Code"
                  className="h-48 w-48 rounded-lg"
                  style={{
                    imageRendering: "pixelated",
                    backgroundColor: "#ffffff",
                    border: "8px solid #000000",
                  }}
                />
              </div>
            </div>

            {/* Student Info */}
            <div className="space-y-4 mb-6">
              <div className="text-center border-b pb-4">
                <h3 className="text-2xl font-bold text-foreground">Nguyễn Văn A</h3>
                <p className="text-muted-foreground">MSSV: 102210xxx</p>
                <Badge className="mt-2 bg-green-500 text-white gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified Student
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Khoa:</span>
                  <span className="font-semibold">Công nghệ Thông tin</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Năm học:</span>
                  <span className="font-semibold">Năm 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in:</span>
                  <span className="font-semibold text-green-600">07:45 - 20/12/2025</span>
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <div className="rounded-lg bg-highlight/10 border border-highlight/30 p-4 mb-6">
              <p className="text-sm text-center text-foreground">
                <QrCodeIcon className="inline h-4 w-4 mr-1" />
                Đưa mã này cho Doanh nghiệp để nộp hồ sơ hoặc Check-in Workshop
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Chia sẻ
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Tải xuống
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs text-muted-foreground">Hồ sơ đã nộp</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">2</div>
              <div className="text-xs text-muted-foreground">Workshop đã tham gia</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-highlight">12</div>
              <div className="text-xs text-muted-foreground">Công ty đã ghé thăm</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MobileNavBar />
    </div>
  )
}
