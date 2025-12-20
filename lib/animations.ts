import { Variants } from "framer-motion"

// Fade up animation for scroll reveals
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

// Scale in animation
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Hover lift effect
export const hoverLift = {
    scale: 1.05,
    y: -5,
    transition: {
        duration: 0.3,
        ease: "easeOut",
    },
}

// Glow pulse animation
export const glowPulse = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(0, 242, 255, 0.5)",
            "0 0 40px rgba(0, 242, 255, 0.8)",
            "0 0 20px rgba(0, 242, 255, 0.5)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

// Slide in from left
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

// Slide in from right
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}
