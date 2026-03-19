import React from 'react';
import cowLogo from 'figma:asset/1f0880163b49cd39529b24fe07d41a01ce30261d.png';

export function Header() {
  return (
    <header className="relative">
      {/* Title Section with gradient background */}
      <div className="bg-gradient-to-r from-teal-900 via-blue-900 to-teal-800 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Left Cow - Facing right */}
          
          
          {/* Title */}
          <div className="flex-1 mx-8 text-center">
            <h1 className="text-5xl font-bold text-amber-50 mb-2" style={{
              textShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)'
            }}>
              AI²: Artificial Intelligence Meets Artificial Insemination
            </h1>
            <p className="text-2xl text-blue-100 mt-3 mb-3">Can a Non-Technical Student Build a Tool That Analyzes Cattle Data Better Than Spreadsheets and Paper?</p>
            
            
          </div>
          
          {/* Right Cow - Facing left (flipped) */}
          
        </div>
      </div>
    </header>
  );
}