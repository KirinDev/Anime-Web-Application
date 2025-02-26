export default interface IAnimeDTO {
    id: string;
    type: string;
    title: string;
    jpTitle: string;
    urlTitle: string;
    description: string;
    studio: string;
    producers: string[];
    aired: string;
    status: string;
    genres: string[];
    episodes: number;
    duration: number;
    rate: string;
    imgUrl: string;
}
  