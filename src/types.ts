export type AppTab = 
  | 'concept'     // O que é probabilidade (explicação tradicional com exemplos visuais)
  | 'stadium'     // Simulador de Turnê do SKZ (Chuva, Lotação, VIP)
  | 'traps'       // As 4 Armadilhas Reais (Equiprobabilidade, Photocard, Falso Positivo, Desconto)
  | 'quiz';       // Mini-exercícios rápidos da Duda

export interface SkzScenario {
  id: string;
  title: string;
  tag: string;
  question: string;
  situation: string;
  naturalFrequency: string;
  percentageView: string;
  decisionAdvice: string;
  interactiveOptions?: {
    label: string;
    description: string;
    isRecommended: boolean;
    reason: string;
  }[];
}

export interface CognitiveTrap {
  id: string;
  title: string;
  skzStory: string;
  commonMistake: string;
  realMathFact: string;
  mentalShortcut: string;
}

export interface SkzQuizQuestion {
  id: string;
  title: string;
  context: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  mentalTip: string;
}
