"use client";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import supabase from "@/utils/supabase/supabase";

type BlogPost = Database["public"]["Tables"]["blogPosts"]["Row"];

export default function PostCardList({ data }: { data: BlogPost[] | null }) {
    const [newPosts, setNewPosts] = useState<BlogPost[] | null>(data);
    useEffect(() => {
        (() => {
            const subscription = supabase
                .channel("blogPosts")
                .on(
                    "postgres_changes",
                    { event: "INSERT", schema: "public", table: "blogPosts" },
                    (payload) => {
                        const newPost = payload.new as BlogPost;
                        setNewPosts((prevPosts) => [...(prevPosts ?? []), newPost]);
                    }
                )
                .subscribe();

            return () => subscription.unsubscribe();
        })();
    }, [supabase]);

    return (
        <div className="flex flex-col gap-10 w-full items-center justify-center">
            {newPosts && newPosts.length > 0 ? (
                newPosts
                    .filter(post => post.content.length > 0)
                    .map((post) => <Post key={post.id} post={post} />)
            ) : (
                <div>No posts yet</div>
            )}
        </div>
    );
}
