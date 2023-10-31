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
      <li
        aria-label={`Season ${season} Episode ${episodeNumber} ${episodeName} link`}
      >
        <span>
          S{season}E{episodeNumber}:
        </span>{" "}
        <Link href={`/${seasonUrl}/${id}`}>{episodeName}</Link>
      </li>
    </StyledList>
  );
};
