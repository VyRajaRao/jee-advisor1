import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const metadata = await storage.getUniqueValues();
      res.status(200).json(metadata);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch metadata' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
