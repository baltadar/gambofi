import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { CryptoCoin } from '../types';

interface CoinCardProps {
  coin: CryptoCoin;
}

export function CoinCard({ coin }: CoinCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{coin.name}</h3>
        <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
          {coin.symbol}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{coin.reason}</p>
      <div className="flex items-center justify-between">
        <span className={`flex items-center ${
          coin.trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {coin.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{coin.priceChange24h}</span>
        </span>
      </div>
    </div>
  );
}