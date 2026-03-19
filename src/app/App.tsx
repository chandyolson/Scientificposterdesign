import React from 'react';
import { Header } from './components/Header';
import { CenterPanel } from './components/CenterPanel';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { ContactInfo } from './components/ContactInfo';

export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 overflow-hidden">
      {/* Poster Container - 48" x 36" aspect ratio (4:3), scaled to fit viewport */}
      <div className="bg-black shadow-2xl relative overflow-hidden" style={{ aspectRatio: '4/3', width: 'min(95vw, calc(95vh * 4 / 3))', maxWidth: '1600px' }}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-teal-950/40 pointer-events-none" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col p-8">
          {/* Header with Title */}
          <Header />
          
          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-12 gap-4 mt-6">
            {/* Left Column - Introduction, Purpose, Hypothesis, Methods */}
            <div className="col-span-3">
              <LeftPanel />
            </div>
            
            {/* Center Column - Key Findings & Impact (Largest) */}
            <div className="col-span-6">
              <CenterPanel />
            </div>
            
            {/* Right Column - Results & Conclusion */}
            <div className="col-span-3">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}