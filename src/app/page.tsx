"use client";
import React from "react";
import styled from "styled-components";
import { EpisodeDetail } from "@/components/EpisodeDetail";
import { EpisodeList } from "@/components/EpisodeList";
import episodes from "@/utils/episodes.json";

const EpisodeListContainer = styled.div`
  display: flex;
  max-height: 500px;

  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default function App() {
  return (
    <div>
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        <EpisodeList episodes={episodes} />
        <EpisodeDetail />
      </EpisodeListContainer>
    </div>
  );
}
