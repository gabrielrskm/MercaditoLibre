import { supabase } from "./supabase.ts";
import type { Tables } from "./supabase-schema.ts";

type Category = Tables<"categories">;

export async function getAllCategories(): Promise<Category[]> {
   const { data, error } = await supabase
      .from("categories")
      .select("*");

  if (error) throw new Error(error.message);
  return data;
}

