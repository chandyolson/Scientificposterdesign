import React from 'react';
import { BarChart3, CheckCircle, Mail, Globe, QrCode } from 'lucide-react';

export function RightPanel() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* Results - Expanded to fill entire right side */}
      <div className="flex-1 bg-gradient-to-br from-teal-800/70 to-blue-800/70 rounded-xl p-5 border-l-4 border-teal-400 shadow-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-6 h-6 text-teal-300" />
          <h3 className="text-xl font-bold text-white" style={{
            textShadow: '0 0 8px rgba(94, 234, 212, 0.3)'
          }}>Results</h3>
        </div>
        
        {/* Placeholder for chart/graph */}
        <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-teal-500/30">
          <div className="h-40 bg-gradient-to-t from-slate-900 to-slate-800 rounded flex items-end justify-around p-2 gap-1">
            <div className="w-12 bg-gradient-to-t from-teal-600 to-teal-500 rounded-t shadow-lg" style={{height: '60%'}} />
            <div className="w-12 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t shadow-lg" style={{height: '85%'}} />
            <div className="w-12 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t shadow-lg" style={{height: '45%'}} />
            <div className="w-12 bg-gradient-to-t from-teal-700 to-teal-600 rounded-t shadow-lg" style={{height: '70%'}} />
          </div>
          <p className="text-xs text-center text-teal-200 mt-2">Figure 1: Key Data Visualization</p>
        </div>
        
        <div className="space-y-2 text-sm text-teal-100 mb-4">
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Main Finding:</span> Describe your primary 
            statistical result or observation (p &lt; 0.05).
          </p>
          <p className="leading-relaxed text-xs">
            Additional supporting data and secondary findings that reinforce your 
            key discovery.
          </p>
        </div>
        
        {/* Additional space for more results/data */}
        <div className="bg-slate-900/30 rounded-lg p-4 border border-teal-500/20">
          <p className="text-sm text-teal-100 leading-relaxed">
            Additional results, statistical analyses, or supporting evidence can be displayed here. 
            Include relevant data tables, graphs, or detailed findings.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-yellow-500/30 shadow-md">
        <div className="flex items-start gap-3">
          {/* Contact Details */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white mb-2 border-b border-yellow-500/40 pb-2" style={{
              textShadow: '0 0 8px rgba(234, 179, 8, 0.25)'
            }}>
              Contact
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-yellow-400" />
                <span>email@institution.edu</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="w-3.5 h-3.5 text-yellow-400" />
                <span>www.researchlab.edu</span>
              </div>
              <p className="text-gray-400 mt-2 pt-2 border-t border-gray-700">
                Conference 2026 • Session XX
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