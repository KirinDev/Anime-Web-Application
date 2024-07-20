import { Mapper } from "../core/infra/Mapper";
import { Document, Model } from 'mongoose';
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Episode } from "../domain/episode";
import IEpisodeDTO from "../dto/IEpisodeDTO";
import { IEpisodePersistence } from "../dataschema/IEpisodePersistence";

export class EpisodeMap extends Mapper<Episode> {
  
  public static toDTO( episode: Episode): IEpisodeDTO {
    return {
      id: episode.id.toString(),
      number: episode.number,
      animeId: episode.animeId,
      episodeUrl: episode.episodeUrl,
    } as IEpisodeDTO;
  }

  public static toDomain (episode: any | Model<IEpisodePersistence & Document> ): Episode {
    const episodeOrError = Episode.create(
      episode,
      new UniqueEntityID(episode.domainId)
    );

    episodeOrError.isFailure ? console.log(episodeOrError.error) : '';

    return episodeOrError.isSuccess ? episodeOrError.getValue() : null;
  }

  public static toPersistence (episode: Episode): any {
    return {
      domainId: episode.id.toString(),
      number: episode.number,
      animeId: episode.animeId,
      episodeUrl: episode.episodeUrl
    }
  }
}