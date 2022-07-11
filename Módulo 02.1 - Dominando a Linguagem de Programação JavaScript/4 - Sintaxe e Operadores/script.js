function insiraNumero() {
  var numero1 = Number(prompt('Insira o primeiro número'))
  var numero2 = Number(prompt('Insira o segundo número'))

  var soma = numero1 + numero2

  var maiorQueDez = false
  var menorQueVinte = false
  var iguais = false

  soma > 10 ? (maiorQueDez = true) : (maiorQueDez = false)
  soma < 20 ? (menorQueVinte = true) : (menorQueVinte = false)

  numero1 == numero2 ? (iguais = true) : (iguais = false)

  alert(
    `Os números ${numero1} e ${numero2}` +
      (iguais ? '' : ' não') +
      ` são iguais. Sua soma é ${soma}, que é ` +
      (maiorQueDez ? 'maior' : 'menor') +
      ' que 10 e ' +
      (menorQueVinte ? 'menor' : 'maior') +
      ' que 20.'
  )
}

insiraNumero()
