import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../api";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    setLoading(false);
    const { data, error } = await supabase.from("categories").select();
    console.log("Data: ", data);
    setCategories(data);

    //handle errors
  }

  if (loading) return <p className="text-2xl">Loading ..</p>;

  if (!categories.length)
    return <p className="text-2xl">No categories fetched.</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-wide mt-6 mb-é">
        Categories
      </h1>
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <div className="cursor-pointer border-b border-gray-300 mt-8 pb-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
