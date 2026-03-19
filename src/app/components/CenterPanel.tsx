import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export function CenterPanel() {
  return (
    <div className="h-full flex flex-col gap-1.5 min-h-0">
      <div className="flex-1 bg-gradient-to-br from-teal-700 to-blue-700 rounded-lg p-4 shadow-xl text-white relative overflow-hidden min-h-0">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-teal-400/10 rounded-full -ml-18 -mb-18" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-7 h-7 shrink-0" />
            <h2 className="text-xl font-bold">KEY FINDING</h2>
          </div>
          <p className="text-2xl font-bold leading-tight mb-2 text-yellow-400" style={{
            textShadow: '0 0 20px rgba(250, 204, 21, 0.4)'
          }}>
            A Student With No Coding Experience Built an AI Tool That Matched SQL Ground Truth on Every Question in 3 Seconds
          </p>
          <div className="space-y-0.5 text-yellow-200 text-xs mb-3">
            <p>• AI answered five herd management questions with 100% accuracy in ~3 seconds each</p>
            <p>• Excel took 10–45 minutes per question and could not answer one at all</p>
            <p>• Composite scoring found significant performance gaps across all four metrics (p &lt; 0.0001)</p>
          </div>

          <div className="border-t-2 border-white/30 pt-2">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="w-5 h-5 text-yellow-300 shrink-0" />
              <h3 className="text-base font-bold text-white">Key Takeaways</h3>
            </div>
            <div className="space-y-1 text-yellow-100 text-xs">
              <p>• <span className="font-semibold text-yellow-300">Calving Interval:</span> Bottom-quartile cows averaged 25 extra days between calvings — roughly one lost calf per cow over her lifetime.</p>
              <p>• <span className="font-semibold text-yellow-300">SLM vs. LLM:</span> A fine-tuned small model learned cattle vocabulary but failed on numbers — pre-calculated summaries fed to a large model solved it.</p>
              <p>• <span className="font-semibold text-yellow-300">Barrier to Entry:</span> If a high school student can build this with AI, the barrier is no longer skill — it's awareness the tools exist.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-800/90 to-blue-800/90 border-2 border-purple-500/50 rounded-lg p-3 shadow-lg shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-purple-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Future Directions</h3>
        </div>
        <div className="space-y-0.5 text-purple-100 text-[10px]">
          <p><span className="text-yellow-400 font-bold">→</span> Expand into a chuteside tool — scan a cow's EID and see her full history and score before breeding</p>
          <p><span className="text-yellow-400 font-bold">→</span> Integrate treatments, vaccinations, and calf management into one platform (ChuteSide)</p>
        </div>
      </div>
    </div>
  );
}
