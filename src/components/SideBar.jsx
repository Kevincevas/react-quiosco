import { categorias } from "../data/categorias"
import Categoria from "./Categoria"

export default function SideBar() {

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img 
                    src="img/logo.svg" 
                    alt="Imagen Logo" 
                    className="w-40"
                />
            </div>

            <div className="mt-10">
                {categorias.map( categoria => (
                    <Categoria key={categoria.id} categoria={categoria} /> // Un prop es un argumento que se pasa entre los componentes de react
                ))}
            </div>

            <div className="my-5 px-5">
                <button 
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold truncate text-white"
                >
                    Cancelar Orden
                </button>
            </div>
        </aside>
    )
}
