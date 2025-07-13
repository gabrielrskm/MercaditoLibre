import UserMenu from "../islands/UserMenu.tsx";
import SidebarCart from "./SidebarCart.tsx";
import ToggleTheme from "../islands/ToggleTheme.tsx";

export default function Menu() {
   return (
      <div className="navbar bg-base-100/50 shadow-sm dropdown fixed z-10 backdrop-blur-lg">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     {" "}
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />{" "}
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-xxl text-2xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
               >
                  <li>
                     <a href="/">Inicio</a>
                  </li>
                  <li>
                     <a href="/products">Productos</a>
                  </li>
                  <UserMenu/>
               </ul>
            </div>
            <span className="text-xl lg:hidden">MercaditoLibre</span>
            <span className="text-xl hidden lg:flex">MercaditoLibre con Deno y Supabase</span>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg">
               <li>
                  <a href="/">Inicio</a>
               </li>
               <li>
                  <a href="/products">Productos</a>
               </li>
               <UserMenu/>
            </ul>
         </div>
         <div className="navbar-end">
            <SidebarCart/>
            <ToggleTheme />
         </div>
      </div>
   );
}
