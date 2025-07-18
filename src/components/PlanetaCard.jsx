function PlanetaCard(){
    const pMercurio={
        nombre: "Mercurio",
        descripcion:
        "El un planeta pequeño que corre rapido alrededor del  Sol, como si fuera un suspiro fugaz en el cielo. Aunque esta cerca del fuego, guarda noches frias y guarda secretos del universo.",
        imagen:"https://64.media.tumblr.com/e33ded2c1b02743858e240b786945798/tumblr_inline_oqz995lEh71tt32qv_500.gifv"
        

    }
    const pVenus={
        nombre: "Venus",
        descripcion:
        "Es una joya brillante que le gusta iluminar al cielo con su luz, envuelta en un velo de nubes. Esconde un mundo ardiente y misterioso que parece llamarnos desde lejos. ",
        imagen:"https://i.makeagif.com/media/8-30-2018/k4uxje.gif"

    }
    const pTierra={
        nombre: "Tierra",
        descripcion:
        "Nuestro rinconcito azul en medio del universo, donde existen las flores, las sonrisas, los abrazos y los sueños. La Tierra es como ese lugar al que siempre volvemos, porque ahí esta todo lo que amamos.",
        imagen:"https://mymodernmet.com/wp/wp-content/uploads/2022/02/moon-earth-transit-nasa.gif"

    }
        const pMarte={
        nombre: "Marte",
        descripcion:
        "Un planeta rojo como un desierto silencioso que guardan secretos, su color intenso me hace pesar en aventuras, en furutos en descubrir y su magia en el espacio. ",
        imagen:"https://i.gifer.com/3jlb.gif"

    }
    return(
        <section className='mb-20'>
         <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://concepto.de/mercurio-planeta/"target="_blank">
            <img src={pMercurio.imagen} alt={pMercurio.descripcion}
            className="rounded-xl h-48 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold ">{pMercurio.nombre}</h2>
            <p className="text-sm mt-2">{pMercurio.descripcion}
            </p>
            </a>
            </div>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://concepto.de/venus/"target="_blank">
            <img src={pVenus.imagen} alt={pVenus.descripcion}
            className="rounded-xl h-48 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold ">{pVenus.nombre}</h2>
            <p className="text-sm mt-2">{pVenus.descripcion}
            </p>
            </a>
            </div>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://concepto.de/planeta-tierra/"target="_blank">
            <img src={pTierra.imagen} alt={pTierra.descripcion}
            className="rounded-xl h-48 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold ">{pTierra.nombre}</h2>
            <p className="text-sm mt-2">{pTierra.descripcion}
            </p>
            </a>
            </div>

            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://concepto.de/marte/"target="_blank"></a>
            <img src={pMarte.imagen} alt={pMarte.descripcion}
            className="rounded-xl h-48 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold ">{pMarte.nombre}</h2>
            <p className="text-sm mt-2">{pMarte.descripcion}
            </p>
            </div>

        </div>
        </section>
    

    );
}
export default PlanetaCard;