import GalaxiCard from '../components/GalaxiCard';
import { useState } from "react";
function Galaxias(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className='bg-black min-h-screen py-16 px-6 text-white'>
            <div className='max-w-6xl m-auto text-center'>
                <h1 className='text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 drop-shadow-lg animate-pulse'>
                    GALAXIAS MARAVILLOSAS
                </h1>
                <p className='text-gray-300 text-lg max-w-3xl mx-auto mb-12 transition duration-700 ease-in-out' >
                    Cuando miras al cielo estrellado, estás viendo solo una parte diminuta del universo. 
                    Más alla de lo que alcanza la vista, extisten miles de millones de galaxias que flotan en la vastedad del espacio.
                    Cada una es un misterio esperado ser descubierto.
                </p>
                <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-purple-300 mb-6  transition duration-500 hover:scale-105'>
                        Galaxias Destacadas
                    </h2>
                    <GalaxiCard /> 
                </section>

                <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-pink-400 mb-10'>
                        Otras galaxias sorprendentes
                    </h2>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRE6Rfi-348Dj9qWOlrzMJB65CZ8CC1Jnow&s" alt="Galaxia del Sombrero"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Galaxia de Sombrero</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            Esta galaxia parece un sombrero flotando en el espacio, con un núcleo brilante rodeado por un anilo en polvo oscuro :3. 
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://i.ytimg.com/vi/Nw4uwRbiNLE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgTyhFMA8=&rs=AOn4CLArRu-qhkTEgSPqocQBxMB0p77wpQ" alt="Galaxia remolino"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition' />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Galaxia del Remolino</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            Una impresionante galaxia espiral con brazo bien definida que parecen bailar en la oscuridad del universo.
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvQNQ7wEyjpZ-7xxRbdY9xz2WRy1EEQ3qUQ&s" alt="NGC 1300" 
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition' />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>NGC 1300</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            Una galaxia espiral barrada con una estructura sorprendente que parece que fuera un portal hacia otras dimensiones.
                         </p>
                        </div>  
                    </div>
                </section>
                <section className='mb-20'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcp5TLXG44eYxW_ukgysK0V2wBA_KLD8ZU7w&s" alt="Galaxia del ojo negro"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Galaxia del ojo negro</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                             La galaxia tiene una mirada propia, como si el universo le hubiera dejado un parpado de sombras en medio de tanta luz . 
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1jl8O4Bwy-pgQo2fMHDr7Pc4YnhbMoZ2jQ&s" alt="Galaxia Cigarro"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition' />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Galaxia del Cigarro</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Una galaxia que parece arder en el espacio, como una llama en medio del frío. Su forma alargada y su brillo intenso me hace pensar e algo que no se puede apagar.
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <img src="https://i.pinimg.com/736x/27/fd/f1/27fdf14f3038a2a25a735348c10509c8.jpg" alt="galaxia Bode" 
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition' />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Galaxia Bode</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                            Una galaxia que flota tranquila en el universo, como un espiral dibujada con calma. Es de una forma suave y brillante que trasmite paz
                         </p>
                        </div>  
                    </div>
                </section>
                
                <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">¿Cuánto sabes sobre las galaxias? </h2>
                    <p className="text-gray-300">¿Cuál es nuestra galaxia?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Es una galaxia vecina!")}
                        > Andrómeda
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Nosotros vivimos en la Vía Lactea!")}
                        >Vía Lactea
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                </div>
                <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                    "El cuenta el número de las estrellas , a todas llama por su nombre."
                    <footer className="text-purple-400 text-sm mt-2">Salmos 147:4</footer>
                </blockquote>

                <footer className="mt-16 text-center text-sm text-gray-400">
                    Gracias por explorar le universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                </footer>
        </div>
    </div>

    );
}
export default Galaxias;