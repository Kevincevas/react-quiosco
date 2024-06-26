import { Outlet } from 'react-router-dom'

import Modal from 'react-modal'
import SideBar from '../components/SideBar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// deshace el error de la consola
Modal.setAppElement('#root')

export default function Layout() {

  const {modal} = useQuiosco()
  // console.log(modal)

  return (
    <>
      <div className='md:flex'>
          <SideBar />

          <main className='overflow-y-scroll bg-gray-100 p-3'>      
            <Outlet />
          </main>

          <Resumen />
      </div>

      
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />          
      </Modal>
      
      <ToastContainer />
    </>
  )
}
