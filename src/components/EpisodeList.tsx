"use client";

import React from "react";
import styled from "styled-components";
import { EpisodeTitleLink } from "./EpisodeTitleLink";

export type EpisodeList = {
  episodes: Episode[];
};

const StyledEpisodeList = styled.ol`
  margin: 0;
  overflow: scroll;
  flex: 1;

  list-style-type: none;
  padding-inline-start: 0;
`;

export const EpisodeList = ({ episodes = [] }: EpisodeList) => {
  return (
    <StyledEpisodeList>
      {episodes.map((ep) => (
        <EpisodeTitleLink
          key={ep.id}
          id={ep.id}
          season={ep.season}
          episodeName={ep.name}
          episodeNumber={ep.number}
        />
      ))}
    </StyledEpisodeList>
  );
};
