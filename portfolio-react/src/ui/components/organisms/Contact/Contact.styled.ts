import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.xxs} ${({ theme }) => theme.margin.l};
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ theme }) => theme.spacing.xxxl};
    margin: ${({ theme }) => theme.margin.xxxxl}
      ${({ theme }) => theme.margin.xxxxxl};
  }
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxxxxl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.s};
    align-items: center;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    align-items: center;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margin.s};
  }
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.color.bone};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: ${({ theme }) => theme.margin.s};

  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-top: ${({ theme }) => theme.margin.m};
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};

  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ theme }) => theme.spacing.l};
  }
`;

export const DetailImg = styled.img`
  width: 20px;

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 25px;
  }
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    margin-top: ${({ theme }) => theme.spacing.xl};
    align-items: center;
    width: 100%;
  }
`;

export const Input = styled.input`
  color: #a0a0a0;
  border: none;
  width: 100%;
  height: ${({ theme }) => theme.spacing.xxxl};
  padding-left: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.margin.m};
  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    height: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.color.grey};
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ theme }) => theme.color.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.margin.xl};

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    height: ${({ theme }) => theme.spacing.xxxxxxl};
    margin-bottom: ${({ theme }) => theme.margin.m};
  }
`;
