let num = [10, 6, 2, 78, 13] // O índice começa no 0

num[5] = 9  // Adiciona o 6 no indice 5
num.push(7) // Adiciona elemento na última posição
num.sort() // Coloca em ordem crescente os elementos

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(3)  // Procura o valor dentro do Array e retorna o indice que se encontra
if (pos == -1) {
   console.log('Valor não identificado')
} else {
   console.log(`O valor esta na posição ${pos}`)
}

