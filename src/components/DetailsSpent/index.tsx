import { Text } from "react-native";
import { Container, Description, Title } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

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
        <Text style={{ fontSize: RFValue(16), color:'#777' }}>{title}</Text>
      </Title>

      <Description>{description}</Description>
    </Container>
  )
}