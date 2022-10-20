function verificar() {
   const data = new Date()
   const ano = data.getFullYear()
   const fano = document.getElementById('txtano')
   const res = document.querySelector('div#res')

   if (fano.value.lenght == 0 || Number(fano.value) > ano) {
      window.alert('Verifique os dados digitados!')
   } else {
      const fsex = document.getElementsByName('radsex')
      const idade = ano - Number(fano.value)
      let genero = ''
      const img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked) {
         genero = 'Homem'
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'img/foto-bebe-m.png')
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'img/foto-jovem-m.png')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'img/foto-adulto-m.png')
         } else {
            //idoso
            img.setAttribute('src', 'img/foto-idoso-m.png')
         }

      } else if (fsex[1].checked) {
         genero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'img/foto-bebe-f.png')
         } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'img/foto-jovem-f.png')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'img/foto-adulto-f.png')
         } else {
            //idoso
            img.setAttribute('src', 'img/foto-idoso-f.png')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `${genero} com ${idade} anos`
      res.appendChild(img)
   }
   




}