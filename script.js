let res = document.querySelector(`div#res`)
let celsius = document.querySelector(`li#celsius`)
let fahrenheit = document.querySelector(`li#fahrenheit`)
let real = document.querySelector(`li#real`)
let valConv = document.querySelector(`input#valConv`)
let calc = document.querySelector(`button#calc`)
let label = document.querySelector(`label#label`)
let cot = document.querySelector(`input#cot`)

celsius.addEventListener(`click`, calcCelsius)
fahrenheit.addEventListener(`click`, calcFahren)
real.addEventListener(`click`, calcReal)

function calcCelsius(){
    valConv.value = ``
    res.textContent = ``
    cot.style = `display: none;`
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.innerHTML = `Celsius para Fahrenheit`
    valConv.disabled = false
    label.textContent = `Digite o valor em Celsius`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        let result = ((9 * Number(valConv.value) + 160) / 5)
        res.innerHTML = `O resultado em Fahrenheit é: ${result.toFixed(2)} °F`
    }
}

function calcFahren() {
    valConv.value = ``
    res.textContent = ``
    cot.style = `display: none;`
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.innerHTML = `Fahrenheit para Celsius`
    valConv.disabled = false
    label.textContent = `Digite o valor em Fahrenheit`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        let result = (((Number(valConv.value) - 32) * 5) / 9)
        res.innerHTML = `O resultado em Celsius é: ${result.toFixed(2)} °C`
    }
}

function calcReal() {
    valConv.value = ``
    res.textContent = ``
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.textContent = `Real para dólar`
    cot.style = `display: block;`

    valConv.disabled = false
    label.textContent = `Digite o valor em Real`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    // let result = Number(valConv.value) / Number(cot.value)
    function calcular() {
        let result = Number(valConv.value) / Number(cot.value)
        res.innerHTML = `O valor em Dólar é: U$ ${result.toFixed(2)}`
    }
}