import styled from "styled-components";

export type ContentDetailsProps = Pick<
  Episode,
  "season" | "number" | "airdate" | "runtime" | "rating"
>;

const ContentDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentDetails = ({
  season,
  number,
  airdate,
  runtime,
  rating,
}: ContentDetailsProps) => {
  return (
    <ContentDetailsContainer>
      <div>
        Season: {season}, Episode: {number}
      </div>
      <div>Airdate: {airdate}</div>
      <div>Runtime: {runtime}</div>
      <div>Rating: {rating.average}/10</div>
    </ContentDetailsContainer>
  );
};
