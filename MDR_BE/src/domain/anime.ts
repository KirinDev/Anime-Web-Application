import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import IAnimeDTO from "../dto/IAnimeDTO";
import { AnimeId } from "./animeId";

interface AnimeProps {
    type: string;
    title: string;
    jpTitle: string;
    urlTitle: string;
    description: string;
    studio: string;
    producers: string[];
    aired: string;
    status: string;
    genres: string[];
    episodes: number;
    duration: number;
    rate: string;
    imgUrl: string;
}

export class Anime extends AggregateRoot<AnimeProps> {
  get id (): UniqueEntityID {
    return this._id;
  }

  get animeId (): AnimeId {
    return new AnimeId(this.animeId.toValue());
  }

  get type (): string {
    return this.props.type;
  }

  get title (): string {
    return this.props.title;
  }

  set title ( value: string) {
    this.props.title = value;
  }

  get jpTitle (): string {
    return this.props.jpTitle;
  }

  get urlTitle (): string {
    return this.props.urlTitle;
  }

  set urlTitle ( value: string) {
    this.props.urlTitle = value;
  }

  get description (): string {
    return this.props.description;
  }

  get studio (): string {
    return this.props.studio;
  }

  get producers (): string[] {
    return this.props.producers;
  }

  get aired (): string {
    return this.props.aired;
  }

  get status (): string {
    return this.props.status;
  }

  get genres (): string[] {
    return this.props.genres;
  }

  get episodes (): number {
    return this.props.episodes;
  }

  get duration (): number {
    return this.props.duration;
  }

  get rate (): string {
    return this.props.rate;
  }

  get imgUrl (): string {
    return this.props.imgUrl;
  }


  private constructor (props: AnimeProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(animeDTO: IAnimeDTO, id?: UniqueEntityID): Result<Anime> {
    const type = animeDTO.type;
    const title = animeDTO.title;
    const jpTitle = animeDTO.jpTitle;
    const urlTitle = animeDTO.urlTitle;
    const description = animeDTO.description;
    const studio = animeDTO.studio;
    const producers = animeDTO.producers;
    const aired = animeDTO.aired;
    const status = animeDTO.status;
    const genres = animeDTO.genres;
    const episodes = animeDTO.episodes;
    const duration = animeDTO.duration;
    const rate = animeDTO.rate;
    const imgUrl = animeDTO.imgUrl;

    if (!!title === false || title.length === 0) {
      return Result.fail<Anime>('Must provide a role name')
    } else {
      const anime = new Anime({ type: type, title: title, jpTitle: jpTitle, urlTitle: urlTitle, description: description, studio: studio, producers: producers, aired: aired, status: status, 
        genres: genres, episodes: episodes, duration: duration, rate: rate, imgUrl: imgUrl }, id);
      return Result.ok<Anime>( anime )
    }
  }
}
