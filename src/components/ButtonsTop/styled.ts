import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

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
  font-size: ${RFValue(14)};
  height: 36px;
  padding: 5px 10px;
  /* line-height: 32px; */
  border-radius: 16px;
  color: ${({ isSelected }: any) => (isSelected ? "#262626" : "#fff")};
  background-color: ${({ isSelected }: any) => (isSelected ? "#04D361" : "transparent")};

`;