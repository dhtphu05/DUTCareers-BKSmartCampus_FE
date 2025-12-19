"use client"

import { RoadmapData } from "./types"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BookOpen, Clock } from "lucide-react"

interface RoadmapTimelineProps {
    roadmap: RoadmapData
}

export function RoadmapTimeline({ roadmap }: RoadmapTimelineProps) {
    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-semibold text-slate-900">{roadmap.title}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        Tổng thời gian: {roadmap.totalDuration}
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
                {roadmap.phases.map((phase, phaseIndex) => (
                    <div key={phaseIndex} className="relative">
                        {/* Timeline connector */}
                        {phaseIndex < roadmap.phases.length - 1 && (
                            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300" />
                        )}

                        {/* Phase */}
                        <div className="relative">
                            {/* Phase indicator */}
                            <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                {phaseIndex + 1}
                            </div>

                            {/* Phase content */}
                            <div className="ml-12">
                                <div className="flex items-center gap-2 mb-2">
                                    <h5 className="font-semibold text-slate-800">{phase.phase}</h5>
                                    <Badge variant="outline" className="text-xs">
                                        {phase.duration}
                                    </Badge>
                                </div>

                                {/* Courses */}
                                <div className="space-y-2">
                                    {phase.courses.map((course, courseIndex) => (
                                        <Card
                                            key={courseIndex}
                                            className="p-3 bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <Badge className="bg-blue-600 hover:bg-blue-700 text-xs font-mono">
                                                            {course.code}
                                                        </Badge>
                                                        <BookOpen className="h-3 w-3 text-slate-400" />
                                                    </div>
                                                    <p className="text-sm font-medium text-slate-700 mt-1">{course.name}</p>
                                                </div>
                                                <Badge variant="secondary" className="text-xs flex-shrink-0">
                                                    {course.credits} TC
                                                </Badge>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
