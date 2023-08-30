import { Text } from "react-native";
import { Container, LabelTotal, MonthText, Total, ValueTotal } from "./styles";
import { Header } from "../components/Header";
import { ButtonsTop } from "../components/ButtonsTop";
import { ListEntries } from "../components/ListEntries";
import { formatCurrency } from "../utils/formatCurrency";

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <ButtonsTop />
        
        <MonthText>Agosto 2023</MonthText>

        <Total>
          <LabelTotal>Total lançamentos</LabelTotal>
          <ValueTotal>{formatCurrency(2080)}</ValueTotal>
        </Total>

        <ListEntries />

      </Container>
    </>
  )
}