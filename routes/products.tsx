import { Head } from "$fresh/runtime.ts";
import { Card } from "../components/Card.tsx";
import Filter from "../components/Filter.tsx";
import Footer from "../components/Footer.tsx";
import Menu from "../components/Menu.tsx";
import { getAllProducts } from "../connection/product-query.ts";

export default async function Products() {
   const list = await getAllProducts();
   if (!list) {
      return <div>No products found</div>;
   }

   return (
      <>
         <Head>
            <title>Productos | MercaditoLibre</title>
            <meta name="description" content="Explorá todos los productos disponibles en nuestra tienda online hecha con Fresh y Supabase." />
         </Head>
         <div className="container h-full bg-base-200 mx-auto">
            <Menu />
            <div id="center" className="flex flex-row max-md:flex-col max-md:w-full">
               <Filter />
               <div id="productList" className="w-auto flex flex-wrap justify-center gap-4 p-4 pt-30 max-md:pt-1">
                  {list.map((item) => (
                     <Card {...item} />
                  ))}
               </div>
            </div>
            <Footer />
         </div>
      </>
   );
}