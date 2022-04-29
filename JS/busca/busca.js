var valores = [5, 8, 10, 22, 45, 38, 22, 45, 38]

let busca = num => {
  for (let index = 0; index < valores.length; index++) {
    if (num == valores[index]) {
      return index
    }
  }
  return -1
}

let bin = num => {
  let ini = 0
  let fim = 6

  while (ini <= fim) {
    meio = parseInt((ini + fim) / 2)
    if (num == valores[meio]) {
      return meio
    } else {
      if (num > valores[meio]) {
        ini = meio + 1
      } else {
        fim = meio - 1
      }
      fim = meio - 1
    }
  }
  return -1
}
console.log(busca(10))
console.log(bin(22))
