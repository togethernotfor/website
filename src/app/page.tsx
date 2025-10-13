import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Greeting from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Values from "@/components/Values";
import WhoWeServe from "@/components/WhoWeServe";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-between">
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Header />
        <Greeting />
        <WhoWeServe />
        <Values />
        <Portfolio />
        <Contact />
      </div>
      <div>
        <Separator />
        <Footer />
      </div>
    </div>
  );
}
