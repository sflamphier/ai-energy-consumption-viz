import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Overview from "@/components/sections/Overview";
import Comparisons from "@/components/sections/Comparisons";
import RealWorldImpact from "@/components/sections/RealWorldImpact";
import Costs from "@/components/sections/Costs";
import Action from "@/components/sections/Action";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  // Handle anchor links in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-light font-sans text-dark">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Overview />
        <Comparisons />
        <RealWorldImpact />
        <Costs />
        <Action />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
