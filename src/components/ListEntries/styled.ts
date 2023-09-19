import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 32px 16px 16px;
  padding: 0 14px 14px;
  background-color: rgba(255,255,255, .04);
  flex: 1;
  border-radius: 9px;
`;

export const Entrie = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpentVoid = styled.View`
  margin-top: 42px;
  gap: 16px;
`;

export const BoxImage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Spent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)};
  padding: 19px 0 17px;
`;

export const IconTitle = styled.View`
  flex-direction: row;
  gap: 22px;
  align-items: center;
`;

export const TitleDate = styled.View`
`;

export const TitleSpent = styled.Text`
  font-size: ${RFValue(16)};
  color: #EEEEEE;
`;

export const DateHour = styled.Text`
  color: #A7A6A6;
  font-weight: 300;
  font-size: ${RFValue(10)};
`;

export const Price = styled.Text`
  color: #EEEEEE;
  font-size: ${RFValue(20)};
  font-weight: 300;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 10px;
  background: rgba(204, 204, 204, 0.1);
`;

