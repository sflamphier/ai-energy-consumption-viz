import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function CallToAction() {
  const smoothScroll = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Implement sharing or download functionality here
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
          <p className="text-xl mb-8">
            Help shape the future of sustainable AI by sharing this research and implementing energy-conscious practices in your daily interactions with AI systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              onClick={handleClick}
              className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
            >
              Share This Project
            </a>
            <a 
              href="#" 
              onClick={handleClick}
              className="bg-accent text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition-colors"
            >
              Download Research Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
