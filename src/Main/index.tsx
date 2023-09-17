import { Container, LabelTotal, MonthText, Total, ValueTotal } from "./styles";
import { Header } from "../components/Header";
import { ButtonsTop } from "../components/ButtonsTop";
import { ListEntries } from "../components/ListEntries";
import { formatCurrency } from "../utils/helpers";
import { useSpent } from "../context/main";

export function Main() {
  const { 
    totalSpents,
    option,
   } = useSpent();
  
  return (
    <>
      <Container>
        <Header />

        <ButtonsTop />
        
        <MonthText>Setembro 2023</MonthText>

        <Total>
          <LabelTotal>Total de {option}</LabelTotal>
          <ValueTotal>{formatCurrency(totalSpents)}</ValueTotal>
        </Total>

        <ListEntries 
          label={option}
        />

      </Container>
    </>
  )
}