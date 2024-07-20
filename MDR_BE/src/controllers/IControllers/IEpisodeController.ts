import { Request, Response, NextFunction } from 'express';

export default interface IEpisodeController  {
  createEpisode(req: Request, res: Response, next: NextFunction);
  updateEpisode(req: Request, res: Response, next: NextFunction);
}