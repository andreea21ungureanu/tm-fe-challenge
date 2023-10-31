import { Episode } from "@/types/Episode";
import styled from "styled-components";

export type ContentDetailsProps = Pick<
  Episode,
  "season" | "number" | "airdate" | "runtime" | "rating"
>;

const ContentDetailsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ContentDetails = ({
  season,
  number,
  airdate,
  runtime,
  rating,
}: ContentDetailsProps) => {
  return (
    <ContentDetailsContainer aria-label={"More details about episode list"}>
      <StyledListItem>
        Season: {season}, Episode: {number}
      </StyledListItem>
      <StyledListItem>Airdate: {airdate}</StyledListItem>
      <StyledListItem>Runtime: {runtime}</StyledListItem>
      <StyledListItem>Rating: {rating.average}/10</StyledListItem>
    </ContentDetailsContainer>
  );
};
