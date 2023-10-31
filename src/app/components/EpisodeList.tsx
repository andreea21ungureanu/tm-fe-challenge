"use client";

import React from "react";
import styled from "styled-components";

const StyledEpisodeList = styled.ol`
  margin: 0;
  overflow: scroll;
  flex: 1;

  list-style-type: none;
  padding-inline-start: 0;
`;

const EpisodeTitle = styled.li`
  font-size: 18px;

  margin-bottom: 16px;
`;
type EpisodeList = {
  episodes: Episode[];
};
export const EpisodeList = ({ episodes = [] }: EpisodeList) => {
  return (
    <StyledEpisodeList>
      {episodes.map((ep) => (
        <EpisodeTitle key={ep.id}>
          <span>
            S{ep.season}E{ep.number}:
          </span>{" "}
          {ep.name}
        </EpisodeTitle>
      ))}
    </StyledEpisodeList>
  );
};
