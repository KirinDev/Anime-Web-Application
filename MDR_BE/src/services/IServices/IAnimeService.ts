import { Result } from "../../core/logic/Result";
import IAnimeDTO from "../../dto/IAnimeDTO";

export default interface IAnimeService  {
  createAnime(animeDTO: IAnimeDTO): Promise<Result<IAnimeDTO>>;
  updateAnime(animeDTO: IAnimeDTO): Promise<Result<IAnimeDTO>>;
  getAnime(animeId: string): Promise<Result<IAnimeDTO>>;
  getAnimeByUrlTitle(urlTitle: string): Promise<Result<IAnimeDTO>>;
}