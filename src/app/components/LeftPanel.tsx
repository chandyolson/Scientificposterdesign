import React from 'react';
import { BookOpen, ClipboardList } from 'lucide-react';

export function LeftPanel() {
  return (
    <div className="h-full flex flex-col gap-1.5 min-h-0">
      {/* Introduction + Hypothesis combined */}
      <div className="bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-blue-400 shadow-md backdrop-blur-sm shrink overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <BookOpen className="w-4 h-4 text-blue-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Introduction</h3>
        </div>
        <div className="text-[9px] text-white leading-snug space-y-1">
          <p>Cattle ranchers record a massive amount of information every year — breeding dates, pregnancy results, calving events, birth weights, and sire selections. Two South Dakota operations have been collecting this data for eight years, building up over 17,800 individual records. But here's the problem: almost no one actually analyzes it. Most ranchers still make their biggest management decisions based on gut feeling, because comparing multiple years of production data is slow, complicated, and requires technical skills most producers don't have. The national average age of a beef cattle producer is 58, and technology adoption in cow-calf operations lags behind every other livestock sector.</p>
          <p>This project asked a simple question: could a high school student with no programming experience use artificial intelligence to build a tool that makes all that data actually useful?</p>
        </div>
        {/* Hypothesis - glowing */}
        <div className="mt-2 rounded-md px-2 py-1.5" style={{
          background: 'rgba(250, 204, 21, 0.08)',
          boxShadow: '0 0 12px rgba(250, 204, 21, 0.25), 0 0 24px rgba(250, 204, 21, 0.1)',
          border: '1px solid rgba(250, 204, 21, 0.3)'
        }}>
          <p className="text-[9px] text-yellow-300 leading-snug font-bold" style={{
            textShadow: '0 0 8px rgba(250, 204, 21, 0.4)'
          }}>H₁: A non-technical student can build a custom AI-powered application that identifies herd management trends and individual cow performance differences in multi-year cattle data that traditional Excel methods would miss — measured by speed, accuracy, and ability to detect statistically significant differences between top- and bottom-performing cows.</p>
        </div>
      </div>

      {/* Materials & Methods */}
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-lg p-2.5 border-l-4 border-slate-400 shadow-md backdrop-blur-sm min-h-0 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-1">
          <ClipboardList className="w-4 h-4 text-slate-300 shrink-0" />
          <h3 className="text-sm font-bold text-white">Materials & Methods</h3>
        </div>
        <div className="space-y-1 text-[8.5px] text-white leading-snug">
          <div>
            <p className="font-semibold text-teal-200">Data Source:</p>
            <p>Eight years of production records (2017–2025) from two South Dakota cow-calf operations — 8,786 animal records and over 17,800 breeding, ultrasound, and calving entries collected via Zoho Creator.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Step 1 — Data Cleaning & Standardization:</p>
            <p>Raw records contained inconsistent sire spellings, duplicates, and missing values. Claude AI was used to standardize variable names, resolve duplicates, and normalize records into Supabase, a cloud PostgreSQL database.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Step 2 — Web Application:</p>
            <p>A producer-facing web app was built using Lovable, an AI-powered development platform. The app connects live to the database, allowing users to query cow histories, compare sire performance, and view herd trends — no spreadsheets or technical training required.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Step 3 — AI Assistant:</p>
            <p>A natural language query tool allows a researcher or producer to type a plain-English question and receive a data-backed answer in ~3 seconds, with analyzed results in exportable table and graph format. Uses the Anthropic Claude API with pre-calculated summaries. A small language model (Phi-3 Mini) was also fine-tuned using LoRA but lacked sufficient accuracy for production use.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Step 4 — Composite Scoring:</p>
            <p>Each cow received a score from 0–100 based on six lifetime components: conception quality, calf survival, calving interval, calves per productive year, gestation length, and birth weight consistency. 695 cows with 2+ calving records were scored.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Step 5 — Testing & Validation:</p>
            <p>The AI tool was tested against Excel using five real herd management questions. Welch's t-tests compared top 25% vs. bottom 25% of cows across four metrics: AI conception rate, calf survival, birth weight, and calving interval.</p>
          </div>
          <div>
            <p className="font-semibold text-teal-200">Tools:</p>
            <p>Claude AI (Anthropic), Lovable, Supabase, Hugging Face + Google Colab (T4 GPU), Microsoft Excel, Zoho Creator, Python/pandas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
