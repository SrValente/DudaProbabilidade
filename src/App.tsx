/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppTab } from './types';
import { CompactMobileHeader } from './components/CompactMobileHeader';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LinearConceptStep } from './components/LinearConceptStep';
import { SkzTourSimulator } from './components/SkzTourSimulator';
import { RealTrapsStep } from './components/RealTrapsStep';
import { SkzQuizStep } from './components/SkzQuizStep';

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>('concept');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top Mobile Bar (Compact & Clean) */}
      <CompactMobileHeader
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
      />

      {/* Main Linear Experience */}
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-6">
        {currentTab === 'concept' && (
          <LinearConceptStep onNext={setCurrentTab} />
        )}

        {currentTab === 'stadium' && (
          <SkzTourSimulator
            onNext={setCurrentTab}
            onPrev={setCurrentTab}
          />
        )}

        {currentTab === 'traps' && (
          <RealTrapsStep
            onNext={setCurrentTab}
            onPrev={setCurrentTab}
          />
        )}

        {currentTab === 'quiz' && (
          <SkzQuizStep
            onNext={setCurrentTab}
            onPrev={setCurrentTab}
          />
        )}
      </main>

      {/* Ergonomic 48px Bottom Bar */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
      />
    </div>
  );
}
