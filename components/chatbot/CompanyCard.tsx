"use client"

import { CompanyData } from "./types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, ExternalLink } from "lucide-react"

interface CompanyCardProps {
    company: CompanyData
}

export function CompanyCard({ company }: CompanyCardProps) {
    return (
        <div className="flex-shrink-0 w-72 bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
            {/* Company Header */}
            <div className="flex items-start gap-3 mb-3">
                <div className="text-4xl">{company.logo}</div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 truncate">{company.name}</h4>
                    <p className="text-sm font-medium text-blue-600">{company.position}</p>
                </div>
            </div>

            {/* Location & Salary */}
            <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <DollarSign className="h-4 w-4 flex-shrink-0" />
                    <span>{company.salary}</span>
                </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-3">
                {company.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                    </Badge>
                ))}
                {company.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                        +{company.skills.length - 3}
                    </Badge>
                )}
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 mb-3 line-clamp-2">{company.description}</p>

            {/* Action Button */}
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs" asChild>
                <a href={company.link} target="_blank" rel="noopener noreferrer">
                    Xem chi tiết
                    <ExternalLink className="h-3 w-3 ml-1" />
                </a>
            </Button>
        </div>
    )
}
