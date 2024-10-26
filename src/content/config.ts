import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),  // Transform string to Date object
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		categories: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
