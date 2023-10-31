import { useEffect, useState } from "react";
import episodes from "./episodes.json";

export const useGetSeasonsCount = () => {
  const [seasonCount, setSeasonCount] = useState<number>(0);

  useEffect(() => {
    const uniqueSeasons = new Set<number>();

    episodes.forEach((episode) => {
      uniqueSeasons.add(episode.season);
    });

    setSeasonCount(uniqueSeasons.size);
  }, []);

  return seasonCount;
};
