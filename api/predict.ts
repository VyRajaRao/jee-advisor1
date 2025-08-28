import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { rankPredictionSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const prediction = rankPredictionSchema.parse(req.body);
      const result = await storage.predictColleges(prediction);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: 'Invalid prediction parameters' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
