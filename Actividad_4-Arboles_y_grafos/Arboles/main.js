class Nodo{
    constructor (valor){
        this.valor=valor;
        this.izquierda=null;
        this.derecha=null;
    }
}
class Arbol{
    constructor(){
        this.raiz=null;
    }
    agregarElemento(valor){
        let nuevo= new Nodo(valor);
        if(this.raiz==null){
            this.raiz=nuevo;
        }else{
            agregar(nuevo,this.raiz);
        }
    }
    agregar(nuevo, nodo) {
        console.log(`El nuevo valor es ${nuevo.valor} y el nodo raiz es ${nodo.valor}`);
        if ( nuevo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevo;
            } else {
                this.agregar(nuevo,nodo.izquierda);
            }
        }
        else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevo;
            } else {
                this.agregar(nuevo,nodo.derecha);
            }
        }
        
    }
    buscar(valor){

    }
    buscarElemento(valor,nodo){
        if(nodo!=null){
            if(valor<nodo.valor){
                return this.buscarElemento(valor,nodo.izquierda);
            }
            else{
                if(valor>nodo.valor){
                    return this.buscarElemento(valor,nodo.derecha);
                }
                else{
                    return nodo;
                }
            }
        }
    }
    enOrden(){
        let resultado=[];
        this.enOrdenAux(this.raiz,resultado);
        return resultado;
    }
    enOrdenAux(nodo, resultado){
        if(nodo != null){
            this.enOrdenAux(nodo.izquierda,resultado);
            resultado.push(nodo.valor);
            this.enOrdenAux(nodo.derecha,resultado);

        }
    }

    enPreOrden(){
    let resultado=[];
        this.enPreOrdenAux(this.raiz,resultado);
        return resultado;
    }
    enPreOrdenAux(nodo, resultado){
        if(nodo != null){
            resultado.push(nodo.valor);
            this.enPreOrdenAux(nodo.izquierda,resultado);
            this.enPreOrdenAux(nodo.derecha,resultado);

        }
    }
    enPosOrden(){
        let resultado=[];
            this.enPosOrdenAux(this.raiz,resultado);
            return resultado;
        }
        enPosOrdenAux(nodo, resultado){
            if(nodo != null){
                this.enPosOrdenAux(nodo.izquierda,resultado);
                this.enPosOrdenAux(nodo.derecha,resultado);
                resultado.push(nodo.valor);
    
            }
        }

}
let arbol=new Arbol();
arbol.agregarElemento(15);
arbol.agregarElemento(20);
arbol.agregarElemento(50);
arbol.agregarElemento(3);
arbol.agregarElemento(10);


console.log(arbol.enPreOrden);