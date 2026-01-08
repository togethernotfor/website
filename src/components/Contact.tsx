"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  variant?: "default" | "card";
  className?: string;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
  animated?: boolean;
}

export default function Contact({
  variant = "default",
  className,
  buttonClassName,
  buttonStyle,
  animated = true,
}: ContactProps) {
  const title = "Let's build something together";
  const description =
    "Whether you're a local government looking to increase transparency, a small business needing a custom solution, or a non-profit ready to amplify your impact — we'd love to hear from you.";
  const responseTime = "We typically respond within 1-2 business days";
  const emailHref =
    "mailto:info@togethernotfor.com?subject=Let's%20Collaborate!&body=Hi%20Together%20Not%20For%20team%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20love%20to%20discuss%20a%20potential%20project.%0A%0ABest%2C%0A[Your%20Name]";

  const button = (
    <a
      href={emailHref}
      className={cn(
        "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center",
        variant === "default" ? "bg-foreground text-background" : "",
        buttonClassName
      )}
      style={buttonStyle}
    >
      <Mail className="w-5 h-5" />
      Get in Touch
    </a>
  );

  if (variant === "default") {
    const content = (
      <>
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {button}
        </div>

        <p className="text-sm md:text-base text-foreground/80">
          {responseTime}
        </p>
      </>
    );

    return (
      <section
        id="contact"
        className={cn("py-16 md:py-24 px-5 md:px-8 bg-cover-yellow", className)}
      >
        {animated ? (
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content}
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            {content}
          </div>
        )}
      </section>
    );
  }

  return (
    <section id="contact" className={cn("mb-8 md:mb-12", className)}>
      <Card
        style={{
          backgroundColor: "rgba(43, 59, 100, 0.08)",
        }}
        className="dark:bg-[rgba(107,143,199,0.08)]"
      >
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="text-base md:text-xl max-w-2xl mx-auto text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {button}
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              {responseTime}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
