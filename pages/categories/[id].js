import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { supabase } from "../../api";

const Home = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">
        {category.title}
      </h1>
      <p className="text-sm font-light my-4">by {category.id}</p>
      <div className="mt-8">
        <ReactMarkdown className="prose" children={category.content} />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticPaths() {
  const { data, error } = await supabase.from("categories").select("id");

  const paths = data.map((category) => ({
    params: { id: JSON.stringify(category.id) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await supabase
    .from("categories")
    .select()
    .filter("id", "eq", id)
    .single();
  return {
    props: {
      category: data,
    },
  };
}
