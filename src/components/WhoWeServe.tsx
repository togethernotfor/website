"use client";

import { Building2, Store, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function WhoWeServe() {
  const audiences = [
    {
      icon: Building2,
      title: "Local Governments",
      description:
        "Civic technology and public transparency tools that strengthen community engagement and make government services more accessible.",
      examples: "Mapping platforms, data visualization, public portals",
    },
    {
      icon: Store,
      title: "Small Businesses",
      description:
        "Custom web solutions and digital tools designed to help you compete, grow, and better serve your customers.",
      examples: "Business websites, customer management, booking systems",
    },
    {
      icon: Heart,
      title: "Non-Profits",
      description:
        "Mission-driven applications that amplify your impact, connect you with supporters, and help you achieve your goals.",
      examples: "Donor platforms, volunteer management, impact tracking",
    },
  ];

  return (
    <section className="py-8 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Who We Serve
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with organizations making a difference in their
            communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-2 md:space-y-4 p-2 md:p-6 rounded-lg hover:bg-accent/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover-yellow flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold">
                  {audience.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {audience.description}
                </p>
                <p className="hidden lg:block text-xs md:text-sm text-muted-foreground italic">
                  {audience.examples}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
