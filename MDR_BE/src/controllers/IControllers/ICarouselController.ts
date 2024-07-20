import { Request, Response, NextFunction } from 'express';

export default interface ICarouselController  {
  createCarousel(req: Request, res: Response, next: NextFunction);
  updateCarousel(req: Request, res: Response, next: NextFunction);
}