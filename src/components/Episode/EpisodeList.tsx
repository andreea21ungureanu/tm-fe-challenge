"use client";

import React from "react";
import styled from "styled-components";
import { EpisodeTitleLink } from "./EpisodeTitleLink";
import { Episode } from "@/types/Episode";

export type EpisodeList = {
  episodes: Episode[];
  seasonUrl: string;
};

const StyledEpisodeList = styled.ol`
  margin: 0;
  overflow: scroll;
  flex: 1;

  list-style-type: none;
  padding-inline-start: 0;
`;

export const EpisodeList = ({ episodes = [], seasonUrl }: EpisodeList) => {
  return (
    <StyledEpisodeList aria-label={`Season ${seasonUrl} episodes`}>
      {episodes.map((ep) => (
        <EpisodeTitleLink
          key={ep.id}
          id={ep.id}
          season={ep.season}
          seasonUrl={seasonUrl}
          name={ep.name}
          number={ep.number}
        />
      ))}
    </StyledEpisodeList>
  );
};
