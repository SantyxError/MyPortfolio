import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
`;

export const HeroImage = styled.img`
  margin-top: 150px;
`;

export const HeroH1 = styled.h1`
  text-align: center;
  width: 70%;
  font-size: 90px;
  font-weight: 600;
`;

export const HeroSpan = styled.span`
  background: linear-gradient(270deg, #df8908 10%, #b415ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroP = styled.p`
  text-align: center;
  width: 50%;
  font-size: 24px;
  line-height: 40px;
`;

export const HeroAction = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const HeroConnect = styled.div`
  padding: 25px 45px;
  border-radius: 50px;
  background: linear-gradient(270deg, #df8908 10%, #b415ff 100%);
  cursor: pointer;
`;

export const HeroResume = styled.div`
  padding: 25px 75px;
  border-radius: 50px;
  border: 2px solid #fff;
  cursor: pointer;
`;
