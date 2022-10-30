import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../api";

export default function Home() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, []);

  async function fetchShops() {
    setLoading(false);
    const { data, error } = await supabase.from("shops").select();
    setShops(data);

    //handle errors
  }

  if (loading) return <p className="text-2xl">Loading ..</p>;

  if (!shops.length) return <p className="text-2xl">No shops fetched.</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-wide mt-6 mb-é">Shops</h1>
      {shops.map((shop) => (
        <Link key={shop.id} href={`/shops/${shop.id}`}>
          <div className="cursor-pointer border-b border-gray-300 mt-8 pb-4">
            <h2 className="text-xl font-semibold">{shop.title}</h2>
            <p className="test-gray-500 mt-2">Owner: {shop.user_email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
