function verificar() {
    let atual = new Date()
    let ano = atual.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value.length > ano) {
        alert('Verifique se os dados estão corretos, e tente novamente.')
    } else {
        let fsexo = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade <= 13) {
                //menino
                img.setAttribute('src', 'criança-menino.png')
            } else if (idade < 20) {
                //adolecente
                img.setAttribute('src', 'adolecente-homem.png')
            } else if (idade < 50) {
                //Homem
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }


        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade < 14) {
                //menina
                img.setAttribute('src', 'criança-menina.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'adolecente-mulher.png')
                //adolecente
            } else if (idade < 50) {
                //mulher
                img.setAttribute('src', 'mulher.png') 
            } else {
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }

}