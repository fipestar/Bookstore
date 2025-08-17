import { useState } from 'react'
import Header from './components/header'
import Book from './components/Book'
import { db } from './data/db'
import './App.css'

function App() {

  const [data, setData] = useState(db)  
  const [cart, setCart] = useState([])

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cart={cart}
      />

<main className="flex-1 container mx-auto mt-10 pb-10">
  <h2 className="text-center text-3xl font-bold mb-8">Nuestra Colección de Libros</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {data.map((book) => (
      <Book 
          key={book.id} 
          book={book}   // Asegúrate de que Book acepte props
          setCart={setCart} 
          addToCart={addToCart}
      />
    ))}
  </div>
</main>

<footer className="bg-gray-800 py-6 mt-auto">
  <p className="text-center text-white text-lg">BookStore - Todos los derechos reservados</p>
</footer>

    </div>
  )
}

export default App
