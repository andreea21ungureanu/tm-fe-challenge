"use client";

import styled from "styled-components";
import { EpisodeList } from "@/components/Episode/EpisodeList";
import { useGetEpisodesPerSeason } from "@/api/useGetEpisodesPerSeason";
import { CloseButton } from "@/components/Buttons/CloseButton";
import { useSelectedLayoutSegments } from "next/navigation";

const EpisodeListContainer = styled.div`
  display: flex;
  max-height: 500px;

  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default function SeasonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { season: string };
}) {
  const segments = useSelectedLayoutSegments();
  const episodesPerSeason = useGetEpisodesPerSeason(Number(params.season));

  // Due to the way in which we define the id for an episode,
  // the segment array will aways have one element
  const currentSegment = segments[0];

  // Alternative way for retrieving mobile view since Typescript errors
  // On props inside styled components
  const mobileView = false; //window.innerWidth <= 768;

  return (
    <div>
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        {mobileView && currentSegment ? null : (
          <EpisodeList seasonUrl={params.season} episodes={episodesPerSeason} />
        )}
        {children}
        {currentSegment ? <CloseButton seasonUrl={params.season} /> : null}
      </EpisodeListContainer>
    </div>
  );
}
