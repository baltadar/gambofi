export interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  reason: string;
  priceChange24h: string;
  trend: 'up' | 'down';
}

export interface Airdrop {
  id: string;
  projectName: string;
  description: string;
  endDate: string;
  requirements: string[];
  estimatedValue: string;
  link: string;
}