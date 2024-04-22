

const datos = [54, 85, 1 , 4, 74, 6, 21, 7, 9, 32];
console.log(datos);
 
function ordenamientoBurbuja(dato) {
    let n = dato.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (dato[j] > dato[j + 1]) {  
                console.log(dato);
                let temp = dato[j]
                dato[j] = dato[j + 1]
                dato[j + 1] = temp
        }
      }
    }
    return dato;
}

datosOrdenados = ordenamientoBurbuja(datos);
console.log(datosOrdenados);