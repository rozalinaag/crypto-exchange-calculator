export type FeeResponse = {
  symbol: string;
  fee: string;
  min_amount: string;
  max_amount: string;
  timestamp: number;
  formulaId?: number;
}

export type FeeErrorResponse = {
  error: string;
}
