"use client";

import { formatDate } from "@/actions/formatDate";
import { getBlogPosts } from "@/actions/getBlogPosts";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function blogPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        loadInitialPosts();
    }, []);

    const loadInitialPosts = async () => {
        const initialPosts = await getBlogPosts(5, 0);
        setPosts(initialPosts);
        setOffset(5);
        setHasMore(initialPosts.length === 5);
    };

    const loadMorePosts = async () => {
        const newPosts = await getBlogPosts(5, offset);
        setPosts([...posts, ...newPosts]);
        setOffset(offset + 5);
        setHasMore(newPosts.length === 5);
    };

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="blog-container" className="relative flex flex-col mb-5">

                <div id="vertical-line" className="absolute left-0 top-0 bottom-0 w-0.5 bg-(--color-primary)"></div>

                <div id="posts-col" className="flex flex-col pl-5">
                    {posts.map((blogPost) => (
                        <div
                            key={blogPost.id}
                            className="mb-5 relative last:mb-0"
                        >
                            <div id="junction-line" className="absolute left-0 top-1/2 w-5 h-0.5 bg-(--color-primary) -translate-y-1/2 -translate-x-5"></div>

                            <article
                                id="article"
                                className="flex flex-col border-2 p-5 bg-(--color-background) rounded-md"
                            >
                                <Link href={`/blog/${blogPost.id}`}>
                                    <h1 id="title" className="Horizon text-3xl">
                                        {blogPost.title}
                                    </h1>
                                    <time className="text-gray-600 mb-5 block">
                                        {formatDate(blogPost.createdAt.toISOString())}
                                    </time>
                                </Link>
                                <div id="content" className="self-center text-justify pb-5 whitespace-pre-wrap">
                                    <Markdown>
                                        {blogPost.content}
                                    </Markdown>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            {hasMore && (
                <button
                    onClick={loadMorePosts}
                    className="button self-center"
                >
                    Voir plus
                </button>
            )}
            <Footer />
        </main>
    );
}