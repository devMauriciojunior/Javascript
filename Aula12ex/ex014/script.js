function carregar () {
   const msg = window.document.getElementById('msg')
   const img = window.document.getElementById('imagem')
   const data = new Date()
   const hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`

   if (hora >= 0 && hora < 12) {
      // Bom dia
      img.src = 'img/manha.jpg'
      document.body.style.background = '#A7D9D9'
   } else if (hora >= 12 && hora <= 18) {
      // Boa tarde
      img.src = 'img/tarde.jpg'
      document.body.style.background = '#F3A169'
   } else {
      // Boa noite
      img.src = 'img/noite.jpg'
      document.body.style.background = '#0367A6'
   }
}

