"use client";

import { Episode } from "@/types/Episode";
import Link from "next/link";
import styled from "styled-components";

export type PartialEpisodeProps = Pick<
  Episode,
  "id" | "season" | "number" | "name"
>;

export type EpisodeTitleLinkProps = PartialEpisodeProps & {
  seasonUrl: string;
};

const StyledList = styled.li`
  font-size: 18px;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  color: black;

  &:hover,
  &:active {
    color: purple;
    background: #e3e2e2;
  }
`;

export const EpisodeTitleLink = ({
  id,
  season,
  seasonUrl,
  name,
  number,
}: EpisodeTitleLinkProps) => {
  return (
    <StyledList aria-label={`Season ${season} Episode ${number} ${name} link`}>
      <span>
        S{season}E{number}:
      </span>{" "}
      <StyledLink href={`/${seasonUrl}/${id}`}>{name}</StyledLink>
    </StyledList>
  );
};
