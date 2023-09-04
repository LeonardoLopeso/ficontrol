import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, .4);
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;
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
  padding: 0 26px;
  margin-top: 40px;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 26px;
  margin-top: 81px;
`;

export const Button = styled.Button`
  background: #04D361;
  width: 95px;
  height: 32px;
`;