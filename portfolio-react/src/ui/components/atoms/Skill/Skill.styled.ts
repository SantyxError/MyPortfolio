import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.border.xs} solid;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border-image-slice: 1;
  border-image-source: ${({ theme }) => theme.background.secondary};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
