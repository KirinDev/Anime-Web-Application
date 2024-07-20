import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Container } from 'typedi';
import config from "../../../config";
import IAnimeController from '../../controllers/IControllers/IAnimeController';

const route = Router();

export default (app: Router) => {
  app.use('/animes', route);

  const ctrl = Container.get(config.controllers.anime.name) as IAnimeController;

  route.post('',
    celebrate({
      body: Joi.object({
        type: Joi.string().required(),
        title: Joi.string().required(),
        jpTitle: Joi.string().required(),
        description: Joi.string().required(),
        studio: Joi.string().required(),
        producers: Joi.array().items(Joi.string()).required(),
        aired: Joi.string().required(),
        status: Joi.string().required(),
        genres: Joi.array().items(Joi.string()).required(),
        episodes: Joi.number().required(),
        duration: Joi.number().required(),
        rate: Joi.string().required(),
        imgUrl: Joi.string().required()
      })
    }),
    (req, res, next) => ctrl.createAnime(req, res, next) );

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        type: Joi.string().required(),
        title: Joi.string().required(),
        jpTitle: Joi.string().required(),
        description: Joi.string().required(),
        studio: Joi.string().required(),
        producers: Joi.array().items(Joi.string()).required(),
        aired: Joi.string().required(),
        status: Joi.string().required(),
        genres: Joi.array().items(Joi.string()).required(),
        episodes: Joi.number().required(),
        duration: Joi.number().required(),
        rate: Joi.string().required(),
        imgUrl: Joi.string().required()
      }),
    }),
    (req, res, next) => ctrl.updateAnime(req, res, next) );

    route.get('/:urlTitle', 
      (req, res, next) => ctrl.getAnimeByUrlTitle(req, res, next));
};