import { SkzQuizQuestion } from '../types';

export const SKZ_QUIZ_QUESTIONS: SkzQuizQuestion[] = [
  {
    id: 'q1',
    title: 'Missão 1: Previsão do Allianz Parque',
    context: 'A previsão meteorológica para o show do Stray Kids aponta 20% de probabilidade de chuva. Em termos de frequências reais, o que isso significa para a Analista Duda?',
    options: [
      {
        id: 'a',
        text: 'Em 100 dias com esse tempo, chove em 20 e faz tempo limpo em 80 (4 vezes mais chance de tempo bom)',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Como pode chover ou não chover, a chance real é sempre 50/50',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Vai chover durante 20% das músicas do show com certeza',
        isCorrect: false,
      },
    ],
    explanation: 'Exatamente! 20% significa 20 em cada 100 dias. A probabilidade de NÃO chover é de 80% (4 chances em cada 5). O show tem tudo para ser ao ar livre com segurança!',
    mentalTip: 'Probabilidade de chuva é a contagem de dias com chuva em 100 cenários idênticos.',
  },
  {
    id: 'q2',
    title: 'Missão 2: Sorteio do Ensaio VIP Soundcheck',
    context: 'Entre 200 fãs da Pista VIP, serão sorteadas 20 pulseiras douradas para assistir a passagem de som do Bang Chan e do Felix. Qual a probabilidade de uma fã ser sorteada?',
    options: [
      {
        id: 'a',
        text: '1 chance em 10 (10% de probabilidade)',
        isCorrect: true,
      },
      {
        id: 'b',
        text: '1 chance em 200 (quase impossível)',
        isCorrect: false,
      },
      {
        id: 'c',
        text: '20% de probabilidade',
        isCorrect: false,
      },
    ],
    explanation: 'Corte de zero ágil! 20 em 200 equivale a 2 em 20, ou 1 em 10 (10%). É uma chance muito tangível!',
    mentalTip: 'Corte um zero do total e do prêmio: 20/200 vira 1/10.',
  },
  {
    id: 'q3',
    title: 'Missão 3: O Mistério do Photocard',
    context: 'Duda abriu 4 photocards seguidos do Seungmin. Ela está prestes a abrir o 5º pacote. O Stray Kids tem 8 integrantes. Qual a chance exata de sair o Felix agora?',
    options: [
      {
        id: 'a',
        text: 'Exatamente 1 em 8 (12,5%), pois cada pacote é um evento novo e independente',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Mais de 50%, porque o Felix já está "acumulado"',
        isCorrect: false,
      },
      {
        id: 'c',
        text: '0%, porque o pacote anterior já definiu o lote',
        isCorrect: false,
      },
    ],
    explanation: 'Perfeito! Os pacotes não têm memória. Cada abertura recomeça com 1 chance entre os 8 membros (1 em 8 = 12,5%).',
    mentalTip: 'Falácia do apostador desarmada: o passado não muda a matemática do próximo pacote.',
  },
  {
    id: 'q4',
    title: 'Missão 4: Estoque Rápido de Camisetas da Turnê',
    context: 'O show tem 30.000 pessoas. A Duda calcula que 10% comprarão a camiseta oficial na lojinha. Quantas camisetas ela deve aprovar para produção?',
    options: [
      {
        id: 'a',
        text: '3.000 camisetas (basta cortar um zero de 30.000)',
        isCorrect: true,
      },
      {
        id: 'b',
        text: '300 camisetas',
        isCorrect: false,
      },
      {
        id: 'c',
        text: '15.000 camisetas',
        isCorrect: false,
      },
    ],
    explanation: 'Corte de zero instantâneo! 10% de qualquer número com zero no final é só arrancar o último zero: 30.000 vira 3.000.',
    mentalTip: '10% = corte o último zero em 1 segundo.',
  },
  {
    id: 'q5',
    title: 'Missão 5: O Desconto do Casaco na Loja',
    context: 'Um casaco oficial da turnê de R$ 100 tem 20% de desconto na Black Friday e mais 10% se pagar à vista no Pix. Quanto a fã paga no final?',
    options: [
      {
        id: 'a',
        text: 'R$ 72 (desconto real de 28%, e não de 30%)',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'R$ 70 (porque 20% + 10% = 30%)',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'R$ 80',
        isCorrect: false,
      },
    ],
    explanation: '100 - 20 = 80. Depois, 10% de 80 são R$ 8. Logo, 80 - 8 = R$ 72. Você economizou 28 reais, não 30!',
    mentalTip: 'Desconto sucessivo incide sobre o valor menor que sobrou.',
  },
];
