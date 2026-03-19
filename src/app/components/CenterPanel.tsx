import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export function CenterPanel() {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* Key Impact with Takeaways */}
      <div className="flex-1 bg-gradient-to-br from-teal-700 to-blue-700 rounded-xl p-5 shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-teal-400/10 rounded-full -ml-18 -mb-18" />
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-8 h-8" />
            <h2 className="text-2xl font-bold" style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}>KEY FINDING</h2>
          </div>
          <p className="text-3xl font-bold leading-tight mb-3 text-yellow-400" style={{
            textShadow: '0 0 20px rgba(250, 204, 21, 0.4)'
          }}>
            A Student With No Coding Experience Built an AI Tool That Matched SQL Ground Truth on Every Question in 3 Seconds
          </p>
          <div className="space-y-1 text-yellow-200 text-sm mb-4">
            <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span>AI answered five herd management questions with 100% accuracy in ~3 seconds each</span></p>
            <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span>Excel took 10–45 minutes per question and could not answer one at all</span></p>
            <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span>Composite scoring found significant performance gaps between top and bottom cows across all four metrics (p &lt; 0.0001)</span></p>
          </div>
          
          {/* Key Takeaways */}
          <div className="border-t-2 border-white/30 pt-3">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-6 h-6 text-yellow-300" />
              <h3 className="text-xl font-bold text-white" style={{
                textShadow: '0 0 12px rgba(253, 224, 71, 0.3)'
              }}>Key Takeaways</h3>
            </div>
            <div className="space-y-1.5 text-yellow-100 text-sm">
              <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span><span className="font-semibold text-yellow-300">Calving Interval:</span> Bottom-quartile cows averaged 25 extra days between calvings — roughly one lost calf per cow over her lifetime.</span></p>
              <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span><span className="font-semibold text-yellow-300">SLM vs. LLM:</span> A fine-tuned small model learned cattle vocabulary but failed on numbers — pre-calculated summaries fed to a large model solved it.</span></p>
              <p className="flex items-start gap-2"><span className="text-yellow-300 font-bold">•</span><span><span className="font-semibold text-yellow-300">Barrier to Entry:</span> If a high school student can build this with AI, the barrier is no longer technical skill — it's awareness the tools exist.</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Future Directions */}
      <div className="bg-gradient-to-br from-purple-800/90 to-blue-800/90 border-2 border-purple-500/50 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-purple-300" />
          <h3 className="text-lg font-bold text-white" style={{
            textShadow: '0 0 12px rgba(216, 180, 254, 0.3)'
          }}>Future Directions</h3>
        </div>
        <div className="space-y-1 text-purple-100 text-sm">
          <p className="flex items-start gap-2"><span className="text-yellow-400 font-bold">→</span><span>Expand into a chuteside processing tool — scan a cow's EID and see her full history and score before breeding</span></p>
          <p className="flex items-start gap-2"><span className="text-yellow-400 font-bold">→</span><span>Integrate treatments, vaccinations, and calf management into one platform (ChuteSide)</span></p>
        </div>
      </div>
    </div>
  );
}