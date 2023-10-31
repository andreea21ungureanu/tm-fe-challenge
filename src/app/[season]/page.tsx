"use client";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    max-width: min-content;
  }
`;
export default function DefaultEpisodeDetailsPage() {
  return <StyledContainer>Pick an episode from the left</StyledContainer>;
}
