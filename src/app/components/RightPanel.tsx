import React from 'react';
import { BarChart3, QrCode } from 'lucide-react';

export function RightPanel() {
  return (
    <div className="h-full flex flex-col gap-1.5 min-h-0">
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-teal-400 shadow-md backdrop-blur-sm min-h-0 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1.5">
          <BarChart3 className="w-4 h-4 text-teal-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Results</h3>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-2 mb-2 border border-teal-500/30">
          <div className="h-24 bg-gradient-to-t from-slate-900 to-slate-800 rounded flex items-end justify-around p-1.5 gap-1.5">
            {[
              { label: "AI Conc.", top: 84, bot: 72 },
              { label: "Survival", top: 100, bot: 94 },
              { label: "BW", top: 76, bot: 72 },
              { label: "Calv. Int.", top: 70, bot: 95 },
            ].map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-0.5 flex-1">
                <div className="flex items-end gap-px w-full justify-center">
                  <div className="w-3.5 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: `${d.top}%` }} />
                  <div className="w-3.5 bg-gradient-to-t from-red-700 to-red-500 rounded-t" style={{ height: `${d.bot}%` }} />
                </div>
                <span className="text-[7px] text-teal-300 text-center leading-none">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-1">
            <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" /><span className="text-[7px] text-teal-200">Top 25%</span></div>
            <div className="flex items-center gap-0.5"><div className="w-1.5 h-1.5 bg-red-600 rounded-sm" /><span className="text-[7px] text-teal-200">Bottom 25%</span></div>
          </div>
          <p className="text-[7px] text-center text-teal-200 mt-0.5">Figure 1: Top vs. Bottom Quartile (n = 695, all p &lt; 0.0001)</p>
        </div>

        <div className="text-[9px] text-teal-100 mb-1.5">
          <p><span className="font-semibold text-white">Main Finding:</span> Welch's t-tests confirmed statistically significant differences on all four metrics (p &lt; 0.0001).</p>
        </div>

        <div className="bg-slate-900/30 rounded-lg p-2 border border-teal-500/20 space-y-0.5">
          <p className="text-[9px] text-teal-100"><span className="font-semibold text-white">AI Conception:</span> 83.9% vs. 72.2% — 11.7 pp gap</p>
          <p className="text-[9px] text-teal-100"><span className="font-semibold text-white">Calf Survival:</span> 99.8% vs. 94.3% — 5.5 pp gap</p>
          <p className="text-[9px] text-teal-100"><span className="font-semibold text-white">Birth Weight:</span> 75.6 vs. 71.5 lbs — 4.1 lb gap</p>
          <p className="text-[9px] text-teal-100"><span className="font-semibold text-white">Calving Interval:</span> 369 vs. 395 days — 25.4 day gap</p>
          <p className="text-[9px] text-teal-100 pt-0.5 border-t border-teal-500/20"><span className="font-semibold text-white">AI vs. Excel:</span> 5/5 in ~3 sec; Excel: 10–45 min, failed 1/5</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-2.5 border border-yellow-500/30 shadow-md shrink-0">
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <h4 className="text-[10px] font-bold text-white mb-1 border-b border-yellow-500/40 pb-1">Contact</h4>
            <div className="space-y-0.5 text-[9px]">
              <p className="text-gray-300 font-semibold">Atlee Olson</p>
              <p className="text-gray-300">Division 5 — Animal Systems</p>
              <p className="text-gray-300">Belle Fourche FFA — South Dakota</p>
              <p className="text-gray-400 mt-1 pt-1 border-t border-gray-700">HPRSEF 2026</p>
            </div>
          </div>
          <div className="bg-white rounded p-1 flex items-center justify-center">
            <QrCode className="w-8 h-8 text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
