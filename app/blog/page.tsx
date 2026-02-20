import { formatDate } from "@/actions/formatDate";
import Footer from "@/components/Footer";
import { db } from "@/src/db";
import { blogPosts } from "@/src/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export default async function blogPage() {
    // Récupérer les 5 posts les plus récents
    const posts = await db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.id))
        .limit(5);

    return (
        <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
            <div id="blog-container" className="relative flex flex-col">

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
                                <p id="content" className="self-center text-justify pb-5">
                                    {blogPost.content}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}