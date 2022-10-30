import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import "easymde/dist/easymde.min.css"
import { supabase } from '../../api'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

function EditShop() {
  const [shop, setShop] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetchShop()
    async function fetchShop() {
      if (!id) return
      const { data } = await supabase
        .from('shops')
        .select()
        .filter('id', 'eq', id)
        .single()
      setShop(data)
    }
  }, [id])
  if (!shop) return null
  function onChange(e) {
    setShop(() => ({ ...shop, [e.target.name]: e.target.value }))
  }
  const { title, content } = shop
  async function updateCurrentShop() {
    if (!title || !content) return
    await supabase
      .from('shops')
      .update([
          { title, content }
      ])
      .match({ id })
    router.push('/my-shops')
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Edit shop</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={shop.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMDE value={shop.content} onChange={value => setShop({ ...shop, content: value })} />
      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={updateCurrentShop}>Update Shop</button>
    </div>
  )
}

export default EditShop
