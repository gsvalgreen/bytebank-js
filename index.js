// Importo o recurso Cliente (classe) do módulo Cliente.js
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);
const cliente2 = new Cliente("Alice", 88822233309, 224445552);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);
console.log(contaPoupanca);
console.log(conta1);
const conta2 = new ContaSalario(cliente2);
conta2.depositar(100);
conta2.sacar(10);
console.log(conta2);
// console.log(conta2.cliente.nome);
// let valor = 200;
// conta1.transferir(valor, conta2);

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);
// null != undefined
// null é um valor atribuido explicitamente, undefined é um nulo do sistemico, uma referencia a um valor não definido ou inexistente.

// console.log(conta2);
// console.log(ContaCorrente.numeroDeContas)
//  TypeError: Cannot set property saldo of #<ContaCorrente> which has only a getter
//  at file:///Users/gustavo.valverde/Documents/bytebank/index.js:36:28
// contaCorrenteRicardo.saldo = 3000;

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 75448123651);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, 112225558, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);