import { useState } from 'react'
export default function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal }) {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <header className="relative h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/img/bookstore.jpg")'}}>
  
  <div className="absolute inset-0 bg-white bg-opacity-85 backdrop-blur-sm"></div>

 
  <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-gray-800">
    <div className="text-center mb-8">
      <img className="w-40 mx-auto mb-4 drop-shadow-md" src="/img/logo.svg" alt="Logo Librería" />
      <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-sm text-gray-900">Bookstore</h1>
      <p className="text-lg md:text-xl text-gray-600 drop-shadow-sm">Descubre tu próxima gran lectura</p>
    </div>
  </div>

  
  <nav className="absolute top-4 right-4 z-20">
    <div className="relative">
      <button onClick={toggleCart} className="focus:outline-none">
        <img className="w-8 cursor-pointer filter drop-shadow-md hover:scale-110 transition-transform" src="/img/carrito.png" alt="Carrito" />
      </button>

    
      <div className={`absolute right-0 mt-2 w-80 bg-white shadow-lg p-4 rounded-lg transition-opacity duration-200 ${isCartOpen ? 'block' : 'hidden'}`}>
        {/* Header del carrito con botón cerrar */}
        <div className="flex justify-between items-center mb-3 border-b pb-2">
          <h3 className="font-semibold text-gray-800">Carrito de Compras</h3>
          <button 
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold focus:outline-none"
          >
            ×
          </button>
        </div>
       
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">El carrito está vacío</p>
        ) : (
          <>
            <table className="w-full text-sm text-left mt-3 border-collapse">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="pb-2">Imagen</th>
                  <th className="pb-2">Nombre</th>
                  <th className="pb-2">Precio</th>
                  <th className="pb-2">Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map( book => (
                <tr 
                   key={book.id}
                   className="border-b">
                  <td>
                    <img src={`/img/${book.image}.webp`} alt="Libro" className="w-12 h-16 object-cover rounded" />
                  </td>
                  <td className="px-2">{book.name}</td>
                  <td className="font-semibold">${book.price}</td>
                  <td className="flex items-center gap-2">
                    <button 
                        type="button"
                        onClick={() => decreaseQuantity(book.id)}
                        className="px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-700">-</button>
                    <span>{book.quantity || 1}</span>
                    <button 
                        type="button"
                        onClick={() => increaseQuantity(book.id)}
                        className="px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-700">+</button>
                  </td>
                  <td>
                    <button 
                        type="button"
                        onClick={() => removeFromCart(book.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-400">X</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>

            <p className="text-right font-semibold mt-3">
              Total: <span>${cartTotal}</span>
            </p>
          </>
        )}

    
        <button 
          onClick={() => {
            // Aquí irá la lógica para vaciar el carrito
            clearCart()
            setIsCartOpen(true)
          }}
          className="w-full mt-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
        >
          {isEmpty ? 'El carrito está vacío' : 'Vaciar Carrito'}
        </button>
      </div>
    </div>
  </nav>
</header>

    )
}