"use client"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import BlurFade from "@/components/magicui/blur-fade";


const BLUR_FADE_DELAY = 0.04;

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      x.set((mouseX - centerX) / centerX)
      y.set((mouseY - centerY) / centerY)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }


  return (
        <div 
          className="flex-1 relative"
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        ><BlurFade delay={BLUR_FADE_DELAY * 3}>
          <motion.div 
            className="w-full max-w-[500px] aspect-square mx-auto relative"
            style={{
              x: translateX,
              y: translateY,
            }}
          >
            <Image
              src="/moo.png"
              alt="Martin Ordonez"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          </BlurFade>
        </div>
  );
}