import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 80% 4%;
  height: 100%;
  background-color: rgba(0,0,0, .3);
`;

export const TextInputFake = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 52px;
  background: rgba(0,0,0, .5);
  border-radius: 8px;
  border: 1px solid #a7a6a6;
  padding: 0 8px;
  font-size: 16px;
`;