**JavaScript**

 - 1 sinal de = significa 'recebe'
 - 2 sinais de == significa 'igual'
 - sinal de + significa 'concatenação'

## Identificadores:
 - Podem começar com letra, $ ou _.
 - Não podem começar com numeros.
 - É possivel usar letras e números.
 - É possivel usar simbolos e acentos.
 - Não podem conter espaços (utiliza-se _).
 - Não podem ser palavras reservadas (palavras que o JS usa como funções ou).

**Dicas:**
 - Letras Maiúsculas e Minúsculas fazem diferença.
 - Escolher nomes coerentes para as Variavéis.

## O que são Variavéis?
   Variável é um espaço reservado na memória do computador que serve para armazenar um determinado tipo de informação.

## Variavéis: var, let e const.
   Strings = conjunto de caracteres com numeros, traços e pontos.
   Strings podem usar 3 'aspas': "string1", 'string2' e `string3`.

## Tipos de Dados:
**Tipos primitivos primordiais:**
   - Number: 5 18 -12 3.14 -56.3 0.6
   - Strings: 'Google' "JavaScript" `Junioor`
   - Boolean: true false

## Operadores:
**Tipos de operadores:**
   - Aritméticos
   - Atribuição
   - relacionais
   - lógicos
   - ternarios

## Operadores Aritméticos:
  - +  Somar   
  - -  Subtrair
  - *  Multiplicação 
  - /  divisão
  - %  Resto de uma divisão 
  - ** Potencia do primeiro numero elevado ao segundo

  - 5 + 2 = 7
  - 5 - 2 = 3
  - 5 * 2 = 10
  - 5 / 2 = 2.5
  - 5 % 2 = 1
  - 5 ** 2 = 25

## Ordem de precedência dos Operadores Aritméticos:
   1. ()
   2. **
   3. * / %
   4. + -

## Auto Atribuições:
   **var n = 3**
    - n = n + 4  | ele vai pegar ele mesmo e somar 4
    - n = n - 5  | ele vai pegar ele mesmo e subtrair 5
    - n = n * 4  | ele vai pegar ele mesmo e multiplicar por 4
    - n = n / 2  | ele vai pegar ele mesmo e dividir por 2
    - n = n ** 2 | ele vai pegar ele mesmo e elevar a potência de 2
    - n = n % 5  | ele vai pegar ele mesmo dividir por 5 e dar o resto

## Auto Atribuições: **Forma Simplificada:**
   **var n = 3**
     - n += 4 
     - n -= 2
     - n *= 5
     - n /= 2
     - n **= 2
     - n %= 5
   
   **outra simplificação:**
     - n++  é a mesma coisa que n = n + 1 ou n += 1
     - n--  é a mesma coisa que n = n - 1 ou n -= 1
     - ++n  ele vai somar antes
     - --n  ele vai diminuir antes

## Operadores relacionais
  - > maior que
  - < menor que 
  - >= maior ou igual
  - <= menor ou igual
  - == igual '=== igualdade estrita' '!== desigualdade estrita'
  - != diferente

## Operadores Logicos
 -  **Ordem de precedência dos Operadores Logicos:**
    - ! negação 'não logico'
    - && conjunção 'e logico'
    - || disjunção 'ou logico'

## Operadores ternarios
 -  ? 
 -  :
 -  'teste logico ? true : false'

## DOM == Document Object Model
 -  **Utilizando DOM => Selecionando objetos**
     - por Marca → getElementsByTagName()
     - por ID → getElementsById()
     - por Nome → getElementsByName()
     - por Classe → getElementsByClassName()
     - por Seletor → querrySelector() querrySelectorAll()

## Funções 
```
   function 'nome da função'(parâmetro){
      'códigos da função'
   }
```

## Condições 
```
   if (condição) {   | 'condição simples'
         'true'      |
   }  else {         | 'condição composta'
         'false'
   }
```
```
   if (condição) {   | 'condição aninhada'
         'bloco1'
   }  else {
         if (condição) {
            'bloco2'
         } else {
            'bloco3'
         }
   }
```
```
switch (expressão) {  | 'condição múltipla'
   case valor1:

         **Break**
   case valor2: 

         **Break**
   case valor3: 

         **Break**
   default:

   
}
```

### Repetições
Executa a condição primeiro e depois executa o bloco
```
While (condição) {
   'bloco'
}
```
Executa o bloco primeiro e depois executa a condição
```
do {
   'bloco'
} while (condição)
```
```
for (inicio; teste; incremento) {
   'bloco'
}
```

## Arrays

var a = [car, car, car]