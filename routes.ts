import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Example API route to get data for the visualizations
  // This could be extended to fetch data from a database or external API
  app.get('/api/energy-data', (req, res) => {
    const energyData = {
      searchMethods: [
        { method: 'Google Search', energyKwh: 0.0003, co2g: 0.2 },
        { method: 'Bing', energyKwh: 0.0004, co2g: 0.25 },
        { method: 'GPT-3.5', energyKwh: 0.03, co2g: 15 },
        { method: 'GPT-4', energyKwh: 0.1, co2g: 50 },
        { method: 'Claude', energyKwh: 0.08, co2g: 40 },
      ],
      queryComplexity: [
        { type: 'Simple Definition', model: 'GPT-3.5', energyKwh: 0.01, co2g: 5 },
        { type: 'Simple Definition', model: 'GPT-4', energyKwh: 0.03, co2g: 15 },
        { type: 'PDF Analysis', model: 'GPT-3.5', energyKwh: 0.05, co2g: 25 },
        { type: 'PDF Analysis', model: 'GPT-4', energyKwh: 0.15, co2g: 75 },
        { type: 'Creative Writing', model: 'GPT-3.5', energyKwh: 0.02, co2g: 10 },
        { type: 'Creative Writing', model: 'GPT-4', energyKwh: 0.08, co2g: 40 },
        { type: 'Code Generation', model: 'GPT-3.5', energyKwh: 0.04, co2g: 20 },
        { type: 'Code Generation', model: 'GPT-4', energyKwh: 0.18, co2g: 90 },
      ],
      providers: [
        { name: 'Provider A', energyCostCentsPerQuery: [0.8, 3.5], carbonIntensity: 'Medium', renewablePercent: 65 },
        { name: 'Provider B', energyCostCentsPerQuery: [1.2, 4.1], carbonIntensity: 'High', renewablePercent: 42 },
        { name: 'Provider C', energyCostCentsPerQuery: [0.5, 2.8], carbonIntensity: 'Low', renewablePercent: 92 },
      ]
    };

    res.status(200).json(energyData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
