class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return `Infantil`
        }
        if(this.idade >= 12 && this.idade <= 13){
            return `Juvenil`
        }
        if(this.idade >= 14 && this.idade <= 15){
            return `Intermediário`
        }
        if(this.idade >= 16 && this.idade <= 30){
            return `Adulto`
        }
        else{return `Sem categoria`}}
    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc}
    calculaMediaValida(){
        let notasCertas = this.notas.sort().slice(1,4)
        let soma = notasCertas.reduce(function(total, atual){
        return total + atual
        })
        let media = soma/notasCertas.length
        return media}
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`}
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`}
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`}
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`}
    obtemCategoria(){
        return `Categoria: ${atleta.calculaCategoria()}`}
    obtemIMC(){
        return `IMC: ${atleta.calculaIMC()}`}
    obtemMediaValida(){
        return `Média válida: ${atleta.calculaMediaValida()}`
    }
    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`
    }
}
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    console.log(`${atleta.obtemNomeAtleta()}\n${atleta.obtemIdadeAtleta()}\n${atleta.obtemPesoAtleta()}\n${atleta.obtemAlturaAtleta()}\n${atleta.obtemNotasAtleta()}\n${atleta.obtemCategoria()}\n${atleta.obtemIMC()}\n${atleta.obtemMediaValida()}`)