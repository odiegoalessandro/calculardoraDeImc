class imcView{
    constructor(tabela){
        this._tabela = tabela
    }
    mostraNaTela(dadosParaMostrar){
        console.log(dadosParaMostrar)
        let aluno = this.criaTr(dadosParaMostrar)
        console.log(aluno)
        this._tabela.appendChild(aluno)
    }
    criaTr(linha){
        var criaLinha = document.createElement('tr')
        criaLinha.appendChild(this.criaTd(linha.nome, "nome"))
        criaLinha.appendChild(this.criaTd(linha.idade, "idade"))
        criaLinha.appendChild(this.criaTd(linha.altura, "altura"))
        criaLinha.appendChild(this.criaTd(linha.peso, "peso"))
        criaLinha.appendChild(this.criaTd(linha.imc, linha.verificaAprovacao()))
        criaLinha.appendChild(this.criaTd(linha.verificaCategoria(), linha.verificaCategoria()))
        return criaLinha
    }
    criaTd(slot, classe){
        var criarColuna = document.createElement('td')
        criarColuna.setAttribute("class", classe)
        criarColuna.textContent = slot
        return criarColuna
    }
    update(informacao){
        this.mostraNaTela(informacao)
    }
}