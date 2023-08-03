// Arrays
let ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ArrayABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let ArrayText = ['Palavras', 'Textos', 'Numeros', 'Silaba', 'Alfabeto']
let ArrayNovo = [...ArrayABC, ...ArrayNumber] // spread operator, chama os arrays
// console.log(ArrayNovo)
// console.table(ArrayNumber);

// ----------------------------------

ArrayNumber.shift(); // Remove o primeiro valor do Array
ArrayNumber.pop(); // Remove o ultimo valor do Array
ArrayNumber.unshift(0); // Adiciona o valor Zero no inicio do Array
ArrayNumber.push(11); // Adiciona o valor Onze no fim do Array
// console.table(ArrayNumber);

let ArrayNT = ArrayNumber.concat(ArrayABC); // Concatena os dois Arrays
// console.log(ArrayNT)

let ArrayFilter = ArrayText.filter((texto) => texto.length > 7); // Cria um novo Array com base no filtro aplicado
// console.log(ArrayFilter)

let ArraySoNumber = ArrayNovo.filter((number) => typeof number === "number"); // Filtra o Array retornando apenas por um tipo de dado
// console.table(ArraySoNumber)

let ArrayMap = ArrayNumber.map((number) => number * 2); // Cria um novo Array passando a função a cada elemento
// console.log(ArrayMap)

let ArrayRaizQ = ArrayNumber.map((x) => Math.sqrt(x)); // Cria um Array que passa uma função de Raiz quadrada nos elementos
// console.log(ArrayRaizQ)

let Items= [];
ArrayText.forEach((texto) => Items.push(texto)); // Passa a função por cada item do ArrayText e adiciona no Array Items
// console.log(Items)

ArrayABC.splice(10, 0, "K") // No ArrayABC adiciona o "K" no indice 10
ArrayABC.splice(10, 1, "L") // No ArrayABC adiciona o "L" no indice 10 e remove o "K"
// console.log(ArrayABC)

let ArrayReduce = ArrayNumber.reduce((Acumulador, ValorAtual) => Acumulador + ValorAtual) // Cria um novo Array passando por cada item e somando com o valor anterior
console.log(ArrayReduce)