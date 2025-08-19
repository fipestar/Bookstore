import Header from './components/header'
import Book from './components/Book'
import './App.css'
import { useCart } from './hooks/useCart'

function App() {

  const { data, cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, isEmpty, cartTotal } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cart={cart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

<main className="flex-1 container mx-auto mt-10 pb-10">
  <h2 className="text-center text-3xl font-bold mb-8">Nuestra Colección de Libros</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {data.map((book) => (
      <Book 
          key={book.id} 
          book={book}   // Asegúrate de que Book acepte props
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
