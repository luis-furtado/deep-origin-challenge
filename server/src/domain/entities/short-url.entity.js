"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortUrl = void 0;
class ShortUrl {
    id;
    slug;
    originalUrl;
    createdAt;
    updatedAt;
    deletedAt;
    constructor(id, slug, originalUrl, createdAt) {
        this.id = id;
        this.slug = slug;
        this.originalUrl = originalUrl;
        this.createdAt = createdAt || new Date();
    }
}
exports.ShortUrl = ShortUrl;
