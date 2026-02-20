CREATE TABLE "blogposts" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL
);
