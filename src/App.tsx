import React, { useState } from 'react';
import { Rocket, Gift, Search } from 'lucide-react';
import { hotCoins, airdrops } from './data';
import { CoinCard } from './components/CoinCard';
import { AirdropCard } from './components/AirdropCard';

function App() {
  const [activeTab, setActiveTab] = useState<'coins' | 'airdrops'>('coins');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = hotCoins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAirdrops = airdrops.filter(airdrop =>
    airdrop.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Gambo Finance</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mt-8 mb-12">
            <h2 className="text-4xl font-bold mb-4">Navigate Crypto with Confidence</h2>
            <p className="text-xl opacity-90 mb-6">
              In a sea of millions of crypto tokens, we simplify your investment journey by hand-picking the most promising opportunities with real utility and long-term potential.
            </p>
            <div className="bg-white/10 rounded-lg p-4 text-sm">
              <p>✨ Weekly curated updates</p>
              <p>🎯 Focus on utility and long-term growth</p>
              <p>💎 Expert-vetted opportunities</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => setActiveTab('coins')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'coins'
                  ? 'bg-white text-blue-800'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Rocket size={20} className="mr-2" />
              Hot Coins
            </button>
            <button
              onClick={() => setActiveTab('airdrops')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'airdrops'
                  ? 'bg-white text-blue-800'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Gift size={20} className="mr-2" />
              Airdrops
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'coins' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoins.map(coin => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAirdrops.map(airdrop => (
              <AirdropCard key={airdrop.id} airdrop={airdrop} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2024 Gambo Finance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;