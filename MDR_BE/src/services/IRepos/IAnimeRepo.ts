import { Repo } from "../../core/infra/Repo";
import { Anime } from "../../domain/anime";
import { AnimeId } from "../../domain/animeId";

export default interface IAnimeRepo extends Repo<Anime> {
  save(anime: Anime): Promise<Anime>;
  findByDomainId (animeId: AnimeId | string): Promise<Anime>;
  findByUrlTitle (urlTitle: string): Promise<Anime>;
}