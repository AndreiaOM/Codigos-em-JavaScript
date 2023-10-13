//Dados de entrada:
var dataBanho = '03/08/2018'; //Deve ser em formato dd/mm/aaa
var quantCaesP = 3;
var quantCaesG = 5;

//Código construído:
var data = new Date(dataBanho); //0=Domingo, 1=Segunda, 2=Terça, 3=Quarta, 4=Quinta, 5=Sexta, 6=Sábado

var caninoFeliz = {
    nome: 'Meu Canino Feliz',
    distancia: 2,
    totalSemana: 20.00*quantCaesP + 40.00*quantCaesG,
    totalFds: 20.00*1.2*quantCaesP + 40.00*1.2*quantCaesG
}

var vaiRex = {
    nome: 'Vai Rex',
    distancia: 1.7,
    totalSemana: 15.00*quantCaesP + 50.00*quantCaesG,
    totalFds: 20.00*quantCaesP + 55.00*quantCaesG
}

var chowChawgas = {
    nome: 'ChowChawgas',
    distancia: 0.8,
    totalSemana: 30.00*quantCaesP + 45.00*quantCaesG,
    totalFds: 30.00*quantCaesP + 45.00*quantCaesG
}

var menorPreco = Infinity;
var menorDistancia = Infinity;
var canil = [caninoFeliz, vaiRex, chowChawgas];
var melhorCanil = null;

if (data == 0 || data == 6) {

    for (var i = 0; i < canil.length; i++) {

        if (canil[i].totalFds == menorPreco && canil[i].distancia < menorDistancia) {
            menorPreco = canil[i].totalFds;
            melhorCanil = canil[i].nome;
            menorDistancia = canil[i].distancia;

        } else if (canil[i].totalFds < menorPreco) {
            menorPreco = canil[i].totalFds;
            melhorCanil = canil[i].nome;
            menorDistancia = canil[i].distancia;
        }
    }

} else {

    for (var i = 0; i < canil.length; i++) {

        if (canil[i].totalSemana == menorPreco && canil[i].distancia < menorDistancia) {
            menorPreco = canil[i].totalSemana;
            melhorCanil = canil[i].nome;
            menorDistancia = canil[i].distancia;

        } else if (canil[i].totalSemana < menorPreco) {
            menorPreco = canil[i].totalSemana;
            melhorCanil = canil[i].nome;
            menorDistancia = canil[i].distancia;
        }
    }
}

console.log(melhorCanil + ' é o melhor canil com preço total dos banhos de R$ ' + menorPreco + '.');