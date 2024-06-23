"use client";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";

export default function PostCardList() {
    const [newPosts, setNewPosts] = useState<any>();
    useEffect(() => {
        (async () => {
            const { data, error } = await supabase.from("blogPosts").select()
            console.log(data, error);
            setNewPosts(data)
            const subscription = supabase
                .channel("blogPosts")
                .on(
                    "postgres_changes",
                    { event: "INSERT", schema: "public", table: "blogPosts" },
                    (payload) => setNewPosts((prev) => [...prev, payload.new])
                )
                .subscribe();

            return () => subscription.unsubscribe();
        })()

    }, [supabase]);

    return (
        <div className="flex flex-col gap-10 w-full items-center justify-center">
            {newPosts && newPosts.length > 0 ? (
                newPosts
                    // .filter(post => post.content.length > 0)
                    .map((post) => <Post key={post.id} post={post} />)
            ) : (
                <div>No posts yet</div>
            )}
        </div>
    );
}
