// Lista de Exercícios — Introdução ao JavaScript

// 1. Declaração e exibição de dados
{
  const nome = 'Ítalo';
  let idade = 41;
  const gostaDeProgramar = true;
  console.log(`1. Nome: ${nome}, idade: ${idade}, gosta de programar: ${gostaDeProgramar}`);
}

// 2. Calculadora simples
{
  const numero1 = 20;
  const numero2 = 6;
  console.log('2. Soma:', numero1 + numero2);
  console.log('Subtração:', numero1 - numero2);
  console.log('Multiplicação:', numero1 * numero2);
  console.log('Divisão:', numero1 / numero2);
  console.log('Resto:', numero1 % numero2);
}

// 3. Verificador de maioridade
{
  const idade = 25;
  if (idade < 18) {
    console.log('3. Menor de idade');
  } else if (idade <= 60) {
    console.log('3. Adulto');
  } else {
    console.log('3. Idoso');
  }
}

// 4. Dia da semana
{
  const dia = 3;
  switch (dia) {
    case 1: console.log('4. Domingo'); break;
    case 2: console.log('4. Segunda-feira'); break;
    case 3: console.log('4. Terça-feira'); break;
    case 4: console.log('4. Quarta-feira'); break;
    case 5: console.log('4. Quinta-feira'); break;
    case 6: console.log('4. Sexta-feira'); break;
    case 7: console.log('4. Sábado'); break;
    default: console.log('4. Dia inválido');
  }
}

// 5. Contagem crescente e regressiva
{
  console.log('5. Crescente:');
  for (let i = 1; i <= 10; i++) console.log(i);
  console.log('Regressiva:');
  for (let i = 10; i >= 1; i--) console.log(i);
}

// 6. Acumulador com while
{
  let numero = 1;
  let soma = 0;
  while (numero <= 100) {
    soma += numero;
    numero++;
  }
  console.log('6. Soma de 1 a 100:', soma);
}

// 7. Função par ou ímpar
function ehPar(numero) {
  return numero % 2 === 0;
}
console.log('7. 4 é par?', ehPar(4));
console.log('7. 7 é par?', ehPar(7));

// 8. Média de notas
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media >= 7 ? 'Aprovado' : 'Reprovado';
}
console.log('8. Notas 8, 7 e 9:', calcularMedia(8, 7, 9));
console.log('8. Notas 5, 6 e 4:', calcularMedia(5, 6, 4));

// 9. Acesso e propriedades de arrays
{
  const frutas = ['Maçã', 'Banana', 'Uva', 'Manga', 'Laranja'];
  console.log('9. Primeira fruta:', frutas[0]);
  console.log('Última fruta:', frutas[4]);
  console.log('Quantidade de frutas:', frutas.length);
}

// 10. Percorrendo array com for tradicional
{
  const numeros = [10, 20, 30, 40, 50, 60];
  for (let i = 0; i < numeros.length; i++) {
    console.log(`10. Índice ${i}: valor ${numeros[i]}`);
  }
}
