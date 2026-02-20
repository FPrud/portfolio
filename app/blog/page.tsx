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
        <main id="page entière" className="flex flex-col flex-1 p-5 overflow-auto">
            {posts.map((blogPost) => (
                <article
                    key={blogPost.id}
                    id="article"
                    className="flex flex-col bg-cloud mb-10"
                >
                    <h1 id="title" className="text-center Horizon text-3xl">
                        {blogPost.title}
                    </h1>

                    <time className="text-gray-600 mb-5 block text-center"><Link href={`/blog/${blogPost.id}`}>
                        {new Date(blogPost.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Link>
                    </time>
                    <p id="content" className="self-center text-justify pb-5">
                        {blogPost.content}
                    </p>
                </article>
            ))}
            <Footer />
        </main>
    );
}