import React from "react";
function GalaxiCard(){
    const vida={
        nombre: "Vida Lactea",
        descripcion:"Vida lactea es nuestra galaxia, es un inmenso conjunto de estrellas, planetas y polvo cosmico. ",
        imagen: "https://i.blogs.es/895e4a/via-lactea_650/450_1000.webp"

    }
    const galaxia ={
        nombre: "Andrómeda",
        descripcion: 
        "Una galaxia que parece un suspiro en medio del universo, tan lejos, pero lleno de luz. Andrómeda brilla como si nos llamara desde millones de años de luz, como si esperara que algún día vayamos a verla cerca.",
        imagen: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/5835/Andromeda_Galaxy.jpeg"

    };
        const gTriangulo ={
        nombre: "Galaxia del Triángulo",
        descripcion: 
        "La galaxia tambien es conocida  con M33, es muy cercana a la vida lactea, no es muy grande tiene muchas estrellas. Es como un rincon activo del universo.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHg-bove7PuttXYmBuUMsRSd2EX8SNjxhdw&s"

    };

    return(
        <section className='mb-20'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <img src={vida.imagen} alt={vida.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{vida.nombre}</h2>
            <p className="text-sm mt-2">{vida.descripcion}</p>
        </div>

            <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <img src={galaxia.imagen} alt={galaxia.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{galaxia.nombre}</h2>
            <p className="text-sm mt-2">{galaxia.descripcion}</p>
        </div>
        <div className="bg-white/10 backdroup-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <img src={gTriangulo.imagen} alt={gTriangulo.nombre} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold ">{gTriangulo.nombre}</h2>
            <p className="text-sm mt-2">{gTriangulo.descripcion}</p>
        </div>
        </div>
        </section>
        
    );

}
export default GalaxiCard;