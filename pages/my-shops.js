// pages/my-posts.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../api'

export default function MyShops() {
  const [shops, setShops] = useState([])
  useEffect(() => {
    fetchShops()
  }, [])

  async function fetchShops() {
    const user = supabase.auth.user()
    const { data } = await supabase
      .from('shops')
      .select('*')
      .filter('user_id', 'eq', user.id)
    setShops(data)
  }
  async function deleteShop(id) {
    await supabase
      .from('shops')
      .delete()
      .match({ id })
    fetchShops()
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">My Shops</h1>
      {
        shops.map((shop, index) => (
          <div key={index} className="border-b border-gray-300	mt-8 pb-4">
            <h2 className="text-xl font-semibold">{shop.title}</h2>
            <p className="text-gray-500 mt-2 mb-2">Owner: {shop.user_email}</p>
            <Link href={`/edit-shop/${shop.id}`}><a className="text-sm mr-4 text-blue-500">Edit Shop</a></Link>
            <Link href={`/shops/${shop.id}`}><a className="text-sm mr-4 text-blue-500">View Shop</a></Link>
            <button
              className="text-sm mr-4 text-red-500"
              onClick={() => deleteShop(shop.id)}
            >Delete Shop</button>
          </div>
        ))
      }
    </div>
  )
}
