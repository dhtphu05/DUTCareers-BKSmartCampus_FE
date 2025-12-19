"use client"

import { useState } from "react"
import { ModernHeader } from "@/components/modern-header"
import { HeroSection } from "@/components/hero-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { AISuggestionsSection } from "@/components/ai-suggestions-section"
import { JobBoardSection } from "@/components/job-board-section"
import { TopEmployersSection } from "@/components/top-employers-section"
import { FixedAIChatbot } from "@/components/fixed-ai-chatbot"
import { RecruiterView } from "@/components/recruiter-view"
import { JobFairView } from "@/components/jobfair-view"
import { UniversityView } from "@/components/university-view"
import { JobDetailView } from "@/components/job-detail-view"

export type ViewType = "student-home" | "job-detail" | "event-hub" | "recruiter-dashboard" | "admin-dashboard"

export interface Job {
  id: number
  title: string
  company: string
  logo: string
  location: string
  salary: string
  type: string
  tags: string[]
  postedTime: string
  isHot: boolean
}

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewType>("student-home")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const handleJobClick = (job: Job) => {
    setSelectedJob(job)
    setCurrentView("job-detail")
  }

  const handleBackToHome = () => {
    setCurrentView("student-home")
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ModernHeader currentView={currentView} setCurrentView={setCurrentView} />

      <main>
        {currentView === "student-home" && (
          <>
            <HeroSection />
            <WorkshopsSection setCurrentView={setCurrentView} />
            <AISuggestionsSection />
            <JobBoardSection onJobClick={handleJobClick} />
            <TopEmployersSection />
          </>
        )}

        {currentView === "job-detail" && selectedJob && <JobDetailView job={selectedJob} onBack={handleBackToHome} />}

        {currentView === "event-hub" && (
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <JobFairView />
          </div>
        )}

        {currentView === "recruiter-dashboard" && (
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <RecruiterView />
          </div>
        )}

        {currentView === "admin-dashboard" && (
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <UniversityView />
          </div>
        )}
      </main>

      <FixedAIChatbot />
    </div>
  )
}
