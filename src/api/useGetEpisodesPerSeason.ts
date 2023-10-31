import { useEffect, useState } from "react";
import episodes from "./episodes.json";
import { Episode } from "@/types/Episode";

export const useGetEpisodesPerSeason = (targetSeason: number) => {
  const [seasonEpisodes, setSeasonEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const filteredEpisodes = episodes.filter(
      (episode) => episode.season === targetSeason
    );
    setSeasonEpisodes(filteredEpisodes);
  }, [targetSeason]);

  return seasonEpisodes;
};
