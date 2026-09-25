import React, { useState } from 'react';
import { SKZ_SCENARIOS } from '../data/skzTourData';
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { AppTab } from '../types';

interface SkzTourSimulatorProps {
  onNext: (nextTab: AppTab) => void;
  onPrev: (prevTab: AppTab) => void;
}

export const SkzTourSimulator: React.FC<SkzTourSimulatorProps> = ({ onNext, onPrev }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [chosenOption, setChosenOption] = useState<number | null>(null);

  const scenario = SKZ_SCENARIOS[selectedScenarioIndex];

  const handleScenarioChange = (index: number) => {
    setSelectedScenarioIndex(index);
    setChosenOption(null);
  };

  return (
    <div className="space-y-6 pb-20 max-w-2xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
          <span>Passo 2 de 5</span>
          <span aria-hidden="true">·</span>
          <span>Duda como Analista de Turnê do SKZ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Decisões Reais de Estádio com o Stray Kids
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Bang Chan, Felix e a produção precisam da sua análise rápida de dados para tomar 4 decisões críticas da turnê mundial.
        </p>
      </div>

      {/* Scenario Carousel Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {SKZ_SCENARIOS.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => handleScenarioChange(idx)}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedScenarioIndex === idx
                ? 'bg-purple-600 text-white font-semibold shadow-xs'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Caso 0{idx + 1}: {sc.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div>
          <span className="text-[11px] font-mono text-purple-400 block mb-1">
            {scenario.tag}
          </span>
          <h3 className="text-lg font-bold text-slate-100">
            {scenario.title}
          </h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            "{scenario.situation}"
          </p>
        </div>

        {/* The Question */}
        <div className="p-3.5 bg-purple-950/20 border border-purple-800/40 rounded-xl space-y-1">
          <span className="text-xs font-bold text-purple-300 block">
            Pergunta para a Analista Duda:
          </span>
          <p className="text-xs text-slate-200 font-medium">
            {scenario.question}
          </p>
        </div>

        {/* Interactive Choices */}
        {scenario.interactiveOptions && (
          <div className="space-y-2 pt-1">
            <span className="text-xs text-slate-400 block font-medium">
              Qual caminho você recomenda para o grupo?
            </span>
            <div className="space-y-2">
              {scenario.interactiveOptions.map((opt, oIdx) => {
                const isSelected = chosenOption === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => setChosenOption(oIdx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer min-h-[48px] ${
                      isSelected
                        ? opt.isRecommended
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                          : 'bg-amber-950/40 border-amber-500 text-amber-200'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold">{opt.label}</span>
                      {isSelected && (
                        opt.isRecommended ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        )
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {opt.description}
                    </span>

                    {isSelected && (
                      <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-[11px] leading-relaxed">
                        {opt.reason}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* The Natural Frequency Breakdown Box */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
          <span className="text-slate-400 font-mono text-[11px] block">
            A Análise de Frequência Natural da Duda:
          </span>
          <div className="text-purple-300 font-medium">
            📊 {scenario.naturalFrequency}
          </div>
          <div className="text-slate-300 leading-relaxed">
            💡 {scenario.percentageView}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => onPrev('concept')}
          className="flex-1 min-h-[48px] bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Conceito</span>
        </button>

        <button
          onClick={() => onNext('traps')}
          className="flex-1 min-h-[48px] bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md active:scale-[0.99]"
        >
          <span>Ir para as 4 Armadilhas Reais</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
