import { prisma } from "../../adapter/database/config";

async function generateSlug(size: number) {
  const { nanoid, customAlphabet } = await import("nanoid");
  const nanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', size);
  return nanoId();
}

export class UrlService {
  static async createShortUrl(originalUrl: string): Promise<{}> {
    const slug = await generateSlug(6);
    const shortUrl = `http://localhost:4000/${slug}`;

    console.log('originalUrl', originalUrl);
    console.log('shortUrl', shortUrl);

    const exists = await prisma.url.findUnique({ where: { originalUrl } });

    if (exists) return exists;

    const urlEntry = await prisma.url.create({
      data: {
        slug,
        originalUrl,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
    });

    return urlEntry;
  }

  async getOriginalUrl(slug: string): Promise<string | null> {
    const urlEntry = await prisma.url.findUnique({ where: { slug } });
    return urlEntry ? urlEntry.originalUrl : null;
  }
}
