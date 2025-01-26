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
  projectName: 'Humanity Protocol',
  description: 'Decentralized protocol focused on identification.',
  endDate: 'TBA',
  requirements: [
    'Sign up for the Humanity testnet',
    'Complete the necessary tasks in the testnet including bridging into the chain'
  ],
  estimatedValue: 'TBA',
  link: 'testnet.humanity.org/login?ref=rondavel'
},
{
  id: '2',
  projectName: 'Teneo',
  description: 'Community node rewards through decentralized data network.',
  endDate: 'TBA',
  requirements: [
    'Join Teneo Community Node',
    'Earn rewards by contributing to the decentralized data network'
  ],
  estimatedValue: 'TBA',
  link: 'https://teneo.pro/'
},
{
  id: '3',
  projectName: 'Dawn',
  description: 'Decentralized internet service provider',
  endDate: 'TBA',
  requirements: [
    'Sign up using this referral code: iygco4un'
  ],
  estimatedValue: 'TBA',
  link: 'https://www.dawninternet.com/'
},
{
  id: '4',
  projectName: 'MyGate',
  description: 'Depin project focused on decentralized data collection for AI.',
  endDate: 'TBA',
  requirements: [
    'Use the provided code for sign up',
    'Complete necessary steps to register'
  ],
  estimatedValue: 'TBA',
  link: 'https://app.mygate.network/login?code=N0mYe4'
},
{
  id: '5',
  projectName: 'Nodepay',
  description: 'Dentralized RWA project. Can be downloaded as a Chrome extension.',
  endDate: 'TBA',
  requirements: [
    'Sign up using the referral code',
    'Complete registration process'
  ],
  estimatedValue: 'TBA',
  link: 'https://app.nodepay.ai/register?ref=2aINRaEIHt1LoVe'
},
{
  id: '6',
  projectName: 'OpenLoop',
  description: 'OpenLoop is a Depin project focused on democratizing data access.',
  endDate: 'TBA',
  requirements: [
    'Use this referral code- olfe0cdf03 - to join the OpenLoop platform'
  ],
  estimatedValue: 'TBA',
  link: 'https://openloop.so/'
},
{
  id: '7',
  projectName: 'Grass',
  description: 'Earn rewards by joining Grass.',
  endDate: 'TBA',
  requirements: [
    'Sign up for Grass using the referral code'
  ],
  estimatedValue: 'TBA',
  link: 'https://app.getgrass.io/register?referralCode=nPaqSj5YYJ6cT6O'
},
{
  id: '8',
  projectName: 'Uprock',
  description: 'Uprock referral program for new sign-ups.',
  endDate: 'TBA',
  requirements: [
    'Sign up with the referral link provided'
  ],
  estimatedValue: 'TBA',
  link: 'https://link.uprock.com/i/68533c0b'
},
{
  id: '9',
  projectName: 'LayerZero',
  description: 'Cross-chain interoperability protocol with anticipated token launch.',
  endDate: '2024-04-30',
  requirements: [
    'Bridge assets using LayerZero',
    'Minimum 5 cross-chain transactions',
    'Hold minimum 0.1 ETH in wallet'
  ],
  estimatedValue: '$500-2000',
  link: 'https://layerzero.network'
}
  // More airdrops can be added here
];
