import type { NextApiRequest, NextApiResponse } from 'next';
import { FeeResponse, FeeErrorResponse } from '../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<FeeResponse | FeeErrorResponse>) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Symbol is required' });
  }

  const feeData: FeeResponse = {
    symbol: symbol as string,
    fee: '0.01',
    min_amount: '0.001',
    max_amount: '10.0',
    timestamp: 1697049600,
  };

  res.status(200).json(feeData);
}
