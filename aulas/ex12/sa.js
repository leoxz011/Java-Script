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
        res.innerHTML = ''
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
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }


        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `A média entre os valores é ${media}`
    }

}
