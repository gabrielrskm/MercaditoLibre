import { Button } from "./Button.tsx";

export function Card(imageUrl: string | null, title: string | null, description: string | null, price: number | null, stock: boolean = false) {
   if (!imageUrl) {
      imageUrl = "https://via.placeholder.com/150"; // Default image if none provided
   }
   if (!title) {
      title = "Producto sin nombre"; // Default title if none provided
   }
   if (!description) {
      description = "Descripción no disponible"; // Default description if none provided
   }
   if (!price) {
      price = 0; // Default price if none provided
   }

   return (
      <div className="card bg-base-100 w-96 shadow-sm p-4">
         <figure className="flex justify-center">
            <img
               className="rounded-lg w-50 h-50 object-cover"
               style={{ aspectRatio: "1 / 1" }}
               src={imageUrl}
               alt={title}
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-between">
           <span className="text-lg font-bold">Precio: ${price}</span>
           {stock ?
             <span className="badge badge-success">En Stock</span> :
             <span className="badge badge-error">Agotado</span>}
           </div>
         </div>
         <div className="card-actions justify-center gap-5">
            {Button({ children: "Comprar" })}
            {Button({ children: "Agregar al Carrito" })}
         </div>
      </div>
   );
}
