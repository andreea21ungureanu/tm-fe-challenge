import { renderHook } from "@testing-library/react";
import episodes from "../episodes.json";
import { useGetEpisodesPerSeason } from "../useGetEpisodesPerSeason";

describe("useGetEpisodesPerSeason", () => {
  test("should return episodes when the season exists", () => {
    const { result } = renderHook(() => useGetEpisodesPerSeason(1));
    expect(result.current).toEqual(
      episodes.filter((episode) => episode.season === 1)
    );
  });

  test("should return an error when the season does not exist", () => {
    const { result } = renderHook(() => useGetEpisodesPerSeason(888));
    expect(result.current).toEqual(
      new Error("Season not found or has no episodes.")
    );
  });

  test("should update state correctly when season changes", () => {
    const { result, rerender } = renderHook(
      ({ targetSeason }) => useGetEpisodesPerSeason(targetSeason),
      {
        initialProps: { targetSeason: 1 },
      }
    );

    expect(result.current).toEqual(
      episodes.filter((episode) => episode.season === 1)
    );

    rerender({ targetSeason: 2 });
    expect(result.current).toEqual(
      episodes.filter((episode) => episode.season === 2)
    );
  });
});
