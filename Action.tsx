import { TableauViz } from "@/components/ui/tableau-viz";
import { SearchIcon, LeafIcon, ScaleIcon, GlobeIcon, CheckIcon } from "lucide-react";

const actionCards = [
  {
    icon: <SearchIcon className="text-5xl text-primary/60" />,
    title: "Optimize Your Queries",
    tips: [
      "Use clear, concise prompts to reduce processing time",
      "Break complex questions into smaller, focused queries",
      "Choose smaller models for simpler tasks"
    ]
  },
  {
    icon: <LeafIcon className="text-5xl text-secondary/60" />,
    title: "Choose Sustainable Options",
    tips: [
      "Select providers with high renewable energy usage",
      "Use energy-efficient AI models when available",
      "Support companies investing in carbon offsets"
    ]
  },
  {
    icon: <ScaleIcon className="text-5xl text-accent/60" />,
    title: "Balance Usage",
    tips: [
      "Use traditional search for simple information needs",
      "Reserve AI for tasks where it adds significant value",
      "Consider local computation for privacy and efficiency"
    ]
  }
];

export default function Action() {
  return (
    <section id="action" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Sustainability
          </span>
          <h2 className="text-3xl font-bold mb-4">Take Action</h2>
          <p className="text-lg text-gray-700">
            Discover practical steps you can take to reduce the energy footprint of your AI usage.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {actionCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-40 bg-${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'accent'}/10 flex items-center justify-center`}>
                {card.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {card.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckIcon className="text-green-500 mt-1 mr-2 h-4 w-4" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainable Options Visualization */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Sustainable Search Engine Options</h3>
            <p className="text-gray-700 mb-6">
              Compare search engines and AI assistants based on their sustainability practices and energy efficiency.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-SustainableOptions/SustainableOptions"
              height="400px"
              fallbackIcon={<GlobeIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Sustainability rating of popular search engines and AI services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
