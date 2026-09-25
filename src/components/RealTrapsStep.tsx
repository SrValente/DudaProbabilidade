import React, { useState } from 'react';
import { SKZ_FALLACIES } from '../data/skzFallacies';
import { ShieldAlert, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Zap, HelpCircle } from 'lucide-react';
import { AppTab } from '../types';

interface RealTrapsStepProps {
  onNext: (nextTab: AppTab) => void;
  onPrev: (prevTab: AppTab) => void;
}

export const RealTrapsStep: React.FC<RealTrapsStepProps> = ({ onNext, onPrev }) => {
  const [expandedTrapId, setExpandedTrapId] = useState<string>('trap-equiprobability');

  const toggleTrap = (id: string) => {
    setExpandedTrapId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-6 pb-20 max-w-2xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
          <span>Passo 3 de 5</span>
          <span aria-hidden="true">·</span>
          <span>Desarmando Erros Cognitivos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          As 4 Armadilhas de Probabilidade do Mundo Real
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          O cérebro humano é programado para cair em pegadinhas de incerteza. Como analista do Stray Kids, você nunca mais será enganada por estes 4 erros clássicos:
        </p>
      </div>

      {/* Traps Accordion / Cards */}
      <div className="space-y-3">
        {SKZ_FALLACIES.map((trap) => {
          const isExpanded = expandedTrapId === trap.id;
          return (
            <div
              key={trap.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleTrap(trap.id)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-sm font-bold text-slate-100">
                    {trap.title}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-3 text-xs border-t border-slate-800/60 pt-3">
                  {/* Context Story */}
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-slate-300 leading-relaxed">
                    <span className="text-[11px] font-mono text-purple-300 block mb-0.5">
                      Cenário com o SKZ:
                    </span>
                    {trap.skzStory}
                  </div>

                  {/* Common mistake */}
                  <div className="p-3 bg-rose-950/20 border border-rose-900/30 rounded-xl text-rose-200 leading-relaxed">
                    <strong className="block text-rose-300 mb-0.5 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
                      Onde as pessoas erram:
                    </strong>
                    {trap.commonMistake}
                  </div>

                  {/* Real Math Fact */}
                  <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-xl text-emerald-200 leading-relaxed">
                    <strong className="block text-emerald-300 mb-0.5">
                      A Verdade Matemática:
                    </strong>
                    {trap.realMathFact}
                  </div>

                  {/* Mental Shortcut */}
                  <div className="p-3 bg-purple-950/30 border border-purple-800/40 rounded-xl text-purple-200 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-300 mb-0.5">
                        Atalho Mental da Duda:
                      </strong>
                      {trap.mentalShortcut}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => onPrev('stadium')}
          className="flex-1 min-h-[48px] bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Turnê</span>
        </button>

        <button
          onClick={() => onNext('quiz')}
          className="flex-1 min-h-[48px] bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md active:scale-[0.99]"
        >
          <span>Fazer os 5 Mini-Exercícios</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
