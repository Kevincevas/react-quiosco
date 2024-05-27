import { formatearDinero } from '../helpers/index'

export default function Producto({producto}) {

    const {nombre, precio, imagen} = producto

    return (
        <div className="border p-3 shadow bg-white">
            <img 
                src={`/img/${imagen}.jpg`}
                alt={`Imagen ${nombre}`}
                className="w-full"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
                <button
                    type='button'
                    className='bg-yellow-600 hover:bg-yellow-800 text-white w-full mt-5 p-3 uppercase font-bold'
                >
                    Agregar
                </button>
            </div>

        </div>
    )
}
