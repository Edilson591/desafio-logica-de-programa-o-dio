function winOrLose(win,lose) {
    return win - lose 
}

const nivelRank = winOrLose


const ranket = [
    {state:[0 ,10], currentRank:"Ferro"},
    {state:[11 ,20], currentRank:"Bronze"},
    {state:[21 ,50], currentRank:"Prata"},
    {state:[51 ,80], currentRank:"Ouro"},
    {state:[81 ,90], currentRank:"Diamante"},
    {state:[91 ,100], currentRank:"Lendario"}
]

function loopRank(nivelRank,ranket){
    for (let i = 0; i < ranket.length; i++) {
        if(nivelRank >= ranket[i].state[0] && nivelRank <= ranket[i].state[1]){
            return `O Herói tem de saldo de ${nivelRank} está no nível de ${ranket[i].currentRank}` 
        }  
    }
    
    return `O Herói tem de saldo de ${nivelRank} está no nível de Imortal`
}




console.log(loopRank(100,ranket))