
import { NextApiRequest, NextApiResponse } from 'next';

interface PriceResponse {
  symbol: string;
  price: string;
  timestamp: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { symbol } = req.query;
  if (typeof symbol !== 'string') {
    return res.status(400).json({ error: 'Symbol is required' });
  }

  const supportedSymbols: Record<string, string> = {
    'BTC_USDT': '30000.00',
    'ETH_BTC': '0.06',
  };

  if (!supportedSymbols[symbol]) {
    return res.status(404).json({ error: 'Symbol not found' });
  }

  const priceData: PriceResponse = {
    symbol,
    price: supportedSymbols[symbol],
    timestamp: Math.floor(Date.now() / 1000),
  };

  return res.status(200).json(priceData);
}
