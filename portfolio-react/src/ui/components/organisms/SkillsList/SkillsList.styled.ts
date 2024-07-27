import styled from "styled-components";

export const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SkillsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: 1200px;
`;
