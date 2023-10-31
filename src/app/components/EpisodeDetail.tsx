"use client";

import React from "react";
import styled from "styled-components";

const EpisodeDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EpisodeDetail = () => {
  return (
    <EpisodeDetailContainer>
      Pick an episode from the left
    </EpisodeDetailContainer>
  );
};
