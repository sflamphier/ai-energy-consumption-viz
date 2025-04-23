import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function HeroSection() {
  const smoothScroll = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScroll(href);
  };

  return (
    <section className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding the Environmental Impact of AI</h1>
          <p className="text-xl mb-8">
            An interactive data visualization project exploring energy consumption patterns of AI-driven queries compared to traditional search methods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#overview" 
              className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
              onClick={(e) => handleClick(e, "#overview")}
            >
              Explore Visualizations
            </a>
            <a 
              href="#action" 
              className="bg-accent text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition-colors"
              onClick={(e) => handleClick(e, "#action")}
            >
              Take Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
