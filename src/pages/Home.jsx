import { Link } from "react-router-dom";
import { useState } from "react";
function Home(){
     const[respuesta, setRespuesta] = useState("");
    return(
       
        <div className="relative z-10 bg-black bg-opacity-60 backdrop-blur-md rounded-3xl p-10 max-w-7xl w-full mx-auto shadow-2xl">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 drop-shadow-lg">
                BIENVENIDOS A EXPLORA UNIVERSO</h1>
                <div className="relative overflow-hidden rounded-3xl mb-12 shadow-[0_0_0_30px_8px_rgba(128,0,255,0.4)]">
            <img src="https://cdn.pixabay.com/photo/2014/09/08/09/24/solar-system-439046_1280.jpg" alt="SistemaSolar"
            className="w-full h-[400px] object-cover opacity-90 hover:opacity-100 hover:scale-105 hover:brightness-110 hover:saturate-150 transition duration-700 ease-in-out" 
            />
            </div>
            <p className="text-gray-200 text-lg leading-relaxed tracking-wide mb-4 drop-shadow-md">
                Este es un pequeño rincón del universo donde quiero mostrar lo asombroso que es el espacio.
                Aquí encontrarás galaxias brillantes, planetas lejanos, constelaciones mágicas y datos curiosos que te van a sorprende.
            </p>
            <p className=" text-gray-300 text-lg leading-relaxed  tracking-wide mb-10 drop-shadow-md">
                Descubre con cada página nuevas maravillas que te harán viajar con la mente y entender mejor nuestro increíble universo.
                ¡Acompáñame en esta aventura espacial y déjate inspirar por la belleza que nos rodea!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
            
            <Link to="/galaxias" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-10 py-4 font-semibold shadow-xl hover:from-pink-500 hover:to-indigo-500 transition-transform duration-300 transform hover:scale-110 mb-10"
                >
                    Empieza a viajar
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <Link 
                to="/galaxias"
                className="group bg-white/10 rounded-xl p-4 shadow-lg hover: shadow-purple-500/40 transition duration-300 hover:scale-105 hover:ring-2 hover:ring-purple-400"
                >
                <img src="https://cdn0.geoenciclopedia.com/es/posts/1/6/0/galaxias_61_600.jpg" alt="Galaxias"
                className="rounded-lg mb-3 h-40 w-full object-cover group-hover:brightness-100 transition duration-300" 
                 />
                 <h3 className="text-xl font-bold mb-1 text-white">Galaxias</h3>
                 <p className="text-sm text-gray-300">
                    Explora címulos y fotos únicas en el universo.
                 </p>
                </Link>
                <Link 
                to="/planetas"
                className="group bg-white/10 rounded-xl p-4 shadow-lg hover: shadow-purple-500/40 transition duration-300 hover:scale-105 hover:ring-2 hover:ring-pink-400">
                    <img src="https://concepto.de/wp-content/uploads/2019/04/sistema-solar-planetas-e1554483546522-800x400.jpg" alt="Planetas" 
                    className="rounded-lg mb-3 h-40 w-full object-cover group-hover:brightness-100 transition duration-300"/>
                 <h3 className="text-xl font-bold mb-1 text-white">Planetas</h3>
                 <p className="text-sm text-gray-300">
                    Conoce mundos gigantes, helados o ardientes que giran alrededor de estrellas.
                 </p>
                </Link>

                 <Link 
                to="/constelaciones"
                className="group bg-white/10 rounded-xl p-4 shadow-lg hover: shadow-purple-500/40 transition duration-300 hover:scale-105 hover:ring-2 hover:ring-indigo-400">
                    <img src="https://starwalk.space/gallery/images/zodiac-constellations/es/1140x641.jpg" alt="Constelaciones" 
                    className="rounded-lg mb-3 h-40 w-full object-cover group-hover:brightness-110 transition duration-300"/>
                 <h3 className="text-xl font-bold mb-1 text-white">Constelaciones</h3>
                 <p className="text-sm text-gray-300">
                    Descubre figuras en el cielo nocturno que cuentan historias mitológicas.
                 </p>
                </Link>

            </div>
            <h2 className="text-2xl fort-bold text-white mb-4 mt-14">¿Sabías que?...</h2>
            <ul className="text-gray-300 text-base space-y-3 mb-10 max-w-3xl mx-auto text-left">
                <li>Hay más estrellas en el universo que granos de arena en la Tierra</li>
                <li>Saturno podría flotar en agua por su densidad.</li>
                <li>La luz del Sol tarda 8 minutos en llegar a nosotros.</li>
                <li>La Estación Espacial viaja a 28.000 km/h alrededor de la Tierra</li>
                <li>El polvo lunar huele como pólvora quemada.</li>
                <li>Hay cometas que tardan miles de años en volver al Sol.</li>

            </ul>

                <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">¿Cuánto sabes del universo? </h2>
                    <p className="text-gray-300">¿Qué es el Sol?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡intenta de nuevo!")}
                        > Un planetas
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Muy bien!")}
                        >Una estrella
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                </div>
                
                <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                    "Los cielos cuentan la gloria de Dios y el firmamento anuncia la obra de sus manos."
                    <footer className="text-purple-400 text-sm mt-2">Salmos 19:1</footer>
                </blockquote>

                <footer className="mt-16 text-center text-sm text-gray-400">
                    Gracias por explorar le universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                </footer>
            </div>
        </div>

    );
}
export default Home;