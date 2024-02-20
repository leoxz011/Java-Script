let num = document.getElementById('numero')
let lista = document.getElementById('select')
let res = document.getElementById('resposta')
let valores = []


function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número invalido ou já adicionado!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
    alert('Adicionar valores antes de finalizar')
 } else {
    let tot = valores.length

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados.</p>`
 }
}