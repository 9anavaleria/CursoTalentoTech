import {BrowserRouter, Routes, Route} from "react-router-dom";
import Acerca from "./Paginas/Acerca";
import Inicio from "./Paginas/Inicio";
import Registro from "./Paginas/Registro";
import Estructura from "./Estructura";

function Rutas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Estructura/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/acerca" element={<Acerca/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rutas;