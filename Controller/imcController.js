class imcController{
    constructor(){
        this._peso = document.getElementById('input--weight')
        this._altura = document.getElementById('input--height')
        this._nome = document.getElementById('input--name')
        this._idade = document.getElementById('input--age')
        this._corpo_tabela = document.getElementById('corpo_tabela')
        this._view = new imcView(this._corpo_tabela)
        this._form = document.getElementById('form')
        this._imc_value = document.getElementById('imc--value')
        this._imc_view = document.getElementById('imc--value')
    }
    criaImc(){
        return new imcModel(this._nome.value, this._idade.value, this._altura.value, this._peso.value, this._imc_view)
    }
    enviarParaView(event){
        event.preventDefault()
        this._view.update(this.criaImc())
        this._form.reset()
    }
    reseta(event){
        event.preventDefault()
        this._form.reset()
    }
}