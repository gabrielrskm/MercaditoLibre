import { getAllBrands } from "../connection/brand-query.ts";
import { getAllCategories } from "../connection/category-query.ts";

const categoryList = await getAllCategories();
const brandList = await getAllBrands();

export default function Filter() {
   return (
      <>
         {/* Versión Desktop - Sidebar fijo */}
         <div className="hidden md:block w-auto p-4 mt-20 bg-base-300">
            <h2 className="font-bold text-lg w-48">Filtros</h2>
            <div className="form-control w-48">
               <label className="label">
                  <span className="label-text pt-5 pb-5">Categoría</span>
               </label>
               <select className="select select-bordered">
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
               <select className="select select-bordered">
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
               <select className="select select-bordered">
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
               <select className="select select-bordered">
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

         {/* Versión Mobile - Dropdown */}
         <div className="md:hidden w-full p-4 mt-20 bg-base-300">
            <div className="dropdown dropdown-bottom w-full">
               <div tabIndex={0} role="button" className="btn btn-outline w-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filtros
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                     <path d="m7 10 5 5 5-5z"/>
                  </svg>
               </div>
               <div tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-full">
                  <div className="form-control w-full space-y-4">
                     <div>
                        <label className="label">
                           <span className="label-text">Categoría</span>
                        </label>
                        <select className="select select-bordered w-full">
                           <option disabled selected>
                              Elige una categoría
                           </option>
                           {categoryList.map((category) => (
                              <option key={category.id} value={category.name!}>
                                 {category.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     
                     <div>
                        <label className="label">
                           <span className="label-text">Marca</span>
                        </label>
                        <select className="select select-bordered w-full">
                           <option disabled selected>
                              Elige una marca
                           </option>
                           {brandList.map((brand) => (
                              <option key={brand.id} value={brand.name!}>
                                 {brand.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     
                     <div>
                        <label className="label">
                           <span className="label-text">Precio</span>
                        </label>
                        <select className="select select-bordered w-full">
                           <option disabled selected>
                              Elige un rango de precio
                           </option>
                           <option>Menos de $50</option>
                           <option>$50 - $100</option>
                           <option>Más de $100</option>
                        </select>
                     </div>
                     
                     <div>
                        <label className="label">
                           <span className="label-text">Ordenar por</span>
                        </label>
                        <select className="select select-bordered w-full">
                           <option disabled selected>
                              Elige una opción
                           </option>
                           <option>Menor precio</option>
                           <option>Mayor precio</option>
                        </select>
                     </div>
                     
                     <div>
                        <label className="label">
                           <span className="label-text">Buscar</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" />
                     </div>
                     
                     <input
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        value="Aplicar Filtros"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
