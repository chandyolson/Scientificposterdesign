import React from 'react';
import { BookOpen, Target, FlaskConical, ClipboardList } from 'lucide-react';

export function LeftPanel() {
  return (
    <div className="h-full flex flex-col gap-1.5 min-h-0">
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-blue-400 shadow-md backdrop-blur-sm shrink overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <BookOpen className="w-4 h-4 text-blue-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Introduction</h3>
        </div>
        <div className="text-[9px] text-white leading-snug space-y-0.5">
          <p>• Beef cattle ranches collect thousands of data points every year — breeding dates, pregnancy results, calving events, birth weights, and calf survival — but most producers still make herd decisions based on gut feeling.</p>
          <p>• Excel pivot tables can compare some records, but they require technical knowledge, significant time, and become unwieldy across multiple years.</p>
          <p>• The national average age of a beef cattle producer is 58, and technology adoption in cow-calf operations lags behind every other livestock sector.</p>
          <p>• This project set out to determine whether a non-technical student could use AI to analyze cattle data faster and in language a rancher can understand.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-teal-400 shadow-md backdrop-blur-sm shrink overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <Target className="w-4 h-4 text-teal-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Purpose</h3>
        </div>
        <p className="text-[9px] text-white leading-snug">
          <span className="font-semibold text-teal-200">Objective:</span> Determine whether a non-technical student can use AI to build a web application that analyzes multi-year cattle data more effectively than Excel — measured by speed, completeness, and statistical significance.
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-purple-400 shadow-md backdrop-blur-sm shrink overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <FlaskConical className="w-4 h-4 text-purple-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Hypothesis</h3>
        </div>
        <div className="text-[9px] text-white leading-snug">
          <p className="mb-0.5"><span className="font-semibold text-purple-200 italic">H₁:</span> A custom-built AI-powered web application will identify herd management trends and cow performance differences more effectively than traditional Excel pivot table methods.</p>
          <p className="text-purple-100">Measured by:</p>
          <div className="pl-2">
            <p>• Time-to-insight (seconds vs. minutes)</p>
            <p>• Completeness (answerable vs. not feasible)</p>
            <p>• Statistical significance between top/bottom quartile cows on four metrics</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-slate-400 shadow-md backdrop-blur-sm min-h-0 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <ClipboardList className="w-4 h-4 text-slate-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Materials & Methods</h3>
        </div>
        <div className="space-y-1 text-[9px] text-white">
          <div>
            <p className="font-semibold">Data:</p>
            <p>• 8,786 animals, 17,891 breeding-calving rows, two SD operations (2017–2025)</p>
          </div>
          <div>
            <p className="font-semibold">Tools:</p>
            <p>• Claude AI, Lovable, Supabase, Hugging Face + Colab</p>
          </div>
          <div>
            <p className="font-semibold">Procedure:</p>
            <p>• Data cleaned → Supabase; React app built in Lovable</p>
            <p>• 233 Q&A pairs fine-tuned Phi-3 Mini (LoRA); production used Claude API</p>
          </div>
          <div>
            <p className="font-semibold">Analysis:</p>
            <p>• Composite score (0–100) ranked 695 cows</p>
            <p>• Welch's t-tests: top 25% vs. bottom 25%</p>
            <p>• Five questions: AI vs. SQL vs. Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
