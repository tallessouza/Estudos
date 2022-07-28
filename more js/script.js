let users = ["Fulano", "Ciclano"]

function createUser(name) {
  let promise = new Promise(function (resolve, reject) {

    setTimeout(() => {
      users.push(name)
      let error = false
      if (!error) {
        resolve()
      } else {
        reject({ msg: "Erou" })
      }
    }, 1000)
  })
  return promise
}

const listUser = () => console.log(users)

async function run() {
  await createUser("Beltrano")
  listUser()
}

run()