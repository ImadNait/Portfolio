"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold transition-colors hover:text-primary">
          ImadNait
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="btn-hover" asChild>
            <a href="/Imad Resume.pdf" download="Imad-Resume.pdf">
              Resume
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            className={cn("p-2 hamburger-button", isOpen && "hamburger-open")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="hamburger-line w-6 h-0.5 bg-current mb-1"></span>
              <span className="hamburger-line w-6 h-0.5 bg-current mb-1"></span>
              <span className="hamburger-line w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>

{isOpen && (
  <div className="fixed inset-0 z-40 flex flex-col md:hidden bg-background mobile-menu-enter">
    <div className="flex justify-end p-4">
      <button
        className="text-2xl font-bold"
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      >
        ×
      </button>
    </div>

    <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
      {navItems.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-xl font-medium transition-colors hover:text-primary"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(item.href)?.scrollIntoView({
              behavior: "smooth",
            })
            setIsOpen(false)
          }}
        >
          {item.name}
        </Link>
      ))}
      <Button size="lg" className="btn-hover" asChild>
        <a href="/Imad Resume.pdf" download="Imad_Nait_Mihoub_Resume.pdf">
          Resume
        </a>
      </Button>
    </nav>
  </div>
)}

    </header>
  )
}
