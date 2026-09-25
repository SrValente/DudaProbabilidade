import { SkzScenario } from '../types';

export const SKZ_SCENARIOS: SkzScenario[] = [
  {
    id: 'rain-stadium',
    title: 'Show em Estádio Aberto: Risco de Chuva',
    tag: 'Allianz Parque · São Paulo',
    question: 'A previsão meteorológica marca 30% de chance de chuva às 20h. Devemos cancelar a passarela estendida e cobrir os telões?',
    situation: 'O Bang Chan quer a passarela estendida até o meio da multidão, mas equipamentos de som e palco molhados podem dar curto-circuito.',
    naturalFrequency: 'Em 100 dias com essas condições atmosféricas exatas, choveu em 30 e fez tempo firme em 70.',
    percentageView: '30% de chuva significa 70% de chance de tempo limpo (mais que o dobro de chance de NÃO chover).',
    decisionAdvice: 'Decisão da Analista Duda: Não cancele a passarela! Mantenha lonas térmicas em espera lateral (plano B), pois em 7 a cada 10 vezes o show acontecerá normalmente.',
    interactiveOptions: [
      {
        label: 'Cancelar a passarela inteira por medo de "50/50"',
        description: 'Tratar qualquer incerteza como se fosse metade de chance.',
        isRecommended: false,
        reason: 'Erro de Equiprobabilidade! 30% é bem menos que a metade (70% é tempo seco). Cancelar frustraria 45.000 fãs sem necessidade.',
      },
      {
        label: 'Montar a passarela + equipe com lonas rápidas de prontidão',
        description: 'Decisão baseada na probabilidade real de 70% de tempo firme.',
        isRecommended: true,
        reason: 'Decisão brilhante! Você aproveita os 70% de chances favoráveis e cria um protocolo de contingência para os 30%.',
      },
    ],
  },
  {
    id: 'ticket-rush',
    title: 'Venda Geral de Ingressos: A Fila Virtual',
    tag: 'Estádio de 45.000 Lugares',
    question: '180.000 STAYs entraram na fila online da Ticketmaster. Qual a probabilidade real de uma fã conseguir comprar?',
    situation: 'O servidor está sobrecarregado e muitas fãs acham que é impossível ou sorte pura.',
    naturalFrequency: 'Existem 45.000 ingressos para 180.000 pessoas na fila.',
    percentageView: '45.000 ÷ 180.000 = 1 ingresso para cada 4 pessoas na fila (exatamente 25% de probabilidade).',
    decisionAdvice: 'Decisão da Analista Duda: 1 em cada 4 pessoas da fila vai conseguir ingresso! Se um grupo de 4 amigas entrar na fila ao mesmo tempo, a probabilidade combinada de pelo menos uma conseguir comprar é alta.',
    interactiveOptions: [
      {
        label: 'Achar que a chance é quase 0%',
        description: 'Desistir por ver 180 mil pessoas na tela.',
        isRecommended: false,
        reason: '180 mil parece assustador, mas o estádio tem 45 mil vagas! 1 em cada 4 é uma chance considerável (25%).',
      },
      {
        label: 'Organizar mutirão de 4 amigas na fila',
        description: 'Estratégia baseada na frequência natural de 1 em 4.',
        isRecommended: true,
        reason: 'Estratégia ágil! 1 em cada 4 significa que o esforço coletivo eleva drasticamente a chance da equipe.',
      },
    ],
  },
  {
    id: 'soundcheck-vip',
    title: 'Sorteio do Passe VIP Soundcheck',
    tag: 'Ensaio Exclusivo com os 8 Meninos',
    question: 'Entre os 500 compradores da Pista Premium, haverá sorteio de 50 pulseiras douradas para entrar no ensaio. Qual a chance?',
    situation: 'Muitas pessoas acham que sorteio com centenas de pessoas é "quase impossível".',
    naturalFrequency: '50 pulseiras divididas entre 500 pessoas = 5 pulseiras para cada 50 pessoas = 1 em cada 10.',
    percentageView: '50 em 500 é literalmente 10% (0,10 ou 10 centavos em 1 Real).',
    decisionAdvice: 'Decisão da Analista Duda: A chance é de exatamente 1 em cada 10 fãs (10%). É a mesma chance de tirar o número 1 ao girar uma roleta de 10 números.',
    interactiveOptions: [
      {
        label: 'Dizer que "ou ganha ou não ganha, então é 50%"',
        description: 'O famoso viés que confunde desfechos com chances.',
        isRecommended: false,
        reason: 'Ter 2 opções não significa ter 50% de chance! São 50 felizardas e 450 que ficam fora (10% x 90%).',
      },
      {
        label: 'Reconhecer que 10% é 1 chance em 10',
        description: 'Visão limpa de frequências naturais.',
        isRecommended: true,
        reason: 'Perfeito! Você enxerga a proporção real de 1 para cada 10 pessoas na fila.',
      },
    ],
  },
  {
    id: 'lightstick-stock',
    title: 'Estoque do Nachimbong (Lightstick Oficial)',
    tag: 'Previsão de Demanda na Loja Oficial',
    question: 'Em um estádio com 40.000 STAYs, historicamente 15% compram o Lightstick no dia do show. Quantas unidades levar?',
    situation: 'Falta de lightstick gera choro e perda de faturamento; excesso gera custo alto de frete e sobra de estoque.',
    naturalFrequency: '15 pessoas em cada 100 compram o Nachimbong.',
    percentageView: 'Decomposição de 15%: 10% de 40.000 = 4.000. 5% de 40.000 = metade = 2.000. Total = 6.000 unidades.',
    decisionAdvice: 'Decisão da Analista Duda: Levar exatamente 6.000 unidades (com margem de 500 reservas). Conta feita em 3 segundos sem calculadora!',
    interactiveOptions: [
      {
        label: 'Tentar fazer regra de três com vírgula no papel',
        description: '40.000 x 0,15 no papel no meio da correria.',
        isRecommended: false,
        reason: 'Desgasta a mente na hora da decisão rápida da turnê.',
      },
      {
        label: 'Decompor de cabeça: 10% (4.000) + 5% (2.000) = 6.000',
        description: 'Técnica ágil de cálculo mental.',
        isRecommended: true,
        reason: 'Impecável! Você calculou a demanda exata de 6.000 lightsticks em 3 segundos.',
      },
    ],
  },
];
