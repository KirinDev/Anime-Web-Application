import { Service, Inject } from 'typedi';
import { Document, FilterQuery, Model } from 'mongoose';
import IAnimeRepo from '../services/IRepos/IAnimeRepo';
import { IAnimePersistence } from '../dataschema/IAnimePersistence';
import { Anime } from '../domain/anime';
import { AnimeId } from '../domain/animeId';
import { AnimeMap } from '../mappers/AnimeMap';

@Service()
export default class AnimeRepo implements IAnimeRepo {
  private models: any;

  constructor(
    @Inject('animeSchema') private animeSchema : Model<IAnimePersistence & Document>,
  ) {}

  private createBaseQuery (): any {
    return {
      where: {},
    }
  }

  public async exists(anime: Anime): Promise<boolean> {
    
    const idX = anime.id instanceof AnimeId ? (<AnimeId>anime.id).toValue() : anime.id;

    const query = { domainId: idX}; 
    const roleDocument = await this.animeSchema.findOne( query as FilterQuery<IAnimePersistence & Document>);

    return !!roleDocument === true;
  }

  public async save (anime: Anime): Promise<Anime> {
    const query = { domainId: anime.id.toString()}; 

    const animeDocument = await this.animeSchema.findOne( query );

    try {
      if (animeDocument === null ) {
        const rawAnime: any = AnimeMap.toPersistence(anime);

        const animeCreated = await this.animeSchema.create(rawAnime);

        return AnimeMap.toDomain(animeCreated);
      } else {
        animeDocument.title = anime.title;
        await animeDocument.save();

        return anime;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId (animeId: AnimeId | string): Promise<Anime> {
    const query = { domainId: animeId};
    const animeRecord = await this.animeSchema.findOne( query as FilterQuery<IAnimePersistence & Document> );

    if( animeRecord != null) {
      return AnimeMap.toDomain(animeRecord);
    }
    else
      return null;
  }
}