import React from "react";
import { BackgroundGradient } from "./ui/card-gradient";
import Image from "next/image";
import Link from "next/link";
import { post } from "@/types";

interface PostProps {
    post: post;
}

export function Post({ post }: PostProps) {
    return (
        <div className="relative rounded-[22px] min-w-sm p-4 sm:p-10 bg-white dark:bg-black w-full lg:w-1/2">
            <BackgroundGradient className="relative rounded-[22px] p-5 sm:p-10 bg-white dark:bg-zinc-900 w-full">
                <div className="relative w-full h-[200px] items-center justify-center flex">
                    {post.image ? (
                        <Image
                            src={`${post.image}`}
                            alt={post.image}
                            fill
                            className="object-cover"
                        />
                    ) : undefined}
                </div>
                <p className="sm:text-2xl text-black mt-4 my-5 dark:text-white font-light">
                    {post.title}
                </p>

                <p className="text-md text-neutral-600 dark:text-white font-light">
                    {post.summary}
                </p>
                <button className="rounded-full py-1 px-3 flex items-center space-x-1 bg-gray-100 mt-4 text-xs font-medium dark:bg-zinc-800">
                    <Link
                        href={`/blog/${post.id}`}
                        className="dark:text-blue-300 text-sm"
                    >
                        Read more ...
                    </Link>
                </button>
            </BackgroundGradient>
        </div>
    );
}
