// No JS cada script é um módulo, podendo exportar coisas (recursos) para ser usado em outros módulos.
export class Cliente {

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    // autenticar(senha){
    //     return this._senha == senha;
    // }

    autenticar(){
        return true;
    }

    constructor(nome, cpf, rg, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }
}