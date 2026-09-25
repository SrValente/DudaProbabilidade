import React from 'react';
import { AppTab } from '../types';
import { Sparkles } from 'lucide-react';

interface CompactMobileHeaderProps {
  currentTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
}

export const CompactMobileHeader: React.FC<CompactMobileHeaderProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const getStepNumber = (tab: AppTab) => {
    switch (tab) {
      case 'concept':
        return '1/4';
      case 'stadium':
        return '2/4';
      case 'traps':
        return '3/4';
      case 'quiz':
        return '4/4';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 h-14 flex items-center justify-between">
      {/* Zone 1: Wordmark */}
      <button
        onClick={() => onSelectTab('concept')}
        className="font-bold text-base tracking-tight text-slate-100 hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-2"
      >
        <span>SKZ Tour Lab</span>
      </button>

      {/* Zone 2: Step Indicator */}
      <div className="text-xs font-mono text-slate-400">
        <span className="text-purple-400 font-semibold">Duda</span>
        <span className="mx-1.5 text-slate-600">·</span>
        <span>Passo {getStepNumber(currentTab)}</span>
      </div>

      {/* Zone 3: Quiet Badge */}
      <div className="flex items-center gap-1.5 text-[11px] font-mono text-purple-300/80 bg-purple-950/40 border border-purple-800/40 px-2.5 py-1 rounded-lg">
        <Sparkles className="w-3 h-3 text-purple-400" />
        <span>Probabilidade</span>
      </div>
    </header>
  );
};
