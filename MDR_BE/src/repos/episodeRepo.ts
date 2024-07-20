import { Service, Inject } from 'typedi';
import { Document, FilterQuery, Model } from 'mongoose';
import IEpisodeRepo from '../services/IRepos/IEpisodeRepo';
import { IEpisodePersistence } from '../dataschema/IEpisodePersistence';
import { Episode } from '../domain/episode';
import { EpisodeId } from '../domain/episodeId';
import { EpisodeMap } from '../mappers/EpisodeMap';


@Service()
export default class EpisodedRepo implements IEpisodeRepo {
  private models: any;

  constructor(
    @Inject('episodeSchema') private episodeSchema : Model<IEpisodePersistence & Document>,
  ) {}

  private createBaseQuery (): any {
    return {
      where: {},
    }
  }

  public async exists(episode: Episode): Promise<boolean> {
    
    const idX = episode.id instanceof EpisodeId ? (<EpisodeId>episode.id).toValue() : episode.id;

    const query = { domainId: idX}; 
    const episodeDocument = await this.episodeSchema.findOne( query as FilterQuery<IEpisodePersistence & Document>);

    return !!episodeDocument === true;
  }

  public async save(episode: Episode): Promise<Episode> {
    const query = { domainId: episode.id.toString()}; 

    const episodeDocument = await this.episodeSchema.findOne( query );

    try {
      if (episodeDocument === null ) {
        const rawEpisode: any = EpisodeMap.toPersistence(episode);

        const episodeCreated = await this.episodeSchema.create(rawEpisode);

        return EpisodeMap.toDomain(episodeCreated);
      } else {
        episodeDocument.number = episode.number;
        await episodeDocument.save();

        return episode;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId(episodeId: EpisodeId | string): Promise<Episode> {
    const query = { domainId: episodeId};
    const episodeRecord = await this.episodeSchema.findOne( query as FilterQuery<IEpisodePersistence & Document> );

    if( episodeRecord != null) {
      return EpisodeMap.toDomain(episodeRecord);
    }
    else
      return null;
  }
}