"use client";

import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="py-8 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Our Work
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects making a real difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link
                href={project.href}
                target={project.href.startsWith("/") ? undefined : "_blank"}
                rel={
                  project.href.startsWith("/")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group block"
              >
                <Card className="border border-border/50 shadow-none hover:border-border hover:shadow-md transition-all overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div
                      className="relative aspect-video overflow-hidden bg-muted"
                      style={
                        project.id === "our-porch"
                          ? { backgroundColor: "#FFF4E1" }
                          : undefined
                      }
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={
                          project.id === "policy-eagle"
                            ? { objectPosition: "center" }
                            : project.id === "our-porch"
                            ? { objectFit: "contain" }
                            : undefined
                        }
                      />
                    </div>
                    <div className="p-5 md:p-6 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {project.description}
                      </p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
