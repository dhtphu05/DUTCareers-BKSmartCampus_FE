"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date()
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="flex gap-4 justify-center">
      <TimeBlock value={timeLeft.days} label="Ngày" />
      <TimeBlock value={timeLeft.hours} label="Giờ" />
      <TimeBlock value={timeLeft.minutes} label="Phút" />
      <TimeBlock value={timeLeft.seconds} label="Giây" />
    </div>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <Card className="bg-accent text-accent-foreground border-0 w-20 h-24 flex flex-col items-center justify-center">
      <div className="text-3xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-xs font-medium uppercase mt-1">{label}</div>
    </Card>
  )
}
