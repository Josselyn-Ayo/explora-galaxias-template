import ConstelacionCard from '../components/ConstelacionCard';
import { useState } from "react";
function Constelacion(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className="bg-gradient-to-br fron-black via-slate-900 to-indigo-950 min-h-screen py-16 px16 text-white overflow-hidden" >
            <div className='max-w-6xl mx-auto text-center'>
                <h1 className='text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 drop-shadow-lg animate-pulse'>
                        CONSTELACIONES CELESTIALES

                </h1>
                <p className='text-gray-300 text-lg max-w-3xl mx-auto mb-12 transition duration-700 ease-in-out'>
                    Las constelaciones han guiado navegantes, inspirado historias y reveladola grandeza del cielo.
                    Cada figura una estrella distintas para  formar dibujos celestes llenos de magia y metologías.
                </p>
                 <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-cyan-300 mb-8 animatio-fadeInt'>
                        Costelaciones Destacadas
                    </h2>
                    <ConstelacionCard /> 
                </section>
                    <section className='mb-20'>
                    <h2 className='text-3xl font-bold text-cyan-300  mb-10'>
                        Gigantes Gaseosos
                    </h2>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <a href="https://skyandaluz.com/blog/cual-es-la-constelacion-casiopea/"target="_blank">
                        <img src="https://media.istockphoto.com/id/1186728772/es/foto/constelaci%C3%B3n-de-casiopea-en-el-cielo-estrellado.jpg?s=612x612&w=0&k=20&c=B5fmZTq4qahsSM_qpboVPYLQ_3YPn6gYZbelZc12kyw=" alt="Casiopea"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Casiopea</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Con la forma w, represena a una reina miteologica. Brilla con exelencia en el cielo.
                        </p>
                        </a>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <a href="https://www.space.com/29445-southern-cross-constellation-skywatching.html"target="_blank">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTubta_SWrgsK4iHgzZG3wKaYLMnjxgUt3-Q&s" alt="Cruz del Sur"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Cruz del Sur</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           Visible solo de el hemisferio sur, ha sido guia de navegante y simbolo de culturas.
                        </p>
                        </a>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 hover:ring-2 hover:ring-indigo-400 transition-transform duration-700'>
                        <a href="https://astrosigma.com/pegaso/"target="_blank">
                        <img src="https://media.istockphoto.com/id/1130628642/es/vector/constelaci%C3%B3n-de-estrellas-de-pegasus.jpg?s=612x612&w=0&k=20&c=BPJflPQcNfhT1OP84sGImmVbduuf0QYXFkYHCDsyugQ=" alt="Pegaso"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md hover:brightness-110 transition'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Pegaso</h3>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                           EL mítico cabello alado, su constelacion parece flotar en libertad. Representa la imaginación elevado al cielo. 
                        </p>
                        </a>
                        </div>
                    </div>
                 </section>
                 <div className="mt-14">
                    <h2 className="text-2xl font-bold mb-4">¿Cuánto sabes de los constelaciones? </h2>
                    <p className="text-gray-300">¿Cuál costelación reprsenta a un cazador ?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Osa Mayor
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡El Orión es la constelación del cazador!")}
                        >  Orión
                        </button>
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Casiopea
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                </div>
                <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                        "Él solo extendió los cielos, y anda sobre las olas del mar. Él hizo la Osa, el Orión y las Pléyades, y los lugares secretos del sur."
                        <footer className="text-purple-400 text-sm mt-2">Job 9:8-9</footer>
                        </blockquote>

                        <footer className="mt-16 text-center text-sm text-gray-400">
                        Gracias por explorar el universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                        </footer>

            </div>

        </div>

    )
}
export default Constelacion;