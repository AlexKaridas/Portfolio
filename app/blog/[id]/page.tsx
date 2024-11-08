import { fetchBlogPost } from "@/hooks/fetchBlogPost";
import { post } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Post({ params }: { params: { id: number } }) {
    const id = params.id;

    const { data, error } = await fetchBlogPost({ id });
    const post: post | null = data;

    if (!post) {
        return notFound();
    }

    return (
        <div className="py-16 sm:px-4 bg-[#222831] w-full px-0">
            <section className="pb-8">
                {post.image && (
                    <div className="relative mb-4 w-full h-96 pt-20">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                )}
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="w-full px-5 sm:w-3/4 flex items-center justify-center flex-col">
                        <h2 className="text-center text-3xl mb-4 py-20">{post.title}</h2>
                        <article className="pb-20 text-white text-xl leading-loose tracking-wider font-extralight text-center sm:text-left">
                            <p>{post.content}</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
