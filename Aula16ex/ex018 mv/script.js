let num = document.getElementById('txtn')
let res = document.getElementById('res')
let textos = document.getElementById('textos')
let valores = []

function isNumero (n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

function inList (n, l) {
   if (l.indexOf(Number(n)) != -1) {
      return true
   } else {
      return false
   }
} 

function adicionar() {
   if (isNumero(num.value) && !inList(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Número ${num.value} adicionado`
      res.appendChild(item)
      textos.innerHTML = ''
   } else {
      alert('NÚMERO INVÁLIDO OU JÁ ENCONTRADO NA LISTA')
   }

   num.value = ''
   num.focus()
}

function finalizar() {
   if (valores.length == 0) {
      alert('ADICIONE VALORES')
   } else {
      let total = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media = 0 

      for (let pos in valores) {
         soma += valores[pos]

         if (valores[pos] > maior) {
            maior = valores[pos]
         }
         if (valores[pos] < menor) {
            menor = valores[pos]
         }
      }
      media = soma / total

      textos.innerHTML += `<p>Temos ${total} números cadastrados.</p>`
      textos.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
      textos.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
      textos.innerHTML += `<p>A soma dos valores é igual a ${soma}.</p>`
      textos.innerHTML += `<p>A média do valores é ${media.toFixed(2)}.</p>`
   }
}



