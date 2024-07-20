import { Repo } from "../../core/infra/Repo";
import { Carousel } from "../../domain/carousel";
import { CarouselId } from "../../domain/carouselId";


export default interface ICarouselRepo extends Repo<Carousel> {
  save(carousel: Carousel): Promise<Carousel>;
  findByDomainId (carouselId: CarouselId | string): Promise<Carousel>;
}