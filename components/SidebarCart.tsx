import CartButtonNumber from "../islands/CartButtonNumber.tsx";
import CartSideBarItem from "../islands/CartSideBarItem.tsx";

export default function SidebarCart() {
   return (
      <div className="drawer w-auto">
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button ">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="10" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17" /><path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" /></g></svg>
               <CartButtonNumber/>
            </label>
         </div>
         <div className="drawer-side z-30">
            <label 
              htmlFor="my-drawer" 
              aria-label="close sidebar" 
              className="drawer-overlay fixed inset-0 bg-black/50 z-20 cursor-pointer" 
            />
            <div className="relative z-30 h-full bg-base-100">
              <CartSideBarItem />
            </div>
         </div>
      </div>
   );
}
