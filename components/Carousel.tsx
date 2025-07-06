export default function Carousel(images: string[]) {
   
   return (
      <div class="menu-bar float-left cursor-pointer text-white ml-3 m-0 mr-4 h-8 w-8 openNav">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8"
         >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
      </div>
   );
}
