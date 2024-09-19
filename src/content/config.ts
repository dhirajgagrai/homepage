import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        cover: z.string().optional(),
    }),
});

const notes = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        cover: z.string().optional(),
    }),
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        link: z.string().optional(),
    }),
});


const jpg = defineCollection({
    schema: z.object({
        serial: z.number(),
        title: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        width: z.number(),
        height: z.number(),
        date: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
    }),
});

export const collections = { posts, notes, projects, jpg };
