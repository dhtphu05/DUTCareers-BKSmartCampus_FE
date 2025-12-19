"use client"

import { CompanyData } from "./types"
import { CompanyCard } from "./CompanyCard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface CompanyListProps {
    companies: CompanyData[]
}

export function CompanyList({ companies }: CompanyListProps) {
    if (companies.length === 0) {
        return (
            <div className="text-center py-8 text-slate-500">
                <p className="text-sm">Không tìm thấy công ty phù hợp</p>
            </div>
        )
    }

    return (
        <div className="relative -mx-4 px-4">
            <ScrollArea className="w-full">
                <div className="flex gap-3 pb-4">
                    {companies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}
