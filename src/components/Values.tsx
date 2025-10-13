"use client";

import { Heart, Sparkles, Handshake, Users } from "lucide-react";
import { motion } from "motion/react";

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Community-First",
      description: "We prioritize community impact over profit.",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Tailored technology, not one-size-fits-all templates.",
    },
    {
      icon: Handshake,
      title: "Transparent & Affordable",
      description: "Clear pricing and honest communication, always.",
    },
    {
      icon: Users,
      title: "Built Together",
      description: "Collaborative approach that centers your mission.",
    },
  ];

  return (
    <section className="py-8 md:py-20 px-5 md:px-8 bg-muted/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technology built with purpose, care, and your community in mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-4 md:p-5 bg-background rounded-lg border border-border/50 hover:border-border transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cover-yellow/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
                <h3 className="text-base md:text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
