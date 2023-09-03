import { Text } from "react-native";
import { Container, Description, Title } from "./styles";

interface DetailsSpentProps {
  title: string;
  icon: any;
  description: string;
}

export function DetailsSpent({ title, description, icon }: DetailsSpentProps) {
  return (
    <Container>
      <Title>
        <Text>{icon}</Text>
        <Text style={{ fontSize: 24, color:'rgba(255,255,255, .8)' }}>{title}</Text>
      </Title>

      <Description>{description}</Description>
    </Container>
  )
}