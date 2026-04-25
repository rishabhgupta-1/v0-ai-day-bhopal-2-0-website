"use client"

import { motion, useInView, useScroll, useTransform, useSpring, type Variants } from "framer-motion"
import { useRef, type ReactNode, useState, useEffect } from "react"
import Image from "next/image"

// ============ FADE IN ANIMATION ============
interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ STAGGER CONTAINER ============
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ STAGGER ITEM ============
interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...directions[direction], scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// ============ SCALE IN ANIMATION ============
interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function ScaleIn({ children, className, delay = 0, once = true }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ SLIDE IN ANIMATION ============
interface SlideInProps {
  children: ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
  once?: boolean
}

export function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
  once = true,
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const x = direction === "left" ? -100 : 100

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ TEXT REVEAL ANIMATION ============
export function TextReveal({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div ref={ref} className={className}>
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// ============ COUNT UP ANIMATION ============
export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        // Ease out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasStarted])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {prefix}{count}{suffix}
    </motion.span>
  )
}

// ============ PARALLAX SCROLL ============
interface ParallaxProps {
  children: ReactNode
  className?: string
  offset?: number
}

export function Parallax({ children, className, offset = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

// ============ REVEAL ON SCROLL ============
interface RevealProps {
  children: ReactNode
  className?: string
  width?: "fit" | "full"
}

export function Reveal({ children, className, width = "fit" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`relative ${width === "full" ? "w-full" : "w-fit"} overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : { left: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-primary z-20"
      />
    </div>
  )
}

// ============ MAGNETIC HOVER ============
interface MagneticProps {
  children: ReactNode
  className?: string
}

export function Magnetic({ children, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ LAZY IMAGE ============
interface LazyImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
}

export function LazyImage({ src, alt, className, fill, width, height, priority = false }: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "200px" })
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className={`relative ${className}`}
    >
      {isInView && (
        <>
          {/* Skeleton loader */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            className="absolute inset-0 bg-secondary animate-pulse rounded-inherit"
          />
          <Image
            src={src}
            alt={alt}
            fill={fill}
            width={!fill ? width : undefined}
            height={!fill ? height : undefined}
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          />
        </>
      )}
    </motion.div>
  )
}

// ============ FLOAT ANIMATION ============
interface FloatProps {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
}

export function Float({ children, className, duration = 3, distance = 10 }: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ GLOW PULSE ============
interface GlowPulseProps {
  children: ReactNode
  className?: string
  color?: string
}

export function GlowPulse({ children, className, color = "rgba(251,146,60,0.4)" }: GlowPulseProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px ${color}`,
          `0 0 60px ${color}`,
          `0 0 20px ${color}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ BLUR IN ============
interface BlurInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function BlurIn({ children, className, delay = 0 }: BlurInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ ROTATE IN ============
interface RotateInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RotateIn({ children, className, delay = 0 }: RotateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============ TYPEWRITER ============
interface TypewriterProps {
  text: string
  className?: string
  speed?: number
}

export function Typewriter({ text, className, speed = 50 }: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayText, setDisplayText] = useState("")
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, speed)
      return () => clearInterval(timer)
    }
  }, [isInView, text, speed, hasStarted])

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}
