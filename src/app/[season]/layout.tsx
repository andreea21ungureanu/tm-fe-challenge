"use client";

import styled, { css } from "styled-components";
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

const episodeListMobileStyles = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

const EpisodeListMobileContainer = styled.div`
  ${episodeListMobileStyles}
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

  return (
    <div>
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        <EpisodeListMobileContainer hideOnMobile={!!currentSegment}>
          <EpisodeList seasonUrl={params.season} episodes={episodesPerSeason} />
        </EpisodeListMobileContainer>
        {children}
        {currentSegment ? <CloseButton seasonUrl={params.season} /> : null}
      </EpisodeListContainer>
    </div>
  );
}
