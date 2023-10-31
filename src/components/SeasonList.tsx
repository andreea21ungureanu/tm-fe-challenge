"use client";

import { useGetSeasonsCount } from "@/api/useGetSeasonsCount";
import Link from "next/link";
import styled from "styled-components";

const StyledSeasonList = styled.ul`
  display: flex
  flex-direction: column;
  padding-inline-start: 0;
`;

const StyledLink = styled(Link)`
  margin: 10px;
`;

export const SeasonList = () => {
  const seasonsCount = useGetSeasonsCount();
  const seasons = Array.from({ length: seasonsCount }, (_, index) => index + 1);

  return (
    <StyledSeasonList>
      {seasons.map((seasonNumber) => (
        <StyledLink href={`/${seasonNumber}`} key={seasonNumber}>
          Season {seasonNumber}
        </StyledLink>
      ))}
    </StyledSeasonList>
  );
};
