let idade = 55
console.log(`Você tem ${idade} anos seu voto é`)
if (idade < 16) {
   console.log('Não vota')
} else if (/*idade >= 16 &&*/ idade < 18 || idade > 65) {
      console.log('Voto Opcional')
   } else {
      console.log('Voto obrigatório')
   }
