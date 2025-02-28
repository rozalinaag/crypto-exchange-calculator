import { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    "symbol": "BTC_USDT",
	"base": "BTC",
    "quote": "USDT",
    "formula_type": "default"
  },
  {
    "symbol": "ETH_BTC",
	"base": "ETH",
    "quote": "BTC",
    "formula_type": "default"
  },
  {
    "symbol": "ETH_USDT",
	"base": "ETH",
    "quote": "USDT",
    "formula_type": "default"
  },
  {
    "symbol": "AB_CD",
	"base": "AB",
    "quote": "CD",
    "formula_type": "custom",
    "formula_id": "abcd"
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
