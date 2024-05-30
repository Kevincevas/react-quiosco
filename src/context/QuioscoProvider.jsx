import { createContext, useEffect, useState } from 'react'
import { categorias as categoriasDB } from "../data/categorias"
import { toast } from 'react-toastify';


// Creando el context
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    // Suma los subtotal del pedido
    useEffect(() => {
      const nuevoTotal = pedido.reduce( (total, producto) => (producto.precio * producto.cantidad) + total, 0 )
      setTotal(nuevoTotal)
    }, [pedido])
    
    
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]

        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    // Actualiza el pedido del cliente
                                // Elimina los atributos que no se require, regresa lo que no se haya aplicado destructuracion
    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        // toma una copia de lo que haya en pedido y agrega el producto nuevo
        // some: comprueba si el elemento existen en el pedido
        if (pedido.some( pedidoState => pedidoState.id === producto.id )) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }

    const handleEditarCantidad = (id) => {
        const productoActualizar = pedido.filter( producto => producto.id === id )[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = (id) => {
        // Regresa un arreglo nuevo con los pedidos excepto el eliminado
        const pedidoActualizado = pedido.filter( producto => producto.id !== id )
        setPedido(pedidoActualizado)
        toast.success('Producto eliminado del pedido')
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
            }}
        >
            {children}   
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;