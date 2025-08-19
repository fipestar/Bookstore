export default function Book({book, addToCart}){
    const { id, name, image, description, price } = book;

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
    
    

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex flex-col h-full">
            {/* Contenedor de imagen con aspect ratio 3:4 */}
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={`/img/${image}.webp`}
                alt={name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">{name}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3 leading-relaxed">{description}</p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-400 line-through">${(price * 1.2).toFixed(0)}</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">17% OFF</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-3">${price.toLocaleString()}</p>
                <button 
                    id={`btn-${id}`}
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 w-full rounded-lg transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={handleAddToCart}
                >
                  🛒 Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
     )
}