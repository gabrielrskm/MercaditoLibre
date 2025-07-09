import * as supabase_js from "@supabase/supabase-js";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_KEY") || "";
const supabase = supabase_js.createClient(supabaseUrl, supabaseKey);

