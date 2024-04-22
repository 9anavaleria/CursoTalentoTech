
const datos = [5, 1 , 4, 7, 21, 7, 9, 32];

function insertionSort(dato) {
    let n = dato.length;
    for (let i = 1; i < n; i++) {
        let current = dato[i];
        let j = i - 1;
        while (j >= 0 && dato[j] > current) {
            dato[j + 1] = dato[j];
            j--;
        }
        dato[j + 1] = current;
    }
    return dato;
}

let datosOrdenados = insertionSort(datos);
console.log(datosOrdenados);