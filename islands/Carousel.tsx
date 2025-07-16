import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface CarouselProps {
   images: string[];
}

export default function Carousel({ images }: CarouselProps) {
   const current = useSignal(0);
   const total = images.length;
   let intervalId: number;
   const nextSlide = () => {
      current.value = (current.value + 1) % total;
      restartInterval();
   };
   const prevSlide = () => {
      current.value = (current.value - 1 + total) % total;
      restartInterval();
   };
   const restartInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 3000);
   };

   useEffect(() => {
      intervalId = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalId);
   });

   return (
      <div class="relative w-full max-w-4xl mx-auto overflow-hidden group rounded-md shadow-md">
         
         <div
            class="flex transition-transform duration-700 ease-in-out"
            style={{
               transform: `translateX(-${(current.value * 100) / total}%)`,
               width: `${total * 100}%`,
               minHeight: "250px",
            }}
         >
            {images.map((src) => (
               <img
                  src={src}
                  class="w-full h-[250px] object-cover flex-shrink-0"
                  style={{ width: `${100 / total}%` }}
               />
            ))}
         </div>

         <button
            type="button"
            onClick={prevSlide}
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity "
         >
            &#9668;
         </button>
         <button
            type="button"
            onClick={nextSlide}
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity "
         >
            &#9658;
         </button>
      </div>
   );
}
