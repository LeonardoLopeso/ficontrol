import styled from "styled-components/native";

import { Platform, StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const Title = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const Description = styled.Text`
  margin-left: 32px;
  font-size: ${RFValue(16)};
  color: #EEE;
`;