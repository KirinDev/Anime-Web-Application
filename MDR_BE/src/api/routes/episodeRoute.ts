import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Container } from 'typedi';
import config from "../../../config";
import IEpisodeController from '../../controllers/IControllers/IEpisodeController';

const route = Router();

export default (app: Router) => {
  app.use('/episodes', route);

  const ctrl = Container.get(config.controllers.episode.name) as IEpisodeController;

  route.post('',
    celebrate({
      body: Joi.object({
        number: Joi.number().required(),
        animeId: Joi.string().required(),
        episodeUrl: Joi.string().required()
      })
    }),
    (req, res, next) => ctrl.createEpisode(req, res, next) );

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        number: Joi.number().required(),
        animeId: Joi.string().required(),
        episodeUrl: Joi.string().required()
      }),
    }),
    (req, res, next) => ctrl.updateEpisode(req, res, next) );
};