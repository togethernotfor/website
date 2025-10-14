import Image from "next/image";
import Link from "next/link";
import { Bell, Calendar, Tag, Lock } from "lucide-react";
import { Metadata } from "next";
import FeatureCard from "@/components/our-porch/FeatureCard";
import FAQItem from "@/components/our-porch/FAQItem";
import StepCard from "@/components/our-porch/StepCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Our Porch - Build Stronger Neighborhood Connections | Support",
  description:
    "Our Porch is a privacy-first mobile app that helps you stay connected with your neighbors through smart reminders and local contact management. No cloud sync, all data stays on your device. Download for iOS and Android.",
  keywords: [
    "neighborhood app",
    "neighbor management app",
    "community building",
    "contact reminders",
    "local relationships",
    "neighbor tracking",
    "privacy app",
    "local storage",
    "community connections",
    "neighbor reminder app",
  ],
  openGraph: {
    title: "Our Porch - Build Stronger Neighborhood Connections",
    description:
      "Stay connected with your neighbors through smart reminders and local contact management. Privacy-first, all data stays on your device.",
    type: "website",
    url: "https://togethernotfor.com/our-porch/support",
    siteName: "Our Porch",
    images: [
      {
        url: "https://www.togethernotfor.com/our-porch/icon1-cropped.png",
        width: 1200,
        height: 630,
        alt: "Our Porch App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Porch - Build Stronger Neighborhood Connections",
    description:
      "Stay connected with your neighbors through smart reminders. Privacy-first, all data stays on your device.",
    images: ["https://www.togethernotfor.com/our-porch/icon1-cropped.png"],
  },
};

export default function OurPorchSupport() {
  return (
    <div className="min-h-screen">
      {/* Header with Mode Toggle */}
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to <span className="text-yellow-300">Our Porch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Building stronger communities, one neighbor at a time
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our Porch helps you nurture meaningful relationships with the people
            who live around you. Stay connected with your neighbors through
            gentle reminders, and contact tracking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-cover-yellow hover:bg-cover-yellow/90 text-black font-semibold"
              asChild
            >
              <Link href="#" aria-label="Download on the App Store">
                Download on the App Store
              </Link>
            </Button>
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="max-w-6xl mx-auto mt-8">
          {/* Mobile: Single screenshot */}
          <div className="md:hidden flex justify-center">
            <div className="relative aspect-[9/19] w-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/our-porch/screenshot-1.png"
                alt="Our Porch app screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Desktop: All screenshots */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="relative aspect-[9/19] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={`/our-porch/screenshot-${num}.png`}
                  alt={`Our Porch app screenshot ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-muted/50 dark:bg-muted/20 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Everything you need to build community
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Bell className="w-6 h-6" />}
                title="Never Miss a Check-in"
                description="Set custom reminder intervals for each neighbor. Our Porch sends gentle notifications to help you stay in touch at the right frequency."
              />
              <FeatureCard
                icon={<Calendar className="w-6 h-6" />}
                title="Track Your Connections"
                description="Log every interaction with notes and timestamps. Build a timeline of your neighborhood relationships."
              />
              <FeatureCard
                icon={<Tag className="w-6 h-6" />}
                title="Personalized Organization"
                description="Create custom tags to categorize neighbors. Filter and find contacts based on shared interests, needs, or connection types."
              />
              <FeatureCard
                icon={<Lock className="w-6 h-6" />}
                title="Your Data, Your Device"
                description="All information stays on your phone. No cloud sync, no account required, complete privacy and control."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Get started in three simple steps
            </h2>
            <div className="space-y-4">
              <StepCard
                number="01"
                title="Add Your Neighbors"
                description="Input names, addresses, and contact details. Import from contacts or add manually."
              />
              <StepCard
                number="02"
                title="Set Reminders"
                description="Choose how often you'd like to connect with each neighbor. Customize intervals from daily to monthly."
              />
              <StepCard
                number="03"
                title="Stay Connected"
                description="Receive notifications, log interactions, and watch your neighborhood community grow stronger."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 dark:bg-muted/20 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              <FAQItem
                question="Is my data stored in the cloud?"
                answer="No. Our Porch stores all data locally on your device using SQLite. Your neighbor information never leaves your phone, ensuring complete privacy."
              />
              <FAQItem
                question="How do reminders work?"
                answer="You can set a reminder cadence (in days) for each neighbor. The app calculates the next reminder based on your last contact and sends a local notification at your preferred time."
              />
              <FAQItem
                question="Can I export or backup my data?"
                answer="Yes. You can export your entire database as a JSON file and import it on another device or after reinstalling the app. This feature is available in Settings > Developer Tools."
              />
              <FAQItem
                question="What platforms are supported?"
                answer="Our Porch is available for iOS and Android devices. The app is built with React Native and Expo for a native mobile experience."
              />
              <FAQItem
                question="Do I need to create an account?"
                answer="No account required. Simply download and start using the app immediately. All data stays local to your device."
              />
              <FAQItem
                question="How do I delete a neighbor?"
                answer="Navigate to the neighbor's detail page and use the delete option. This will remove all associated data including reminders and interaction history."
              />
              <FAQItem
                question="Can I turn off notifications?"
                answer="Yes. You can disable reminders for individual neighbors by setting their reminder cadence to 0, or manage notification permissions through your device settings."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              System Requirements
            </h2>
            <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-6 space-y-2">
              <ul className="space-y-2 text-muted-foreground">
                <li>• iOS 13.4 or later (iPhone/iPad)</li>
                <li>• Android 6.0 (API level 23) or later</li>
                <li>• Notification permissions (optional, for reminders)</li>
                <li>
                  • Contact permissions (optional, for importing neighbors)
                </li>
                <li>• Approximately 50MB storage space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Permissions Section */}
      <section className="bg-muted/50 dark:bg-muted/20 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Privacy & Permissions
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Porch respects your privacy. The app may request the
                following permissions:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Notifications</h3>
                  <p className="text-muted-foreground">
                    To send reminder alerts when it&apos;s time to connect with
                    neighbors. You control the frequency and can disable
                    anytime.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contacts</h3>
                  <p className="text-muted-foreground">
                    To optionally import neighbor information from your
                    device&apos;s contact list. This is entirely optional and
                    only used if you choose to import.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Storage</h3>
                  <p className="text-muted-foreground">
                    To maintain your local database and allow data export/backup
                    functionality.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-2">
                We never collect, transmit, or store your data on external
                servers. Everything stays on your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Need Help?</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re here to help you make the most of Our Porch.
            </p>
            <div className="space-y-3 pt-2">
              <div>
                <h3 className="font-semibold mb-1">Support Email</h3>
                <Link
                  href="mailto:support@togethernotfor.com"
                  className="text-cover-yellow hover:underline"
                >
                  support@togethernotfor.com
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub Issues</h3>
                <p className="text-muted-foreground text-sm">
                  Report bugs or request features on our GitHub repository
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 dark:bg-muted/10 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              © 2025 Together Not For, LLC
            </p>
            <p className="text-sm text-muted-foreground">
              Made with care for building community
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/our-porch/privacy"
                className="text-muted-foreground hover:text-cover-yellow transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/our-porch/terms"
                className="text-muted-foreground hover:text-cover-yellow transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="#"
                className="text-muted-foreground hover:text-cover-yellow transition-colors"
              >
                Download on App Store
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
