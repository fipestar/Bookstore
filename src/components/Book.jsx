export default function Book({book, addToCart}){
    const { id, name, image, description, price } = book;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col h-full">
            {/* Contenedor de imagen con aspect ratio 3:4 */}
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                src={`/img/${image}.webp`}
                alt={name} 
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{name}</h3>
              <p className="text-sm text-gray-600 mb-3 flex-1 line-clamp-3">{description}</p>
              <div className="mt-auto">
                <p className="text-xl font-bold text-blue-600 mb-3">${price}</p>
                <button 
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded-lg transition-colors duration-200 font-medium"
                    onClick={() => addToCart(book)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
     )
}