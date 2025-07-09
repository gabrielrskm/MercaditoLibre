import { PageProps } from "$fresh/server.ts";

export default function Detail(props: PageProps) {
   let { id } = props.params;
   if (!id) id = "1";
   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
         <p>This is the product detail page for product {id}.</p>
         <p>More information about the product will be displayed here.</p>
      </div>
   );
}