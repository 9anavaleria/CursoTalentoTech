
let datos = [2, 5, 1, 4, 3, 0]; 

function shakerSort(datos) {
    let max = datos.length - 1;
    let min = 0;
    while (min < max) {
        let biggest = min;
        let smallest = max;
        for (var i = min; i <= max; i++) {   
            if (datos[biggest] < datos[i]) {
                biggest = i;
            }
        } // busca el elemento más grande
        if (max != biggest) { //swap the items
            let aux = datos[max];
            datos[max] = datos[biggest];
            datos[biggest] = aux;
        }
        max--;
        for (var j = max; j >= min; j--) {      
            if (datos[smallest] > datos[j]) {
                smallest = j;
            }
        } // busca el elemento más pequeño
        if (min != smallest) { //swap the items
            let aux2 = datos[min];
            datos[min] = datos[smallest];
            datos[smallest] = aux2;
        }
        min++;
    }
    return datos;
}

let datosOrdenados = shakerSort(datos);
console.log(datosOrdenados);