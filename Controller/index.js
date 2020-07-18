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
    let age = document.getElementById('input--age').value
    let name = document.getElementById('input--name').value
  
    if(table.hasChildNodes()){
        table.removeChild(table.lastChild)
    }
    let imc_text = document.createElement('h3')
    imc_text.classList.add('imc-category')
    let imc = (weight / (height * height)).toFixed(1)
    var imc_value = document.getElementById('imc-value')
    imc_value.innerText = imc
    if(height.length < 1|| weight.length < 1 || age.length < 1 || name.lengt < 1){
        alert('Numero Invalido')
        imc_value.innerText = ""
        information.removeChild(information.lastChild)

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

    let box = document.createElement('tbody')
    let createTr = document.createElement('tr').appendChild(box)
    let name_td = document.createElement('td')
    name_td.innerText = name
    let age_td = document.createElement('td')
    age_td.innerText = age
    let imc_td = document.createElement('td')
    imc_td.innerText = imc
    let height_td = document.createElement('td')
    height_td.innerText = height
    let weight_td = document.createElement('td')
    weight_td.innerText = weight
    createTr.appendChild(name_td)
    createTr.appendChild(age_td)
    createTr.appendChild(height_td)
    createTr.appendChild(weight_td)
    createTr.appendChild(imc_td)
    console.log(createTr)
    table.appendChild(imc_text)
    let information = document.getElementById('information')
    information.appendChild(box)
})
btn_clear.addEventListener('click', () => {
    let information = document.getElementById('information')
    document.getElementById('input--height').value = ""
    document.getElementById('input--weight').value = ""
    document.getElementById('input--name').value = ""
    document.getElementById('input--age').value = ""
    document.getElementById('imc-value').innerText = ""
    if(information.hasChildNodes()){
        information.removeChild(information.lastChild)
    }
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