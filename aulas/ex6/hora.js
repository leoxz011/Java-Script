let agora = new Date()
let hora = agora.getHours()
console.log(`Olá, agora são extamente ${hora}H.`)
if (hora < 12 && hora > 6){
    console.log('Bom Dia!!!')
}else if (hora < 19 && hora >= 12){
    console.log('Boa Tarde!!!')
}else if(hora >= 19){
    console.log('Boa Noite!!!')
}if (hora >= 0 && hora <= 5){
    console.log('Boa Madrugada!!!')
}