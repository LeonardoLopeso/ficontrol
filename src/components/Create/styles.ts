import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, .4);
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
  padding-top: 64px;
`;

export const Fields = styled.View`
  gap: 16px;
  margin-top: 40px;
`;

 export const TextImport = styled.View`
  align-items: flex-end;
  margin-top: 20px;
 `;

export const BoxButtons = styled.View`
  flex-direction: row;
  height: 20%;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 32px;
  margin-top: 81px;
`;

export const Button = styled.Button`
  background: #04D361;
  width: 195px;
  height: 32px;
`;