import { formatDate } from "@/Actions/formatDate";
import { getBlogPostById, getNextBlogPost, getPreviousBlogPost } from "@/Actions/getBlogPosts";
import Footer from "@/Components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";

export default async function BlogPost({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
        notFound();
    }

    const blogPost = await getBlogPostById(postId);

    if (!blogPost) {
        notFound();
    }

    const previousPost = await getPreviousBlogPost(postId);
    const nextPost = await getNextBlogPost(postId);

    return (
        <div id="page entière" className="flex flex-col flex-1 p-5 overflow-auto">
            <article id="article" className="flex flex-col mb-5">
                <h1 id="title" className="Horizon text-3xl">{blogPost.title}</h1>
                <time className="text-gray-600 mb-5 block">
                    {formatDate(blogPost.createdAt.toISOString())}
                </time>
                <div id="content" className="self-center text-justify whitespace-pre-wrap">
                    <Markdown>{blogPost.content}</Markdown>
                </div>
            </article>

            <div id="page-navigation" className="flex justify-between">
                {previousPost ? (
                    <Link href={`/blog/${previousPost.id}`}>
                        <button className="button">
                            Page précédente
                        </button>
                    </Link>
                ) : (
                    <div></div>
                )}

                {nextPost ? (
                    <Link href={`/blog/${nextPost.id}`}>
                        <button className="button">
                            Page suivante
                        </button>
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>

            <Footer />
        </div>
    );
}