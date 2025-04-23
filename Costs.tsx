import { TableauViz } from "@/components/ui/tableau-viz";
import { CoinsIcon, SlidersIcon } from "lucide-react";

export default function Costs() {
  return (
    <section id="costs" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
            Financial Impact
          </span>
          <h2 className="text-3xl font-bold mb-4">The Monetary Cost of AI</h2>
          <p className="text-lg text-gray-700">
            Understand the financial implications of energy consumption in AI operations across different providers and usage patterns.
          </p>
        </div>

        {/* Cost Visualization */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Cost Breakdown by Provider</h3>
            <p className="text-gray-700 mb-6">
              Compare the energy costs associated with different AI service providers and model types.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-ProviderCosts/ProviderCosts"
              height="450px"
              fallbackIcon={<CoinsIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Operational costs comparison between major AI providers"
            />
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Provider Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Provider</th>
                      <th className="px-4 py-2 text-left">Energy Cost (¢/query)</th>
                      <th className="px-4 py-2 text-left">Carbon Intensity</th>
                      <th className="px-4 py-2 text-left">Renewable %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">Provider A</td>
                      <td className="px-4 py-2">0.8 - 3.5</td>
                      <td className="px-4 py-2">Medium</td>
                      <td className="px-4 py-2">65%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Provider B</td>
                      <td className="px-4 py-2">1.2 - 4.1</td>
                      <td className="px-4 py-2">High</td>
                      <td className="px-4 py-2">42%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Provider C</td>
                      <td className="px-4 py-2">0.5 - 2.8</td>
                      <td className="px-4 py-2">Low</td>
                      <td className="px-4 py-2">92%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Visualization */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Cost Optimization Potential</h3>
            <p className="text-gray-700 mb-6">
              Explore how different optimization strategies can reduce both energy consumption and operational costs.
            </p>
            
            {/* Tableau Visualization */}
            <TableauViz 
              src="https://public.tableau.com/views/AIEnergyConsumption-CostOptimization/CostOptimization"
              height="400px"
              fallbackIcon={<SlidersIcon className="h-16 w-16 text-gray-400" />}
              fallbackText="Interactive cost optimization simulator"
            />
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Optimization Strategies:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-700 mb-2">Model Size Reduction</h5>
                  <p className="text-sm text-gray-700">
                    Using smaller, more efficient models for simpler tasks can reduce energy costs by 40-60%.
                  </p>
                  <div className="mt-3 h-2 w-full bg-green-100 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">Query Batching</h5>
                  <p className="text-sm text-gray-700">
                    Processing multiple queries together can improve efficiency and reduce per-query energy costs.
                  </p>
                  <div className="mt-3 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
