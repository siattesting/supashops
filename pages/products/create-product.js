import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { supabase } from "../api";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const initialState = { title: "", content: "" };

function CreateProduct() {
  const [product, setProduct] = useState(initialState);
  const { title, content } = product;
  const router = useRouter();

  function onChange(e) {
    setProduct(() => ({ ...product, [e.target.name]: e.target.value }));
  }

  async function createNewProduct() {
    if (!title || !content || !price) return;
    const user = supabase.auth.user();
    const id = uuid();
    product.id = id;
    const { data, error } = await supabase
      .from("products")
      .insert([
        { title, content, user_id: user.id, user_email: user.email, price },
      ])
      .single();
    router.push(`/products/${data.id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new product
      </h1>
      <input
        onChange={onChange}
        name="title"
        value={product.title}
        placeholder="Product title..."
        required
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />

      <SimpleMDE
        value={product.content}
        onChange={(value) => setProduct({ ...product, content: value })}
        required
      />

      <input
        onChange={onChange}
        name="title"
        value={product.price}
        type="number"
        placeholder="Product title..."
        required
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />

      <button
        type="button"
        className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewProduct}
      >
        Create Product
      </button>
    </div>
  );
}

export default CreateProduct;
