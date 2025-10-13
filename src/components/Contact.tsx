import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-5 md:px-8 bg-cover-yellow"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's build something together
          </h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
            Whether you're a local government looking to increase transparency,
            a small business needing a custom solution, or a non-profit ready to
            amplify your impact — we'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="mailto:info@togethernotfor.com?subject=Let's%20Collaborate!&body=Hi%20Together%20Not%20For%20team%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20love%20to%20discuss%20a%20potential%20project.%0A%0ABest%2C%0A[Your%20Name]"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>

        <p className="text-sm md:text-base text-foreground/80">
          We typically respond within 1-2 business days
        </p>
      </div>
    </section>
  );
}
