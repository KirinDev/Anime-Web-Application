import { Service, Inject } from 'typedi';
import config from "../../config";
import { Result } from "../core/logic/Result";
import IAnimeService from './IServices/IAnimeService';
import IAnimeRepo from './IRepos/IAnimeRepo';
import IAnimeDTO from '../dto/IAnimeDTO';
import { AnimeMap } from '../mappers/AnimeMap';
import { Anime } from '../domain/anime';


@Service()
export default class AnimeService implements IAnimeService {
  constructor(
      @Inject(config.repos.anime.name) private animeRepo : IAnimeRepo
  ) {}

  public async getAnime( animeId: string): Promise<Result<IAnimeDTO>> {
    try {
      const anime = await this.animeRepo.findByDomainId(animeId);

      if (anime === null) {
        return Result.fail<IAnimeDTO>("Anime not found");
      }
      else {
        const animeDTOResult = AnimeMap.toDTO( anime ) as IAnimeDTO;
        return Result.ok<IAnimeDTO>( animeDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }


  public async createAnime(animeDTO: IAnimeDTO): Promise<Result<IAnimeDTO>> {
    try {

      const animeOrError = await Anime.create( animeDTO );

      if (animeOrError.isFailure) {
        return Result.fail<IAnimeDTO>(animeOrError.errorValue());
      }

      const animeResult = animeOrError.getValue();

      await this.animeRepo.save(animeResult);

      const animeDTOResult = AnimeMap.toDTO( animeResult ) as IAnimeDTO;
      return Result.ok<IAnimeDTO>( animeDTOResult )
    } catch (e) {
      throw e;
    }
  }

  public async updateAnime(animeDTO: IAnimeDTO): Promise<Result<IAnimeDTO>> {
    try {
      const anime = await this.animeRepo.findByDomainId(animeDTO.id);

      if (anime === null) {
        return Result.fail<IAnimeDTO>("Anime not found");
      }
      else {
        anime.title = animeDTO.title;
        await this.animeRepo.save(anime);

        const animeDTOResult = AnimeMap.toDTO( anime ) as IAnimeDTO;
        return Result.ok<IAnimeDTO>( animeDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

}