import Header from './components/Header'
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

<main className="flex-1 container mx-auto mt-12 pb-16 px-4">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
      📚 Nuestra Colección de Libros
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Descubre historias increíbles, conocimiento profundo y aventuras sin límites en nuestra cuidadosa selección de libros.
    </p>
    <div className="flex justify-center mt-6">
      <div className="bg-blue-50 px-6 py-3 rounded-full">
        <span className="text-blue-600 font-semibold">✨ {data.length} libros disponibles ✨</span>
      </div>
    </div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {data.map((book) => (
      <Book 
          key={book.id} 
          book={book}
          addToCart={addToCart}
      />
    ))}
  </div>
</main>

<footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 mt-auto">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <div className="mb-4">
        <img className="w-16 mx-auto mb-3 opacity-80" src="/img/logo.svg" alt="Logo Librería" />
        <h3 className="text-white text-xl font-bold mb-2">📚 BookStore</h3>
        <p className="text-gray-300 text-sm max-w-md mx-auto">
          Tu librería online de confianza. Descubre, aprende y disfruta con los mejores libros.
        </p>
      </div>
      
      <div className="border-t border-gray-700 pt-4 mt-6">
        <p className="text-gray-400 text-sm">
          © 2025 BookStore - Todos los derechos reservados | Hecho con ❤️ para los amantes de la lectura
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default App
