import { Episode } from "@/types/Episode";
import episodes from "./episodes.json";

// TODO: Handle undefined
export const useGetEpisode = (episodeId: number): Episode | undefined => {
  return episodes.find((episode) => episode.id === episodeId);
};
