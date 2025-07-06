
import Menu from "../components/menu.tsx";
import { Card } from '../components/Card.tsx';
import Footer from "../components/Footer.tsx";

export default function Home() {
   
   const list = [
      {
         imageUrl: "https://picsum.photos/500/500",
         title: "Product 1",
      },
      {
         imageUrl: "https://picsum.photos/500/500",
         title: "Product 2",
      },
      {
         imageUrl: "https://picsum.photos/500/500",
         title: "Product 3",
      },
   ];
   return (
      <div className="container h-full bg-base-200 mx-auto">
         <Menu />
         <div className="flex flex-wrap justify-center gap-4 p-4">
            {list.map((item) => (
               Card(item.imageUrl, item.title, "This is a description of the product.")
            ))}
         </div>
         <Footer />
      </div>
   );
}
