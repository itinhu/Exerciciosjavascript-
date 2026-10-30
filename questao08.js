// Questão 8 — Função média de notas
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media >= 7 ? "Aprovado" : "Reprovado";
}
console.log("Aluno 1:", calcularMedia(8, 7, 9));
console.log("Aluno 2:", calcularMedia(5, 6, 4));
