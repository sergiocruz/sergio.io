import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.string(),
    link: z.string(),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    type: z.string(), // Conference, Meetup, Workshop, Keynote
    venue: z.string(),
    link: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    type: z.string(), // Technical Article, Tutorial Series, Book Chapter
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