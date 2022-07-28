function convert() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "0voAgBxUN2eijK8YbASyzgn6gCyCANyR");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  let amount = document.getElementById("amount").value

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=USD&from=BRL&amount=${amount}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      document.getElementById("resultado").innerHTML = `${result.result} em Dólares`
    })
    .catch(error => console.log('error', error));


}