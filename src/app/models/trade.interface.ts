export interface Trade {
  id?: string;
  tradeId: string;
  securityName: string;
  quantity: number;
  price: number;
  tradeDate: string;
  settlementDate: string;
  counterparty: string;
  status: 'UNMAPPED' | 'MAPPED' | 'SETTLED';
  currency: string;
  totalAmount: number;
} 