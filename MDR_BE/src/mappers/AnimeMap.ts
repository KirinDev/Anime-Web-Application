import { Mapper } from "../core/infra/Mapper";
import { Document, Model } from 'mongoose';
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Anime } from "../domain/anime";
import IAnimeDTO from "../dto/IAnimeDTO";
import { IAnimePersistence } from "../dataschema/IAnimePersistence";

export class AnimeMap extends Mapper<Anime> {
  
  public static toDTO( anime: Anime): IAnimeDTO {
    return {
        id: anime.id.toString(),
        type: anime.type,
        title: anime.title,
        jpTitle: anime.jpTitle,
        description: anime.description,
        studio: anime.studio,
        producers: anime.producers,
        aired: anime.aired,
        status: anime.status,
        genres: anime.genres,
        episodes: anime.episodes,
        duration: anime.duration,
        rate: anime.rate,
        imgUrl: anime.imgUrl
    } as IAnimeDTO;
  }

  public static toDomain (anime: any | Model<IAnimePersistence & Document> ): Anime {
    const animeOrError = Anime.create(
      anime,
      new UniqueEntityID(anime.domainId)
    );

    animeOrError.isFailure ? console.log(animeOrError.error) : '';

    return animeOrError.isSuccess ? animeOrError.getValue() : null;
  }

  public static toPersistence (anime: Anime): any {
    return {
        domainId: anime.id.toString(),
        type: anime.type,
        title: anime.title,
        jpTitle: anime.jpTitle,
        description: anime.description,
        studio: anime.studio,
        producers: anime.producers,
        aired: anime.aired,
        status: anime.status,
        genres: anime.genres,
        episodes: anime.episodes,
        duration: anime.duration,
        rate: anime.rate,
        imgUrl: anime.imgUrl
    }
  }
}