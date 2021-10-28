let res = document.querySelector(`div#res`)
let celsius = document.querySelector(`li#celsius`)
let fahrenheit = document.querySelector(`li#fahrenheit`)
let real = document.querySelector(`li#real`)
let valConv = document.querySelector(`input#valConv`)
let calc = document.querySelector(`button#calc`)
let label = document.querySelector(`label#label`)

celsius.addEventListener(`click`, calcCelsius)
fahrenheit.addEventListener(`click`, calcFahren)
real.addEventListener(`click`, calcReal)

function calcCelsius(){
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.innerHTML = `Celsius para Fahrenheit`
    valConv.disabled = false
    label.textContent = `Digite o valor em Celsius`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        res.innerHTML = `O resultado em Fahrenheit é: ${(9 * valConv + 160) / 5}`
    }
}

function calcFahren() {
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.innerHTML = `Fahrenheit para Celsius`
    valConv.disabled = false
    label.textContent = `Digite o valor em Fahrenheit`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        res.innerHTML = `O resultado em Celsius é: ${((valConv - 32) * 5) / 9}`
    }
}

function calcReal() {
    // let paragraph = document.createElement(`p`)
    // res.appendChild(paragraph)
    // paragraph.textContent = `Real para dólar`
    let cot = document.querySelector(`input#cot`)
    cot.style = `display: block;`

    valConv.disabled = false
    label.textContent = `Digite o valor em Real`
    calc.disabled = false
    calc.addEventListener(`click`, calcular)
    function calcular() {
        res.innerHTML = `O valor em Dólar é: ${Math.floor(valConv.value) / cot.value}`
    }
}


// 
//     let input = document.createElement(`input`)
//     let button = document.createElement(`button`)
//     let rest = document.createElement(`button`)

//     res.appendChild(input)
//     res.appendChild(button)
//     res.appendChild(rest)
//     button.textContent = `Calcular`
//     rest.textContent = `Resetar`
//     rest.addEventListener(`click`, restart)
//     function restart() {
//         res.reset()
//     }
// 
