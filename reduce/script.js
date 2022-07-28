
function newStudent(name, age) {
  return { name, age }
}
let students = [
  newStudent("Fulano", 23),
  newStudent("Ciclano", 18),
  newStudent("Beltrano", 27),
  newStudent("Pé de Pano", 15)
]

function classAge(total, student) {
  return total + student.age
}

console.log(students.reduce((total, student) => { return total + student.age }, 0))