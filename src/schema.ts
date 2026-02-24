import { integer, pgTable, serial, text, timestamp,} from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blogposts', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
});

export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    tag: text("tag").notNull(),
});

export const blogPostsTags = pgTable('blogPostsTags',{
    id: serial('id').primaryKey(),
    blogPostId: integer('blogPost_Id').notNull().references(() => blogPosts.id, { onDelete: "cascade" }),
    tagId: integer('tag_Id').notNull().references(() => tags.id, { onDelete: "cascade" }),
});