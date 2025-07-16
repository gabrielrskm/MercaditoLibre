import { cart } from "../services/cart-service.ts";
import { formatPrice } from "../utils/formatPrice.ts";

export default function CartSideBarItem() {
   return (
      <div className="h-full flex flex-col overflow-hidden">
         <ul className="menu bg-base-200 text-base-content p-4 flex-1 overflow-y-auto">
            {cart.value.map((value) => (
               <li key={value.id} className="mb-4 last:mb-0">
                  <div className="flex items-center gap-4 p-4 bg-base-100 shadow-md rounded-lg w-full max-w-xs">
                     <div className="flex-shrink-0">
                        <img src={value.image} alt={value.name} className="w-16 h-16 object-cover rounded" />
                     </div>

                     <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-semibold truncate">{value.name}</h2>
                        <p className="text-xs text-gray-500 mt-1">Precio: {formatPrice(value.price)}</p>
                        <p className="text-xs text-gray-500 mt-1">Cantidad: {value.quantity}</p>
                     </div>
                  </div>
               </li>
            ))}
         </ul>

         <div className="sticky bottom-0 p-4 bg-base-300 border-t border-base-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <button
               type="button"
               className="btn btn-primary w-full gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
               </svg>
               Finalizar Compra
            </button>
         </div>
      </div>
   );
}
