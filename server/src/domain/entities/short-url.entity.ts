export class ShortUrl {
    id: string;
    slug: string;
    originalUrl: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  
    constructor(id: string, slug: string, originalUrl: string, createdAt?: Date) {
      this.id = id;
      this.slug = slug;
      this.originalUrl = originalUrl;
      this.createdAt = createdAt || new Date();
    }
  }