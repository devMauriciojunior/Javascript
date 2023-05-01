function contar() {
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let pas = document.getElementById('txtp')
   let res = document.getElementById('res')

   if (ini.value.length == 0 || fim.value.lenght == 0 || pas.value.lenght == 0) {
      alert ('Faltam dados')
   } else {
      res.innerHTML = 'Contando.. <br>'

      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pas.value)

      if (p <= 0) {
         alert('Passo inválido, considerando passo 1')
         p = 1
      }

      if (i < f) {
         // Contagem crescente
         let c = i
         while (c <= f) {
            res.innerHTML += `${c} \u{27A1}`
            c += p
         }
         /* for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{27A1} `
         }*/
      } else {
         // Contagem regressiva
         for (let c = i; c >= f; c -= p) {
            res.innerHTML = `${c} \u{27A1}`
         }
      }
   }
}