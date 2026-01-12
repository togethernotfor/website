import Contact from "@/components/Contact";
import Header from "@/components/Header";
import SocialShareLinks from "@/components/SocialShareLinks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OrlandoMap } from "@/components/voterlens/OrlandoMap";
import { ArrowLeft, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orlando City Data - VoterLens | Together, Not For",
  description:
    "Explore Orlando's political city limits and voter data insights with interactive maps and comprehensive statistics.",
  keywords: [
    "Orlando voter data",
    "Orlando political boundaries",
    "Orlando city limits",
    "Orlando voter registration",
    "Florida voter data",
    "civic data Orlando",
  ],
  openGraph: {
    title: "Orlando City Data - VoterLens",
    description:
      "Interactive map of Orlando's political city limits with voter data insights.",
    type: "website",
    url: "https://www.togethernotfor.com/voterlens/orlando",
    siteName: "VoterLens",
    images: [
      {
        url: "https://www.togethernotfor.com/voterlens.png",
        width: 1200,
        height: 630,
        alt: "Orlando City Data - VoterLens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando City Data - VoterLens",
    description:
      "Interactive map of Orlando's political city limits with voter data insights.",
    images: ["https://www.togethernotfor.com/voterlens.png"],
  },
};

export default function OrlandoVoterLensPage() {
  // Orlando voter data
  const orlandoData = {
    dem_voters: 72795,
    rep_voters: 38937,
    other_voters: 56447,
    total_voters: 168179,
  };

  // Calculate percentages
  const demPercent = (
    (orlandoData.dem_voters / orlandoData.total_voters) *
    100
  ).toFixed(1);
  const repPercent = (
    (orlandoData.rep_voters / orlandoData.total_voters) *
    100
  ).toFixed(1);
  const otherPercent = (
    (orlandoData.other_voters / orlandoData.total_voters) *
    100
  ).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/voterlens"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to VoterLens
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#2B3B64] dark:text-[#6B8FC7]">Orlando</span>
            <span> City Data</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive map of Orlando&apos;s political city limits with voter
            data insights
          </p>
        </div>

        {/* Map Section */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <CardTitle>Orlando Political City Limits</CardTitle>
              </div>
              <CardDescription>
                Explore the official political boundaries of the City of Orlando
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OrlandoMap />
            </CardContent>
          </Card>
        </section>

        {/* Party Level Breakdown Section */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <CardTitle>Party Level Breakdown</CardTitle>
              </div>
              <CardDescription>
                Registered voters by party affiliation across all Orlando splits
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Total Display */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Total Registered Voters
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#2B3B64] dark:text-[#6B8FC7]">
                  {orlandoData.total_voters.toLocaleString()}
                </p>
              </div>
              {/* Combined Progress Bar */}
              <div className="mb-6">
                <div className="h-6 bg-muted rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#2B3B64] dark:bg-[#6B8FC7]"
                    style={{ width: `${demPercent}%` }}
                    title={`Democrat: ${demPercent}%`}
                  />
                  <div
                    className="bg-[#B82221]"
                    style={{ width: `${repPercent}%` }}
                    title={`Republican: ${repPercent}%`}
                  />
                  <div
                    className="bg-gray-600"
                    style={{ width: `${otherPercent}%` }}
                    title={`Other: ${otherPercent}%`}
                  />
                </div>
              </div>
              
              {/* Data aligned with progress bar */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                {/* Democrat */}
                <div 
                  className="space-y-2 px-2 w-full sm:w-auto"
                  style={{ width: `${demPercent}%` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-blue-600 whitespace-nowrap">
                      Democrat (D)
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {demPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {orlandoData.dem_voters.toLocaleString()}
                  </p>
                </div>

                {/* Republican */}
                <div 
                  className="space-y-2 px-2 w-full sm:w-auto"
                  style={{ width: `${repPercent}%` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-red-600 whitespace-nowrap">
                      Republican (R)
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {repPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {orlandoData.rep_voters.toLocaleString()}
                  </p>
                </div>

                {/* Other */}
                <div 
                  className="space-y-2 px-2 w-full sm:w-auto"
                  style={{ width: `${otherPercent}%` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                      Other
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {otherPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {orlandoData.other_voters.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Info Section */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <CardTitle>About This Map</CardTitle>
              <CardDescription>
                Understanding Orlando&apos;s political boundaries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm md:text-base">
                <p>
                  This interactive map displays the official political city
                  limits of Orlando, Florida. The boundaries represent the
                  jurisdictional area under the City of Orlando&apos;s
                  governance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded mt-1"
                      style={{
                        backgroundColor: "rgba(43, 59, 100, 0.3)",
                        border: "2px solid #B82221",
                      }}
                    />
                    <div>
                      <p className="font-medium">City Limits</p>
                      <p className="text-sm text-muted-foreground">
                        Areas within Orlando&apos;s political jurisdiction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <Contact
          variant="card"
          animated={false}
          buttonStyle={{ backgroundColor: "#B82221", color: "#FFFEFC" }}
        />
      </main>

      <Separator />
      {/* Footer */}
      <div className="py-3 flex flex-col items-center space-y-2">
        <h3 className="font-bold text-sm md:text-2xl">
          Lets build something{" "}
          <span style={{ color: "#B82221" }}>together, not for</span>
        </h3>
        <SocialShareLinks />
        <div className="font-sans text-xs opacity-30 md:text-sm">
          together, not for © 2025
        </div>
      </div>
    </div>
  );
}
