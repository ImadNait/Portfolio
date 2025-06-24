"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  const isDarkMode = mounted ? theme === "dark" : true

  return (
    <section id="home" ref={ref} className="relative flex flex-col items-center justify-center min-h-screen px-4 py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] overflow-hidden rounded-full border-4 border-primary/20 p-1 shadow-xl">
              <Image
                src="/images/profile-light.jpg"
                alt="Profile"
                fill
                className={`object-cover rounded-full transition-opacity duration-500 ease-in-out ${
                  isDarkMode ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
              <Image
                src="/images/profile-dark.jpg"
                alt="Profile"
                fill
                className={`object-cover rounded-full transition-opacity duration-500 ease-in-out absolute inset-0 ${
                  isDarkMode ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
          </motion.div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Backend Developer
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
            >
              Hey there, <br /> I'm <span className="text-primary">Imad <br /> Nait-Mihoub</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              I build accessible, scalable, and performant web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/ImadNait"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/imadnaitmihoub/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/naitmihoub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
            aria-label="X (Twitter)"
          >
            <XIcon size={20} />
          </a>
          <a
            href="mailto:naitmihoubimzd@gmail.com"
            className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={scrollToNext} aria-label="Scroll down">
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
