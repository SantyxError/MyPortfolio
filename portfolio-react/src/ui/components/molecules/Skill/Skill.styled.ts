import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SkillImageContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
`;

export const SkillImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const SkillText = styled.p`
  margin: 0;
  width: 80px;
`;
