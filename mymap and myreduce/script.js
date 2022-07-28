
function newStudent(name, age) {
  return { name, age }
}
let students = [
  newStudent("Fulano", 23),
  newStudent("Ciclano", 18),
  newStudent("Beltrano", 27),
  newStudent("Pé de Pano", 15)
]

function reduceCallback(total, student) {
  return total + student.age
}

function mapCallback(student) {
  return `${student.name} has ${student.age} years old`
}

function myMap(callback, array) {
  let newArray = []
  for (let i of array) {
    newArray.push(callback(i))
  }
  return newArray
}

function myReduce(callback, initialValue, array) {
  let result = 0
  let total = 0
  for (let i of array) {
    result += callback(total, i)
  }
  return initialValue + result
}


console.log('myMap')
console.log(myMap(mapCallback, students))
console.log('Map')
console.log(students.map(mapCallback))

console.log('myReduce')
console.log(students.reduce(reduceCallback, 110))
console.log('Reduce')
console.log(myReduce(reduceCallback, 110, students))