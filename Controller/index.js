var btn_calc = document.getElementById('btn--calc')
var table = document.getElementById('table')
var btn_clear = document.getElementById('btn--clear')
var corpo = document.querySelector('body')
var box = document.getElementById('box')
var modal = document.getElementById('modal')
var btn_exit = document.querySelector('#btn--exit')
btn_calc.addEventListener('click', () => {
    let height = document.getElementById('input--height').value
    let weight = document.getElementById('input--weight').value
    if(table.hasChildNodes()){
        table.removeChild(table.lastChild)
    }
    let imc_text = document.createElement('h3')
    imc_text.classList.add('imc-category')
    let imc = (weight / (height * height)).toFixed(1)
    var imc_value = document.getElementById('imc-value')
    imc_value.innerText = imc
    if(height.length < 1|| weight.length < 1){
        alert('Numero Invalido')
        imc_value.innerText = ""
    }    
    if(imc < 18.5){
        imc_text.innerText = "Magreza"
    }
    else if(imc >= 18.5 && imc <= 24.9){
        imc_text.innerText = "Comum"
    }
    else if(imc >= 25 && imc <= 29.9){
        imc_text.innerText = "Obesidade I"
    }
    else if(imc >= 30 && imc <= 39.9){
        imc_text.innerText = "Obesidade II"
    }
    else if(imc > 40){
        imc_text.innerText = "Obesidade III"
    }
    table.appendChild(imc_text)
})
btn_clear.addEventListener('click', () => {
    document.getElementById('input--height').value = ""
    document.getElementById('input--weight').value = ""
    document.getElementById('imc-value').innerText = ""
    if(table.hasChildNodes){
        table.removeChild(table.lastChild)
    }
})
btn_exit.addEventListener('click', () => {
    box.classList.add('fecha')
    modal.classList.add('fecha')
})
corpo.addEventListener('click', () => {
    box.classList.add('fecha')
    modal.classList.add('fecha')
})