import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import { supabase } from '../api';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

const initialState = { title: '', content: '' };

function CreateShop() {
  const [shop, setShop] = useState(initialState);
  const { title, content } = shop;
  const router = useRouter();

  function onChange(e) {
    setShop(() => ({ ...shop, [e.target.name]: e.target.value }));
  }

  async function createNewShop() {
    if (!title || !content) return;
    const user = supabase.auth.user();
    const id = uuid();
    shop.id = id;
    const { data, error } = await supabase.from('shops')
    .insert([
      { title, content, user_id: user.id, user_email: user.email },
    ])
    .single();
    router.push(`/shops/${data.id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new shop
      </h1>
      <input
        onChange={onChange}
        name="title"
        value={shop.title}
        placeholder="Shop title..."
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />

      <SimpleMDE
        value={shop.content}
        onChange={(value) => setShop({ ...shop, content: value })}
      />


      <button type="button"
        className="mb-4 bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewShop}
      >
        Create Shop
      </button>
    </div>
  );
}

export default CreateShop;
