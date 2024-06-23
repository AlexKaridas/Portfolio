import PostCardList from "@/components/PostCardList";

export default async function BlogPage() {
    return (
        <section className="relative container mx-auto my-8 p-4 min-h-screen z-20 items-center justify-center flex flex-col w-full">
            <h2 className="text-3xl font-bold my-10">Latest Posts</h2>
            <PostCardList />
        </section>
    );
}
