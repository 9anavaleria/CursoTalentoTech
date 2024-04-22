/*const frutas=['manzana','pera','uva','sandia'];

console.log(frutas);
console.log(frutas.length); //cantidad de elementos
frutas.push('platano'); //adicionar
console.log(frutas);
frutas.pop(); // borrar el último elemento
console.log(frutas);
frutas.shift(); //borra el primer elemento
console.log(frutas);
frutas.unshift('maracuya'); //adiciona elemento en la primera posición
console.log(frutas);
frutas.sort(); //ordena los elementos
console.log(frutas);
frutas.reverse(); //ordena los elementos en sentido inverso
console.log(frutas);
frutas.splice(1,0,'banano','coco'); //Permite borrar, replazar o adicionar elementos el cualquier posición
console.log(frutas);
const frutas2=frutas.toSpliced(1,2);
console.log(frutas2);

let elemento=frutas.pop(); //selecciona y muestra solo el ultimo elemento
console.log(elemento);
let elemento2=frutas.shift(); //selecciona y muestra solo el primer elemento
console.log(elemento2);

let cadena = frutas.toString(); //convierte el arreglo en Strig
console.log(cadena);
let cadena2 = frutas.join(' / ');   //convierte el arreglo en Strig y separa los elementos con el simbolo que se necesite
console.log(cadena2);
let cadena3 = frutas.concat(frutas2); //concatenar 2 arreglos
console.log(cadena3);

let cadena4=frutas.slice(2,5); //eliminar por intervalos
console.log(cadena4);

const persona={nombre: 'juan', apellido:'montes', edad:21};
console.log(persona.edad)
// ---------------------------
// LISTAS ENLAZADAS
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;

function agregarElemento(valor){
    let nuevo = new Nodo(valor);
    nuevo.siguiente=primero;
    primero=nuevo;
}

function mostrar(){
    let actual=primero;
    while(actual!=null){
        console.log(actual.valor);
        actual=actual.siguiente;
    }
}

function eliminar(){
    primero = primero.siguiente;
}

const lista = new Nodo(1);
agregarElemento(15);
agregarElemento(85);
agregarElemento(65);
agregarElemento(35);
agregarElemento(25);
mostrar();
console.log(primero);
//---------------- 
// PILAS

class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;

class Pilas{
    constructor(){
        this.tope=null;
    }
    agregarElementoPila(valor){
        let nuevo = new Nodo(valor);
        nuevo.siguiente = this.tope;
        this.tope = nuevo; 
    }
    imprimir(){
        let actual=this.tope;
        while(actual!=null){
            console.log(actual.valor);
            actual=actual.siguiente;
        }  
    }
}

let pila = new Pilas();
pila.agregarElementoPila(5);
pila.agregarElementoPila(10);
pila.agregarElementoPila(15);
pila.imprimir();
console.log(pila);
//-------------------
// COLA
class Cola{
    constructor(){
        this.cola = [];
    }
    agregarElementoCola(valor){
        this.cola.push(valor);
    }
    eliminarElementoCola(){
        return this.cola.shift();
    }
    imprimir(){
        console.log(this.cola);
    }
}

let cola = new Cola();
cola.agregarElementoCola(5);
cola.agregarElementoCola(10);
cola.agregarElementoCola(20);
cola.imprimir();
*/