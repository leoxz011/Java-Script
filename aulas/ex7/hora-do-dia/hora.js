function mudar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#d2b8b0'
        msg.innerHTML += 'Bom dia!'

    } else if (hora >= 12 && hora < 19) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#ac410f'
        msg.innerHTML += 'Boa Tarde!'

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#252830'
        msg.innerHTML += 'Boa Noite!'
    }
}