import { Head } from "$fresh/src/runtime/head.ts";
import Menu from "../components/Menu.tsx";

export default function Checkout() {
   return (
      <>
         <Head>
            <title>Comprar | MercaditoLibre</title>
            <meta name="description" content="Finaliza tu compra" />
         </Head>
         <div className="container h-full bg-base-200 mx-auto p-6">
            <Menu />
            <div id="center" className="flex flex-col gap-4">
               <h1 className="text-2xl font-bold">Checkout</h1>
               <p className="text-lg">Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
            </div>
         </div>
      </>
   );
}
