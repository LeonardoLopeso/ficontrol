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

export const Spent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
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
  font-size: 24px;
  color: #EEEEEE;
`;

export const DateHour = styled.Text`
  color: #A7A6A6;
  font-weight: 300;
`;

export const Price = styled.Text`
  color: #EEEEEE;
  font-size: 28px;
  font-weight: 300;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 10px;
  background: rgba(204, 204, 204, 0.1);
`;

