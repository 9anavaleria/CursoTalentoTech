class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.adyacentes = [];
        this.valoresAristas = [];
    }
}

class Grafo {
    constructor() {
        this.nodos = [];
    }
    agregarNodo(valor) {
        let nodo = new Nodo(valor);
        this.nodos.push(nodo);
    }
    agregarArista(valor1, valor2, valorArista) {
        let nodo1 = this.buscarNodo(valor1);
        let nodo2 = this.buscarNodo(valor2);
        nodo1.adyacentes.push(nodo2);
        nodo2.adyacentes.push(nodo1);
        nodo1.valoresAristas.push(valorArista);
        nodo2.valoresAristas.push(valorArista);
    }
    buscarNodo(valor) {
        for (let i = 0; i < this.nodos.length; i++) {
            if (this.nodos[i].valor == valor) {
                return this.nodos[i];
            }
        }
        return null;
    }
    buscarArista(valor1, valor2) {
        let nodo1 = this.buscarNodo(valor1);
        let nodo2 = this.buscarNodo(valor2);
        for (let i = 0; i < nodo1.adyacentes.length; i++) {
            if (nodo1.adyacentes[i].valor == valor2) {
                return nodo1.valoresAristas[i];
            }
        }
        return null;
    }
}
let grafo = new Grafo();
grafo.agregarNodo("A");
grafo.agregarNodo("B");
grafo.agregarNodo("C");
grafo.agregarNodo("D");
grafo.agregarNodo("E");
grafo.agregarArista("A", "B", 10);
grafo.agregarArista("B", "C", 20);
grafo.agregarArista("C", "D", 15);
grafo.agregarArista("D", "E", 5);
grafo.agregarArista("E", "A", 25);
grafo.agregarArista("B", "E", 40);

/* if(grafo.buscarArista("E","B")!=null){
    console.log("La arista existe");
    console.log("El valor de la arista es:"+grafo.buscarArista("B","E"));
}
else{
    console.log("La arista no existe");
} */
let nodoInicial = "A"
let nodoFinal = "E"


const resultado = buscarConexionYSumarAristas(grafo, nodoInicial, nodoFinal, []);

if (resultado.encontrado) {
    console.log(`El valor de la arista es: ${resultado.sumaAristas}`);
} else {
    console.log("No se encontró una conexión entre el nodo inicial y el nodo final.");
}
/* 
if (grafo.buscarArista(nodoini, nodofin) != null) {
    console.log("La arista existe");
    console.log("El valor de la arista es:" + grafo.buscarArista(nodoini, nodofin));
}
else {
    var nodos = grafo.buscarNodo(nodoini).adyacentes
    console.log(nodos);
    var valor = 0;
    nodos.forEach(element => {
        console.log(element.valor)
        if (grafo.buscarArista(nodoini, element.valor) != null && nodofin ==element.valor) {
            valor = grafo.buscarArista(nodoini, element.valor) + grafo.buscarArista(element.valor, nodofin)
        }
    });

    console.log("El valor de la arista es:" +valor)
} */



function buscarConexionYSumarAristas(grafo, nodoInicial, nodoFinal, nodosVisitados) {
    // Obtener los nodos correspondientes al valor de los nodos inicial y final
    let nodoActual = grafo.buscarNodo(nodoInicial);
    let nodoDestino = grafo.buscarNodo(nodoFinal);

    // Agregar el nodo actual a los nodos visitados
    nodosVisitados.push(nodoActual.valor);

    // Si el nodo actual es el nodo destino, regresar true
    if (nodoActual.valor === nodoDestino.valor) {
        return { encontrado: true, sumaAristas: 0 };
    }

    // Recorrer los nodos adyacentes al nodo actual
    for (let i = 0; i < nodoActual.adyacentes.length; i++) {
        let nodoAdyacente = nodoActual.adyacentes[i];
        // Verificar si el nodo adyacente no ha sido visitado
        if (!nodosVisitados.includes(nodoAdyacente.valor)) {
            // Llamar recursivamente a la función con el nodo adyacente
            const resultado = buscarConexionYSumarAristas(grafo, nodoAdyacente.valor, nodoFinal, nodosVisitados);
            // Si se encuentra una conexión, regresar true y sumar el valor de la arista
            if (resultado.encontrado) {
                const sumaAristas = resultado.sumaAristas + nodoActual.valoresAristas[i];
                return { encontrado: true, sumaAristas };
            }
        }
    }

    // Si no se encuentra conexión, regresar false
    return { encontrado: false, sumaAristas: 0 };
}