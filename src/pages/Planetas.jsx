import PlanetaCard from '../components/PlanetaCard';
import { useState } from "react";
function Planetas(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className='bg-gradient-to-br from-black via-slate-900 min-h-screen py-16 px-6 text-white overflow-hidden'>
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-300 via-orange-400 to-red-500 drop-shadow-lg animate-pulse'>VIAJE POR PLANETAS</h1>
                <p className='text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relax animatio-fadeInt'>
                    ¿Listos para exporar los mundos ardientes, helados, gigantes y rocosos?
                    Cada planeta es una joya flotante en el espacio. ¡Descubre ahora los secretos!
                </p>
                <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-cyan-300 mb-8 animatio-fadeInt'>
                        Planetas terrestres
                    </h2>
                    <PlanetaCard /> 
                </section>
                 <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-cyan-300  mb-10'>
                        Gigantes Gaseosos
                    </h2>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://67.media.tumblr.com/51339ece6ae680f271c355a38972cd1b/tumblr_inline_o8if1zqvPF1tzhl5u_500.gif" alt="Jupiter"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Júpiter</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Un gigante imponente que domina el cielo con su tamañao. Sus tormentas son como bailes de colores y vientos que hace sentir una belleza en el universo. 
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://www.madrimasd.org/blogs/astrofisica/files/2011/07/3B.Tormenta-Saturno-12-Marzo-2011_HST_Movie.gif" alt="Jupiter"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Saturno</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Un guardian elegante con anillos de cristal que gira lentamente. Me recuerda que el universo tiene arte en cada rincón.
                        </p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://i.pinimg.com/originals/79/fe/17/79fe170383f8601eaa94fdf0fc32ced9.gif" alt="Urano"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Urano</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Un gigante frío y azul que le gusta girar de lado, su color tranquilo y su movimiento único que hace pensar en lo inesperado y maravillo del universo.
                        </p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://guaix.fis.ucm.es/~ncl/lucia_crespo/neptuno_movement.gif" alt="Neptuno"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Neptuno</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Un  mundo azul profundo y lejano , donde los vientos corren más rapido que en ningun lugar. Se inspira en el misterio, como un suspiro helado en el borde del universo.
                        </p>
                        </div>
                    </div>
                 </section>
                 <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">¿Cuánto sabes de los planetas? </h2>
                    <p className="text-gray-300">¿Cuál es el planeta más grande del sistema solar?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Tierra
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Júpiter es el más grande!")}
                        >  Júpiter
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                </div>
                <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                        "Tu has puesto todas las cosas por obra con sabiduría , has hecho la tierra llena de tus bienes."
                        <footer className="text-purple-400 text-sm mt-2">Salmos 104:24</footer>
                        </blockquote>

                        <footer className="mt-16 text-center text-sm text-gray-400">
                        Gracias por explorar le universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                        </footer>


            </div>

        </div>

    )
}
export default Planetas;