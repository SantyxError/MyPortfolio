import styled from "styled-components";

export const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.l};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SkillsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.l};
    max-width: 100%;
    padding: ${({ theme }) => theme.margin.s};
  }
`;
