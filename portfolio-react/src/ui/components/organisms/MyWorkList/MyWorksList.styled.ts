import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ theme }) => theme.spacing.xxxl};
    padding: ${({ theme }) => theme.spacing.xxxxl}
      ${({ theme }) => theme.spacing.xxxxxl};
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.margin.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xxl};
    margin-bottom: ${({ theme }) => theme.margin.l};
  }

  img {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    transition: 0.3;
    cursor: pointer;

    &:hover {
      border: ${({ theme }) => theme.border.xxs} solid
        ${({ theme }) => theme.color.purple};
      border-radius: ${({ theme }) => theme.borderRadius.m};
      transform: scale(1.1);
      transition: 0.4s;
    }
  }
`;

export const MyWorkContainerImg = styled.img``;

export const MyWorkShowMore = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  border: ${({ theme }) => theme.border.xxs} solid
    ${({ theme }) => theme.color.white};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l};
  font-size: ${({ theme }) => theme.fontSize.m};
  gap: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.margin.l};
  transition: 0.6s;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ theme }) => theme.spacing.m}
      ${({ theme }) => theme.spacing.xxxl};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: ${({ theme }) => theme.margin.xxxl};
    gap: ${({ theme }) => theme.spacing.l};
  }

  &:hover {
    gap: ${({ theme }) => theme.spacing.xxl};
    transition: 0.4s;
    border: ${({ theme }) => theme.border.xxs} solid
      ${({ theme }) => theme.color.purple};
  }
`;
