import React, { useState } from 'react';
import { ArrowRight, Sparkles, HelpCircle, Check, Percent } from 'lucide-react';
import { AppTab } from '../types';

interface LinearConceptStepProps {
  onNext: (nextTab: AppTab) => void;
}

export const LinearConceptStep: React.FC<LinearConceptStepProps> = ({ onNext }) => {
  const [activeTabExample, setActiveTabExample] = useState<'coin' | 'dice' | 'photocard'>('coin');
  const [diceFilter, setDiceFilter] = useState<'six' | 'even'>('six');
  const [coinFlipping, setCoinFlipping] = useState<boolean>(false);
  const [coinResult, setCoinResult] = useState<'cara' | 'coroa'>('cara');

  const handleFlipCoin = () => {
    if (coinFlipping) return;
    setCoinFlipping(true);
    setTimeout(() => {
      setCoinResult(Math.random() > 0.5 ? 'cara' : 'coroa');
      setCoinFlipping(false);
    }, 600);
  };

  return (
    <div className="space-y-6 pb-20 max-w-2xl mx-auto">
      {/* Editorial Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
          <span>Passo 1 de 4</span>
          <span aria-hidden="true">·</span>
          <span>Fundamentos Tradicionais</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          O que é Probabilidade afinal?
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Probabilidade é simplesmente a matemática que mede a chance de algo acontecer. Na prática, é apenas uma razão entre o que você está torcendo e tudo o que pode acontecer.
        </p>
      </div>

      {/* The Classic Formula Card */}
      <div className="bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-800/50 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>A Definição Clássica</span>
        </div>

        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center space-y-2">
          <div className="text-xs text-slate-400 font-medium">A fórmula fundamental de probabilidade:</div>
          <div className="inline-flex flex-col items-center justify-center font-mono py-2">
            <span className="text-sm sm:text-base font-bold text-emerald-400 px-3 pb-1 border-b border-slate-600">
              O que eu quero que aconteça (Casos Favoráveis)
            </span>
            <span className="text-sm sm:text-base font-bold text-purple-300 px-3 pt-1">
              Tudo o que pode acontecer (Casos Possíveis)
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Depois de dividir o de cima pelo de baixo, você ganha um número decimal. Multiplique esse número por <strong>100</strong> e pronto: você transformou a probabilidade na porcentagem que todo mundo conhece!
        </p>
      </div>

      {/* Visual Probability Scale (Régua de 0 a 100%) */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3">
        <span className="text-xs font-semibold text-slate-300 block">
          A Régua da Probabilidade (De 0% a 100%):
        </span>

        {/* The Track */}
        <div className="relative pt-6 pb-2">
          <div className="h-3 w-full bg-slate-950 rounded-full border border-slate-800 overflow-hidden flex">
            <div className="h-full bg-rose-500/80 w-1/4" title="0% a 25%"></div>
            <div className="h-full bg-amber-500/80 w-1/4" title="25% a 50%"></div>
            <div className="h-full bg-purple-500/80 w-1/4" title="50% a 75%"></div>
            <div className="h-full bg-emerald-500/80 w-1/4" title="75% a 100%"></div>
          </div>

          <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
            <span className="text-rose-400">0% (Impossível)</span>
            <span className="text-amber-400">50% (Equilibrado)</span>
            <span className="text-emerald-400">100% (Certeza)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
          <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
            <strong className="text-rose-300 block mb-0.5">0% Impossível</strong>
            <span className="text-slate-400">Tirar o número 7 num dado normal de 6 lados.</span>
          </div>
          <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
            <strong className="text-amber-300 block mb-0.5">50% Meio a Meio</strong>
            <span className="text-slate-400">Dar cara ao jogar uma moeda honesta no ar.</span>
          </div>
          <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
            <strong className="text-emerald-300 block mb-0.5">100% Certo</strong>
            <span className="text-slate-400">Tirar um número menor que 10 em um dado de 6 faces.</span>
          </div>
        </div>
      </div>

      {/* Interactive Traditional Examples (Coin, Dice, Stray Kids Photocard) */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-200">
            3 Exemplos Práticos do Cotidiano:
          </span>
          <span className="text-[11px] text-purple-400 font-mono">Toque para explorar</span>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTabExample('coin')}
            className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTabExample === 'coin'
                ? 'bg-purple-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🪙 1. A Moeda
          </button>
          <button
            onClick={() => setActiveTabExample('dice')}
            className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTabExample === 'dice'
                ? 'bg-purple-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🎲 2. O Dado
          </button>
          <button
            onClick={() => setActiveTabExample('photocard')}
            className={`py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeTabExample === 'photocard'
                ? 'bg-purple-600 text-white shadow-xs font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📸 3. O Photocard
          </button>
        </div>

        {/* Example 1: The Coin */}
        {activeTabExample === 'coin' && (
          <div className="space-y-4 pt-1">
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              {/* Animated Coin Graphic */}
              <div
                onClick={handleFlipCoin}
                className={`w-20 h-20 rounded-full border-4 border-amber-400/80 bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 cursor-pointer select-none transition-transform duration-500 ${
                  coinFlipping ? 'rotate-[360deg] scale-90' : 'hover:scale-105'
                }`}
                title="Toque para girar a moeda"
              >
                <span className="text-xs uppercase tracking-wider font-extrabold">
                  {coinResult}
                </span>
              </div>

              <div className="space-y-1 text-center sm:text-left flex-1">
                <span className="text-xs font-bold text-amber-300">
                  Lançamento de Moeda Honesta
                </span>
                <p className="text-xs text-slate-300">
                  A moeda tem 2 lados (Cara e Coroa). Se você torce para dar <strong>Cara</strong>:
                </p>
                <div className="text-xs font-mono text-purple-300 font-semibold pt-1">
                  1 caso que eu quero ÷ 2 casos possíveis = 1/2 = 0,50 (50%)
                </div>
              </div>
            </div>

            <button
              onClick={handleFlipCoin}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Girar a moeda para testar</span>
            </button>
          </div>
        )}

        {/* Example 2: The Dice */}
        {activeTabExample === 'dice' && (
          <div className="space-y-4 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDiceFilter('six')}
                className={`flex-1 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                  diceFilter === 'six'
                    ? 'bg-purple-900/50 border-purple-500 text-purple-200 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Tirar exatamente o Número 6
              </button>
              <button
                onClick={() => setDiceFilter('even')}
                className={`flex-1 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                  diceFilter === 'even'
                    ? 'bg-purple-900/50 border-purple-500 text-purple-200 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Tirar um Número Par (2, 4 ou 6)
              </button>
            </div>

            {/* Dice Visual Faces */}
            <div className="grid grid-cols-6 gap-2 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
              {[1, 2, 3, 4, 5, 6].map((num) => {
                const isSelected = diceFilter === 'six' ? num === 6 : num % 2 === 0;
                return (
                  <div
                    key={num}
                    className={`py-3 rounded-lg font-mono font-bold text-base sm:text-lg border transition-all ${
                      isSelected
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-xs'
                        : 'bg-slate-900/50 border-slate-800 text-slate-600'
                    }`}
                  >
                    {num}
                  </div>
                );
              })}
            </div>

            {/* Explanation */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
              {diceFilter === 'six' ? (
                <>
                  <div className="text-slate-300">
                    O dado tem 6 faces possíveis (1, 2, 3, 4, 5, 6). Apenas uma delas é o 6.
                  </div>
                  <div className="font-mono text-purple-300 font-semibold">
                    1 caso favorável ÷ 6 casos totais = 1/6 ≈ 0,166 (cerca de 16,7%)
                  </div>
                </>
              ) : (
                <>
                  <div className="text-slate-300">
                    Os números pares são 3: (2, 4 e 6).
                  </div>
                  <div className="font-mono text-emerald-300 font-semibold">
                    3 casos favoráveis ÷ 6 casos totais = 3/6 = 1/2 = 0,50 (exatamente 50%)
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Example 3: Stray Kids Photocard */}
        {activeTabExample === 'photocard' && (
          <div className="space-y-4 pt-1">
            <p className="text-xs text-slate-300 leading-relaxed">
              O álbum do Stray Kids tem 8 photocards colecionáveis oficiais (1 de cada membro: Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N).
            </p>

            {/* 8 Members Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { name: 'Bang Chan' },
                { name: 'Lee Know' },
                { name: 'Changbin' },
                { name: 'Hyunjin' },
                { name: 'Han' },
                { name: 'Felix', isTarget: true },
                { name: 'Seungmin' },
                { name: 'I.N' },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-xl border text-center text-xs transition-all ${
                    m.isTarget
                      ? 'bg-purple-900/40 border-purple-500 text-purple-200 font-bold shadow-xs'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="block text-base mb-0.5">{m.isTarget ? '⭐' : '🃏'}</span>
                  <span className="truncate block text-[11px]">{m.name}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="text-slate-300">
                Se você torce para tirar o <strong>Felix</strong>:
              </div>
              <div className="font-mono text-purple-300 font-semibold">
                1 photocard do Felix ÷ 8 membros possíveis = 1/8 = 0,125 (12,5%)
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Ou seja: em média, a cada 8 álbuns abertos, 1 virá com o Felix!
              </div>
            </div>
          </div>
        )}
      </div>

      {/* The Epiphany Card */}
      <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-2xl space-y-2">
        <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
          <Percent className="w-4 h-4 text-purple-400" />
          A Conexão com a Porcentagem:
        </span>
        <p className="text-xs text-slate-300 leading-relaxed">
          Reparou na mágica? Toda probabilidade começa como uma fração simples ($1/2$, $1/6$, $1/8$).
          Quando você faz essa divisão na calculadora e multiplica por 100, ela vira uma <strong>porcentagem</strong>.
          Porcentagem e probabilidade são irmãs gêmeas: uma é a conta dividida, a outra é o resultado falado em voz alta!
        </p>
      </div>

      {/* Next Button */}
      <div className="pt-2">
        <button
          onClick={() => onNext('stadium')}
          className="w-full min-h-[48px] bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
        >
          <span>Avançar para as Decisões de Estádio do SKZ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
