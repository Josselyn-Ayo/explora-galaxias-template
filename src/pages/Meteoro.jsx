import { useState } from "react";
function Meteoro(){
    const[respuesta, setRespuesta] = useState("");
    return(
        <div className="bg-gradient-to-b from-black via-gray-900 to-slate-900 min-h-screen text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 drop-shadow-lg animate-pulse">
                    METEOROS Y METEORITOS
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
                    Estas rocas espaciales atraviesan nuestra atmósfera y nos muestran elpoder del cosmo.
                    ¿Sabías que algunos meteoritos son más antiguos que la Tierra?
                </p>

                    <section className='mb-20'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <a href="https://flexbooks.ck12.org/cbook/ck-12-conceptos-de-ciencias-de-la-tierra-grados-6-8-en-espanol/section/13.18/primary/lesson/meteoros/"target="_blank">
                        <img src="https://i.makeagif.com/media/2-03-2023/mlEU06.gif" alt="Meteoro"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Meteoro</h3>
                        <p className='text-gray-300 text-sm'>
                           Es el estello brillante que vez en el cielo cuando un  meteoroide entra a la atmósfera y se quema.
                        </p>
                        </a>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <a href="https://www.museo.fcnym.unlp.edu.ar/meteoritos/meteoritos-30"target="_blank">
                        <img src="https://i.gifer.com/6IX.gif" alt="meteorito"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Meteorito</h3>
                        <p className='text-gray-300 text-sm'>
                           Es un fragmento del espacio que ha sobrevivido el paso por la atmósfera y ha caído en la Tierra.
                        </p>
                        </a>
                        </div>
                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <a href="https://www.osn.iaa.es/ciencia/meteoros-y-bolidos"target="_blank">
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9iOpD5E2g0aleOhZAwruHH-_05l25cSbysEBLvbCekAPPXWP26hM1zWq9mvWZwXCGKSUgJdFidxufSC_pzOYxw9BR8Bp4ytHRNKzP1SK-sK-Py_hLNsqWqIcEwJclO5F6c3Nr_ILqI43k/s1600/Frankie-Lucena-fireball_reflection_cfht_gif_720dpi_1539659158_lg.gif" alt="Bólido"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Bólido</h3>
                        <p className='text-gray-300 text-sm '>
                          Es un meteoro extremadamete brillante a veces explora la atmósfera con gran energía. 
                        </p>
                        </a>
                        </div>
                    </div>
                 </section>
                    <section className='mb-20'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-500'>
                        <a href="https://rodolfo-novakovic.blogspot.com/2005/11/clasificacin-de-los-meteoritos.html"target="_blank">
                        <img src="https://media.tenor.com/kJnySS9eKvUAAAAM/crashing-to-earth-meteor-showers101.gif" alt="Pétreo-Metálico"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Meteoritos Pétreo-Metálico</h3>
                        <p className='text-gray-300 text-sm'>
                          Es una mezcla entre la roca y metal,con cristales de olivino incrustados en hierro y niquel. So muy raros entre el nucleo y el manto.
                        </p>
                        </a>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <a href="https://www.debate.com.mx/tecnologia/Que-es-un-meteorito-pedregoso-20221119-0299.html" target="_blank">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu-N1vZvUPphX3D16j5jyE8yz4kLVnlLuTQ&s" alt="Meteorito Pedregoso"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Meteorito Pedregoso</h3>
                        <p className='text-gray-300 text-sm'>
                          Son los más comunes y están hechos principalmente con sindicato, parecido a las rocas de la Tierra. Contienen minerales llamados condritas.
                        </p>
                        </a>
                        </div>

                        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:scale-105  transition-transform duration-500'>
                        <a href="https://www.researchgate.net/figure/Figura-1-Meteorito-condrita-carbonaceo-Fuente-catawikies_fig1_357664669"target="_blank">
                        <img src="https://img.europapress.es/fotoweb/fotonoticia_20180918153040_690.jpg" alt="Meteorito Condrita"
                        className='rounded-xl h-56 w-full object-cover mb-4 shadow-md'
                         />
                        <h3 className='text-xl font-bold text-purple-200 mb-2'>Meteorito Condrita</h3>
                        <p className='text-gray-300 text-sm '>
                           Son un tipo de meteorito Pegregoso que contien pequeñas esferas llamadas cóndrulos. Estas esferas son materiales antiguos.
                        </p>
                        </a>
                        </div>
                    </div>
                 </section>
                        <div className="mt-14">
                        <h2 className="text-2xl font-bold mb-4">¿Qué tanto sabes de los Meteoritos? </h2>
                        <p className="text-gray-300">¿De qué está principalmente hecho los meteoritos férricos?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Silicio y Oxígeno
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-while px-4 py-2 rounded-xl"
                        onClick={() => setRespuesta("Correcto. ¡Los meteoritos férricos están compuesto con Hierro y níquel!")}
                        >  Hierro y níquel
                        </button>
                        <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setRespuesta("Incorrecto. ¡Intentalo de nuevo!")}
                        > Carbono
                        </button>
                    </div>
                    {respuesta && (
                        <p className="mt-4 text-sm text-yellow-300 font-semibold">{respuesta}</p>
                    )}
                </div>
                        <blockquote className="text-purple-300 italic text-base tracking-wide max-w-xl mx-auto mt-6 " >
                        "Cuando veo tus cielos, obra de tus dedos, la luna y las estrellas que tú formaste,"
                        <footer className="text-purple-400 text-sm mt-2">Salmos 8:3</footer>
                        </blockquote>

                        <footer className="mt-16 text-center text-sm text-gray-400">
                        Gracias por explorar le universo conmigo. Creado por <span className="text-purple-300">Josselyn Ayo</span>- 2025 @ Explora Galaxias.
                        </footer>
            </div>
        </div>
    )

}
export default Meteoro;