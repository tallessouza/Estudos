
function newStudent(name, age) {
  return { name, age }
}
let students = [
  newStudent("Fulano", 23),
  newStudent("Ciclano", 18),
  newStudent("Beltrano", 27),
  newStudent("Pé de Pano", 15)
]


console.log(students.map((student) => {
  return `${student.name} has ${student.age} years old`
  // Alterar o valor aqui altera o valor do array original se não retornar um obj novo, passagem por referência (não primitivos) resolvido com spread

}))