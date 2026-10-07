// COTAÇÕES DE MOEDAS DO DIA
const USD = 4.98
const EUR = 5.61
const GBP = 6.61

// OBTENDO OS ELEMENTOS
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('footer')
const description = document.getElementById('description')
const result = document.getElementById('result')


// MANIPULAÇÃO DO INPUT AMOUNT (aceita só números)
amount.addEventListener('input', () => {
    console.log(amount.value)
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// CAPTAÇÃO DO EVENTO DE ENVIAR
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }
}

// FUNÇÃO PARA CONVERTER VALORES
function convertCurrency(amount, price, symbol) {
 console.log(amount, price, symbol)
 try{

//EXIBIR A COTAÇÃO DA MOEDA
description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`


//CALCULAR TOTAL
let total = amount * price
result.textContent = `${formatCurrencyBRL(total).replace('R$', '').trim()} Reais`

    //MOSTRAR O RESULTADO
footer.classList.add("show-result")

 } catch (error){
    console.error(error)
 }
}

//FORMATAÇÃO PARA REAL BR
function formatCurrencyBRL(value) {
    return Number(value) .toLocaleString('pt-BR',{
        style: 'currency',
        currency:'BRL'
    })
}