import { Button } from "./Button.tsx";

export function Card(imageUrl: string, title: string, description: string, price: number = 0, stock: boolean = false) {
   return (
      <div className="card bg-base-100 w-96 shadow-sm p-4">
         <figure className="flex justify-center">
            <img
               className="rounded-lg  w-[200px] h-[200px]"
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
             <span className="badge badge-error">En Stock</span> :
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
