import { Service, Inject } from 'typedi';

import { Document, FilterQuery, Model } from 'mongoose';
import ICarouselRepo from '../services/IRepos/ICarouselRepo';
import { IHomePersistence } from '../dataschema/IHomePersistence';
import { Carousel } from '../domain/carousel';
import { CarouselId } from '../domain/carouselId';
import { CarouselMap } from '../mappers/CarouselMap';


@Service()
export default class CarouselRepo implements ICarouselRepo {
  private models: any;

  constructor(
    @Inject('carouselSchema') private carouselSchema : Model<IHomePersistence & Document>,
  ) {}

  private createBaseQuery (): any {
    return {
      where: {},
    }
  }

  public async exists(carousel: Carousel): Promise<boolean> {
    
    const idX = carousel.id instanceof CarouselId ? (<CarouselId>carousel.id).toValue() : carousel.id;

    const query = { domainId: idX}; 
    const carouselDocument = await this.carouselSchema.findOne( query as FilterQuery<IHomePersistence & Document>);

    return !!carouselDocument === true;
  }

  public async save (carousel: Carousel): Promise<Carousel> {
    const query = { domainId: carousel.id.toString()}; 

    const carouselDocument = await this.carouselSchema.findOne( query );

    try {
      if (carouselDocument === null ) {
        const rawCarousel: any = CarouselMap.toPersistence(carousel);

        const roleCreated = await this.carouselSchema.create(rawCarousel);

        return CarouselMap.toDomain(roleCreated);
      } else {
        carouselDocument.animeIds = carousel.animeIds;
        await carouselDocument.save();

        return carousel;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId (carouselId: CarouselId | string): Promise<Carousel> {
    const query = { domainId: carouselId};
    const carouselRecord = await this.carouselSchema.findOne( query as FilterQuery<IHomePersistence & Document> );

    if( carouselRecord != null) {
      return CarouselMap.toDomain(carouselRecord);
    }
    else
      return null;
  }
}