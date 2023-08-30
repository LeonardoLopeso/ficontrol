import styled from "styled-components/native";

export const Container = styled.View`
  height: 46px;
  margin: 0 24px;
  padding: 8px 12px 9px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: rgba(0,0,0, .2);
  border-radius: 16px;
`;

export const BtnOp = styled.Text`
  
  font-size: 20px;
  height: 36px;
  padding: 0 10px;
  line-height: 36px;
  border-radius: 16px;
  color: ${({ isSelected }: any) => (isSelected ? "#262626" : "#fff")};
  background-color: ${({ isSelected }: any) => (isSelected ? "#04D361" : "transparent")};

`;