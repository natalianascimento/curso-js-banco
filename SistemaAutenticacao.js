/*
Ser autenticável significa ter o método "autenticar".
POLIMORFISMO
 Duck Type -"If it walks like a duck and it quacks like a duck, then it must be a duck"
*/
export class SistemaAutenticacao{
    static login(usuario, senha){
        if(SistemaAutenticacao.verificaSePossuiMetodoAutenticarNaClasse(usuario)){
            return usuario.autenticar(senha);
        }
    return false;
    }

    static verificaSePossuiMetodoAutenticarNaClasse(classeDoUsuario){
        return "autenticar" in classeDoUsuario 
        && classeDoUsuario.autenticar instanceof Function;
    }
}