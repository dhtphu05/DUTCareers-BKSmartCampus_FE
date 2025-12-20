"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Briefcase } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

interface Speaker {
    id: string
    name: string
    title: string
    company: string
    photo: string
    bio: string
    sessionTitle?: string
    linkedIn?: string
}

const speakers: Speaker[] = [
    {
        id: "1",
        name: "Nguyễn Văn A",
        title: "CTO",
        company: "FPT Software",
        photo: "/placeholder.svg",
        bio: "15+ năm kinh nghiệm trong phát triển phần mềm",
        sessionTitle: "AI & Machine Learning trong thực tế",
        linkedIn: "#",
    },
    {
        id: "2",
        name: "Trần Thị B",
        title: "Senior AI Engineer",
        company: "Viettel Digital",
        photo: "/placeholder.svg",
        bio: "Chuyên gia về Deep Learning và Computer Vision",
        sessionTitle: "Career Path trong ngành AI",
        linkedIn: "#",
    },
    {
        id: "3",
        name: "Lê Minh C",
        title: "Tech Lead",
        company: "VNG Corporation",
        photo: "/placeholder.svg",
        bio: "Founder của nhiều startup công nghệ",
        sessionTitle: "Từ Developer đến Tech Lead",
        linkedIn: "#",
    },
    {
        id: "4",
        name: "Phạm Thu D",
        title: "Product Manager",
        company: "Grab Vietnam",
        photo: "/placeholder.svg",
        bio: "Chuyên gia về Product Management",
        sessionTitle: "Product Thinking cho Engineers",
        linkedIn: "#",
    },
    {
        id: "5",
        name: "Hoàng Quốc E",
        title: "DevOps Lead",
        company: "Shopee Vietnam",
        photo: "/placeholder.svg",
        bio: "Expert trong Cloud Infrastructure",
        sessionTitle: "Modern DevOps Practices",
        linkedIn: "#",
    },
    {
        id: "6",
        name: "Võ Thị F",
        title: "UX Director",
        company: "Tiki",
        photo: "/placeholder.svg",
        bio: "10+ năm kinh nghiệm trong UX Design",
        sessionTitle: "Design Thinking Workshop",
        linkedIn: "#",
    },
]

export function SpeakerGrid() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Blueprint grid background */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23bc13fe' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4 md:text-6xl">
                        Diễn giả &{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Mentor
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Học hỏi từ những chuyên gia hàng đầu trong ngành công nghệ
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
                >
                    {speakers.map((speaker, index) => (
                        <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div variants={fadeUp} custom={index}>
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative group h-full"
            >
                <Card className="bg-slate-900/40 backdrop-blur-md border border-purple-500/30 overflow-hidden h-full hover:border-purple-400/60 transition-colors">
                    {/* Neon glow on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            boxShadow: "0 0 40px rgba(188, 19, 254, 0.4)",
                        }}
                    />

                    <CardContent className="p-6 relative z-10">
                        {/* Speaker Photo */}
                        <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                            <motion.img
                                src={speaker.photo}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                                style={{
                                    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Neon border on hover */}
                            <motion.div
                                className="absolute inset-0 border-2 border-purple-400 rounded-xl opacity-0 group-hover:opacity-100"
                                style={{
                                    boxShadow: "0 0 20px rgba(188, 19, 254, 0.6)",
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Speaker Info */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                            <div className="flex items-center gap-2 text-purple-400">
                                <Briefcase className="h-4 w-4" />
                                <p className="text-sm font-semibold">{speaker.title}</p>
                            </div>
                            <p className="text-sm text-slate-400">{speaker.company}</p>
                            <p className="text-sm text-slate-300 line-clamp-2">{speaker.bio}</p>

                            {speaker.sessionTitle && (
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50 mt-3">
                                    {speaker.sessionTitle}
                                </Badge>
                            )}

                            {speaker.linkedIn && (
                                <motion.a
                                    href={speaker.linkedIn}
                                    whileHover={{ scale: 1.1 }}
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mt-2"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </motion.a>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}
