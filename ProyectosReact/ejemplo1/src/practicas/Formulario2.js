import React, { useState } from "react";

/*function Saludo({name}){
    return(
        <p>hola, {name}!</p>
    )
}*/

function Fruta(props){
    console.log(props.tipo);
    return(<li>Fruta {props.tipo}</li>)
}

function Formulario2(){
    const [entradas, setEntradas]=useState({});

    const frutas=["Manzana", "Pera","Melon"];

    const manejoCambios=(event)=>{
        const nombre=event.target.name;
        const valor=event.target.value;
        setEntradas(valores=>({...valores,[nombre]:valor}))
    }
    const manejoSumision=(event)=>{
        event.preventDefault();
        console.log("Enviado "+ entradas.nombre + " "+ entradas.edad+ " "+entradas.auto+" "+ entradas.frut);
    }
    return(
        <div>
            <form onSubmit={manejoSumision}>
                <input name="nombre" type="text" placeholder="Nombre" value={entradas.nombre||" "} 
                onChange={(evento)=>manejoCambios(evento)}/>
                <input name="edad" type="number" placeholder="Edad" value={entradas.edad||" "} 
                onChange={(evento)=>manejoCambios(evento)}/>
                <input type="submit" value="enviar"/>
                <select name="auto" value={entradas.auto||""}  onChange={(evento)=>manejoCambios(evento)}>
                    <option value="0" >Selecione</option>
                    <option value="Ford">Ford</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Toyota">Toyota</option>
                </select>    
                <input list="listfrut" name="frut" placeholder="Edad" value={entradas.frut||" "} 
                onChange={(evento)=>manejoCambios(evento)}/>        
                <datalist id="listfrut">
                    {frutas.map((frut)=> (<option value={frut}/>))}
                </datalist>
            </form>
           
        </div>
    )
}
export default Formulario2;