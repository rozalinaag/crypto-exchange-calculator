export interface FeeResponse {
  symbol: string;
  fee: string;
  min_amount: string;
  max_amount: string;
  timestamp: number;
}

export interface FeeErrorResponse {
  error: string;
}
