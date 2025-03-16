"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectUrl = exports.shortenUrl = void 0;
const short_url_service_1 = require("../../domain/services/short-url.service");
const config_1 = require("../database/config");
const shortenUrl = async (req, res, next) => {
    try {
        const { url } = req.body;
        if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) {
            res.status(400).json({ error: "Invalid URL" });
            return;
        }
        const shortUrl = await short_url_service_1.UrlService.createShortUrl(url.trim());
        res.status(201).json({ shortUrl });
    }
    catch (error) {
        next(error);
    }
};
exports.shortenUrl = shortenUrl;
const redirectUrl = async (req, res) => {
    const { slug } = req.params;
    const urlEntry = await config_1.prisma.url.findUnique({ where: { slug } });
    if (urlEntry) {
        res.redirect(urlEntry.originalUrl);
    }
    else {
        res.status(404).send("404 Not Found");
    }
};
exports.redirectUrl = redirectUrl;
