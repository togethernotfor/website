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
import { MapPin, TrendingUp, Users, Vote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoterLens - Voter Data Insights | Together, Not For",
  description:
    "Comprehensive voter data insights including registration statistics, party affiliation breakdowns, precinct-level details, and voting history analysis.",
  keywords: [
    "voter data",
    "voter registration",
    "party affiliation",
    "precinct data",
    "voting history",
    "civic data",
    "election insights",
  ],
  openGraph: {
    title: "VoterLens - Voter Data Insights",
    description:
      "Explore comprehensive voter data insights including registration statistics, party affiliation, and voting history.",
    type: "website",
    url: "https://togethernotfor.com/voterlens",
    siteName: "VoterLens",
    images: [
      {
        url: "https://website-git-staging-togethernotfors-projects.vercel.app/voterlens.png",
        width: 1200,
        height: 630,
        alt: "VoterLens - Voter Data Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoterLens - Voter Data Insights",
    description:
      "Comprehensive voter data insights including registration statistics, party affiliation, and voting history.",
    images: [
      "https://website-git-staging-togethernotfors-projects.vercel.app/voterlens.png",
    ],
  },
};

// Static data - will be replaced with PostgreSQL queries later
const staticData = {
  registeredVoters: {
    total: 15996106,
    previousMonth: 15950773,
  },
  partyBreakdown: {
    state: {
      democrat: 4989243,
      republican: 6148613,
      npa: 4858250,
    },
    precinct: {
      name: "Precinct 519",
      location: "Palm Bay, Brevard County",
      total: 15775,
      democrat: 4946,
      republican: 5576,
      npa: 5253,
    },
  },
  votingHistory: {
    lastGeneralElection: "2025 Special General Election",
    registeredAtTime: 15775,
  },
};

export default function VoterLensPage() {
  const { registeredVoters, partyBreakdown, votingHistory } = staticData;

  // Calculate change from total and previous month
  const change = registeredVoters.total - registeredVoters.previousMonth;
  const changePercent = (change / registeredVoters.previousMonth) * 100;

  // Calculate voting history totals
  const totalVotes = 599 + 595 + 450; // Voted Early + Voted by Mail + Voted at Polls
  const participationRate = (totalVotes / votingHistory.registeredAtTime) * 100;

  const stateTotal =
    partyBreakdown.state.democrat +
    partyBreakdown.state.republican +
    partyBreakdown.state.npa;
  const stateDemPercent = (
    (partyBreakdown.state.democrat / stateTotal) *
    100
  ).toFixed(1);
  const stateRepPercent = (
    (partyBreakdown.state.republican / stateTotal) *
    100
  ).toFixed(1);
  const stateNpaPercent = (
    (partyBreakdown.state.npa / stateTotal) *
    100
  ).toFixed(1);

  const precinctTotal =
    partyBreakdown.precinct.democrat +
    partyBreakdown.precinct.republican +
    partyBreakdown.precinct.npa;
  const precinctDemPercent = (
    (partyBreakdown.precinct.democrat / precinctTotal) *
    100
  ).toFixed(1);
  const precinctRepPercent = (
    (partyBreakdown.precinct.republican / precinctTotal) *
    100
  ).toFixed(1);
  const precinctNpaPercent = (
    (partyBreakdown.precinct.npa / precinctTotal) *
    100
  ).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#2B3B64] dark:text-[#6B8FC7]">Voter</span>
            <span style={{ color: "#B82221" }}>Lens</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive voter data insights at state, party, and precinct
            levels
          </p>
        </div>

        {/* Insight 1: Registered Voters Overview */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <CardTitle>Registered Voters Overview</CardTitle>
              </div>
              <CardDescription>
                Total registered voters compared to the prior month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Registered Voters
                  </p>
                  <p className="text-3xl md:text-4xl font-bold">
                    {registeredVoters.total.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Previous Month
                  </p>
                  <p className="text-2xl md:text-3xl font-semibold">
                    {registeredVoters.previousMonth.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Change</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <p className="text-2xl md:text-3xl font-semibold text-green-600">
                      {change >= 0 ? "+" : ""}
                      {change.toLocaleString()} ({changePercent.toFixed(2)}%)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Insight 2: State & Party Level Breakdown */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <CardTitle>State & Party Level Breakdown</CardTitle>
              </div>
              <CardDescription>
                Registered voters by party affiliation at the state level
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Combined Progress Bar */}
              <div className="mb-6">
                <div className="h-6 bg-muted rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#2B3B64] dark:bg-[#6B8FC7]"
                    style={{ width: `${stateDemPercent}%` }}
                    title={`Democrat: ${stateDemPercent}%`}
                  />
                  <div
                    className="bg-[#B82221]"
                    style={{ width: `${stateRepPercent}%` }}
                    title={`Republican: ${stateRepPercent}%`}
                  />
                  <div
                    className="bg-gray-600"
                    style={{ width: `${stateNpaPercent}%` }}
                    title={`NPA + Others: ${stateNpaPercent}%`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Democrat */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">
                      Democrat (D)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stateDemPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {partyBreakdown.state.democrat.toLocaleString()}
                  </p>
                </div>

                {/* Republican */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-red-600">
                      Republican (R)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stateRepPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {partyBreakdown.state.republican.toLocaleString()}
                  </p>
                </div>

                {/* NPA + Others */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      NPA + Others
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stateNpaPercent}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold">
                    {partyBreakdown.state.npa.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Insight 3: Precinct/Local Level Details */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <CardTitle>Precinct / Local Level</CardTitle>
              </div>
              <CardDescription>
                {partyBreakdown.precinct.name} in{" "}
                {partyBreakdown.precinct.location} is the most populated
                precinct in Florida with{" "}
                {partyBreakdown.precinct.total.toLocaleString()} registered
                voters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Combined Progress Bar */}
                <div className="mb-6">
                  <div className="h-6 bg-muted rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#2B3B64] dark:bg-[#6B8FC7]"
                      style={{ width: `${precinctDemPercent}%` }}
                      title={`Democrat: ${precinctDemPercent}%`}
                    />
                    <div
                      className="bg-[#B82221]"
                      style={{ width: `${precinctRepPercent}%` }}
                      title={`Republican: ${precinctRepPercent}%`}
                    />
                    <div
                      className="bg-gray-600"
                      style={{ width: `${precinctNpaPercent}%` }}
                      title={`NPA + Others: ${precinctNpaPercent}%`}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Democrat */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        Democrat (D)
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {precinctDemPercent}%
                      </span>
                    </div>
                    <p className="text-xl font-bold">
                      {partyBreakdown.precinct.democrat.toLocaleString()}
                    </p>
                  </div>

                  {/* Republican */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-red-600">
                        Republican (R)
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {precinctRepPercent}%
                      </span>
                    </div>
                    <p className="text-xl font-bold">
                      {partyBreakdown.precinct.republican.toLocaleString()}
                    </p>
                  </div>

                  {/* NPA + Others */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        NPA + Others
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {precinctNpaPercent}%
                      </span>
                    </div>
                    <p className="text-xl font-bold">
                      {partyBreakdown.precinct.npa.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Insight 4: Voting History */}
        <section className="mb-8 md:mb-12">
          <Card
            style={{ backgroundColor: "rgba(43, 59, 100, 0.08)" }}
            className="dark:bg-[rgba(107,143,199,0.08)]"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <Vote className="w-5 h-5" />
                <CardTitle>Voting History</CardTitle>
              </div>
              <CardDescription>
                Participation in Precinct 519 in Palm Bay, Brevard County&apos;s
                last general election
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-4">
                    {votingHistory.lastGeneralElection}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Registered at Time
                      </p>
                      <p className="text-3xl md:text-4xl font-bold">
                        {votingHistory.registeredAtTime.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Total Votes Cast
                      </p>
                      <p className="text-3xl md:text-4xl font-bold">
                        {totalVotes.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Participation Rate
                      </p>
                      <p className="text-3xl md:text-4xl font-bold">
                        {participationRate.toFixed(1)}%
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
