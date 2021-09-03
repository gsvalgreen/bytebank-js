import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    // Atributo estatico usado para a classe como um todo
    static numeroDeContas = 0;

     constructor(cliente, agencia){
         super(0,cliente,agencia);
        // *-- Atributos herdados de Conta --*
        // Criação e inicialização dos atributos de instancia da classe.
        // this.agencia = agencia;
        // this.cliente = cliente;
        // //O _ indica que o campo saldo é privado, porém é uma notação apenas informativa, o executor do javaScript não realiza nenhuma verificação/proteção de acesso.
        // // Existe uma "nova" definição de campo privado que utiliza o # como prefixo de nome, ele torna o campo verdadeiramente privado, evitando o acesso a ele durante a execução.
        // this._saldo = 0;
        // *-- Fim heranca de atributos da Conta --*
        // // Acesso ao atributo estatico da classe ContaCorrente
        ContaCorrente.numeroDeContas ++;
    }

// // // Bloco herdado de Conta
   

    // // Formato javaScript para definir getters e setters (acessores):
    // set cliente(novoCliente) {
    //     if (novoCliente instanceof Cliente) {
    //         this._cliente = novoCliente;
    //     }
    // }

    // get cliente() {
    //     return this._cliente;
    // }

    // get saldo() {
    //     return this._saldo;
    // }

    

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

    // depositar(valor) {
    //     if (valor <= 0) return;
    //     this._saldo += valor;
    // }

    // transferir(valor, conta) {
    //     const valorSacado = this.sacar(valor);
    //     conta.depositar(valorSacado);
    // }
}