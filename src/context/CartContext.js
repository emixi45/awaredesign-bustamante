import { createContext,useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext()

export const CartProvider=({children})=>{
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Productos agregados al carrito',
            showConfirmButton: false,
            timer: 1000
        })
        setCart([...cart, item])
    }
    const isInCart = (id) => {
        
        return cart.some(prod => prod.id === id)/* some devuelve true o false si esta en el carrito*/
    }
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    const cartTotal =() =>{
        
        return cart.reduce((acc,prod)=> acc += prod.precio* prod.cantidad,0)
    }
    const vaciarCarrito = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Queres borrar todo el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Carrito vacio!',
                setCart ([]) /* */
                
              )
            } 
          })
        
    }
    const vaciarTodo = () =>{
      setCart ([])
    }
    const removeItem =(id) =>{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Item eliminado de su carrito',
            showConfirmButton: false,
            timer: 1500
          })
        setCart(cart.filter ((prod)=> prod.id !==id))
    }
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartQuantity,
            cartTotal,
            vaciarCarrito,
            removeItem,
            vaciarTodo
        }}>
            {children}
        </CartContext.Provider>
    )
}