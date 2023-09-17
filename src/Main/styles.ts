import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #121212;
  flex: 1;
`;

export const MonthText = styled.Text`
  color: #ACACAC;
  font-size: 18px;
  margin: 19px auto 26px;
`;

export const Total = styled.View`
  padding: 0 24px;
`;

export const LabelTotal = styled.Text`
  color: #777;
`;

export const ValueTotal = styled.Text`
  color: #EEEEEE;
  font-size: 46px;
`;