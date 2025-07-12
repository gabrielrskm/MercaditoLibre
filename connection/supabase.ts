import * as supabase_js from "@supabase/supabase-js";
import { Database } from "./supabase-schema.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_KEY") || "";
export const supabase = supabase_js.createClient<Database>(supabaseUrl, supabaseKey)

