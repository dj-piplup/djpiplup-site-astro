import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const figures = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/figures', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			figureImage: z.string(),
			boxImages: z.string().array().optional(),
			mfcLink: z.string(),
			series: z.string(),
			character: z.string(),
			figureLine: z.string().optional()
		}),
});

export const collections = { figures };
