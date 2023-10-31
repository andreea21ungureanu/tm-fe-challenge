"use client";

import Link from "next/link";
import styled from "styled-components";

export type EpisodeTitleLinkProps = {
  id: number;
  seasonUrl: string;
  season: number;
  episodeName: string;
  episodeNumber: number;
};

const StyledList = styled.li`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const EpisodeTitleLink = ({
  id,
  season,
  seasonUrl,
  episodeName,
  episodeNumber,
}: EpisodeTitleLinkProps) => {
  return (
    <StyledList>
      <Link href={`/${seasonUrl}/${id}`}>
        <span>
          S{season}E{episodeNumber}:
        </span>{" "}
        {episodeName}
      </Link>
    </StyledList>
  );
};
