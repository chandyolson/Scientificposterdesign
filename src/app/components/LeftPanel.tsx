import React from 'react';
import { BookOpen, Target, FlaskConical, ClipboardList } from 'lucide-react';

export function LeftPanel() {
  return (
    <div className="h-full flex flex-col gap-2">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-3 border-l-4 border-blue-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5 text-blue-300 shrink-0" />
          <h3 className="text-base font-bold text-white" style={{
            textShadow: '0 0 8px rgba(147, 197, 253, 0.3)'
          }}>Introduction</h3>
        </div>
        <div className="text-xs text-white leading-relaxed space-y-1">
          <p>• Beef cattle ranches collect thousands of data points every year — breeding dates, pregnancy results, calving events, birth weights, and calf survival — but most producers still make herd decisions based on experience and gut feeling.</p>
          <p>• Excel pivot tables can compare some of these records, but they require technical knowledge, significant time, and become unwieldy across multiple years.</p>
          <p>• The national average age of a beef cattle producer is 58, and technology adoption in cow-calf operations lags behind every other livestock sector.</p>
          <p>• This project set out to determine whether a non-technical student could use AI to build a tool that analyzes cattle data faster, deeper, and in language a rancher can understand.</p>
        </div>
      </div>
      
      {/* Purpose */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-3 border-l-4 border-teal-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-teal-300 shrink-0" />
          <h3 className="text-base font-bold text-white" style={{
            textShadow: '0 0 8px rgba(94, 234, 212, 0.3)'
          }}>Purpose</h3>
        </div>
        <p className="text-xs text-white leading-relaxed">
          <span className="font-semibold text-teal-200">Objective:</span> Determine whether a non-technical student can use AI to build a web application that analyzes multi-year cattle data more effectively than Excel — measured by speed, completeness, and ability to detect statistically significant performance differences between individual cows.
        </p>
      </div>
      
      {/* Hypothesis */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-3 border-l-4 border-purple-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-1">
          <FlaskConical className="w-5 h-5 text-purple-300 shrink-0" />
          <h3 className="text-base font-bold text-white" style={{
            textShadow: '0 0 8px rgba(216, 180, 254, 0.3)'
          }}>Hypothesis</h3>
        </div>
        <div className="text-xs text-white leading-relaxed">
          <p className="mb-1">
            <span className="font-semibold text-purple-200 italic">H₁:</span> A custom-built AI-powered web application will identify herd management trends and individual cow performance differences more effectively than traditional Excel pivot table methods.
          </p>
          <p className="text-purple-100 mb-0.5">Effectiveness measured by:</p>
          <div className="pl-2">
            <p>• Time-to-insight (seconds vs. minutes)</p>
            <p>• Completeness (answerable vs. not feasible)</p>
            <p>• Statistical significance between top/bottom quartile cows on: AI conception rate, calving interval, birth weight, calf survival</p>
          </div>
        </div>
      </div>
      
      {/* Materials & Methods */}
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-3 border-l-4 border-slate-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-1">
          <ClipboardList className="w-5 h-5 text-slate-300 shrink-0" />
          <h3 className="text-base font-bold text-white" style={{
            textShadow: '0 0 8px rgba(203, 213, 225, 0.3)'
          }}>Materials & Methods</h3>
        </div>
        <div className="space-y-1.5 text-xs text-white">
          <div>
            <p className="font-semibold">Data:</p>
            <p className="text-[11px]">• 8,786 animal records and 17,891 breeding-calving rows from two South Dakota operations (2017–2025)</p>
          </div>
          <div>
            <p className="font-semibold">Tools:</p>
            <p className="text-[11px]">• Claude AI, Lovable (AI app builder), Supabase (cloud DB), Hugging Face + Colab (SLM fine-tuning)</p>
          </div>
          <div>
            <p className="font-semibold">Procedure:</p>
            <p className="text-[11px]">• Raw data cleaned → Supabase; React web app built in Lovable</p>
            <p className="text-[11px]">• 233 Q&A pairs fine-tuned Phi-3 Mini (LoRA); production used Claude API + pre-calculated summaries</p>
          </div>
          <div>
            <p className="font-semibold">Analysis:</p>
            <p className="text-[11px]">• Six-component composite score (0–100) ranked 695 cows</p>
            <p className="text-[11px]">• Welch's t-tests: top 25% vs. bottom 25% on four metrics</p>
            <p className="text-[11px]">• Five questions compared AI vs. SQL vs. Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
}