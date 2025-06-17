"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, Plug, Cloud } from "lucide-react"

export function About() {
  const services = [
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Backend Development",
      description:
        "Building robust APIs, microservices, and server-side applications with Node.js, Express, NestJS, and Django.",
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Database Design",
      description: "Designing and optimizing databases with MongoDB, PostgreSQL, and Redis for scalable applications.",
    },
    {
      icon: <Plug className="w-10 h-10 text-primary" />,
      title: "API Integration",
      description: "Creating RESTful APIs, GraphQL endpoints, and integrating third-party services and webhooks.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "DevOps & Deployment",
      description: "Setting up CI/CD pipelines, containerization with Docker, and cloud deployment strategies.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-20 h-1 mx-auto my-4 bg-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm a computer science student and junior web developer specialized in back-end development. As a dedicated web developer, I thrive on creating efficient, scalable, and robust server-side solutions.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I also enjoy problem-solving and programming, and I'm always eager to tackle new challenges. Whether it's debugging a tricky issue or coming up with an innovative solution, I find immense satisfaction in overcoming obstacles through code.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
