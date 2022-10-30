import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { supabase } from "../../api";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const initialState = { title: "", content: "" };

function CreateCategory() {
  const [category, setCategory] = useState(initialState);
  const { title, content } = category;
  const router = useRouter();

  function onChange(e) {
    setCategory(() => ({ ...category, [e.target.name]: e.target.value }));
  }

  async function createNewCategory() {
    if (!title || !content) return;
    const user = supabase.auth.user();
    const id = uuid();
    category.id = id;
    const { data, error } = await supabase
      .from("categories")
      .insert([{ title, content, user_id: user.id, user_email: user.email }])
      .single();
    router.push(`/categories/${data.id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new category
      </h1>
      <input
        onChange={onChange}
        name="title"
        value={category.title}
        placeholder="Category title..."
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />

      <SimpleMDE
        value={category.content}
        onChange={(value) => setCategory({ ...category, content: value })}
      />

      <button
        type="button"
        className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewCategory}
      >
        Create Category
      </button>
    </div>
  );
}

export default CreateCategory;
