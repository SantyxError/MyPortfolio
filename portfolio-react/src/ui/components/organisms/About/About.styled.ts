import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 80px 170px;
`;

export const AboutTitle = styled.div`
  position: relative;
`;

export const AboutTitleH1 = styled.h1`
  padding: 0px 30px;
  font-size: 80px;
  font-weight: 600;
`;

export const AboutTitleImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const AboutSections = styled.div`
  display: flex;
  gap: 60px;
  align-items: stretch; /* Permite que los hijos se estiren para igualar su altura */
`;

export const AboutLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 21px;
  font-weight: 500;
  flex: 1; 
`;

export const AboutParaText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 15px 0;
  text-align: justify;
`;