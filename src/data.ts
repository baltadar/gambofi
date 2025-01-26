import { CryptoCoin, Airdrop } from './types';

export const hotCoins: CryptoCoin[] = [
  {
    id: '1',
    name: 'Jupiter',
    symbol: 'JUP',
    reason: 'Massive DEX volume on Solana with new token launch',
    priceChange24h: '+15.4%',
    trend: 'up'
  },
  {
    id: '2',
    name: 'Celestia',
    symbol: 'TIA',
    reason: 'Revolutionary modular blockchain with growing adoption',
    priceChange24h: '+8.2%',
    trend: 'up'
  },
  {
    id: '3',
    name: 'SUI',
    symbol: 'SUI',
    reason: 'Sui delivers the benefits of Web3 with the ease of Web2',
    priceChange24h: '-10%',
    trend: 'down'
  },
  // Adding more example coins
];

export const airdrops: Airdrop[] = [
  {
    id: '1',
    projectName: 'LayerZero',
    description: 'Cross-chain interoperability protocol with anticipated token launch',
    endDate: '2024-04-30',
    requirements: [
      'Bridge assets using LayerZero',
      'Minimum 5 cross-chain transactions',
      'Hold minimum 0.1 ETH in wallet'
    ],
    estimatedValue: '$500-2000',
    link: 'https://layerzero.network'
  },
  // More airdrops can be added here
];
