import React from 'react';
import { BarChart3, QrCode } from 'lucide-react';

export function RightPanel() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* Results */}
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-teal-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-6 h-6 text-teal-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(94, 234, 212, 0.3)'
          }}>Results</h3>
        </div>
        
        {/* T-Test Bar Chart */}
        <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-teal-500/30">
          <div className="h-40 bg-gradient-to-t from-slate-900 to-slate-800 rounded flex items-end justify-around p-2 gap-2">
            {/* AI Conception */}
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex items-end gap-0.5 w-full justify-center">
                <div className="w-5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t shadow-lg" style={{height: '84%'}} />
                <div className="w-5 bg-gradient-to-t from-red-700 to-red-500 rounded-t shadow-lg" style={{height: '72%'}} />
              </div>
              <span className="text-[8px] text-teal-300 text-center leading-tight">AI Conc.</span>
            </div>
            {/* Calf Survival */}
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex items-end gap-0.5 w-full justify-center">
                <div className="w-5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t shadow-lg" style={{height: '100%'}} />
                <div className="w-5 bg-gradient-to-t from-red-700 to-red-500 rounded-t shadow-lg" style={{height: '94%'}} />
              </div>
              <span className="text-[8px] text-teal-300 text-center leading-tight">Survival</span>
            </div>
            {/* Birth Weight */}
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex items-end gap-0.5 w-full justify-center">
                <div className="w-5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t shadow-lg" style={{height: '76%'}} />
                <div className="w-5 bg-gradient-to-t from-red-700 to-red-500 rounded-t shadow-lg" style={{height: '72%'}} />
              </div>
              <span className="text-[8px] text-teal-300 text-center leading-tight">BW</span>
            </div>
            {/* Calving Interval - lower is better, so green is shorter */}
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex items-end gap-0.5 w-full justify-center">
                <div className="w-5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t shadow-lg" style={{height: '70%'}} />
                <div className="w-5 bg-gradient-to-t from-red-700 to-red-500 rounded-t shadow-lg" style={{height: '95%'}} />
              </div>
              <span className="text-[8px] text-teal-300 text-center leading-tight">Calv. Int.</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm" /><span className="text-[8px] text-teal-200">Top 25%</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-600 rounded-sm" /><span className="text-[8px] text-teal-200">Bottom 25%</span></div>
          </div>
          <p className="text-[9px] text-center text-teal-200 mt-1">Figure 1: Top vs. Bottom Quartile (n = 695, all p &lt; 0.0001)</p>
        </div>
        
        {/* Main Finding */}
        <div className="space-y-1.5 text-sm text-teal-100 mb-3">
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Main Finding:</span> Welch's t-tests confirmed statistically significant differences between top- and bottom-quartile cows on all four metrics (p &lt; 0.0001).
          </p>
        </div>
        
        {/* Results Bullets */}
        <div className="bg-slate-900/30 rounded-lg p-3 border border-teal-500/20 space-y-1.5">
          <p className="text-xs text-teal-100"><span className="font-semibold text-white">AI Conception:</span> 83.9% vs. 72.2% — 11.7 pp gap</p>
          <p className="text-xs text-teal-100"><span className="font-semibold text-white">Calf Survival:</span> 99.8% vs. 94.3% — 5.5 pp gap</p>
          <p className="text-xs text-teal-100"><span className="font-semibold text-white">Birth Weight:</span> 75.6 vs. 71.5 lbs — 4.1 lb gap</p>
          <p className="text-xs text-teal-100"><span className="font-semibold text-white">Calving Interval:</span> 369 vs. 395 days — 25.4 day gap</p>
          <p className="text-xs text-teal-100 pt-1 border-t border-teal-500/20"><span className="font-semibold text-white">AI vs. Excel:</span> 5/5 correct in ~3 sec; Excel: 10–45 min, failed 1/5</p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-yellow-500/30 shadow-md">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-2 border-b border-yellow-500/40 pb-2" style={{
              textShadow: '0 0 8px rgba(234, 179, 8, 0.25)'
            }}>
              Contact
            </h4>
            <div className="space-y-1 text-xs">
              <p className="text-gray-300 font-semibold">Atlee Olson</p>
              <p className="text-gray-300">Division 5 — Animal Systems</p>
              <p className="text-gray-300">Belle Fourche FFA — South Dakota</p>
              <p className="text-gray-400 mt-2 pt-2 border-t border-gray-700">
                HPRSEF 2026
              </p>
            </div>
          </div>
          
          {/* QR Code Placeholder */}
          <div className="bg-white rounded-lg p-2 flex items-center justify-center">
            <QrCode className="w-12 h-12 text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}