import React from "react";
import PostCardList from "@/components/PostCardList";
import { fetchBlogPosts } from "@/hooks/fetchBlogPosts";

export default async function BlogPage() {
  const { data } = await fetchBlogPosts();
  return (
    <section className="relative container mx-auto my-12 p-4 min-h-screen z-20 items-center justify-center flex flex-col w-full">
      {data ? <PostCardList data={data} /> : <p className="text-2xl">Under construction coming soon..</p>}
    </section>
  );
}
