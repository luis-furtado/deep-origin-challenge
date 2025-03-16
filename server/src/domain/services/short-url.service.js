'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UrlService = void 0;
const config_1 = require('../../adapter/database/config');
async function generateSlug(size) {
  const { nanoid, customAlphabet } = await import('nanoid');
  const nanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', size);
  return nanoId();
}
class UrlService {
  static async createShortUrl(originalUrl) {
    const slug = await generateSlug(6);
    const shortUrl = `http://localhost:4000/${slug}`;
    console.log('originalUrl', originalUrl);
    console.log('shortUrl', shortUrl);
    const exists = await config_1.prisma.url.findUnique({ where: { originalUrl } });
    if (exists) return exists;
    const urlEntry = await config_1.prisma.url.create({
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
  async getOriginalUrl(slug) {
    const urlEntry = await config_1.prisma.url.findUnique({ where: { slug } });
    return urlEntry ? urlEntry.originalUrl : null;
  }
}
exports.UrlService = UrlService;
