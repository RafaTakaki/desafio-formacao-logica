console.log("Desafio Classificador de nivel")
console.log("Digite o nome do seu Herói: ")

//substituir "teste" pelo nome
var nomeDoHeroi = "Teste";

//substituir o valor da xp
var xp = 0;

var nivelDoHeroi;


if (xp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xp <= 2000){
    nivelDoHeroi = "bronze";
} else if (xp <= 5000){
    nivelDoHeroi = "prata";
} else if (xp <= 7000){
    nivelDoHeroi = "ouro";
} else if (xp <= 8000){
    nivelDoHeroi = "platina";
} else if (xp <= 9000){
    nivelDoHeroi = "Ascendente";
} else if (xp <= 10000){
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);