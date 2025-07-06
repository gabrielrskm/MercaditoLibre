import ToggleTheme from "./TogleTheme.tsx";

export default function Menu() {
   return (
      <div className="navbar bg-base-100 shadow-sm">
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
                     <a>Inicio</a>
                  </li>
                  <li>
                     <a>Productos</a>
                  </li>
                  <li>
                     <a>Carrito</a>
                  </li>
                  <li>
                     <a href="/login">Iniciar sesion</a>
                  </li>
                  <li>
                     <a href="/register">Registrarse</a>
                  </li>
               </ul>
            </div>
            <a className="btn btn-ghost text-xl lg:hidden">ecommerce</a>
            <a className="btn btn-ghost text-xl hidden lg:flex">ecommerce-deno-supabase</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg">
               <li>
                  <a href="/">Inicio</a>
               </li>
               <li>
                  <a href="/products">Productos</a>
               </li>
               <li>
                  <a href="/cart">Carrito</a>
               </li>
               <li>
                  <a href="/login">Login</a>
               </li>
               <li>
                  <a href="/register">Registrarse</a>
               </li>
            </ul>
         </div>
         <div className="navbar-end">
            <ToggleTheme />
         </div>
      </div>
   );
}
