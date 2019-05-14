const baseURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
let key = '85OBLISYS5QEV0J0';
let url;

let symbol = document.querySelector('.search');
let searchForm = document.querySelector('form');
let submitBtn = document.getElementById('greenButton');
let stockData = document.getElementById('stockData');

searchForm.addEventListener('submit', submitSearch);
function submitSearch(e) {
  fetchResults(e);
}
function fetchResults(e) {
  e.preventDefault();
  url = baseURL + symbol.value + '&apikey=' + key;
  console.log(url);
  fetch(url).then(function (result) {
    return result.json();
  }).then(function (json) {
    console.log(json);
    displayResults(json);
  });
  }
  function displayResults(json) {
    let keys = Object.keys(json['Global Quote']);
    for(let i = 1; i < 5; i++) { 
      console.log(keys[i]);
      let p = document.createElement('p');
      let stocks = json['Global Quote'][keys[i]]; 
      // stocks = Number(stocks)/10;
      stockData.appendChild(p);
      p.innerHTML = '$' + stocks + '<br>';

    }
  }
