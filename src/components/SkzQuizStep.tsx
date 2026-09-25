import React, { useState } from 'react';
import { SKZ_QUIZ_QUESTIONS } from '../data/skzQuiz';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Award, Lightbulb, BookOpen } from 'lucide-react';
import { AppTab } from '../types';

interface SkzQuizStepProps {
  onNext: (nextTab: AppTab) => void;
  onPrev: (prevTab: AppTab) => void;
}

export const SkzQuizStep: React.FC<SkzQuizStepProps> = ({ onNext, onPrev }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const question = SKZ_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < SKZ_QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6 pb-20 max-w-2xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
          <span>Passo 4 de 4</span>
          <span aria-hidden="true">·</span>
          <span>Mini-Exercícios de Validação</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          O Teste da Analista de Turnê
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          5 perguntas rápidas de situações da turnê do Stray Kids para testar o seu raciocínio intuitivo sem estresse.
        </p>
      </div>

      {quizFinished ? (
        <div className="bg-slate-900/80 border border-purple-500/40 rounded-2xl p-6 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center mx-auto text-purple-300">
            <Award className="w-7 h-7 text-purple-400" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-100">
              {score >= 4 ? 'Desempenho Impecável, Duda!' : 'Bom Treino de Calibração!'}
            </h3>
            <p className="text-xs text-slate-300">
              Você acertou <strong>{score} de {SKZ_QUIZ_QUESTIONS.length}</strong> missões da turnê do Stray Kids.
            </p>
          </div>

          <p className="text-xs text-purple-200/90 max-w-md mx-auto leading-relaxed bg-purple-950/30 p-3 rounded-xl border border-purple-800/40">
            "A equipe de turnê do Bang Chan e do Felix agradece! Você comprovou que probabilidade não é bicho de sete cabeças: basta enxergar os casos favoráveis sobre os possíveis."
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="flex-1 min-h-[48px] bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Exercícios</span>
            </button>
            <button
              onClick={() => onNext('concept')}
              className="flex-1 min-h-[48px] bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Rever o Conceito Inicial</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-purple-400">
            <span>{question.title}</span>
            <span>Pergunta {currentIdx + 1} de {SKZ_QUIZ_QUESTIONS.length}</span>
          </div>

          <p className="text-sm font-semibold text-slate-100 leading-snug">
            {question.context}
          </p>

          {/* Options */}
          <div className="space-y-2 pt-1">
            {question.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let btnStyle = 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700';

              if (isAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer min-h-[48px] flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{opt.text}</span>
                  {isAnswered && (
                    opt.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : null
                  )}
                </button>
              );
            })}
          </div>

          {/* Constructive explanation */}
          {isAnswered && (
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/90 space-y-2 text-xs">
              <div className="text-slate-300 leading-relaxed">
                {question.explanation}
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[11px] pt-1 border-t border-slate-800/60">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Atalho da Duda: {question.mentalTip}</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{currentIdx + 1 === SKZ_QUIZ_QUESTIONS.length ? 'Ver Resultado' : 'Próxima Pergunta'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      {!quizFinished && (
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onPrev('traps')}
            className="w-full min-h-[48px] bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar às Armadilhas</span>
          </button>
        </div>
      )}
    </div>
  );
};
