function carregar () {
   const msg = window.document.getElementById('msg')
   const img = window.document.getElementById('imagem')
   const data = new Date()
   const hora = data.getHours()
   const minuto = data.getMinutes()
   const segun = data.getSeconds()
   const relogio = data.toLocaleTimeString()
   //msg.innerHTML = `Agora são ${hora}:${minuto}:${segun} horas.`
   msg.innerHTML = `Agora são ${relogio}.`

   if (minuto < 10) {
      minuto = "0" + minuto
   }
   
   if (hora >= 0 && hora < 12) {
      // Bom dia
      img.src = 'img/manha.jpg'
      document.body.style.background = '#6aacac'
   } else if (hora >= 12 && hora <= 18) {
      // Boa tarde
      img.src = 'img/tarde.jpg'
      document.body.style.background = '#F3A169'
   } else {
      // Boa noite
      img.src = 'img/noite.jpg'
      document.body.style.background = '#02588d'
   }

   setInterval (carregar, 1000)
}