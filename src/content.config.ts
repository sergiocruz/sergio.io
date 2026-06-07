import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('Sergio Cruz'),
    readingTime: z.string().optional(),
    slug: z.string().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    platform: z.string(),
    link: z.string(),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    type: z.string(),
    venue: z.string(),
    link: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    type: z.string(),
    publisher: z.string(),
    link: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  courses,
  videos,
  publications,
};
