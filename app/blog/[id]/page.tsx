export default function Post({ params }: { params: { postId: number } }) {
    console.log('postId: ', params.postId)

    return (
        <section className="container mx-auto my-8 p-4">
            <article className="prose lg:prose-xl">
                {/* <h2>{post?.title}</h2> */}
                {/* <p>{post?.content}</p> */}
            </article>
            <article className="prose lg:prose-xl">
                {/* <p>{post?.summary}</p> */}
            </article>
        </section>
    );
}
