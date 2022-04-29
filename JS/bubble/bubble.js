var valores = [5, 8, 10, 22, 45, 38, 22, 45, 38]

let bubbleSort = valores => {
  let len = valores.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (valores[j] > valores[j + 1]) {
        let tmp = valores[j]
        valores[j] = valores[j + 1]
        valores[j + 1] = tmp
      }
    }
  }
  return valores
}

console.log(bubbleSort(valores))
