import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    hashtags: z.array(z.string()),
    difficulty: z.string(),
    date: z.date(),
    category: z.string(),
    img: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    author: z.string(),
    soruces: z.array(z.string()),
    tags: z.array(z.string()),
    sectiontitles: z.array(z.string()),
    sections: z.array(z.string()),
  }),
});

export const collections = {
  articles: articleCollection,
};
