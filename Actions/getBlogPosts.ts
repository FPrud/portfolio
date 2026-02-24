"use server";

import { db } from "@/src/db";
import { blogPosts } from "@/src/schema";
import { desc, eq, gt, lt } from "drizzle-orm";

export async function getBlogPosts(limit: number = 5, offset: number = 0) {
    const posts = await db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.id))
        .limit(limit)
        .offset(offset);

    return posts;
}

export async function getBlogPostById(id: number) {
    const post = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.id, id))
        .limit(1);

    return post.length > 0 ? post[0] : null;
}

export async function getNextBlogPost(currentId: number) {
    const post = await db
        .select()
        .from(blogPosts)
        .where(gt(blogPosts.id, currentId))
        .orderBy(blogPosts.id)
        .limit(1);

    return post.length > 0 ? post[0] : null;
}

export async function getPreviousBlogPost(currentId: number) {
    const post = await db
        .select()
        .from(blogPosts)
        .where(lt(blogPosts.id, currentId))
        .orderBy(desc(blogPosts.id))
        .limit(1);

    return post.length > 0 ? post[0] : null;
}