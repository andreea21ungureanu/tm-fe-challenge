"use client";

import styled from "styled-components";
import { EpisodeList } from "@/components/EpisodeList";
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
  params: { season: string; episode: string };
}) {
  const segments = useSelectedLayoutSegments();

  // Due to the way in which we define the id for an episode,
  // the segment array will aways have one element
  const currentSegment = segments[0];

  return (
    <div>
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        <EpisodeList
          seasonUrl={params.season}
          episodes={useGetEpisodesPerSeason(Number(params.season))}
        />
        {children}
        {currentSegment ? <CloseButton seasonUrl={params.season} /> : undefined}
      </EpisodeListContainer>
    </div>
  );
}
