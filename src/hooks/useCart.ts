import { useEffect, useState, useMemo } from "react"
import { db } from '../data/db'
import type { Book, CartItem } from '../types'

type UseCartReturn = {
  data: Book[]
  cart: CartItem[]
  addToCart: (item: Book) => void
  removeFromCart: (id: Book['id']) => void
  clearCart: () => void
  increaseQuantity: (id: Book['id']) => void
  decreaseQuantity: (id: Book['id']) => void
  isEmpty: boolean
  cartTotal: string
}

export const useCart = (): UseCartReturn => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db)  
  const [cart, setCart] = useState<CartItem[]>(initialCart)
  
  const MAX_ITEMS = 5
  const MIN_ITEMS = 1

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

  function addToCart(item: Book) {
    const itemExists = cart.findIndex((book) => book.id === item.id) 
    if (itemExists >= 0) {
      // Si el libro ya está en el carrito, no lo agregamos de nuevo
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity ++
      setCart(updatedCart)
    } else {
      const newItem : CartItem = {...item, quantity: 1}
      setCart([...cart, newItem])
    }
  }

  function increaseQuantity(id : Book['id']){
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

  function decreaseQuantity(id : Book['id']) {
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

  function removeFromCart(id : Book['id']) {
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