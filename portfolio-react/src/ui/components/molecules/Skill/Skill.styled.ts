import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SkillImageContainer = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  border: ${({ theme }) => theme.border.xs} solid;
  border-image-slice: 1;
  border-image-source: ${({ theme }) => theme.background.secondary};
`;

export const SkillImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
`;

export const SkillText = styled.p`
  margin: 0;
  width: 5rem;
`;
