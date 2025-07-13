import { Handlers, PageProps } from "$fresh/server.ts";
import Menu from "../../components/Menu.tsx";
import Footer from "../../components/Footer.tsx";
import { getProductById } from "../../connection/product-query.ts";
import type { Product } from "../../connection/product-query.ts";
import { Head } from "$fresh/src/runtime/head.ts";

export const handler: Handlers<Product | null> = {
   async GET(_req, ctx) {
      const { id } = ctx.params;
      const idNumber = parseInt(id, 10);
      if (isNaN(idNumber)) {
         return new Response("ID inválido", { status: 400 });
      }

      const product = await getProductById(idNumber);
      if (!product) {
         return new Response("Producto no encontrado", { status: 404 });
      }

      return ctx.render(product);
   },
};

export default function DetailPage(props: PageProps<Product>) {
   const product = props.data;

   return (
      <>
         <Head>
            <title>{product.name} | MercaditoLibre</title>
            <meta name="description" content={product.description!} />
         </Head>
         <div className="container h-full bg-base-200 mx-auto">
            <Menu />
            <div id="center" className="flex flex-wrap justify-center gap-4 p-4 pt-30">
               <h1 className="text-2xl font-bold">{product.name}</h1>
               <p className="text-lg">{product.description}</p>
               <p className="text-xl">Precio: ${product.price}</p>
            </div>
            <Footer />
         </div>
      </>
   );
}
