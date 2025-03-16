import express from 'express';
import { shortenUrl, redirectUrl } from '../controller/url.controller';

export const urlRouter = express.Router();

urlRouter.post('/shorten', shortenUrl);
urlRouter.get('/:slug', redirectUrl);
