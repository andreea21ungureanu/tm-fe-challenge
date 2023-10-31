"use client";

import { useGetEpisode } from "@/api/useGetEpisode";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ContentDetails } from "./ContentDetails";

export type EpisodeDetailProps = {
  episodeId: string;
};

const EpisodeDetailContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentAndImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EpisodeDetail = ({ episodeId }: EpisodeDetailProps) => {
  const { name, image, summary, season, number, airdate, runtime, rating } =
    useGetEpisode(Number(episodeId)) as Episode;

  console.log(image.medium);

  return (
    <EpisodeDetailContainer>
      <div>{name}</div>
      <ContentAndImageContainer>
        <Image
          alt={`Preview of Episode ${name}`}
          src={image.medium}
          width={200}
          height={150}
        />
        <ContentDetails
          season={season}
          number={number}
          airdate={airdate}
          runtime={runtime}
          rating={rating}
        />
      </ContentAndImageContainer>
      {/** Clean HTML from text? */}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </EpisodeDetailContainer>
  );
};
