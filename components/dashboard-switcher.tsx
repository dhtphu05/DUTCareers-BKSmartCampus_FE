"use client"

import { Building2, School } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecruiterDashboardContent } from "./recruiter-dashboard-content"
import { UniversityAdminContent } from "./university-admin-content"

export function DashboardSwitcher() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4">
          <Tabs defaultValue="recruiter" className="w-full">
            <div className="flex justify-center mb-2">
              <TabsList className="inline-flex p-1 bg-white border border-border shadow-sm">
                <TabsTrigger
                  value="recruiter"
                  className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Building2 className="h-4 w-4" />
                  Giao diện Doanh nghiệp
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <School className="h-4 w-4" />
                  Giao diện Nhà trường
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recruiter" className="mt-6">
              <RecruiterDashboardContent />
            </TabsContent>

            <TabsContent value="admin" className="mt-6">
              <UniversityAdminContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
