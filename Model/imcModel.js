class imcModel{
    constructor(nome, idade, altura, peso){
        this._peso = peso
        this._nome = nome
        this._idade = idade 
        this._altura = altura
    }
    get nome(){
        return this._nome
    }
    get idade(){
        return this._idade
    }
    get altura(){
        return this._altura
    }
    get peso(){
        return this._peso
    }
    get imc(){
        var total = (this._peso / (this._altura * this._altura)).toFixed(1)
        return total
    }
    verificaAprovacao(){
        if(this.imc > 18.5 && this.imc < 24.9){
            return "aprovado"
        }
        else{
            return "reprovado"
        }
    }
}