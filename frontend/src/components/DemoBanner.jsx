import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

const DemoBanner = ({ onRefresh }) => {
  return (
    <div 
      data-testid="demo-data-banner"
      className="demo-banner border-b border-yellow-300 py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <AlertTriangle className="w-4 h-4 text-yellow-700" />
        <span className="text-yellow-800 font-medium">
          You are currently viewing demo data. Live product data is temporarily unavailable.
        </span>
        {onRefresh && (
          <button
            onClick={onRefresh}
            data-testid="demo-refresh-btn"
            className="ml-2 text-yellow-700 hover:text-yellow-900 underline flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default DemoBanner;
