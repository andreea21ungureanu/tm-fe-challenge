"use client";

import { useGetSeasonsCount } from "@/api/useGetSeasonsCount";
import Link from "next/link";
import styled from "styled-components";

const StyledSeasonList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledListItem = styled.li`
  margin: 10px;

  @media (max-width: 768px) {
    flex-basis: calc(25% - 20px); /* 4 elements per row with margins */
  }
`;

export const SeasonList = () => {
  const seasonsCount = useGetSeasonsCount();
  const seasons = Array.from({ length: seasonsCount }, (_, index) => index + 1);

  return (
    <StyledSeasonList>
      {seasons.map((seasonNumber) => (
        <StyledListItem key={seasonNumber}>
          <Link href={`/${seasonNumber}`}>Season {seasonNumber}</Link>
        </StyledListItem>
      ))}
    </StyledSeasonList>
  );
};
