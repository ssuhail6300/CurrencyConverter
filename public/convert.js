const rupee=document.querySelector('.rupee');
const dollar=document.querySelector('.dollar');
const exchangeRate=document.querySelector('.exchange-rate');


const value=fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
.then(response=>response.json())
.then(json=>{
    exchangeRate.innerText=(json.rates.INR).toFixed(2);
});

const exchangeRateToUSD=()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then(response=>response.json())
    .then(json=>{
        dollar.value=((rupee.value/json.rates.INR)*10).toFixed(2);
    })
}

const exchangeRateToINR=()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then(response=>response.json())
    .then(json=>{
        rupee.value=((dollar.value *json.rates.INR)/10).toFixed(2);
    })
}

rupee.addEventListener('input',exchangeRateToUSD)
dollar.addEventListener('input',exchangeRateToINR)
