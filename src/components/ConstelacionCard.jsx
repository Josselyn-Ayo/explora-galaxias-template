function ConstelacionCard(){
        const OsaMayor={
        nombre:"Osa Mayor",
        descripcion: 
        "Unas de las más conocidad del hemisferio norte. Su figura un cucharón brillante en el cielo y ha sido guía de viajeros.",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2FBLnWw8zVSA6fwxIqgzS5W6byqK6e0Fbg&s"
    }
        const OsaMenor={
        nombre:"Osa Menor",
        descripcion: 
        "Más pequeña, pero alberga a Polaris, la Estrella Polar. Aunque es discreta,siempre señala al norte en el firmamento .",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmBcPRrF-0FZq7GRcElnJa60crDsOzLoH_g&s"
    }
    const constelacion={
        nombre:"Orión",
        descripcion: 
        "Orión es como un dibujo en el cielo, hecho con estrellitas que se dejaron ver en la noche para contarnos historias. Cada vez que la ves, parece el universo te guiña un ojito.",
        imagen:"https://phantom-elmundo.unidadeditorial.es/9b1c138dd027dc6506805d82bfa496a8/crop/99x35/1374x883/resize/1200/f/webp/assets/multimedia/imagenes/2021/02/11/16130649563132.jpg"
    }
    return(
           
        <section className='mb-20'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://blogs.upm.es/demadridalcielo/informacion-de-la-constelacion-de-la-osa-mayor/"target="_blank"></a>
            <img src={OsaMayor.imagen} alt={OsaMayor.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{OsaMayor.nombre}</h2>
            <p className="text-sm mt-2">{OsaMayor.descripcion}</p>
        </div>

            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://www.ebsco.com/research-starters/astronomy-and-astrophysics/ursa-minor"target="_blank">
            <img src={OsaMenor.imagen} alt={OsaMenor.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{OsaMenor.nombre}</h2>
            <p className="text-sm mt-2">{OsaMenor.descripcion}</p>
            </a>
        </div>
        <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://astrobackyard.com/orion-constellation/"target="_blank">  
            <img src={constelacion.imagen} alt={constelacion.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{constelacion.nombre}</h2>
            <p className="text-sm mt-2">{constelacion.descripcion}</p>
            </a>
        </div>
        </div>
        </section>
        
    );

}

export default ConstelacionCard;