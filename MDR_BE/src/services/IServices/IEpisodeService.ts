import { Result } from "../../core/logic/Result";
import IEpisodeDTO from "../../dto/IEpisodeDTO";

export default interface IEpisodeService  {
  createEpisode(animeDTO: IEpisodeDTO): Promise<Result<IEpisodeDTO>>;
  updateEpisode(animeDTO: IEpisodeDTO): Promise<Result<IEpisodeDTO>>;
  getEpisode(episodeId: string): Promise<Result<IEpisodeDTO>>;
}