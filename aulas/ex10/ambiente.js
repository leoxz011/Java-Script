let num = [5, 8, 6, 9, 1]
num.push(2)
num[6] = 0
console.log(`O vetor tem ${num.length} valores.`)
console.log(`Os valores são ${num.sort()}`)
console.log(`O primeiro valor é ${num[0]} e o ultimo é ${num[6]}`)
let pos = num.indexOf(9)
if(pos == 0){
    console.log('Valor não encontrado.')
} else {
    console.log(`a posição do valor é ${pos}`)
}
