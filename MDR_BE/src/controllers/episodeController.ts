import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from "../../config";
import { Result } from "../core/logic/Result";
import IEpisodeController from './IControllers/IEpisodeController';
import IEpisodeDTO from '../dto/IEpisodeDTO';
import IEpisodeService from '../services/IServices/IEpisodeService';


@Service()
export default class EpisodeController implements IEpisodeController {
  constructor(
      @Inject(config.services.episode.name) private episodeServiceInstance : IEpisodeService
  ) {}

  public async createEpisode(req: Request, res: Response, next: NextFunction) {
    try {
      const episodeOrError = await this.episodeServiceInstance.createEpisode(req.body as IEpisodeDTO) as Result<IEpisodeDTO>;
        
      if (episodeOrError.isFailure) {
        return res.status(402).send();
      }

      const episodeDTO = episodeOrError.getValue();
      return res.json( episodeDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }
  };

  public async updateEpisode(req: Request, res: Response, next: NextFunction) {
    try {
      const episodeOrError = await this.episodeServiceInstance.updateEpisode(req.body as IEpisodeDTO) as Result<IEpisodeDTO>;

      if (episodeOrError.isFailure) {
        return res.status(404).send();
      }

      const episodeDTO = episodeOrError.getValue();
      return res.status(201).json( episodeDTO );
    }
    catch (e) {
      return next(e);
    }
  };
}