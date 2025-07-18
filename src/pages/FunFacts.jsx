import FunFactCard from '../components/FunFactCard';
import { useState } from "react";
function FunFacts(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className="bg-gradient-to-br from-black via-slate-900 to-indigo-950 min-h-screen py-16 px-6 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r  from-yellow-400 via-pink-500 drop-shadow-2xl-lg animate-pulse">
                    DATOS CURIOSOS DEL UNIVERSO
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
                    El universo no solo es inmenso sino también es muy extraño. Aqui descubrirás cosas que parece sacadas de un relato, pero son reales.
                    Desde nubes que huelen a frambuesa hasta lluvias de diamantes.
                </p>
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-cyan-300 mb-8">Curiosidades Espaciales</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FunFactCard/>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <img src="https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/10/13/6347d421668af.jpeg?resize=747,560" alt="Lluvia de diamantes"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Lluvias de diamantes</h3>
                        <p className='text-gray-300 text-sm'>
                         En Neptuno y Urano llueve diamantes. La presión convierte el carbono en joyas. El universo es muy brillante.   .
                        </p>
                        <button className=
                        "ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://www.muyinteresante.com/ciencia/18984.html" target="_blank">MÁS INFORMACIÓN</a></button>
                        </div>

                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <img src="https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/luna-se-aleja-tierra/1675421617065.jpg" alt="La Luna se aleja"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>La Luna se aleja</h3>
                        <p className='text-gray-300 text-sm'>
                         Cada año la Luna se aleja 3.8 cm de la Tierra. En millones de años, ya no abra eclipses como los de hoy.
                        </p>
                        <button className=
                        "ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://www.bbc.com/mundo/articles/ckrr5v1nz2lo" target="_blank">MÁS INFORMACIÓN</a></button>
                        </div>
                    </div>
                </section>

                <section className='mb-20'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwn9IXiD2i_QOoMkosQHJOzy1iLIyHjYrhQ&s" alt="Dia Venus"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Un día dura más que un año</h3>
                        <p className='text-gray-300 text-sm'>
                         En Venus, un solo día dura más que un año completo. Imaginate lo largo que sería esperar hasta que sea viernes.
                        </p>
                        <button className=
                        "ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://www.bbc.com/mundo/articles/ckrr5v1nz2lo" target="_blank">MÁS INFORMACIÓN</a></button>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://wl-genial.cf.tsp.li/resize/728x/png/ced/ef2/f3008e54188e8bba464aeb2ea3.png" alt="Espacio sin sonido"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Silencio absoluto</h3>
                        <p className='text-gray-300 text-sm'>
                          En el espacio nadie puede oírte gritar, no hay aire para que el sonido se propague, todo es completamente silencioso :) .
                        </p>
                        <button className=
                        "ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://metode.es/los-porques-de-metode/sonido-espacio.html" target="_blank">MÁS INFORMACIÓN</a></button>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <img src="https://360grados-ondemand.com/wp-content/uploads/2021/10/astronauta.gif" alt="Traje Espacial"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Trajes espaciales completos</h3>
                        <p className='text-gray-300 text-sm '>
                        Los trajes espaciales no solo protegen del vacío del espacio, también tienen oxígeno, agua para beber. Son como minis naves espaciales.
                        </p>
                        <button className=
                        "ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-a-spacesuit-grades-5-8/" target="_blank">MÁS INFORMACIÓN</a></button>
                        </div>
                    </div>
                 </section>
                    <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">¿Cuánto sabes del universo? </h2>
                    <p className="text-gray-300">¿Cuál es la estrella más cercana a la Tierra?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Alfa Centauri
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Es Sol es la estrella más cercana!")}
                        >  El Sol
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                    </div>
                        <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                        "Así dice Jehová Dios, Creador de los cielos, y el que los despliega, el que extiende la tierra y sus productos, el que da aliento al pueblo que mora sobre ella, y espíritu a los que por ella andan."
                        <footer className="text-purple-400 text-sm mt-2">Isaías 42:5</footer>
                        </blockquote>

                        <footer className="mt-16 text-center text-sm text-gray-400">
                        Gracias por explorar le universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                        </footer>

            </div>

        </div>

    );
    
}
export default FunFacts;