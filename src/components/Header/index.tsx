import { Container, UserName } from "./styles";

import { AntDesign } from '@expo/vector-icons';

export function Header() {
  return (
    <Container>
      <AntDesign name="user" size={24} color="white" />
      
      <UserName>Leonardo Lopes</UserName>
    </Container>
  )
}