import React, { useState } from "react";

function Saludo({name}){
    return(
        <p>hola, {name}!</p>
    )
}

function Formulario(){
    const [nombre, setNombre]=useState("");
    const manejoSumision=(event)=>{
        event.preventDefault();
        console.log("Enviado "+ nombre);
    }
    return(
        <div>
            <form onSubmit={manejoSumision}>
                <label></label>
                <input name="nombre" type="text" placeholder="Nombre" value={nombre} onChange={(evento)=>setNombre(evento.target.value)}/>
                <input type="submit" value="enviar"/>
            </form>
            <Saludo name={nombre}/>.
        </div>
    )
}
export default Formulario;