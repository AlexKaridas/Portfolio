"use client";
import { FetchError, post } from "@/types";
import { PostCard } from "@/components/postCard";
import { fetchBlogPosts } from "@/hooks/fetchBlogPosts";
import { useEffect, useState } from "react";

export default function PostCardList() {
    const [posts, setPosts] = useState<post[] | null>(null);
    const [error, setError] = useState<FetchError | null>(null);
    const [loading, isLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const { blogPosts, error } = await fetchBlogPosts();
            setPosts(blogPosts);
            setError(error);
            isLoading(false);
        };
        fetchData();
    }, []);

    posts && console.log("Posts: ", posts);
    error && console.error("Error: ", error);
    return (
        <div className="flex flex-col gap-10 w-full items-center justify-center">
            {loading && <div>Loading...</div>}
            {!loading && error && <div>Error: {error.message}</div>}
            {!loading && !error && posts && posts.length > 0 ? (
                posts
                    .filter(post => post.content.length > 0)
                    .map((post) => <PostCard key={post.id} post={post} />)

            ) : (
                <div>No posts yet</div>
            )}
        </div>
    );
}
