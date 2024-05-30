import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto"

export default function Resumen() {

  const {pedido, total} = useQuiosco();

  const comprobarPedido = () => pedido.length === 0;

  return (
    <aside className="w-96 h-screen overflow-y-scroll p-5">
        <h1 className="text-4xl font-black">Mi Pedido</h1>
        <p className="text-lg my-5">Podrás ver el resumen y totales de tu pedido</p>
        <div className="p-10">
          {pedido.length === 0 ? (
            <p className="text-center text-2xl">No hay elementos en tu pedido aún</p>
          ) : (
            pedido.map( producto => (
              <ResumenProducto key={producto.id} producto={producto} />
            ) )
          )}
        </div>
        <p>
          Total: {''}
          { formatearDinero(total) }
        </p>

        <form className="w-full">
          <div className="mt-5">
            <input 
              type="submit" 
              className={`${comprobarPedido() ? 'bg-yellow-100' : 'bg-yellow-600 hover:bg-yellow-800'} px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer`}
              name="" 
              id="" 
              value={'Confirmar Pedido'}
              disabled={comprobarPedido()}
            />
          </div>
        </form>
    </aside>
  )
}
