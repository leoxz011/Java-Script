let valores = [5 , 8, 4, 9, 7]
valores.sort()
/*for (let pos = 0; pos < valores.length; pos++ ){
    console.log(`Posição ${pos} valor ${valores[pos]}`)
}*/

for (let pos in valores){
    console.log(`Posição ${pos} valor ${valores[pos]}`)
}