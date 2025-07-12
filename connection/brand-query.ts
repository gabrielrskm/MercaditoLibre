import { supabase } from "./supabase.ts";
import type { Tables } from "./supabase-schema.ts";

type Brand = Tables<"brands">;

export async function getAllBrands(): Promise<Brand[]> {
   const { data, error } = await supabase
      .from("brands")
      .select("*");

  if (error) throw new Error(error.message);
  return data;
}
