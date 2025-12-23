import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({}).optional(),
});

export const collections = {
    projects: projectsCollection,
};
