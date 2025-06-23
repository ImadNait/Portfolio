"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type ProjectStatus = "completed" | "in-progress"

interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  status: ProjectStatus
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Webhooks Manager",
      description: "A service that captures, processes, forwards webhook events and supports event logging, email/SMS notifications, and Stripe webhooks.",
      tags: ["NestJS", "ExpressJS","MongoDB", "Stripe"],
      githubUrl: "https://github.com/ImadNait/Webhooks-Manager",
      status: "completed",
    },
    {
      title: "Chatting App",
      description: "A chat application using React and Socket.io for real-time messaging. Built with a Node.js backend to handle live communication.",
      tags: ["React", "TypeScript", "NodeJS", "Socket.io"],
      githubUrl: "https://github.com/ImadNait/Chatting-App",
      status: "completed",
    },
    {
      title: "Multi-Tenant task manager",
      description: "A platform where organizations manage tasks in isolated environments with secure user access and tenant-level permissions.",
      tags: ["Django", "HTML", "PostgreSQL"],
      githubUrl: "#",
      status: "in-progress",
    },
    {
      title: "Image Compressor",
      description: "A mini project of an images compressor (size-reducer)",
      tags: ["Bun", "ExpressJS", "Sharp"],
      githubUrl: "https://github.com/ImadNait/Image-Compressor",
      status: "completed",
    },
    {
      title: "Mini Book Shelf",
      description: "A small full-stack application where users can manage a personal collection of books.",
      tags: ["React", "Tailwind", "NestJS", "TypeORM", "PostgreSQL"],
      githubUrl: "https://github.com/ImadNait/Mini-Book-Shelf",
      status: "completed",
    },
    {
      title: "Pictionary game",
      description: "A real-time multiplayer drawing and guessing game where players take turns sketching words while others try to guess them correctly before time runs out.",
      tags: ["NextJS", "ExpressJS", "Socket.io", "MongoDB"],
      githubUrl: "#",
      status: "in-progress",
    },
  ]

  const getStatusColor = (status: ProjectStatus) => {
    return status === "completed" ? "bg-green-500/10 text-green-500" : "bg-orange-500/10 text-orange-500"
  }

  const getStatusText = (status: ProjectStatus) => {
    return status === "completed" ? "Completed" : "In Progress"
  }

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <div className="w-20 h-1 mx-auto my-4 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my personal projects that showcases practical use cases and backend proficiency.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge
                      className={`${getStatusColor(project.status)} border-0 text-xs font-medium pointer-events-none`}
                    >
                      {getStatusText(project.status)}
                    </Badge>
                  </div>

                  <p className="mb-4 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`btn-hover group ${project.status === "in-progress" ? "cursor-not-allowed opacity-60" : ""}`}
                      asChild={project.status === "completed"}
                      disabled={project.status === "in-progress"}
                    >
                      {project.status === "completed" ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          <span className="group-hover:hidden">Code</span>
                          <span className="hidden group-hover:inline">Code</span>
                        </a>
                      ) : (
                        <span className="flex items-center">
                          <Github size={16} className="mr-2" />
                          <span className="group-hover:hidden">Code</span>
                          <span className="hidden group-hover:inline">Not Yet</span>
                        </span>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
