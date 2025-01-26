import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import type { Airdrop } from '../types';

interface AirdropCardProps {
  airdrop: Airdrop;
}

export function AirdropCard({ airdrop }: AirdropCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{airdrop.projectName}</h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          Est. ${airdrop.estimatedValue}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{airdrop.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar size={16} className="mr-2" />
        <span>Ends: {airdrop.endDate}</span>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Requirements:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {airdrop.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <a
        href={airdrop.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        Learn More <ExternalLink size={16} className="ml-1" />
      </a>
    </div>
  );
}