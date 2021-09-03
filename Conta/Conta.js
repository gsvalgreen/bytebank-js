export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        // O executor mantém o tipo do primeiro construtor chamado, 
        //nesse caso podemos descobrir qual das classes da hierarquia foi instanciada
        if(this.constructor == Conta) throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente");
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error(`O método Sacar da conta é abstrato: não será possível sacar o valor desejado ${valor}`)
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo < valor) return 0;
        this._saldo -= valor;
        return valorSacado;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}