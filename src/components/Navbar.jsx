
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className=" w-full bg-black bg-opacity-40 backdrop-blur-md px-6 py-4 flex justify-between items-center
        sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-white">Universo</h1>
            <ul className="flex gap-6 text-white text-sm">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to ="/galaxias">Galaxias</Link></li>
                <li><Link to = "/planetas">Planetas</Link></li>
                <li><Link to ="/constelaciones">Constelaciones</Link></li>
                <li><Link to = "/galeria">Galería</Link></li>
                <li><Link to ="/curiosidades">Curiosidades</Link></li>
                

            </ul>

        </nav>

    );
}
export default Navbar;