import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';

import config from "../../../config";
import ICarouselController from '../../controllers/IControllers/ICarouselController';

const route = Router();

export default (app: Router) => {
  app.use('/carousel', route);

  const ctrl = Container.get(config.controllers.carousel.name) as ICarouselController;

  route.post('',
    celebrate({
      body: Joi.object({
        animeIds: Joi.array().items(Joi.string().required()).required()
      })
    }),
    (req, res, next) => ctrl.createCarousel(req, res, next) );

  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        animeIds: Joi.array().items(Joi.string().required()).required()
      }),
    }),
    (req, res, next) => ctrl.updateCarousel(req, res, next) );
};