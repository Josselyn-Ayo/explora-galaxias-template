import React from "react";
function GalaxiCard(){
    const vida={
        nombre: "Vida Lactea",
        descripcion:"Vida lactea es nuestra galaxia, es un inmenso conjunto de estrellas, planetas y polvo cosmico. ",
        imagen: "https://media.tenor.com/KgcSe5_KkqkAAAAM/milky-way-national-space-day.gif"

    }
    const galaxia ={
        nombre: "Andrómeda",
        descripcion: 
        "Una galaxia que parece un suspiro en medio del universo, tan lejos, pero lleno de luz. Andrómeda brilla como si nos llamara desde millones de años de luz, como si esperara que algún día vayamos a verla cerca.",
        imagen: "https://i.gifer.com/PdEU.gif"

    };
        const gTriangulo ={
        nombre: "Galaxia del Triángulo",
        descripcion: 
        "La galaxia tambien es conocida  con M33, es muy cercana a la vida lactea, no es muy grande tiene muchas estrellas. Es como un rincon activo del universo.",
        imagen: "https://www.lanzadigital.com/wp-content/uploads/2023/01/ESTRELLAS-2.gif"

    };

    return(
        <section className='mb-20'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://concepto.de/via-lactea/"target="_blank">
            <img src={vida.imagen} alt={vida.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{vida.nombre}</h2>
            <p className="text-sm mt-2">{vida.descripcion}</p>
            </a>
        </div>

            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <a href="https://ieqfb.com/que-es-la-galaxia-de-andromeda/"target="_blank">
            <img src={galaxia.imagen} alt={galaxia.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{galaxia.nombre}</h2>
            <p className="text-sm mt-2">{galaxia.descripcion}</p>
            </a>
        </div>
        <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
        <a href="https://discoverexperience.com/messier-33-galaxia-del-triangulo/"target="_blank">
            <img src={gTriangulo.imagen} alt={gTriangulo.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{gTriangulo.nombre}</h2>
            <p className="text-sm mt-2">{gTriangulo.descripcion}</p>
            </a>
        </div>
        </div>
        </section>
        
    );

}
export default GalaxiCard;