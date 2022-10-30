// pages/my-posts.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../api";

export default function MyProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const user = supabase.auth.user();
    const { data } = await supabase
      .from("products")
      .select("*")
      .filter("user_id", "eq", user.id);
    setProducts(data);
  }
  async function deleteProduct(id) {
    await supabase.from("products").delete().match({ id });
    fetchProducts();
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
        My Products
      </h1>
      {products.map((product, index) => (
        <div key={index} className="border-b border-gray-300	mt-8 pb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.price}</p>
          <p className="text-gray-500 mt-2 mb-2">Owner: {product.user_email}</p>
          <Link href={`/edit-product/${product.id}`}>
            <a className="text-sm mr-4 text-blue-500">Edit Product</a>
          </Link>
          <Link href={`/products/${product.id}`}>
            <a className="text-sm mr-4 text-blue-500">View Product</a>
          </Link>
          <button
            className="text-sm mr-4 text-red-500"
            onClick={() => deleteProduct(product.id)}
          >
            Delete Product
          </button>
        </div>
      ))}
    </div>
  );
}
