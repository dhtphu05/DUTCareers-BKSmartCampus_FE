"use client"

import { Building2 } from "lucide-react"

const employers = [
  { name: "FPT Software", logo: "/fpt-software-logo.jpg" },
  { name: "Viettel", logo: "/viettel-logo.jpg" },
  { name: "LG Electronics", logo: "/lg-logo-abstract.png" },
  { name: "Sun Group", logo: "/sun-group-logo.jpg" },
  { name: "Bosch", logo: "/bosch-logo.jpg" },
  { name: "Enclave", logo: "/enclave-logo.jpg" },
]

export function TopEmployersSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="h-8 w-8 text-blue-800" />
          <h2 className="text-3xl font-bold text-slate-900">Doanh nghiệp hàng đầu</h2>
        </div>

        {/* Employer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {employers.map((employer) => (
            <div
              key={employer.name}
              className="group flex items-center justify-center bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={employer.logo || "/placeholder.svg"}
                alt={employer.name}
                className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
