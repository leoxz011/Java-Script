let amigo = {nome:'Leo', sexo: 'M', peso: 68, engordar(p=0){this.peso += p}}

amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`)