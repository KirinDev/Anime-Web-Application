import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import ICarouselDTO from "../dto/ICarouselDTO";
import { CarouselId } from "./carouselId";


interface CarouselProps {
    animeIds: string[];
}

export class Carousel extends AggregateRoot<CarouselProps> {
  get id (): UniqueEntityID {
    return this._id;
  }

  get carouselId (): CarouselId {
    return new CarouselId(this.carouselId.toValue());
  }

  get animeIds (): string[] {
    return this.props.animeIds;
  }

  set animeIds ( value: string[]) {
    this.props.animeIds = value;
  }

  private constructor (props: CarouselProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(carouselDTO: ICarouselDTO, id?: UniqueEntityID): Result<Carousel> {
    const animeIds = carouselDTO.animeIds;

    if (!!animeIds === false || animeIds.length === 0) {
      return Result.fail<Carousel>('Must provide valid animes')
    } else {
      const carousel = new Carousel({ animeIds:animeIds }, id);
      return Result.ok<Carousel>( carousel )
    }
  }
}