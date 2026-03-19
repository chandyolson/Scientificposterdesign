import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export function CenterPanel() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* Key Impact with Takeaways - Largest and most prominent */}
      <div className="flex-1 bg-gradient-to-br from-teal-700 to-blue-700 rounded-xl p-8 shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/10 rounded-full -ml-24 -mb-24" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-10 h-10" />
            <h2 className="text-3xl font-bold" style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
            }}>KEY FINDING</h2>
          </div>
          <p className="text-5xl font-bold leading-tight mb-6 text-yellow-400" style={{
            textShadow: '0 0 20px rgba(250, 204, 21, 0.4)'
          }}>
            Your Main Discovery or Impact Statement Goes Here
          </p>
          <p className="text-2xl text-yellow-200 leading-relaxed mb-8">
            This central section should contain your single most important finding that can be read from several feet away. Make it clear, concise, and compelling.
          </p>
          
          {/* Key Takeaways integrated */}
          <div className="border-t-2 border-white/30 pt-6 mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-7 h-7 text-yellow-300" />
              <h3 className="text-2xl font-bold text-white" style={{
                textShadow: '0 0 12px rgba(253, 224, 71, 0.3)'
              }}>Key Takeaways</h3>
            </div>
            <ul className="space-y-3 text-yellow-100 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold text-xl">•</span>
                <span>Primary takeaway message highlighting your research impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold text-xl">•</span>
                <span>Secondary finding or implication for the field</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold text-xl">•</span>
                <span>Practical application or significance of results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Follow-up Research */}
      <div className="bg-gradient-to-br from-purple-800/90 to-blue-800/90 border-2 border-purple-500/50 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-7 h-7 text-purple-300" />
          <h3 className="text-2xl font-bold text-white" style={{
            textShadow: '0 0 12px rgba(216, 180, 254, 0.3)'
          }}>Future Directions</h3>
        </div>
        <ul className="space-y-2 text-purple-100">
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">→</span>
            <span>Next phase of research or investigation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">→</span>
            <span>Additional questions raised by findings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}