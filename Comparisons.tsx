import { useState } from "react";
import { TableauViz } from "@/components/ui/tableau-viz";
import { Button } from "@/components/ui/button";
import { BarChartIcon, LineChartIcon, AreaChartIcon } from "lucide-react";

type QueryType = "simple" | "pdf" | "creative" | "code";

export default function Comparisons() {
  const [activeQueryType, setActiveQueryType] = useState<QueryType>("simple");

  return (
    <section id="comparisons" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Data Comparisons
          </span>
          <h2 className="text-3xl font-bold mb-4">AI vs. Traditional Search Methods</h2>
          <p className="text-lg text-gray-700">
            Explore how AI-powered queries compare to traditional search engines in terms of energy consumption and environmental impact.
          </p>
        </div>

        {/* Visualization Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Energy Consumption by Search Method</h3>
            <p className="text-gray-700 mb-6">
              This visualization compares the energy usage of different search methods, from basic Google searches to complex AI queries.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-SearchMethodComparison/SearchMethodComparison"
              height="400px"
              fallbackIcon={<BarChartIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Energy consumption comparison between Google Search, Bing, ChatGPT, Claude, and other AI assistants (measured in kWh per query)"
            />
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>AI-powered queries consume 10-100x more energy than traditional search engine queries</li>
                <li>Energy usage varies significantly based on model size and query complexity</li>
                <li>Recent efficiency improvements have reduced per-query energy consumption</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visualization Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Impact of Query Complexity</h3>
            <p className="text-gray-700 mb-6">
              Explore how different types of AI queries affect energy consumption, from simple definitions to complex code generation.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src={`https://public.tableau.com/views/AIEnergyConsumption-QueryComplexity/QueryComplexity?:language=en-US&:display_count=n&:origin=viz_share_link&Query=${activeQueryType}`}
              height="400px"
              fallbackIcon={<LineChartIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Energy consumption by query type (simple definitions, summarization, creative writing, code generation)"
            />
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Interactive Elements:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <button 
                  className={`py-2 px-3 border rounded transition-colors ${
                    activeQueryType === "simple" 
                      ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveQueryType("simple")}
                >
                  Simple Definitions
                </button>
                <button 
                  className={`py-2 px-3 border rounded transition-colors ${
                    activeQueryType === "pdf" 
                      ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveQueryType("pdf")}
                >
                  PDF Analysis
                </button>
                <button 
                  className={`py-2 px-3 border rounded transition-colors ${
                    activeQueryType === "creative" 
                      ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveQueryType("creative")}
                >
                  Creative Writing
                </button>
                <button 
                  className={`py-2 px-3 border rounded transition-colors ${
                    activeQueryType === "code" 
                      ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveQueryType("code")}
                >
                  Code Generation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Energy Efficiency Trends Over Time</h3>
            <p className="text-gray-700 mb-6">
              Visualize how AI energy efficiency has evolved with each new generation of models.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-EfficiencyTrends/EfficiencyTrends"
              height="400px"
              fallbackIcon={<AreaChartIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Timeline showing energy consumption trends across model generations"
            />
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="p-4 bg-green-50 rounded-lg flex-1">
                <h4 className="font-medium text-green-700 mb-1">Efficiency Improvements</h4>
                <p className="text-gray-700 text-sm">
                  Recent architectural advances have improved energy efficiency by 20-30% per token generation.
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg flex-1">
                <h4 className="font-medium text-amber-700 mb-1">Increasing Usage</h4>
                <p className="text-gray-700 text-sm">
                  Despite efficiency gains, overall energy usage continues to rise due to increased adoption and usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
