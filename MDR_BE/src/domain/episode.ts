import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import IEpisodeDTO from "../dto/IEpisodeDTO";
import { EpisodeId } from "./episodeId";

interface EpisodeProps {
  number: number;
  animeId: string;
  episodeUrl: string;
}

export class Episode extends AggregateRoot<EpisodeProps> {
  get id (): UniqueEntityID {
    return this._id;
  }

  get episodeId (): EpisodeId {
    return new EpisodeId(this.episodeId.toValue());
  }

  get number (): number {
    return this.props.number;
  }

  set number ( value: number) {
    this.props.number = value;
  }

  get animeId (): string {
    return this.props.animeId;
  }

  set animeId ( value: string) {
    this.props.animeId = value;
  }

  get episodeUrl (): string {
    return this.props.episodeUrl;
  }

  set episodeUrl ( value: string) {
    this.props.episodeUrl = value;
  }
  
  private constructor (props: EpisodeProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (episodeDTO: IEpisodeDTO, id?: UniqueEntityID): Result<Episode> {
    const number = episodeDTO.number;
    const animeId = episodeDTO.animeId;
    const episodeUrl = episodeDTO.episodeUrl;

    if (!!number === false || !!animeId === false || !!episodeUrl === false) {
      return Result.fail<Episode>('Must provide number, anime and episode URL')
    } else {
      const episode = new Episode({ number: number, animeId: animeId, episodeUrl: episodeUrl}, id);
      return Result.ok<Episode>( episode )
    }
  }
}