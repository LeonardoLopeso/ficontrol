import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 46px;
  padding: 0 52px;
  border-radius: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)};
`;