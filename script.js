function fatorial(n) {
  let resultado = 1;
  let detalhes = "";

  for (let i = 1; i <= n; i++) {
    resultado *= i;
    detalhes += i + (i < n ? " x " : "");
  }

  console.log(`${detalhes} = ${resultado}`);
}

function tabuada(n) {
  console.log(`\nTabuada de ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function primo(n) {
  if (n < 2) {
    console.log(`${n} NÃO é primo`);
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${n} NÃO é primo (divisível por ${i})`);
      return;
    }
  }
  console.log(`${n} É PRIMO!`);
}

function menu() {
  let opcao;
  do {
    opcao = prompt(
      "=== MENU ===\n" +
      "A - Calcular fatorial\n" +
      "B - Mostrar tabuada\n" +
      "C - Verificar se é primo\n" +
      "S - Sair\n\n" +
      "Escolha uma opção:"
    ).toUpperCase();

    switch (opcao) {
      case "A":
        let numF = parseInt(prompt("Digite um número para calcular o fatorial:"));
        fatorial(numF);
        break;

      case "B":
        let numT = parseInt(prompt("Digite um número para ver a tabuada:"));
        tabuada(numT);
        break;

      case "C":
        let numP = parseInt(prompt("Digite um número para verificar se é primo:"));
        primo(numP);
        break;

      case "S":
        console.log("Saindo... Até logo!");
        break;

      default:
        console.log("Opção inválida!");
    }
  } while (opcao !== "S");
}

menu();