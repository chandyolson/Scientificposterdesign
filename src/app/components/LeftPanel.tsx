import React from 'react';
import { BookOpen, Target, FlaskConical, ClipboardList } from 'lucide-react';

export function LeftPanel() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-blue-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-6 h-6 text-blue-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(147, 197, 253, 0.3)'
          }}>Introduction</h3>
        </div>
        <p className="text-sm text-white leading-relaxed">
          <span className="block mb-2">• Beef cattle ranches collect thousands of data points every year — breeding dates, pregnancy results, calving events, birth weights, and calf survival — but most producers still make herd decisions based on experience and gut feeling.</span>
          <span className="block mb-2">• Excel pivot tables can compare some of these records, but they require technical knowledge, significant time, and become unwieldy across multiple years.</span>
          <span className="block mb-2">• The national average age of a beef cattle producer is 58, and technology adoption in cow-calf operations lags behind every other livestock sector.</span>
          <span className="block">• This project set out to determine whether a non-technical student could use AI to build a tool that analyzes cattle data faster, deeper, and in language a rancher can understand.</span>
        </p>
      </div>
      
      {/* Purpose */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-teal-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-6 h-6 text-teal-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(94, 234, 212, 0.3)'
          }}>Purpose</h3>
        </div>
        <p className="text-sm text-white leading-relaxed">
          <span className="font-semibold text-teal-200">Objective:</span> Determine whether a non-technical student can use AI to build a web application that analyzes multi-year cattle data more effectively than Excel — measured by speed, completeness, and ability to detect statistically significant performance differences between individual cows.
        </p>
      </div>
      
      {/* Hypothesis */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-purple-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(216, 180, 254, 0.3)'
          }}>Hypothesis</h3>
        </div>
        <div className="text-sm text-white leading-relaxed">
          <p className="mb-2">
            <span className="font-semibold text-purple-200 italic">H₁:</span> A custom-built AI-powered web application will identify herd management trends and individual cow performance differences more effectively than traditional Excel pivot table methods.
          </p>
          <p className="text-purple-100 mb-1">Effectiveness measured by:</p>
          <p className="pl-3">
            <span className="block mb-1">• Time-to-insight (seconds vs. minutes)</span>
            <span className="block mb-1">• Completeness (questions answerable vs. not feasible)</span>
            <span className="block">• Statistical significance between top- and bottom-quartile cows on four metrics: AI conception rate, calving interval, birth weight, and calf survival</span>
          </p>
        </div>
      </div>
      
      {/* Materials & Methods */}
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-slate-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <ClipboardList className="w-6 h-6 text-slate-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(203, 213, 225, 0.3)'
          }}>Materials & Methods</h3>
        </div>
        <div className="space-y-3 text-sm text-white">
          <div>
            <p className="font-semibold mb-1">Data:</p>
            <p className="text-xs">• 8,786 animal records and 17,891 breeding-calving rows from two South Dakota operations (2017–2025)</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Tools:</p>
            <p className="text-xs">• Claude AI (data cleaning + coding assistant), Lovable (AI app builder), Supabase (cloud database), Hugging Face + Colab (SLM fine-tuning)</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Procedure:</p>
            <p className="text-xs mb-1">• Raw data cleaned and imported into Supabase; React web app built in Lovable</p>
            <p className="text-xs">• 233 Q&A pairs used to fine-tune Phi-3 Mini (LoRA); production assistant used Claude API with pre-calculated summaries</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Analysis:</p>
            <p className="text-xs mb-1">• Six-component composite score (0–100) ranked 695 cows</p>
            <p className="text-xs mb-1">• Welch's t-tests compared top 25% vs. bottom 25% on four metrics</p>
            <p className="text-xs">• Five questions compared AI vs. SQL vs. Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
}