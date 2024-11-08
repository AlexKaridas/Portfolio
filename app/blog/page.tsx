import PostCardList from "@/components/PostCardList";
import { fetchBlogPosts } from "@/hooks/fetchBlogPosts";

export default async function BlogPage() {
    const { data } = await fetchBlogPosts();
    return (
        <section className="relative container mx-auto my-12 p-4 min-h-screen z-20 items-center justify-center flex flex-col w-full">
            <h2 className="text-3xl font-bold my-10">Latest Posts</h2>
            <PostCardList data={data} />
        </section>
    );
}
