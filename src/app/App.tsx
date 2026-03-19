import React, { useEffect, useState, useRef } from 'react';
import { Header } from './components/Header';
import { CenterPanel } from './components/CenterPanel';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { ContactInfo } from './components/ContactInfo';

// Design dimensions - the poster is authored at this fixed size
const POSTER_W = 1600;
const POSTER_H = 1200;

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function fit() {
      if (!wrapperRef.current) return;
      const parent = wrapperRef.current.parentElement;
      if (!parent) return;
      const sx = parent.clientWidth / POSTER_W;
      const sy = parent.clientHeight / POSTER_H;
      setScale(Math.min(sx, sy, 1));
    }
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Scaled poster - renders at fixed size, CSS-scaled to fit viewport */}
      <div
        ref={wrapperRef}
        className="bg-black shadow-2xl relative overflow-visible"
        style={{
          width: POSTER_W,
          height: POSTER_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-teal-950/40 pointer-events-none" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col p-6">
          {/* Header with Title */}
          <Header />
          
          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-12 gap-3 mt-4">
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