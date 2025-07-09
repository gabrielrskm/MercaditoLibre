
import Menu from "../components/menu.tsx";
import { Card } from '../components/Card.tsx';
import Footer from "../components/Footer.tsx";
import { getProductList } from '../connection/product-query.ts';

export default function Home() {
   
   const list = getProductList();
   return (
      <div className="container h-full bg-base-200 mx-auto">
         <Menu />
         <div className="flex flex-wrap justify-center gap-4 p-4 pt-30">
            {list.map((item) => (
               Card(item.imageUrl, item.name, item.description,item.price,true)
            ))}
         </div>
         <Footer />
      </div>
   );
}
