function mudar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'

    } else if (hora >= 12 && hora < 19) {
        img.src = 'foto-tarde.png'

    } else {
        img.src = 'noite.png'
    }
}