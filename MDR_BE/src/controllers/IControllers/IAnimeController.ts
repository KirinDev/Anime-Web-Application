import { Request, Response, NextFunction } from 'express';

export default interface IAnimeController  {
  createAnime(req: Request, res: Response, next: NextFunction);
  updateAnime(req: Request, res: Response, next: NextFunction);
}