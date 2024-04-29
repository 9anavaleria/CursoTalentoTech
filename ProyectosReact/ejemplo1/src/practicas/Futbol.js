import react from 'react';

function Futbol(){
    const anotacion=(valor,evento)=>{
        console.log(valor+" "+ evento.type);
    };

    return(
        <button onClick={(evento)=>anotacion("Goool",evento)}>Dispara!</button>
    );
}

export default Futbol;