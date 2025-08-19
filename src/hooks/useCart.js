import { useEffect, useState, useMemo } from "react"
import { db } from '../data/db'

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const handleAddToCart = () => {
        addToCart(book)
        // Pequeña animación de feedback
        const button = document.getElementById(`btn-${id}`)
        if (button) {
            button.textContent = '✅ ¡Agregado!'
            button.classList.add('bg-green-500', 'hover:bg-green-600')
            button.classList.remove('bg-blue-600', 'hover:bg-blue-700')
            setTimeout(() => {
                button.textContent = 'Agregar al Carrito'
                button.classList.remove('bg-green-500', 'hover:bg-green-600')
                button.classList.add('bg-blue-600', 'hover:bg-blue-700')
            }, 1500)
        }
    }

  const [data] = useState(db)  
  const [cart, setCart] = useState(initialCart)
  
  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

  function addToCart(item) {
    const itemExists = cart.findIndex((book) => book.id === item.id) 
    if (itemExists >= 0) {
      // Si el libro ya está en el carrito, no lo agregamos de nuevo
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity ++
      setCart(updatedCart)
    } else {
      item.quantity = 1; // Asignar una cantidad inicial de 1 al libro
      setCart([...cart, item])
    }
  }

  function increaseQuantity(id){
     const updatedCart = cart.map(item => {
       if(item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
       }
        return item; // Retornar el item sin cambios si no se cumple la condición
     }) 
     setCart(updatedCart)
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item; // Retornar el item sin cambios si no se cumple la condición
    })
    setCart(updatedCart)
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(book => book.id !== id))
  }

  function clearCart(){
    setCart([])
  }     

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toLocaleString(), [cart])
   return {
    data,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    isEmpty,
    cartTotal
   }
}