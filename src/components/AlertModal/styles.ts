import styled from 'styled-components/native';

export const Overlayer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 32px;
  background-color: rgba(0,0,0, .7);
`;

export const Container = styled.View`
  width: 100%;
  height: 300px;
  justify-content: space-between;
  padding: 16px 16px 42px;
  border-radius: 8px;
  background-color: #363636;
`;


export const BoxContent = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
`;

export const BoxButtonModal = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const BoxClose = styled.TouchableOpacity`
  align-items: flex-end;
  padding-right: 5px;
`;

interface IPropsTouchableOp {
  bgColor?: boolean;
}

export const ButtonAction = styled.TouchableOpacity<IPropsTouchableOp>`
  border: 1px solid ${({ bgColor }: any) => bgColor ? '#444' : 'transparent'};
  padding: 12px 32px;
  border-radius: 4px;
  margin-top: 22px;
  background-color: ${({ bgColor }: any) => bgColor ? '#03DAC6' : 'transparent'};
`;