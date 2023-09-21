import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, .2);
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;
  padding: 0 26px;
  margin-top: auto;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  background-color: #383838;
`;

export const BoxTop = styled.View`
  align-items: center;
  padding-top: 24px;
`;

export const InpuSelect = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background-color: rgba(0,0,0, .5);
  border-width: 1px;
  border-color: #A7A6A6;
  border-radius: 8px;
  padding: 0 8px;
  color: #FFF;
`;

export const OverlaySelectModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, .7);
`;

export const ContentSelectModal = styled.View`
  justify-content: space-around;
  width: 88%;
  height: 220px;
  padding: 16px;
  border-radius: 8px;
  background-color: #383838;
`;

export const LineDivisor = styled.View`
  border: .2px solid rgba(255,255,255, .3);
`;

export const LineOption = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsSelectModal = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
`;

export const RevenueExpense = styled.View`
  gap: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

interface IButtonRE {
  reveOrExpen: boolean;
  check: boolean;
}

export const ButtonReveneuExpense = styled.TouchableOpacity<IButtonRE>`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 12px 52px;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: ${({ reveOrExpen }: any) => reveOrExpen ? '#03DAC6' : '#FF7755'};
  opacity: ${({ check }: any) => check ? 0.4 : 1};
`;

export const Fields = styled.View`
  gap: 16px;
  margin-top: 40px;
`;

 export const TextImport = styled.View`
  align-items: flex-end;
  margin-top: 10px;
 `;

export const BoxButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 32px;
  height: 20%;
  width: 100%;
  margin-top: 54px;
`;

export const Button = styled.Button`
  background: #04D361;
  width: 195px;
  height: 32px;
`;