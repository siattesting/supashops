import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(false);
    const { data, error } = await supabase.from("products").select();
    setProducts(data);

    //handle errors
  }

  if (loading) return <p className="text-2xl">Loading ..</p>;

  if (!products.length) return <p className="text-2xl">No products fetched.</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-wide mt-6 mb-é">
        Products
      </h1>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="cursor-pointer border-b border-gray-300 mt-8 pb-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="test-gray-500 mt-2">
              Created by: {product.user_email}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
