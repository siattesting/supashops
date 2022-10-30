import { supabase } from "../../api";

export default async function handle(req, res) {
  const categories = await supabase.from("categories").select();
  res.json(categories);
}
