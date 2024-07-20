import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";

import { Result } from "../core/logic/Result";
import ICarouselController from './IControllers/ICarouselController';
import ICarouselService from '../services/IServices/ICarouselService';
import ICarouselDTO from '../dto/ICarouselDTO';

@Service()
export default class CarouselController implements ICarouselController {
    
  constructor(
      @Inject(config.services.role.name) private carouselServiceInstance : ICarouselService
  ) {}

  public async createCarousel(req: Request, res: Response, next: NextFunction) {
    try {
      const carouselOrError = await this.carouselServiceInstance.createCarousel(req.body as ICarouselDTO) as Result<ICarouselDTO>;
        
      if (carouselOrError.isFailure) {
        return res.status(402).send();
      }

      const carouselDTO = carouselOrError.getValue();
      return res.json( carouselDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updateCarousel(req: Request, res: Response, next: NextFunction) {
    try {
      const carouselOrError = await this.carouselServiceInstance.updateCarousel(req.body as ICarouselDTO) as Result<ICarouselDTO>;

      if (carouselOrError.isFailure) {
        return res.status(404).send();
      }

      const carouselDTO = carouselOrError.getValue();
      return res.status(201).json( carouselDTO );
    }
    catch (e) {
      return next(e);
    }
  };
}