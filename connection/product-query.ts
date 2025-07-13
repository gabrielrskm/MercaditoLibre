import { supabase } from "./supabase.ts";
import type { Tables } from "./supabase-schema.ts";

export type ProductWithImage = Tables<'product_with_image'>;
export type Product = Tables<'products'>;
export type Image = Tables<'images'>;

export async function getAllProducts(): Promise<ProductWithImage[] | null> {
   const { data: product_with_image, error } = await supabase
  .from('product_with_image')
  .select('*');
   if (error) return null;
   return product_with_image as ProductWithImage[];
}


export async function getProductById(id: number): Promise<(Product & { imageUrl: Image[] }) | null> {
   const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
   if (error) return null;
   const { data: image, error: imageError } = await supabase
      .from('images')
      .select('*')
      .eq('product_id', id);
   if (imageError) return null;
   return { ...product, imageUrl: image } ;
}
