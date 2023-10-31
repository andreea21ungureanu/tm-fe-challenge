import { useEffect, useState } from "react";
import episodes from "./episodes.json";

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
