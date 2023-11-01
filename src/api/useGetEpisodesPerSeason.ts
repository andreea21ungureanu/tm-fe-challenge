import { useEffect, useState } from "react";
import episodes from "./episodes.json";
import { Episode } from "@/types/Episode";

export const useGetEpisodesPerSeason = (
  targetSeason: number
): Episode[] | Error => {
  const [seasonEpisodes, setSeasonEpisodes] = useState<Episode[] | Error>([]);

  useEffect(() => {
    const filteredEpisodes = episodes.filter(
      (episode) => episode.season === targetSeason
    );

    if (filteredEpisodes.length === 0) {
      setSeasonEpisodes(new Error("Season not found or has no episodes."));
    } else {
      setSeasonEpisodes(filteredEpisodes);
    }
  }, [targetSeason]);

  return seasonEpisodes;
};
