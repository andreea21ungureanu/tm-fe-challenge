"use client";

import styled from "styled-components";
import { EpisodeList } from "../components/EpisodeList";
import { useGetAllEpisodes } from "../api/useGetAllEpisodes";

const EpisodeListContainer = styled.div`
  display: flex;
  max-height: 500px;

  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Episode List: </h1>
          <EpisodeListContainer>
            <EpisodeList episodes={useGetAllEpisodes()} />
            {children}
          </EpisodeListContainer>
        </div>
      </body>
    </html>
  );
}
