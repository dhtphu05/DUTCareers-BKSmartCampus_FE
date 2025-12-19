"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const diamondSponsors = [
  { name: "FPT Software", logo: "/fpt-logo.jpg", booth: "A1-A3" },
  { name: "Viettel Digital", logo: "/viettel-logo.png", booth: "B1-B3" },
  { name: "LG Display", logo: "/lg-logo.jpg", booth: "C1-C3" },
]

const goldSponsors = [
  { name: "VNG Corporation", logo: "/vng-logo.jpg", booth: "D1" },
  { name: "Thaco Auto", logo: "/automotive-company.jpg", booth: "D2" },
  { name: "Coteccons", logo: "/construction-company-site.png", booth: "D3" },
  { name: "Schneider Electric", logo: "/electrical-company.jpg", booth: "D4" },
]

export function CompanySponsors() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Doanh nghiệp tham gia</h2>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="bg-gradient-to-r from-primary to-primary-dark text-white text-lg px-4 py-2">
              Diamond Sponsors
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {diamondSponsors.map((sponsor) => (
              <Card key={sponsor.name} className="hover:shadow-xl transition-shadow bg-card">
                <CardContent className="p-8 flex flex-col items-center">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="h-24 w-full object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold text-center mb-2">{sponsor.name}</h3>
                  <Badge variant="outline" className="gap-1">
                    <MapPin className="h-3 w-3" />
                    Gian hàng {sponsor.booth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="bg-highlight text-highlight-foreground text-lg px-4 py-2">Gold Sponsors</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-4 max-w-5xl mx-auto">
            {goldSponsors.map((sponsor) => (
              <Card key={sponsor.name} className="hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6 flex flex-col items-center">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="h-16 w-full object-contain mb-3"
                  />
                  <h3 className="text-sm font-bold text-center mb-2">{sponsor.name}</h3>
                  <Badge variant="outline" className="text-xs gap-1">
                    <MapPin className="h-3 w-3" />
                    {sponsor.booth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark gap-2 font-bold">
            <MapPin className="h-5 w-5" />
            Xem Bản đồ Gian hàng (Live Map)
          </Button>
        </div>
      </div>
    </section>
  )
}
