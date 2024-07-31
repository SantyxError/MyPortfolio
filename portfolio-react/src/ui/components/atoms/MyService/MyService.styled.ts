import styled from "styled-components";

export const ServicesFormat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.l};
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  border: ${({ theme }) => theme.border.xxs} solid ${({ theme }) => theme.color.white};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    border: ${({ theme }) => theme.border.xxs} solid ${({ theme }) => theme.color.purple};
    background-image: ${({ theme }) => theme.background.terciary};
    transform: scale(1.05);
    transition: 0.4s;
  }
`;

export const ServicesFormatH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
`;

export const ServicesFormatH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 800;
  background: ${({ theme }) => theme.background.primary};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ServicesFormatP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.bone};
  line-height:  ${({ theme }) => theme.lineHeight.m};
  max-width: 300px;
`;

export const ServicesReadmore = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};
`;