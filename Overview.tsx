import { BarChart3Icon, LightbulbIcon, CoinsIcon, HeartHandshakeIcon } from "lucide-react";

const overviewCards = [
  {
    icon: <BarChart3Icon className="text-2xl text-primary" />,
    title: "Energy Consumption Trends",
    description: "Visualize how AI systems consume energy compared to traditional computing methods and see the evolution over time."
  },
  {
    icon: <LightbulbIcon className="text-2xl text-primary" />,
    title: "Real-world Equivalents",
    description: "Understand abstract energy metrics by comparing them to everyday activities and household energy usage."
  },
  {
    icon: <CoinsIcon className="text-2xl text-primary" />,
    title: "Monetary Costs",
    description: "Explore the financial implications of AI energy consumption across different providers and usage patterns."
  },
  {
    icon: <HeartHandshakeIcon className="text-2xl text-primary" />,
    title: "Sustainability Actions",
    description: "Discover practical steps to reduce your AI energy footprint and choose more sustainable options."
  }
];

export default function Overview() {
  return (
    <section id="overview" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            This visualization project aims to help readers understand the energy consumption and environmental impact of AI systems. 
            We explore comparisons with traditional methods, translate abstract energy metrics into tangible examples, analyze monetary costs, 
            and provide actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {overviewCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
