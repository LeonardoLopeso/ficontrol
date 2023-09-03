import { Text } from "react-native";
import { Container, LabelTotal, MonthText, Total, ValueTotal } from "./styles";
import { Header } from "../components/Header";
import { ButtonsTop } from "../components/ButtonsTop";
import { ListEntries } from "../components/ListEntries";
import { formatCurrency } from "../utils/formatCurrency";
import { useEffect, useState } from "react";
import { spents } from "../data";
import { ILancamentos } from "../types";

export function Main() {
  const [option, setOption] = useState("");
  const [spent, setSpent] = useState<ILancamentos[]>([]);
  const [totalSpents, setTotalSpents] = useState(0);

  useEffect(() => {
    const dataFilter = spents.filter((data) => {
      if(option === "Lançamentos") {
        return spents;
      }

      return data.type === option;
    });
    
    const total = dataFilter.reduce((sum, spent) => sum + spent.valor, 0);
    setSpent(dataFilter);
    setTotalSpents(total);
  },[option])
  
  return (
    <>
      <Container>
        <Header />

        <ButtonsTop
          opt={option}
          setOpt={setOption}
        />
        
        <MonthText>Agosto 2023</MonthText>

        <Total>
          <LabelTotal>Total de {option}</LabelTotal>
          <ValueTotal>{formatCurrency(totalSpents)}</ValueTotal>
        </Total>

        <ListEntries 
          data={spent}
          label={option}
        />

      </Container>
    </>
  )
}