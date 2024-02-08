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
            if(idade == 0 && idade <= 13) {
                //menino
                img.setAttribute('src', 'criança-menino.png')
            } else if(idade < 20){
                //adolecente
                
            } else if(idade < 50){
                //Homem
    
            }else{
                //idoso
    
            }
        
  
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if(idade == 0 && idade < 14) {
                //menina
            } else if(idade < 20){
                //adolecente
            } else if(idade < 50){
                //mulher
            }else{
                //idosa
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}