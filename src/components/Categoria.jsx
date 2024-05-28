import useQuiosco from "../hooks/useQuiosco"


export default function Categoria({categoria}) {
    // Un prop es un argumento que se pasa entre los componentes de react

    const {handleClickCategoria, categoriaActual} = useQuiosco()
    const {icono, id, nombre} = categoria

    return (
        <div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            
            <img 
            src={`/img/icono_${icono}.svg`} 
            alt="Imagen Icono"
            className="w-12 "
            />

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={ () => handleClickCategoria(id)} //colocando un collback, espera a que suseda el click y no mande a llamanr en auto la funcion
            > 
                {nombre} 
            </button>


        </div>
    )
}
