import { Episode } from "@/types/Episode";
import episodes from "./episodes.json";

const EpisodeNotFoundError = new Error("Episode not found");

export const useGetEpisode = (episodeId: number): Episode | Error => {
  const foundEpisode = episodes.find((episode) => episode.id === episodeId);

  return foundEpisode ?? EpisodeNotFoundError;
};
