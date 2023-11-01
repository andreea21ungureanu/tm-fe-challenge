import { renderHook } from "@testing-library/react";
import { useGetEpisode } from "../useGetEpisode";

import episodes from "../episodes.json";

describe("useGetEpisode", () => {
  test("should return an episode when it exists", () => {
    const { result } = renderHook(() => useGetEpisode(4952)); // Replace with an existing episode ID
    expect(result.current).toEqual(
      episodes.find((episode) => episode.id === 4952)
    );
  });

  test("should return an error when the episode does not exist", () => {
    const { result } = renderHook(() => useGetEpisode(12345)); // Replace with a non-existent episode ID
    expect(result.current).toEqual(new Error("Episode not found"));
  });
});
