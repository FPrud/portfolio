import { pgTable, serial, text, timestamp, date } from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blogposts', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
});