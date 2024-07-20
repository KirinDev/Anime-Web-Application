import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';

import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Carousel } from "../domain/carousel";
import ICarouselDTO from "../dto/ICarouselDTO";
import { IHomePersistence } from "../dataschema/IHomePersistence";

export class CarouselMap extends Mapper<Carousel> {
  
  public static toDTO( carousel: Carousel): ICarouselDTO {
    return {
      id: carousel.id.toString(),
      animeIds: carousel.animeIds,
    } as ICarouselDTO;
  }

  public static toDomain (carousel: any | Model<IHomePersistence & Document> ): Carousel {
    const carouselOrError = Carousel.create(
      carousel,
      new UniqueEntityID(carousel.domainId)
    );

    carouselOrError.isFailure ? console.log(carouselOrError.error) : '';

    return carouselOrError.isSuccess ? carouselOrError.getValue() : null;
  }

  public static toPersistence (carousel: Carousel): any {
    return {
      domainId: carousel.id.toString(),
      animeIds: carousel.animeIds
    }
  }
}