"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Sparkles } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const diamondSponsors = [
  { name: "FPT Software", logo: "/fpt-logo.jpg", booth: "A1-A3", tier: "diamond" },
  { name: "Viettel Digital", logo: "/viettel-logo.png", booth: "B1-B3", tier: "diamond" },
  { name: "LG Display", logo: "/lg-logo.jpg", booth: "C1-C3", tier: "diamond" },
]

const goldSponsors = [
  { name: "VNG Corporation", logo: "/vng-logo.jpg", booth: "D1", tier: "gold" },
  { name: "Thaco Auto", logo: "/automotive-company.jpg", booth: "D2", tier: "gold" },
  { name: "Coteccons", logo: "/construction-company-site.png", booth: "D3", tier: "gold" },
  { name: "Schneider Electric", logo: "/electrical-company.jpg", booth: "D4", tier: "gold" },
]

const silverSponsors = [
  { name: "Startup A", logo: "/placeholder.svg", booth: "E1", tier: "silver" },
  { name: "Startup B", logo: "/placeholder.svg", booth: "E2", tier: "silver" },
  { name: "Startup C", logo: "/placeholder.svg", booth: "E3", tier: "silver" },
  { name: "Startup D", logo: "/placeholder.svg", booth: "E4", tier: "silver" },
]

export function CompanySponsors() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300f2ff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 md:text-6xl">
            Doanh nghiệp{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tham gia
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Kết nối với hơn 50+ doanh nghiệp hàng đầu tại Việt Nam
          </p>
        </motion.div>

        {/* Diamond Sponsors - Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-lg px-6 py-2 font-bold">
              <Sparkles className="h-4 w-4 mr-2" />
              Diamond Sponsors
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {diamondSponsors.map((sponsor, index) => (
              <DiamondSponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg px-6 py-2 font-bold">
              Gold Sponsors
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-4 max-w-6xl mx-auto">
            {goldSponsors.map((sponsor, index) => (
              <GoldSponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge className="bg-gradient-to-r from-slate-300 to-slate-400 text-black text-lg px-6 py-2 font-bold">
              Silver Sponsors
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-4 max-w-5xl mx-auto">
            {silverSponsors.map((sponsor, index) => (
              <SilverSponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function DiamondSponsorCard({ sponsor, index }: { sponsor: any; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        <Card className="bg-slate-900/40 backdrop-blur-md border-2 border-cyan-400/50 overflow-hidden h-full">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

          {/* Breathing glow animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <CardContent className="p-8 flex flex-col items-center relative z-10">
            <div className="h-32 w-full flex items-center justify-center mb-6 bg-white/5 rounded-lg p-4">
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-full w-full object-contain filter brightness-110"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-white">{sponsor.name}</h3>
            <Badge variant="outline" className="gap-1 border-cyan-400/50 text-cyan-400">
              <MapPin className="h-3 w-3" />
              Gian hàng {sponsor.booth}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function GoldSponsorCard({ sponsor, index }: { sponsor: any; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <motion.div
        whileHover={{ scale: 1.05, y: -3 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        <Card className="bg-slate-900/30 backdrop-blur-md border border-yellow-400/40 overflow-hidden h-full">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 40px rgba(250, 204, 21, 0.4)",
            }}
          />
          <CardContent className="p-6 flex flex-col items-center relative z-10">
            <div className="h-20 w-full flex items-center justify-center mb-4 bg-white/5 rounded-lg p-3">
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-center mb-2 text-white">{sponsor.name}</h3>
            <Badge variant="outline" className="text-xs gap-1 border-yellow-400/50 text-yellow-400">
              <MapPin className="h-3 w-3" />
              {sponsor.booth}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function SilverSponsorCard({ sponsor, index }: { sponsor: any; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        className="relative group"
      >
        <Card className="bg-slate-900/20 backdrop-blur-sm border border-slate-400/30 overflow-hidden h-full">
          <CardContent className="p-5 flex flex-col items-center relative z-10">
            <div className="h-16 w-full flex items-center justify-center mb-3 bg-white/5 rounded p-2">
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="text-sm font-semibold text-center mb-2 text-slate-300">{sponsor.name}</h3>
            <Badge variant="outline" className="text-xs gap-1 border-slate-400/50 text-slate-400">
              <MapPin className="h-3 w-3" />
              {sponsor.booth}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
