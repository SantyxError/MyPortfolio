import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxxxl};
  margin: ${({ theme }) => theme.margin.xxxxl}
    ${({ theme }) => theme.margin.xxxxxl};
`;

export const MyWorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.margin.l};
`;

export const MyWorkContainerImg = styled.img`
  box-sizing: border-box;
  width: 419px;
  height: 280px;
  transition: 0.3;
  cursor: pointer;

  &:hover {
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
    border-radius: ${({ theme }) => theme.borderRadius.m};
    transform: scale(1.1);
    transition: 0.4s;
  }
`;

export const MyWorkShowMore = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  border: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.m}
    ${({ theme }) => theme.spacing.xxxl};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.margin.xxxl};
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    gap: ${({ theme }) => theme.spacing.xxl};
    transition: 0.4s;
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
  }
`;
