import { useState } from "react";
function Galeria(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className="bg-gradient-to-b from-black via-gray-900 to-slate-900 min-h-screen text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 drop-shadow-lg animate-pulse">
                    GALERÍA DEL UNIVERSO
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                    El universo es un escenario muy impresionante que esta llemo de maravillas que nos dejan sin aliento. Desde auroras mágicas hasta tormentas cósmicas, 
                    ¡descubre en esta galería los fenómenos y logros más icreíbles fuera de la Tierra!

                </p>

                    <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-pink-300 mb-8 animate-fadeIn'>
                        Fenómenos Cósmicos
                    </h2>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <img src="https://i.pinimg.com/originals/2e/4f/f5/2e4ff5abb760fb636067138e321f3ebf.gif" alt="Aurora Boreal"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Aurora Boreal</h3>
                        <p className='text-gray-300 text-sm'>
                           Un espectáculo de luces naturales que decora los cielos polares con colores verdes y violetas mágicos.
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://curiositylover.wordpress.com/wp-content/uploads/2013/01/eclipse.gif" alt="Ecilpse Solar"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Eclipse Solar</h3>
                        <p className='text-gray-300 text-sm'>
                           Cuado la Luna cubre el Sol y la sombrea trasforma el decia en noche por unos minutos. Un envento impresionante..
                        </p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://media.tenor.com/kcqHpVqCzLsAAAAM/sun.gif" alt="Tormenta Solar"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Tormenta Solar</h3>
                        <p className='text-gray-300 text-sm '>
                          Explosiones de la superficie del Sol que envía energía a toda velocidad por el espacio. Una danza peligrosa de fuego. 
                        </p>
                        </div>
                    </div>
                 </section>
                    <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-pink-300 mb-8 animate-fadeIn'>
                        Exploración espacial
                    </h2>
                    <p className="text-gray-300 text-base mb-10 max-w-3xl mx-auto">
                        Desde cohetes impresionantes hasta robots valientes, la NASA ha impulsado losseres humanos a descubrir los secretos del espacio.
                        Cada misión es como una histroia de aventuras, llenas de ciencia, sueños y muchas emociones. 
                    </p>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <img src="https://i.imgur.com/HWbIRlL.gif" alt="Saturn V"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Saturn V</h3>
                        <p className='text-gray-300 text-sm'>
                          El cohete más poderoso jamás construid, llevó a los humanos a la Luna en una misión Apolo 11.  .
                        </p>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH2O40Q8mz8pJya6c0_3iGHpJe6GsMaq9OQ&s" alt="Curiosity Rover"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Curiosity Rover</h3>
                        <p className='text-gray-300 text-sm'>
                          Un robot exporador que estudia Marte desde 2012. Ha enviado imágenes asombrados y datos clave sobre el planeta rojo.
                        </p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://i.pinimg.com/originals/56/f3/77/56f377b65c83da599107ab05f4661473.gif" alt="James Webb"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Telescopio James Webb</h3>
                        <p className='text-gray-300 text-sm '>
                           Un ojo gigante en el espacio que permite ver las primeras galaxias del universo con detalles importantes.
                        </p>
                        </div>
                    </div>
                 </section>
                        <div className="mt-14">
                        <h2 className="text-2xl font-bold mb-4">¿Sabias esto? </h2>
                        <p className="text-gray-300">¿Cuál fue elprimer objeto hecho por el ser humano en llegar al espacio?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Apolo 11
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Sputnik 1 lanzado  por la URSS en 1957!")}
                        >  Sputnik 1
                        </button>
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Voyager 1
                        </button>
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Telescopio Hubble
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
export default Galeria;