let inpn = document.getElementById('txtn')
let res = document.getElementById('res')
let textos = document.getElementById('textos')
let valores = []

function adicionar() {
   if (inpn.value == 0) {
      alert('DIGITE UM NÚMERO')
   } else if (inpn.value >= 101) {
      alert ('APENAS NÚMEROS DE 1 ATÉ 100')
   } else {
      let valor = (inpn.value)
      let elemento = document.createElement('option')
      elemento.text = `Número ${valor} adicionado`
      res.appendChild(elemento)
   }
}

function finalizar() {
   if (inpn.value == 0) {
      alert('DIGITE UM NÚMERO')
   }
}



