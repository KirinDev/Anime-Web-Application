import { Service, Inject } from 'typedi';
import config from "../../config";
import ICarouselService from './IServices/ICarouselService';
import ICarouselDTO from '../dto/ICarouselDTO';
import { Result } from '../core/logic/Result';
import { Carousel } from '../domain/carousel';
import ICarouselRepo from './IRepos/ICarouselRepo';
import { CarouselMap } from '../mappers/CarouselMap';

@Service()
export default class CarouselService implements ICarouselService {
  constructor(
      @Inject(config.repos.role.name) private carouselRepo : ICarouselRepo
  ) {}

  public async getCarousel( carouselId: string): Promise<Result<ICarouselDTO>> {
    try {
      const carousel = await this.carouselRepo.findByDomainId(carouselId);

      if (carousel === null) {
        return Result.fail<ICarouselDTO>("Carousel not found");
      }
      else {
        const carouselDTOResult = CarouselMap.toDTO( carousel ) as ICarouselDTO;
        return Result.ok<ICarouselDTO>( carouselDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }


  public async createCarousel(carouselDTO: ICarouselDTO): Promise<Result<ICarouselDTO>> {
    try {

      const carouselOrError = await Carousel.create( carouselDTO );

      if (carouselOrError.isFailure) {
        return Result.fail<ICarouselDTO>(carouselOrError.errorValue());
      }

      const carouselResult = carouselOrError.getValue();

      await this.carouselRepo.save(carouselResult);

      const carouselDTOResult = CarouselMap.toDTO( carouselResult ) as ICarouselDTO;
      return Result.ok<ICarouselDTO>( carouselDTOResult )
    } catch (e) {
      throw e;
    }
  }

  public async updateCarousel(carouselDTO: ICarouselDTO): Promise<Result<ICarouselDTO>> {
    try {
      const carousel = await this.carouselRepo.findByDomainId(carouselDTO.id);

      if (carousel === null) {
        return Result.fail<ICarouselDTO>("Carousel not found");
      }
      else {
        carousel.animeIds = carouselDTO.animeIds;
        await this.carouselRepo.save(carousel);

        const carouselDTOResult = CarouselMap.toDTO( carousel ) as ICarouselDTO;
        return Result.ok<ICarouselDTO>( carouselDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

}