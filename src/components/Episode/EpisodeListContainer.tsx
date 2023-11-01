import { useGetEpisodesPerSeason } from "@/api/useGetEpisodesPerSeason";
import { useSelectedLayoutSegments } from "next/navigation";
import { ErrorContainer } from "../Error";
import styled from "styled-components";
import { CloseButton } from "../Buttons/CloseButton";
import { EpisodeList } from "./EpisodeList";
import React from "react";

const EpisodeListStyled = styled.div`
  display: flex;
  max-height: 500px;

  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const EpisodeListContainer = ({
  season,
  children,
}: {
  season: string;
  children: React.ReactNode;
}) => {
  const segments = useSelectedLayoutSegments();
  const episodesPerSeason = useGetEpisodesPerSeason(Number(season));

  // Due to the way in which we define the id for an episode,
  // the segment array will aways have one element
  const currentSegment = segments[0];

  // Alternative way for retrieving mobile view since Typescript errors
  // On props inside styled components
  const mobileView = window.innerWidth <= 768;

  if (episodesPerSeason instanceof Error) {
    return <ErrorContainer text="Episode not found or of invalid type" />;
  } else {
    return (
      <>
        <h1>Episode List: </h1>
        <EpisodeListStyled>
          {mobileView && currentSegment ? null : (
            <EpisodeList seasonUrl={season} episodes={episodesPerSeason} />
          )}
          {children}
          {currentSegment ? <CloseButton seasonUrl={season} /> : null}
        </EpisodeListStyled>
      </>
    );
  }
};
