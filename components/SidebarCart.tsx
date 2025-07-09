export default function SidebarCart() {
   return (
      <div className="drawer w-auto">
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button ">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="10" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"/></g></svg>
            </label>
         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
               {/* Sidebar content here */}
               <li>
                  <a>Sidebar Item 1</a>
               </li>
               <li>
                  <a>Sidebar Item 2</a>
               </li>
            </ul>
         </div>
      </div>
   );
}
