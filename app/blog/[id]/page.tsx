import { formatDate } from "@/actions/formatDate";
import Footer from "@/components/Footer";
import { db } from "@/src/db";
import { blogPosts } from "@/src/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function BlogPost({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // Attendre la résolution de params
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
        notFound();
    }

    try {
        const post = await db
            .select()
            .from(blogPosts)
            .where(eq(blogPosts.id, postId))
            .limit(1);

        if (!post || post.length === 0) {
            notFound();
        }

        const blogPost = post[0];

        return (
            <main id="page entière" className="flex flex-col flex-1 p-5 bg-cloud overflow-auto">
                <article id="article" className="flex flex-col">
                    <h1 id="title" className="Horizon text-3xl">{blogPost.title}</h1>
                    <time className="text-gray-600 mb-5 block">
                        {formatDate(blogPost.createdAt.toISOString())}
                    </time>
                    <p id="content" className="self-center text-justify pb-5">
                        {blogPost.content}
                    </p>
                </article>
                <Footer/>
            </main>
        );
    } catch (error) {
        console.error('Erreur lors de la récupération du post:', error);
        notFound();
    }
}