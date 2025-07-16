function FunFactCard(){
    const funFact={
        titulo:"Datos Interesantes",
        descripcion:
        "En el espacio hay una nube gigante dde alcohol, y huele a franbruesas. Se llama Sagittarius B2 y está a 390 años luz. El universo si que es raro y dulce a la vez. ",
        imagen:"https://www.thedrinksbusiness.com/content/uploads/2025/03/iStock-1170047942-640x427.jpg",
    }
    return(
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-sm">
            <img src={funFact.imagen} alt={funFact.titulo} 
            className="rounded-xl h-48 w-full object-cover mb-4"/>
            <h2 className="text-xl font-semibold">{funFact.titulo}</h2>
            <p className=" text-sm mt-2">{funFact.descripcion}</p>
            <button className=
            " ring-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white font-semibold px-6 py-2 rounded-lg shadow-lg mt-4"  ><a href="https://www.fayerwayer.com/2015/04/sagittarius-b2-nube-espacial-ron-y-huele-a-frambuesas/." target="_blank">MÁS INFORMACIÓN</a></button>

        </div>
    );

}
export default FunFactCard;