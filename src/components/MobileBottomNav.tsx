import React from 'react';
import { AppTab } from '../types';
import { BookOpen, Music, ShieldAlert, CheckCircle } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'concept' as AppTab, label: 'O Conceito', icon: BookOpen },
    { id: 'stadium' as AppTab, label: 'Turnê SKZ', icon: Music },
    { id: 'traps' as AppTab, label: 'Armadilhas', icon: ShieldAlert },
    { id: 'quiz' as AppTab, label: 'Quiz Duda', icon: CheckCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/80 px-3 py-1.5 sm:py-2">
      <div className="max-w-md sm:max-w-lg mx-auto grid grid-cols-4 gap-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-purple-900/30 text-purple-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
              <span className="text-[10px] tracking-tight mt-1 truncate max-w-full px-1">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
