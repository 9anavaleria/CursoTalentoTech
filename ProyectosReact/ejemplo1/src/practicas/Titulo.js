import React,{useState, useEffect} from "react";

function Titulo(){
    const [titulo, setTitulo] = useState("Primera Pag");
    const [numero, setNumero] = useState(0);
    
    useEffect(()=>{
        document.title = titulo+numero;
    }, [titulo, numero]);
    function cambiarTitulo(){
        setNumero(numero+1);
    }

    return (
        <div>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <button onClick={cambiarTitulo}>cambiar Titulo</button>
        </div>
    );
}
export default Titulo;