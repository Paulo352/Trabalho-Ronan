function fatorial(n) {
  let resultado = 1;
  let detalhes = "";
  for (let i = 1; i <= n; i++) {
    resultado *= i;
    detalhes += i + (i < n ? " x " : "");
  }
  return `${detalhes} = ${resultado}`;
}

function tabuada(n) {
  let texto = `<strong>Tabuada de ${n}:</strong><br>`;
  for (let i = 1; i <= 10; i++) {
    texto += `${n} x ${i} = ${n * i}<br>`;
  }
  return texto;
}

function primo(n) {
  if (n < 2) return `${n} NÃO é primo`;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return `${n} NÃO é primo (divisível por ${i})`;
    }
  }
  return `${n} É PRIMO!`;
}

function calcularFatorial() {
  let num = parseInt(prompt("Digite um número:"));
  if (!isNaN(num) && num >= 0) {
    document.getElementById("saida").innerHTML += fatorial(num) + "<br><br>";
  } else {
    alert("Digite um número válido!");
  }
}

function mostrarTabuada() {
  let num = parseInt(prompt("Digite um número:"));
  if (!isNaN(num)) {
    document.getElementById("saida").innerHTML += tabuada(num) + "<br>";
  } else {
    alert("Digite um número válido!");
  }
}

function verificarPrimo() {
  let num = parseInt(prompt("Digite um número:"));
  if (!isNaN(num)) {
    document.getElementById("saida").innerHTML += primo(num) + "<br><br>";
  } else {
    alert("Digite um número válido!");
  }
}

function limpar() {
  document.getElementById("saida").innerHTML = "";
}
