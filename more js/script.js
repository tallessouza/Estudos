let users = ["Fulano", "Ciclano"]

function createUser(name, callback) {

  setTimeout(() => {
    users.push(name)
    callback()
  }, 1000)
}

const listUser = () => console.log(users)

createUser("Beltrano", listUser)