import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodeDetail } from "../EpisodeDetail";
import "@testing-library/jest-dom";

describe("EpisodeDetail", () => {
  test("should render the episode details when a valid episode is found", () => {
    const episodeId = "4952";
    render(<EpisodeDetail episodeId={episodeId} />);

    expect(screen.getByText("Winter is Coming")).toBeInTheDocument();
    expect(
      screen.getByAltText("Preview of Episode Winter is Coming")
    ).toBeInTheDocument();
  });

  test("should render an error message when the episode is not found", () => {
    const episodeId = "211111111";
    render(<EpisodeDetail episodeId={episodeId} />);

    expect(
      screen.getByText("Episode not found or of invalid type")
    ).toBeInTheDocument();
  });
});
