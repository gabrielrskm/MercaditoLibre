

interface Products {
   id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;
   stock?: boolean;
   featured?: boolean;
}

interface CarouselProps {
   products: Products[];
}

export default function Carousel({ products = [] }: CarouselProps) {
   return (
      <div className="carousel w-full">
         {products.map((product, index) => (
            <div id={`slide${index + 1}`} className="carousel-item justify-center relative w-full" key={product.id}>
               <a href={`/products/${product.id}`}>
                  {" "}
                  <img
                     src={product.imageUrl}
                     className="w-100 h-100 rounded-lg object-cover"
                     alt={`Ver detalles de ${product.name || product.id}`}
                     style={{ cursor: "pointer" }}
                  />
               </a>
               <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href={`#slide${index === 0 ? products.length : index}`} className="btn btn-circle">
                     ❮
                  </a>
                  <a href={`#slide${index + 2 > products.length ? 1 : index + 2}`} className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
}
