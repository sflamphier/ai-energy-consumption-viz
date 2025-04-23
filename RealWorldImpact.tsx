import { TableauViz } from "@/components/ui/tableau-viz";
import { 
  LightbulbIcon, 
  CloudIcon, 
  CarIcon, 
  TvIcon, 
  ShowerHeadIcon 
} from "lucide-react";

const equivalencyCards = [
  {
    icon: <LightbulbIcon className="text-3xl text-amber-500" />,
    title: "Light Bulbs",
    value: "24",
    description: "Hours of LED light bulb operation per complex AI query"
  },
  {
    icon: <CarIcon className="text-3xl text-blue-500" />,
    title: "Car Travel",
    value: "0.8",
    description: "Miles driven in an average gasoline car per AI session"
  },
  {
    icon: <TvIcon className="text-3xl text-gray-700" />,
    title: "TV Watching",
    value: "3.5",
    description: "Hours of TV viewing on a modern LCD display per AI session"
  },
  {
    icon: <ShowerHeadIcon className="text-3xl text-cyan-500" />,
    title: "Hot Showers",
    value: "1.2",
    description: "5-minute hot showers per complex code generation task"
  }
];

export default function RealWorldImpact() {
  return (
    <section id="real-world" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Tangible Examples
          </span>
          <h2 className="text-3xl font-bold mb-4">Making Energy Consumption Tangible</h2>
          <p className="text-lg text-gray-700">
            Translate abstract energy metrics into everyday examples that help visualize the real-world impact of AI usage.
          </p>
        </div>

        {/* Visualization Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Everyday Equivalents</h3>
            <p className="text-gray-700 mb-6">
              See how the energy used for AI queries compares to common household activities.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-EverydayEquivalents/EverydayEquivalents"
              height="450px"
              fallbackIcon={<LightbulbIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Interactive comparison of AI energy usage to everyday activities"
            />
          </div>
        </div>

        {/* Equivalency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {equivalencyCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                {card.icon}
              </div>
              <h4 className="font-semibold mb-2">{card.title}</h4>
              <p className="text-4xl font-bold text-primary mb-2">{card.value}</p>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Carbon Footprint Visualization */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Carbon Footprint Comparison</h3>
            <p className="text-gray-700 mb-6">
              Visualize the carbon emissions associated with different AI interactions.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-CarbonFootprint/CarbonFootprint"
              height="400px"
              fallbackIcon={<CloudIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Carbon emissions by AI model and query type"
            />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <h4 className="font-medium">Low Impact</h4>
                </div>
                <p className="text-sm text-gray-700">Simple queries using efficient models</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <h4 className="font-medium">Medium Impact</h4>
                </div>
                <p className="text-sm text-gray-700">Standard conversations and content generation</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <h4 className="font-medium">High Impact</h4>
                </div>
                <p className="text-sm text-gray-700">Complex tasks using large, intensive models</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
