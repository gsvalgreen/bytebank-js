/*
Ser autenticavel significa ter o metodo autenticar.

Duck typing (formato usado em linguagem interpretadas e fracamente tipadas) - aplicação do duck test: "Se ele anda como um pata e fala como um pato, então deve ser um pato"
*/
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // Verifica se o objeto implementa a "interface" autenticavel (classes que contenham o método autenticar)
    static ehAutenticavel(autenticavel) {
        // Propiedades (campos ou funções) são chaves dentro do objeto na memória
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function;
    }
}