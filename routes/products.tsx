import { Card } from "../components/Card.tsx";
import Filter from "../components/Filter.tsx";
import Footer from "../components/Footer.tsx";
import Menu from "../components/menu.tsx";
import { getProductList } from "../connection/product-query.ts";

export default function Products() {
   const list = getProductList();
   return (
      <div className="container h-full bg-base-200 mx-auto">
         <Menu />
         <div id="center" className="flex flex-row max-md:flex-col max-md:w-full">
            <Filter/>
            <div id="productList" className="w-auto flex flex-wrap justify-center gap-4 p-4 pt-30 max-md:pt-1">
               {list.map((item) => Card(item.imageUrl, item.name, item.description, item.price, true))}
            </div>
         </div>
         <Footer />
      </div>
   );
}
