
function newStudent(name, age) {
  return { name, age }
}
let students = [
  newStudent("Fulano", 23),
  newStudent("Ciclano", 18),
  newStudent("Beltrano", 27),
  newStudent("Pé de Pano", 15)
]


let underAge = students.filter((student) => {
  return student.age < 21
})

console.log(underAge)