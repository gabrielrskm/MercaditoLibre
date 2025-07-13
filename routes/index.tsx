import Menu from "../components/menu.tsx";
import { Card } from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import { getAllProducts } from "../connection/product-query.ts";
import Carousel from "../components/Carousel.tsx";
import { Head } from "$fresh/src/runtime/head.ts";

export default async function Home() {
   const list = await getAllProducts();
   if (!list) {
      return <div className="container mx-auto">No products found</div>;
   }
   if (list.length === 0) {
      return <div className="container mx-auto">No products available</div>;
   }

   return (
      <>
         <Head>
            <title>Inicio | MercaditoLibre</title>
            <meta name="description" content="Bienvenido a MercaditoLibre, tu tienda online de confianza." />
         </Head>
         <div className="container h-full bg-base-200 mx-auto">
            <Menu />
            <div className="flex flex-wrap justify-center gap-4 p-4 pt-30">
               <Carousel products={list.filter((x) => x.isfeatured == true)} />
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4 pt-30">
               {list
                  .filter((x) => x.isfeatured == true)
                  .map((item) => (
                     <Card {...item} />
                  ))}
            </div>
            <Footer />
         </div>
      </>
   );
}
