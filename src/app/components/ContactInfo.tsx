import React from 'react';
import { Mail, Globe, QrCode } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex justify-end">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 shadow-lg shadow-purple-500/20 border border-purple-500/30 max-w-md">
        <div className="flex items-start gap-4">
          {/* Contact Details */}
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-2 border-b border-yellow-500/50 pb-2" style={{
              textShadow: '0 0 10px rgba(234, 179, 8, 0.4)'
            }}>
              Contact Information
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>email@institution.edu</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="w-4 h-4 text-yellow-400" />
                <span>www.researchlab.edu</span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                Conference Name 2026 • Session XX
              </p>
            </div>
          </div>
          
          {/* QR Code Placeholder */}
          <div className="bg-white rounded-lg p-2 flex items-center justify-center">
            <QrCode className="w-16 h-16 text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}