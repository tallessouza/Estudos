var elementos = []
var topo = -1
const MAX = 10

let push = num => {
  if (topo < MAX) {
    topo++
    elementos[topo] = num
  } else {
    console.log('Cheio')
  }
}

let isEmpty = () => topo == -1

let pop = () => {
  if (topo != -1) {
    let num = elementos[topo]
    topo--
    return num
  } else {
    console.log('Vazio')
  }
}

push(10)
push(10)
push(10)
console.log(elementos)
console.log(pop())
console.log(pop())
console.log(pop())
console.log(isEmpty())

var nDec = 10
var resto
console.log('entra')

while (nDec != 0) {
  resto = parseInt(nDec % 2)
  push(resto)
  console.log(resto)
  nDec = parseInt(nDec / 2)
}
console.log('sai')
while (!isEmpty()) {
  console.log(pop())
}
