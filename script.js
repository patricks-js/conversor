let res = document.querySelector(`div#res`)
let celsius = document.querySelector(`#celsius`)
let fahrenheit = document.querySelector(`#fahrenheit`)
let real = document.querySelector(`#real`)
let valConv = document.querySelector(`input#valConv`)
let calc = document.querySelector(`button#calc`)
let label = document.querySelector(`label#label`)
let cot = document.querySelector(`input#cot`)
let select = document.querySelector(`#select`)

celsius.addEventListener(`click`, calcCelsius)
fahrenheit.addEventListener(`click`, calcFahren)
real.addEventListener(`click`, calcReal)

function calcCelsius(){
    valConv.value = ``
    res.textContent = ``
    cot.style = `display: none;`
    valConv.disabled = false 
    calc.disabled = false
    label.textContent = `Digite o valor em Celsius`
    calc.addEventListener(`click`, calcular)
    function calcular() {
        if (valConv.value == ``) {
            res.innerHTML = `ERROR! Digite um valor válido.`
        }else {
            let result = ((9 * Number(valConv.value) + 160) / 5)
            res.innerHTML = `O resultado em Fahrenheit é: ${result.toFixed(2)} °F`
        }
    }
}

function calcFahren() {
    valConv.value = ``
    res.textContent = ``
    cot.style = `display: none;`
    valConv.disabled = false
    label.textContent = `Digite o valor em Fahrenheit`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        if (valConv.value == ``) {
            res.innerHTML = `ERROR! Digite um valor válido.`
            
        } else {
            let result = (((Number(valConv.value) - 32) * 5) / 9)
            res.innerHTML = `O resultado em Celsius é: ${result.toFixed(2)} °C`
        }
    }
}

function calcReal() {
    cot.value = ``
    valConv.value = ``
    res.textContent = ``
    cot.style = `display: block;`

    valConv.disabled = false
    label.textContent = `Digite o valor em Real`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    // let result = Number(valConv.value) / Number(cot.value)
    function calcular() {
        if (valConv.value == `` || cot.value == ``) {
            res.innerHTML = `ERROR! Digite um valor válido.`
        } else if (valConv.value < 0 || cot.value < 0){
            res.innerHTML = `ERROR! Digite um valor válido.`
        } else {
            let result = Number(valConv.value) / Number(cot.value)
            res.innerHTML = `O valor em Dólar é: U$ ${result.toFixed(2)}`
        }
    }
}