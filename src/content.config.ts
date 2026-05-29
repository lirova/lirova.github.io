import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Project case studies. Each .md file in src/content/projects is one project.
// IMPORTANT: copy here is anonymized (generic role-based). No real customer,
// people, product, or serial-number names. Review before publishing.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    // One-line pitch shown on the home grid.
    summary: z.string(),
    // Generic industry descriptor, e.g. "Drone-delivery hardware program".
    domain: z.string().optional(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    year: z.string().optional(),
    // Lower = earlier on the page.
    order: z.number().default(99),
    featured: z.boolean().default(true),
    // Optional external link (live demo, repo). Omit if private.
    link: z.string().url().optional(),
  }),
});

export const collections = { projects };
