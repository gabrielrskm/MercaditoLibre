import { getAllBrands } from "../connection/brand-query.ts";
import { getAllCategories } from "../connection/category-query.ts";

const categoryList = await getAllCategories();
const brandList = await getAllBrands();

export default function Filter() {

   return (
      <div id="filter" className="w-auto p-4 mt-20 max-md:pt-20 bg-base-300">
         <h2 className="font-bold text-lg w-48 ">Filtros</h2>
         <div className="form-control w-48">
            <label className="label">
               <span className="label-text pt-5 pb-5">Categoría</span>
            </label>
            <select className="select select-bordered ">
               <option disabled selected>
                  Elige una categoría
               </option>
               {categoryList.map((category) => (
                  <option key={category.id} value={category.name!}>
                     {category.name}
                  </option>
               ))}
            </select>
            <label className="label">
               <span className="label-text pt-5 pb-5">Marca</span>
            </label>
            <select className="select select-bordered ">
               <option disabled selected>
                  Elige una marca
               </option>
               {brandList.map((brand) => (
                  <option key={brand.id} value={brand.name!}>
                     {brand.name}
                  </option>
               ))}
            </select>
            <label className="label">
               <span className="label-text pt-5 pb-5">Precio</span>
            </label>
            <select className="select select-bordered ">
               <option disabled selected>
                  Elige un rango de precio
               </option>
               <option>Menos de $50</option>
               <option>$50 - $100</option>
               <option>Más de $100</option>
            </select>
            <label className="label">
               <span className="label-text pt-5 pb-5">Ordenar por</span>
            </label>
            <select className="select select-bordered ">
               <option disabled selected>
                  Elige una opción
               </option>
               <option>Menor precio</option>
               <option>Mayor precio</option>
            </select>
            <label className="label">
               <span className="label-text pt-5 pb-5">Buscar</span>
            </label>
            <input type="text" className="input input-bordered w-full" />
            <input
               type="submit"
               className="btn btn-primary mt-4"
               value="Aplicar Filtros"
            />
         </div>
      </div>
   );
}
