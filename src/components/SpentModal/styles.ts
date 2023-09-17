import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 8px 8px;
  background: #121212;
`;

export const BtnClose = styled.TouchableOpacity`
  position: absolute;
  right: 32px;
  top: 32px;
`;

export const SpentLabel = styled.View`
  margin-bottom: 24px;
`;

export const TotalPrice = styled.View`
  margin: 62px 0 32px;
  padding: 0 24px;
`;

export const LabelDesc = styled.Text`
  color: #ACACAC;
`;

export const LabelPrice = styled.Text`
  color: #EEEEEE;
  font-size: 42px;
`;

export const BoxDetails = styled.View`
  width: 100%;
  flex: 1;
  padding: 20px 18px 0;

  border-radius: 9px;
  background-color: rgba(255,255,255, .04);
`;

export const BoxDeleteSpent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
  padding-bottom: 86px;
`;

interface ITouchableProps {
  isEdit?: boolean;
}

export const Delete = styled.TouchableOpacity<ITouchableProps>`
  padding: 12px 52px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: ${({ isEdit }: any) => isEdit ? '#03DAC6' : '#FF7755'};
  opacity: ${({ isEdit }: any) => isEdit ? '.4' : '1'};
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Details = styled.View``;