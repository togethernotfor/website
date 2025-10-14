import Link from "next/link";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "Privacy Policy - Our Porch | Privacy-First Neighbor App",
  description:
    "Our Porch Privacy Policy: All your neighbor data stays on your device. No cloud sync, no account required, no tracking. Complete privacy and control over your neighborhood connections.",
  keywords: [
    "privacy policy",
    "data privacy",
    "local storage",
    "no cloud sync",
    "neighbor privacy",
    "offline app",
  ],
  openGraph: {
    title: "Privacy Policy - Our Porch",
    description:
      "All your data stays on your device. No cloud sync, no account required, complete privacy.",
    type: "website",
    url: "https://togethernotfor.com/our-porch/privacy",
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
    title: "Privacy Policy - Our Porch",
    description:
      "All your data stays on your device. No cloud sync, no account required, complete privacy.",
    images: ["https://www.togethernotfor.com/our-porch/icon1-cropped.png"],
  },
};

export default function OurPorchPrivacy() {
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
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: October 13, 2025
            </p>
          </div>

          <Separator />

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how our mobile
              application handles your information. Unlike most apps, Our Porch is
              designed with privacy as a core principle: all your data stays on
              your device.
            </p>
          </section>

          {/* Data Storage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Data Storage and Collection</h2>
            <h3 className="text-xl font-semibold">Local Storage Only</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch stores all data locally on your device using SQLite
              database technology. We do not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Transmit your data to external servers</li>
              <li>Store your data in the cloud</li>
              <li>Require account creation or login</li>
              <li>Track your usage or behavior</li>
              <li>Share your information with third parties</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your neighbor information, interaction history, reminders, tags, and
              all other data you create within the app never leaves your phone.
            </p>
          </section>

          {/* Information You Provide */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Information You Provide</h2>
            <p className="text-muted-foreground leading-relaxed">
              The app allows you to store the following information locally on your
              device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Neighbor names and household information</li>
              <li>Contact details (addresses, phone numbers, emails)</li>
              <li>Interaction notes and timestamps</li>
              <li>Custom tags and categories</li>
              <li>Reminder preferences and schedules</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You have complete control over this information and can edit or
              delete it at any time.
            </p>
          </section>

          {/* Permissions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">App Permissions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch may request the following permissions to enhance your
              experience. All permissions are optional and only used for the stated
              purposes:
            </p>

            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                <p className="text-muted-foreground">
                  Used to send local reminder alerts when it&apos;s time to connect
                  with your neighbors. These are generated locally on your device
                  and do not involve external servers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Contacts</h3>
                <p className="text-muted-foreground">
                  Optionally used to import neighbor information from your
                  device&apos;s contact list. This data is only accessed when you
                  explicitly choose to import contacts and is stored locally on your
                  device. We never upload or sync contact information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Storage</h3>
                <p className="text-muted-foreground">
                  Required to maintain your local database and enable data
                  export/backup functionality. All data remains on your device.
                </p>
              </div>
            </div>
          </section>

          {/* Data Export and Backup */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Data Export and Backup</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch provides the ability to export your entire database as a
              JSON file. This allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Create backups of your data</li>
              <li>Transfer data to another device</li>
              <li>Restore data after reinstalling the app</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Exported files are saved to your device&apos;s storage. You are responsible
              for the security of any exported data files.
            </p>
          </section>

          {/* Analytics and Tracking */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Analytics and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch does not include any analytics, tracking, or telemetry
              services. We do not collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Usage statistics</li>
              <li>Device information</li>
              <li>Location data</li>
              <li>Crash reports</li>
              <li>Performance metrics</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch does not integrate with any third-party services, APIs, or
              external platforms. The app operates entirely offline and does not
              communicate with external servers.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Porch is not directed to children under the age of 13. Since we
              do not collect any personal information, we do not knowingly collect
              information from children. The app is designed for adults managing
              neighborhood relationships.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data security is protected by your device&apos;s operating system
              security features. We recommend:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Using device passcode/biometric authentication</li>
              <li>Keeping your device operating system updated</li>
              <li>Being cautious about who has physical access to your device</li>
              <li>Securing any exported backup files</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Your Rights and Control</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all data is stored locally on your device, you have complete
              control:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access: View all your data within the app</li>
              <li>Modify: Edit any information at any time</li>
              <li>Delete: Remove individual entries or clear all data</li>
              <li>Export: Create portable copies of your data</li>
              <li>
                Complete removal: Uninstalling the app removes all associated data
              </li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will
              be reflected in the app with an updated &quot;Last updated&quot; date. Since
              the app does not connect to external servers, policy updates will be
              included in app updates.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:
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
              href="/our-porch/terms"
              className="text-muted-foreground hover:text-cover-yellow transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
