let iAdult = document.getElementById("adultos")
let iCria = document.getElementById("criancas")
let iDura = document.getElementById("duracao")

let result = document.getElementById("resultado")

function calcular() {
  let adultos = iAdult.value
  let criancas = iCria.value
  let duracao = iDura.value

  let qtdCarne = adultos * carnePP(duracao) + (carnePP(duracao) * criancas)
  let qtdCerv = adultos * cervPP(duracao)
  let qtdBeb = adultos * bebPP(duracao) + (bebPP(duracao) * criancas)

  result.innerHTML = `<p> ${qtdCarne / 1000} Kg de Carne </p>`
  result.innerHTML += `<p> ${Math.ceil(qtdCerv / 350)} Latas de Carne </p>`
  result.innerHTML += `<p> ${Math.ceil(qtdBeb / 2000)}Pet de Bebidas </p>`

  result.getContext
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}
function cervPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}
function bebPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}