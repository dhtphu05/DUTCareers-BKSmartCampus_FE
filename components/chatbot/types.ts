// Type definitions for DUT AI Mentor Chatbot

export enum MessageType {
  TEXT = "text",
  COMPANY_LIST = "company_list",
  ROADMAP = "roadmap",
  COMBINED = "combined",
}

export enum UserIntent {
  JOB_SEARCH = "job_search",
  LEARNING_ROADMAP = "learning_roadmap",
  CV_REVIEW = "cv_review",
  GENERAL_QUESTION = "general_question",
  COMBINED_SEARCH = "combined_search",
}

export interface CompanyData {
  id: string
  name: string
  logo?: string
  position: string
  location: string
  salary: string
  skills: string[]
  description: string
  link: string
}

export interface CourseData {
  code: string
  name: string
  credits: number
}

export interface RoadmapPhase {
  phase: string
  duration: string
  courses: CourseData[]
}

export interface RoadmapData {
  title: string
  careerGoal: string
  totalDuration: string
  phases: RoadmapPhase[]
}

export interface EnhancedMessage {
  id: number
  role: "bot" | "user"
  content: string
  type: MessageType
  data?: {
    companies?: CompanyData[]
    roadmap?: RoadmapData
  }
  timestamp: Date
}

export interface IntentAnalysis {
  intent: UserIntent
  entities: {
    position?: string
    careerGoal?: string
    skills?: string[]
  }
}
