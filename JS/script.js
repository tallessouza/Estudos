let array = []
for (let index = 0; index < 10; index++) {
  array.push(index)
}

array.forEach(element => {
  console.log(element)
})

array = [4, 2, 1, 0, 6, 3, 9, 7, 8, 5]

array.sort((a, b) => a - b)
console.log(array)
