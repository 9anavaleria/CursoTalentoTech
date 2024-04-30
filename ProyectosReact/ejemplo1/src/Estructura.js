import { Link } from "react-router-dom";
const Estructura = () => {
    return(
        <>
            <nav>
                <Link to="/inicio">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/registro">Registro</Link>
            </nav>
        </>
    );
}
export default Estructura;