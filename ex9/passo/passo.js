function contar() {
    let ini = document.getElementById('inicio')
    let final = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || final.value.length == 0 || pass.value.length == 0) {
        alert('[Erro] dados faltando')
        res.innerHTML += 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(final.value)
        let p = Number(pass.value)
        if (p <= 0){
            alert('Passo invalido, considerando Passo como 1!')
            p = 1
        }
        
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}