import styled from "styled-components";

const StyledErrorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ErrorContainer = ({ text }: { text: string }) => {
  return <StyledErrorContainer>{text}</StyledErrorContainer>;
};
