"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledButton = styled.button`
  align-self: flex-start;
`;

export const CloseButton = ({ seasonUrl }: { seasonUrl: string }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/${seasonUrl}`);
  };

  return <StyledButton onClick={handleOnClick}>Close</StyledButton>;
};
