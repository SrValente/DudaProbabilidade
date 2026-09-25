import { CognitiveTrap } from '../types';

export const SKZ_FALLACIES: CognitiveTrap[] = [
  {
    id: 'trap-equiprobability',
    title: '1. O Mito do 50/50 ("Ou chove ou não chove")',
    skzStory: 'Uma fã diz: "Para o show do Stray Kids no sábado, ou vai chover no estádio ou não vai. Como são duas opções, a chance é de 50%!"',
    commonMistake: 'Confundir ter 2 desfechos possíveis com ter 50% de probabilidade em cada um.',
    realMathFact: 'Ter duas alternativas não significa que elas têm pesos iguais! Se a previsão de chuva é de 20%, significa que em 100 dias com aquele clima, choveu em 20 e fez tempo limpo em 80. A probabilidade de tempo bom é de 80% (4 em cada 5), quatro vezes maior que a chuva!',
    mentalShortcut: 'Sempre pergunte: "Se repetíssemos isso 100 vezes, o resultado seria metade e metade?" Se não for, não é 50/50!',
  },
  {
    id: 'trap-photocard',
    title: '2. A Falácia do Photocard ("O pacote tem memória")',
    skzStory: 'A Duda abre 3 álbuns do SKZ seguidos e tira o photocard do Hyunjin nos três. No 4º álbum ela pensa: "Agora é quase certeza que vai sair o Felix, porque já saiu o Hyunjin demais!"',
    commonMistake: 'Achar que o passado "compensa" o futuro em sorteios aleatórios (Falácia do Apostador).',
    realMathFact: 'O pacote selado na fábrica não sabe quais álbuns você já abriu no seu quarto! Cada álbum é um evento 100% independente. Em cada abertura, a chance de tirar o Felix continua sendo de exatamente 1 em 8 (12,5%), nem mais, nem menos.',
    mentalShortcut: 'Lembre-se: Moedas, cartas e álbuns não têm cérebro, nem memória, nem sentimento de justiça.',
  },
  {
    id: 'trap-fake-ticket',
    title: '3. A Catraca do Estádio (O Paradoxo do Falso Positivo)',
    skzStory: 'A catraca do Allianz Parque tem um leitor de ingresso com 99% de precisão (1% de erro de falso alarme). Se o leitor apitar vermelho acusando "ingresso falso", a chance de a fã ser uma golpista é de 99%?',
    commonMistake: 'Achar que 99% de precisão do aparelho significa 99% de certeza de que a pessoa é culpada.',
    realMathFact: 'Se a taxa de ingressos falsos for de 1 em 1.000 (0,1%), pense em 1.000 fãs na fila: haverá 1 golpista real e cerca de 10 fãs honestas cujo ingresso dará defeito no leitor (1% de 999). Total de alarmes vermelhos: 11. De 11 alarmes, apenas 1 era falso de verdade! A chance real é de 1 em 11 (~9%)!',
    mentalShortcut: 'Frequência Natural de Gigerenzer: Conte quantas pessoas reais apitaram antes de acusar alguém na catraca.',
  },
  {
    id: 'trap-double-discount',
    title: '4. A Falsa Promoção da Loja da Turnê (Desconto Duplo)',
    skzStory: 'Na pop-up store do SKZ, o moletom custa R$ 200. A placa diz: "20% de desconto na peça + 10% extra pagando no Pix!" A STAY comemora achando que teve 30% de desconto.',
    commonMistake: 'Somar as duas porcentagens (20% + 10% = 30%) como se incidissem sobre o mesmo valor.',
    realMathFact: 'O 1º desconto reduz de R$ 200 para R$ 160 (R$ 40 a menos). O 2º desconto de 10% incide sobre os R$ 160 restantes, tirando R$ 16. O valor final é R$ 144. O desconto total foi de R$ 56 (28%), e não R$ 60 (30%).',
    mentalShortcut: 'Desconto duplo sempre é MENOR que a soma direta das porcentagens!',
  },
];
