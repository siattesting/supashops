import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { supabase } from '../../api'

export default function Shop({ shop }) {
  const router = useRouter()
  if (router.isFallback) {
    return (<div>Loading...</div>)
  }

  return (
    <div>
      <h1 className="text-5l mt-4 font-semibold tarcking-wide">{shop.title}</h1>
      <p className="text-sm font-light my-4"> by {shop.user_email}</p>
      <div className="mt-8">
        <ReactMarkdown className="prose" children={shop.content} />
        </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('shops').select('id')

  const paths = data.map(shop => ({ params: { id: JSON.stringify(shop.id) }}))
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { data } = await supabase.from('shops').select().filter('id', 'eq', id).single()

  return {
    props: {
      shop: data
    }
  }
}
