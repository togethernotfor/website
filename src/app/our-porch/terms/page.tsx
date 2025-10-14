import Link from "next/link";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Terms of Service - Our Porch | Neighborhood Connection App",
  description:
    "Terms of Service for Our Porch mobile app. Privacy-first neighbor management with local data storage. Review our terms for using the Our Porch iOS and Android app.",
  keywords: [
    "terms of service",
    "user agreement",
    "app terms",
    "neighbor app terms",
    "mobile app legal",
  ],
  openGraph: {
    title: "Terms of Service - Our Porch",
    description:
      "Terms of Service for Our Porch mobile app. Privacy-first neighbor management with local data storage.",
    type: "website",
    url: "https://togethernotfor.com/our-porch/terms",
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
    title: "Terms of Service - Our Porch",
    description:
      "Terms of Service for Our Porch mobile app. Privacy-first neighbor management with local data storage.",
    images: ["https://www.togethernotfor.com/our-porch/icon1-cropped.png"],
  },
};

export default function OurPorchTerms() {
  return (
    <div className="min-h-screen">
      {/* Header with Mode Toggle */}
      <div className="container mx-auto px-4 pt-4 flex justify-end">
        <ModeToggle />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link
              href="/our-porch/support"
              className="text-cover-yellow hover:underline text-sm"
            >
              ← Back to Support
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: October 13, 2025
            </p>
          </div>

          <Separator />

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the
              Our Porch mobile application (&quot;App&quot;,
              &quot;Service&quot;) operated by Together Not For, LLC
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
              downloading, installing, or using the App, you agree to be bound
              by these Terms. If you do not agree with these Terms, do not use
              the App.
            </p>
          </section>

          {/* License */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">License to Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, revocable license to
              download, install, and use the App for your personal,
              non-commercial purposes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Copy, modify, or distribute the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use the App for any commercial purpose</li>
              <li>
                Attempt to gain unauthorized access to any part of the App
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Maintaining the security of your device and any data you store
                in the App
              </li>
              <li>
                Ensuring you have permission to store and manage information
                about other individuals
              </li>
              <li>
                Using the App in compliance with all applicable laws and
                regulations
              </li>
              <li>
                Respecting the privacy and consent of neighbors whose
                information you store
              </li>
              <li>Backing up your data using the export functionality</li>
            </ul>
          </section>

          {/* Privacy and Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Privacy and Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch stores all data locally on your device. We do not
              collect, transmit, or store your data on external servers. You
              retain full ownership and control of all data you enter into the
              App.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For more information, please review our{" "}
              <Link
                href="/our-porch/privacy"
                className="text-cover-yellow hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Content Guidelines */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the App only for its intended purpose: managing
              relationships with neighbors and building community. You agree not
              to use the App to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Store information about individuals without appropriate consent
                or legal basis
              </li>
              <li>Harass, stalk, or harm others</li>
              <li>Violate any person&apos;s privacy or legal rights</li>
              <li>Engage in any illegal activity</li>
              <li>Collect information for commercial purposes</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The App, including its design, features, graphics, and code, is
              owned by Together Not For, LLC and protected by copyright,
              trademark, and other intellectual property laws. Our name, logo,
              and branding are trademarks of Together Not For, LLC.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of any data you create and store within the
              App.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
              WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>The App will be error-free or uninterrupted</li>
              <li>Defects will be corrected</li>
              <li>The App is free from viruses or harmful components</li>
              <li>Results from using the App will meet your expectations</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TOGETHER NOT FOR, LLC
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any bugs, viruses, or malware transmitted through the App</li>
              <li>Any errors or omissions in content</li>
              <li>Loss of data stored locally on your device</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless Together Not
              For, LLC and its officers, directors, employees, and agents from
              any claims, liabilities, damages, losses, and expenses, including
              reasonable attorneys&apos; fees, arising out of or related to your
              use of the App, your violation of these Terms, or your violation
              of any rights of another person or entity.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Updated
              Terms will be reflected in the App with a new &quot;Last
              updated&quot; date. Your continued use of the App after changes
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Termination */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your access to the
              App immediately, without prior notice, if you breach these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may terminate your use of the App at any time by uninstalling
              it from your device. Upon termination, all data stored locally
              will be removed.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to conflict of law
              principles. Any disputes arising from these Terms or your use of
              the App shall be resolved in the courts of the jurisdiction where
              Together Not For, LLC is established.
            </p>
          </section>

          {/* Severability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Together Not For, LLC regarding
              the use of the App and supersede all prior agreements and
              understandings.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-6 space-y-2">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:support@togethernotfor.com"
                  className="text-cover-yellow hover:underline"
                >
                  support@togethernotfor.com
                </Link>
              </p>
              <p className="text-muted-foreground">
                <strong>Company:</strong> Together Not For, LLC
              </p>
            </div>
          </section>

          <Separator />

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm pt-8">
            <Link
              href="/our-porch/support"
              className="text-muted-foreground hover:text-cover-yellow transition-colors"
            >
              Support
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/our-porch/privacy"
              className="text-muted-foreground hover:text-cover-yellow transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
