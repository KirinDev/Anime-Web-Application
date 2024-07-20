import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';

import config from '../../config';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const userSchema = {
    name: 'userSchema',
    schema: '../persistence/schemas/userSchema',
  };

  const roleSchema = {
    name: 'roleSchema',
    schema: '../persistence/schemas/roleSchema',
  };

  const animeSchema = {
    name: 'animeSchema',
    schema: '../persistence/schemas/animeSchema',
  };

  const episodeSchema = {
    name: 'episodeSchema',
    schema: '../persistence/schemas/episodeSchema',
  };

  const roleController = {
    name: config.controllers.role.name,
    path: config.controllers.role.path
  }

  const animeController = {
    name: config.controllers.anime.name,
    path: config.controllers.anime.path
  }

  const episodeController = {
    name: config.controllers.episode.name,
    path: config.controllers.episode.path
  }

  const roleRepo = {
    name: config.repos.role.name,
    path: config.repos.role.path
  }

  const userRepo = {
    name: config.repos.user.name,
    path: config.repos.user.path
  }

  const animeRepo = {
    name: config.repos.anime.name,
    path: config.repos.anime.path
  }

  const episodeRepo = {
    name: config.repos.episode.name,
    path: config.repos.episode.path
  }

  const roleService = {
    name: config.services.role.name,
    path: config.services.role.path
  }

  const animeService = {
    name: config.services.anime.name,
    path: config.services.anime.path
  }

  const episodeService = {
    name: config.services.episode.name,
    path: config.services.episode.path
  }

  await dependencyInjectorLoader({
    mongoConnection,
    schemas: [
      userSchema,
      roleSchema,
      animeSchema,
      episodeSchema
    ],
    controllers: [
      roleController,
      animeController,
      episodeController
    ],
    repos: [
      roleRepo,
      userRepo,
      animeRepo,
      episodeRepo
    ],
    services: [
      roleService,
      animeService,
      episodeService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
