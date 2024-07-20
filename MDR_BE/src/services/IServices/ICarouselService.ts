import { Result } from "../../core/logic/Result";
import ICarouselDTO from "../../dto/ICarouselDTO";


export default interface ICarouselService  {
  createCarousel(carouselDTO: ICarouselDTO): Promise<Result<ICarouselDTO>>;
  updateCarousel(carouselDTO: ICarouselDTO): Promise<Result<ICarouselDTO>>;
  getCarousel(carouselId: string): Promise<Result<ICarouselDTO>>;
}
