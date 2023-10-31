"use client";

import styled from "styled-components";
import { EpisodeList } from "@/components/EpisodeList";
import { useGetEpisodesPerSeason } from "@/api/useGetEpisodesPerSeason";

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
  return (
    <div>
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        <EpisodeList
          seasonUrl={params.season}
          episodes={useGetEpisodesPerSeason(Number(params.season))}
        />
        {children}
      </EpisodeListContainer>
    </div>
  );
}
