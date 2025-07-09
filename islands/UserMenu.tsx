import { useEffect, useState } from "preact/hooks";

export default function UserMenu() {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
   const [username, setUsername] = useState<string | null>(null);

   useEffect(() => {
      const token =
         typeof globalThis !== "undefined" && globalThis.localStorage
            ? globalThis.localStorage.getItem("authToken")
            : null;
      const storedUsername =
         typeof globalThis !== "undefined" && globalThis.localStorage
            ? globalThis.localStorage.getItem("username")
            : null;

      if (token) {
         setIsLoggedIn(true);
         setUsername(storedUsername);
      } else {
         setIsLoggedIn(false);
         setUsername(null);
      }
   }, []);

   const handleLogout = () => {
      if (typeof globalThis !== "undefined" && globalThis.localStorage) {
         globalThis.localStorage.removeItem("authToken");
         globalThis.localStorage.removeItem("username");
      }
      setIsLoggedIn(false);
      setUsername(null);
      if (typeof globalThis !== "undefined" && globalThis.location) {
         globalThis.location.href = "/";
      }
   };

   // Muestra un loader o nada mientras se verifica el estado.
   if (isLoggedIn === null) {
      return <li>...</li>;
   }

   // Si está logueado
   if (isLoggedIn) {
      return (
         <li>
            <span>{username}</span>
            <a href="#" onClick={handleLogout}>
               Cerrar Sesión
            </a>
         </li>
      );
   }
   // Si no está logueado
   else {
      return (
         <>
            <li>
               <a href="/login">Login</a>
            </li>
            <li>
               <a href="/register">Registrarse</a>
            </li>
         </>
      );
   }
}
