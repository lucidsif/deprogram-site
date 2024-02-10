// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const blogPostSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: blogPostSchema,
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};

export type BlogPost = z.infer<typeof blogPostSchema>;
