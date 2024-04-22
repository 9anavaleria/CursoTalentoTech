// Validar datos ingresados
function validarArticulo(){
    var articulo=document.getElementById("articulo").value;
    console.log(articulo);
    let formato=/^[a-zA-Z]+$/;
    if (articulo == ""){
        document.getElementById("errorArticulo").style.display="block";
        document.getElementById("errorArticulo").innerHTML="El campo es obligatorio";
    }
    else if(!formato.test(articulo)){
        document.getElementById("errorArticulo").style.display="block";
        document.getElementById("errorArticulo").innerHTML="Ingrese carácteres validos";
        }
    else{
        document.getElementById("errorArticulo").style.display="none";
    }
}
function validarPeso(){
    var peso=document.getElementById("peso").value;
    console.log(peso);
    let formatoN=/^[0-9]*$/;
    if (peso == ""){
        document.getElementById("errorPeso").style.display="block";
        document.getElementById("errorPeso").innerHTML="El campo es obligatorio";
    }
    else if(!formatoN.test(peso)){
        document.getElementById("errorPeso").style.display="block";
        document.getElementById("errorPeso").innerHTML="Ingrese carácteres validos";
        }
    else{
        document.getElementById("errorPeso").style.display="none";
    }
}

function validarCiudad(){
    var ciudad= document.getElementById("ciudad").value;
    if (ciudad == ""){
        document.getElementById("errorCiudad").style.display="block";
        document.getElementById("errorCiudad").innerHTML="El campo es obligatorio";
    }
}

document.getElementById("articulo").addEventListener("blur",validarArticulo);
document.getElementById("peso").addEventListener("blur",validarPeso);
document.getElementById("ciudad").addEventListener("blur",validarCiudad);

// Calculo de precio del envio
function calcular(){
    var articulo=document.getElementById("articulo").value;
    var ciudad= document.getElementById("ciudad").value;
    var peso= parseFloat(document.getElementById("peso").value);   
    var vCiudad;
    var tiempo;
    var total = 0;
    switch (ciudad){
        case"Barranquilla":
        vCiudad = 10000;
        tiempo = 30;
        break;
        case"Cali":
        vCiudad = 5000;
        tiempo =25;
        break;
        case"Cartagena":
        vCiudad = 15000;
        tiempo =32;
        break;
        case"SantaMarta":
        vCiudad = 20000;
        tiempo =35;
        break;
        case"Valledupar":
        vCiudad = 25000;
        tiempo =40;
        break; 
        default:
        console.log("error");
    }
    total = vCiudad * peso;
    var totalMil = total.toLocaleString()
    console.log(total);
    document.getElementById("nombre").textContent = articulo;
    document.getElementById("total").textContent = "$" + totalMil;
    document.getElementById("tiempo").textContent = tiempo + " Horas";
}

function validarDatos(){
    console.log("formulario enviado");
}
document.getElementById("enviar").addEventListener("click",calcular)