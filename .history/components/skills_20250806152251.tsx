"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

type Skill = {
  name: string
  icon: string
}

export function Skills() {
  const skills: Skill[] = [
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },    
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },    
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Bun", icon: "/icons/bun.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },

  ]

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Tech Stack</h2>
          <div className="w-20 h-1 mx-auto my-4 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            I've worked with a range of technologies in the web development world, from front-end to back-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillIcon key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {
  const iconRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const element = iconRef.current
    if (!element) return

    const startX = Math.random() * 20 - 10
    const startY = Math.random() * 20 - 10

    const duration = 10 + Math.random() * 10

    const directionX = Math.random() > 0.5 ? 1 : -1
    const directionY = Math.random() > 0.5 ? 1 : -1

    element.style.setProperty("--start-x", `${startX}px`)
    element.style.setProperty("--start-y", `${startY}px`)
    element.style.setProperty("--duration", `${duration}s`)
    element.style.setProperty("--direction-x", directionX.toString())
    element.style.setProperty("--direction-y", directionY.toString())
  }, [])

  const isDarkMode = mounted ? theme === "dark" : true

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >

      <div ref={iconRef} className="flex flex-col items-center floating-icon">
        <div className="relative flex items-center justify-center w-20 h-20 p-3 mb-3 overflow-hidden transition-all duration-300 rounded-lg bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 group">
          <div className="relative w-full h-full">
            <img
              src={skill.icon || "/placeholder.svg"}
              alt={skill.name}
              className="w-full h-full object-contain transition-all duration-500 ease-in-out"
              style={{
                filter: isDarkMode
                  ? "brightness(0) invert(1)" 
                  : "brightness(0) saturate(100%) invert(13%) sepia(11%) saturate(1015%) hue-rotate(202deg) brightness(95%) contrast(89%)", // #202128 in light mode
              }}
            />
          </div>
        </div>

        <span className="text-xs font-medium text-center">{skill.name}</span>
      </div>
    </motion.div>
  )
}
