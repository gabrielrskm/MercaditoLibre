import { ProductWithImage } from "../connection/product-query.ts";
import { Button } from "../islands/Button.tsx";
import { formatPrice } from "../utils/formatPrice.ts";

export function Card(props: ProductWithImage) {
   let { id, image, name, description, price, availablestock } = props;

   if (!id) {
      id = 0;
   }
   if (!image) {
      image = "https://via.placeholder.com/150"; // Default image if none provided
   }
   if (!name) {
      name = "Producto sin nombre"; // Default name if none provided
   }
   if (!description) {
      description = "Descripción no disponible"; // Default description if none provided
   }
   if (!price) {
      price = 0;
   }

   return (
      <div className="card bg-base-100 w-96 shadow-sm p-4">
         <figure className="flex justify-center">
            <a href={`/detail/${props.id}`}>
               <img
                  src={image ? image : "default-image.jpg"}
                  className="rounded-lg w-50 h-50 object-cover"
                  alt={`Ver detalles de ${name || id}`}
                  style={{ cursor: "pointer", aspectRatio: "1 / 1" }}
               />
            </a>
         </figure>
         <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-between">
               <span className="text-lg font-bold">Precio: {formatPrice(price)}</span>
               {availablestock ? (
                  <span className="badge badge-success">En Stock</span>
               ) : (
                  <span className="badge badge-error">Agotado</span>
               )}
            </div>
         </div>
         <div className="card-actions justify-center gap-5">
            <Button action="buy" product={{ id, image, name, price }}>
               Comprar
            </Button>
            <Button action="cart" product={{ id, image, name, price }}>
               Agregar al Carrito
            </Button>
         </div>
      </div>
   );
}
