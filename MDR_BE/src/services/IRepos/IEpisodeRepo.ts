import { Repo } from "../../core/infra/Repo";
import { Episode } from "../../domain/episode";
import { EpisodeId } from "../../domain/episodeId";

export default interface IEpisodeRepo extends Repo<Episode> {
  save(episode: Episode): Promise<Episode>;
  findByDomainId (episodeId: EpisodeId | string): Promise<Episode>;
}