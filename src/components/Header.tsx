import type { Book, CartItem } from '../types'
import { useState } from 'react'

type HeaderProps = {
  cart: CartItem[]
  removeFromCart: (id: Book['id']) => void
  increaseQuantity: (id: Book['id']) => void
  decreaseQuantity: (id: Book['id']) => void
  clearCart: () => void
  cartTotal: string
  isEmpty: boolean
}

export default function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartTotal, isEmpty }: HeaderProps) {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <header className="relative h-80 bg-cover bg-center bg-no-repeat shadow-lg" style={{backgroundImage: 'url("/img/bookstore.jpg")'}}>
  
  <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/80 to-white/90 backdrop-blur-sm"></div>

 
  <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-gray-800">
    <div className="text-center mb-8 animate-fade-in">
      <img className="w-40 mx-auto mb-4 drop-shadow-lg hover:scale-105 transition-transform duration-300" src="/img/logo.svg" alt="Logo Librería" />
      <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-sm text-gray-900 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">Bookstore</h1>
      <p className="text-lg md:text-xl text-gray-600 drop-shadow-sm font-medium">Descubre tu próxima gran lectura ✨</p>
    </div>
  </div>

  
  <nav className="absolute top-4 right-4 z-20">
    <div className="relative">
      <button onClick={toggleCart} className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-2">
        <img className="w-8 cursor-pointer filter drop-shadow-md hover:scale-110 transition-transform duration-200" src="/img/carrito.png" alt="Carrito" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

    
      <div className={`absolute right-0 mt-2 w-96 bg-white shadow-2xl border border-gray-100 rounded-xl transition-all duration-300 ${isCartOpen ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'}`}>
        {/* Header del carrito con botón cerrar */}
        <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3 px-4 pt-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
          <h3 className="font-bold text-gray-800 text-lg">🛒 Carrito de Compras</h3>
          <button 
            onClick={toggleCart}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            ×
          </button>
        </div>
       
        <div className="px-4 pb-4">
          {isEmpty ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
              <p className="text-gray-400 text-sm mt-2">¡Agrega algunos libros increíbles!</p>
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="sticky top-0 bg-white">
                    <tr className="border-b-2 border-gray-200 text-gray-600">
                      <th className="pb-3 text-left font-semibold">Libro</th>
                      <th className="pb-3 text-center font-semibold">Cant.</th>
                      <th className="pb-3 text-right font-semibold">Precio</th>
                      <th className="pb-3 text-center font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map( book => (
                    <tr 
                       key={book.id}
                       className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3">
                        <div className="flex items-center space-x-3">
                          <img src={`/img/${book.image}.webp`} alt="Libro" className="w-12 h-16 object-cover rounded-lg shadow-sm" />
                          <div>
                            <p className="font-medium text-gray-800 text-sm leading-tight">{book.name}</p>
                            <p className="text-gray-500 text-xs">${book.price} c/u</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button 
                              type="button"
                              onClick={() => decreaseQuantity(book.id)}
                              className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
                              -
                          </button>
                          <span className="mx-2 font-semibold text-gray-800 min-w-[20px] text-center">{book.quantity || 1}</span>
                          <button 
                              type="button"
                              onClick={() => increaseQuantity(book.id)}
                              className="w-7 h-7 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors">
                              +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <p className="font-bold text-blue-600">${(book.price * book.quantity).toLocaleString()}</p>
                      </td>
                      <td className="py-3 text-center">
                        <button 
                            type="button"
                            onClick={() => removeFromCart(book.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-colors"
                            title="Eliminar del carrito">
                            🗑️
                        </button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total y botones */}
              <div className="mt-4 pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">${cartTotal.toLocaleString()}</span>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    💳 Proceder al Pago
                  </button>
                  <button 
                    onClick={() => {
                      clearCart()
                      setIsCartOpen(true)
                    }}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    🗑️ Vaciar Carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </nav>
</header>

    )
}