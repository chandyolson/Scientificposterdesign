import React from 'react';
import { Header } from './components/Header';
import { CenterPanel } from './components/CenterPanel';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { ContactInfo } from './components/ContactInfo';

export default function App() {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-teal-950/40 pointer-events-none" />
      
      {/* Content - fills entire viewport */}
      <div className="relative flex-1 flex flex-col p-4 min-h-0">
        {/* Header with Title */}
        <div className="shrink-0">
          <Header />
        </div>
        
        {/* Main Content Grid - takes remaining space */}
        <div className="flex-1 grid grid-cols-12 gap-3 mt-3 min-h-0 overflow-hidden">
          {/* Left Column */}
          <div className="col-span-3 overflow-hidden">
            <LeftPanel />
          </div>
          
          {/* Center Column */}
          <div className="col-span-6 overflow-hidden">
            <CenterPanel />
          </div>
          
          {/* Right Column */}
          <div className="col-span-3 overflow-hidden">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}