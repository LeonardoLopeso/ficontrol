import { Text } from "react-native";
import { Container } from "./styled";
import { Header } from "../components/Header";
import { ButtonsTop } from "../components/ButtonsTop";
import { LabelTotal, MonthText, Total, ValueTotal } from "../Main/styles";
import { ListEntries } from "../components/ListEntries";
import { formatCurrency } from "../utils/formatCurrency";

export function Expenses() {
  return (
    <>
    <Container>
      <Header />

      <ButtonsTop />
      
      <MonthText>Tela expense</MonthText>

      <Total>
        <LabelTotal>Total lançamentos</LabelTotal>
        <ValueTotal>{formatCurrency (2080)}</ValueTotal>
      </Total>

      <ListEntries />

    </Container>
  </>
  )
}