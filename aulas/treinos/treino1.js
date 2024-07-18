let idade = 15

if (idade <= 13 ){
    console.log(`Você tem ${idade}, você é uma criança.`)
} else if (idade > 13 && idade <= 18){
    console.log(`Você tem ${idade}, você é um adolecente.`)
} else if (idade > 18 && idade <= 50){
    console.log(`Você tem ${idade}, você é um adulto.`)
} else {
    console.log(`Você é tem ${idade}, você é um idoso.`)
}