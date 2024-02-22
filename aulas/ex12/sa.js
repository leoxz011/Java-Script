const num = document.getElementById('numero');
const lista = document.getElementById('select');
const res = document.getElementById('resposta');
const valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.includes(Number(n));
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        const item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado.`;
        lista.appendChild(item);
    } else {
        alert('Número inválido ou já adicionado!');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length



        res.innerHTML =''
        res.innerHTML += `Ao todo, temos ${tot} valores cadastrados.`
    }

}
