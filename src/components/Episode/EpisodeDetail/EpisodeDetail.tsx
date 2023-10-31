"use client";

import { useGetEpisode } from "@/api/useGetEpisode";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ContentDetails } from "./ContentDetails";
import { Episode } from "@/types/Episode";
import { ErrorContainer } from "@/components/Error";

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
  const episode = useGetEpisode(Number(episodeId));

  if (episode instanceof Error) {
    return <ErrorContainer text="Episode not found or of invalid type" />;
  } else {
    const { name, image, summary, season, number, airdate, runtime, rating } =
      episode as Episode;

    return (
      <EpisodeDetailContainer aria-label={"Episode details"} tabIndex={0}>
        <h2 tabIndex={1}>{name}</h2>
        <ContentAndImageContainer>
          <Image
            alt={`Preview of Episode ${name}`}
            src={image.medium}
            width={200}
            height={125}
            tabIndex={2}
          />
          <ContentDetails
            aria-label={"More details about the episode"}
            season={season}
            number={number}
            airdate={airdate}
            runtime={runtime}
            rating={rating}
          />
        </ContentAndImageContainer>
        {/** Clean HTML from text? */}
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          aria-label="Episode summary"
        />
      </EpisodeDetailContainer>
    );
  }
};
