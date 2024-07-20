import { Service, Inject } from 'typedi';
import config from "../../config";
import { Result } from "../core/logic/Result";
import IEpisodeService from './IServices/IEpisodeService';
import IEpisodeRepo from './IRepos/IEpisodeRepo';
import IEpisodeDTO from '../dto/IEpisodeDTO';
import { Episode } from '../domain/episode';
import { EpisodeMap } from '../mappers/EpisodeMap';


@Service()
export default class EpisodeService implements IEpisodeService {
  constructor(
      @Inject(config.repos.episode.name) private episodeRepo : IEpisodeRepo
  ) {}

  public async getEpisode( episodeId: string): Promise<Result<IEpisodeDTO>> {
    try {
      const episode = await this.episodeRepo.findByDomainId(episodeId);

      if (episode === null) {
        return Result.fail<IEpisodeDTO>("Episode not found");
      }
      else {
        const episodeDTOResult = EpisodeMap.toDTO( episode ) as IEpisodeDTO;
        return Result.ok<IEpisodeDTO>( episodeDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }


  public async createEpisode(episodeDTO: IEpisodeDTO): Promise<Result<IEpisodeDTO>> {
    try {

      const episodeOrError = await Episode.create( episodeDTO );

      if (episodeOrError.isFailure) {
        return Result.fail<IEpisodeDTO>(episodeOrError.errorValue());
      }

      const episodeResult = episodeOrError.getValue();

      await this.episodeRepo.save(episodeResult);

      const episodeDTOResult = EpisodeMap.toDTO( episodeResult ) as IEpisodeDTO;
      return Result.ok<IEpisodeDTO>( episodeDTOResult )
    } catch (e) {
      throw e;
    }
  }

  public async updateEpisode(episodeDTO: IEpisodeDTO): Promise<Result<IEpisodeDTO>> {
    try {
      const episode = await this.episodeRepo.findByDomainId(episodeDTO.id);

      if (episode === null) {
        return Result.fail<IEpisodeDTO>("Episode not found");
      }
      else {
        episode.number = episodeDTO.number;
        await this.episodeRepo.save(episode);

        const episodeDTOResult = EpisodeMap.toDTO( episode ) as IEpisodeDTO;
        return Result.ok<IEpisodeDTO>( episodeDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

}