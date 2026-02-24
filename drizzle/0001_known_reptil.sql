CREATE TABLE "blogPostsTags" (
	"id" serial PRIMARY KEY NOT NULL,
	"blogPost_Id" integer NOT NULL,
	"tag_Id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "blogPostsTags" ADD CONSTRAINT "blogPostsTags_blogPost_Id_blogposts_id_fk" FOREIGN KEY ("blogPost_Id") REFERENCES "public"."blogposts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blogPostsTags" ADD CONSTRAINT "blogPostsTags_tag_Id_tags_id_fk" FOREIGN KEY ("tag_Id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;