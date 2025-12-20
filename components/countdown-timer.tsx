"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-4 justify-center">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="relative bg-black/40 backdrop-blur-md border-2 border-cyan-400/50 rounded-2xl px-6 py-4 min-w-[90px] shadow-2xl"
        style={{
          boxShadow: "0 0 30px rgba(0, 242, 255, 0.3), inset 0 0 20px rgba(0, 242, 255, 0.1)",
        }}
      >
        <div className="text-5xl font-bold text-cyan-400 tabular-nums" style={{ textShadow: "0 0 20px rgba(0, 242, 255, 0.8)" }}>
          {value.toString().padStart(2, "0")}
        </div>
        {/* Neon glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-transparent pointer-events-none" />
      </div>
      <div className="text-sm text-cyan-300 mt-3 font-semibold uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}
