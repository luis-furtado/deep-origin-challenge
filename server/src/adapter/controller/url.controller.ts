import { Request, Response, NextFunction } from "express";
import { UrlService } from '../../domain/services/short-url.service';
import { prisma } from "../database/config";

export const shortenUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { url } = req.body;

    if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) {
      res.status(400).json({ error: "Invalid URL" });
      return;
    }

    const shortUrl = await UrlService.createShortUrl(url.trim());
    res.status(201).json({ shortUrl });
  } catch (error) {
    next(error);
  }
};

export const redirectUrl = async (req: Request, res: Response) => {
  const { slug } = req.params;
  const urlEntry = await prisma.url.findUnique({ where: { slug } });
  if (urlEntry) {
    res.redirect(urlEntry.originalUrl);
  } else {
    res.status(404).send("404 Not Found");
  }
};
