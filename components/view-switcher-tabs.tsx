"use client"
import { User, Building2, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TopCVJobGrid } from "./topcv-job-grid"
import { TopCVJobList } from "./topcv-job-list"
import { CVProfileSection } from "./cv-profile-section"

export function ViewSwitcherTabs() {
  return (
    <div className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="student" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex p-1 bg-white border border-border shadow-sm">
              <TabsTrigger value="student" className="gap-2">
                <User className="h-4 w-4" />
                Student View
              </TabsTrigger>
              <TabsTrigger value="recruiter" className="gap-2">
                <Building2 className="h-4 w-4" />
                Recruiter View
              </TabsTrigger>
              <TabsTrigger value="event" className="gap-2">
                <Calendar className="h-4 w-4" />
                Event View
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="student" className="mt-0">
            <TopCVJobGrid />
            <TopCVJobList />
            <CVProfileSection />
          </TabsContent>

          <TabsContent value="recruiter" className="mt-0">
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground mb-2">Recruiter Dashboard</h3>
              <p className="text-muted-foreground">
                Chuyển sang{" "}
                <a href="/recruiter" className="text-primary hover:underline">
                  trang nhà tuyển dụng
                </a>
              </p>
            </div>
          </TabsContent>

          <TabsContent value="event" className="mt-0">
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground mb-2">Event Landing Page</h3>
              <p className="text-muted-foreground">
                Xem{" "}
                <a href="/events/job-fair-2025" className="text-primary hover:underline">
                  DUT Job Fair 2025
                </a>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
