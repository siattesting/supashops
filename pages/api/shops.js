import { supabase } from "../../api";

export default async function handle(req, res) {
  const categories = await supabase.from("shops").select();
  res.json(categories);
}
