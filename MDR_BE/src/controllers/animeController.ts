import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";
import { Result } from "../core/logic/Result";
import IAnimeController from './IControllers/IAnimeController';
import IAnimeService from '../services/IServices/IAnimeService';
import IAnimeDTO from '../dto/IAnimeDTO';

@Service()
export default class AnimeController implements IAnimeController {
  constructor(
      @Inject(config.services.anime.name) private animeServiceInstance : IAnimeService
  ) {}

  public async createAnime(req: Request, res: Response, next: NextFunction) {
    try {
      const animeOrError = await this.animeServiceInstance.createAnime(req.body as IAnimeDTO) as Result<IAnimeDTO>;
        
      if (animeOrError.isFailure) {
        return res.status(402).send();
      }

      const animeDTO = animeOrError.getValue();
      return res.json( animeDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updateAnime(req: Request, res: Response, next: NextFunction) {
    try {
      const animeOrError = await this.animeServiceInstance.updateAnime(req.body as IAnimeDTO) as Result<IAnimeDTO>;

      if (animeOrError.isFailure) {
        return res.status(404).send();
      }

      const animeDTO = animeOrError.getValue();
      return res.status(201).json( animeDTO );
    }
    catch (e) {
      return next(e);
    }
  };
}