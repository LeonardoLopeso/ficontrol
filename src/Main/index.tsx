import { Container, LabelTotal, MonthText, Total, ValueTotal } from "./styles";
import { Header } from "../components/Header";
import { ButtonsTop } from "../components/ButtonsTop";
import { ListEntries } from "../components/ListEntries";
import { useEffect, useState } from "react";
import { spents } from "../data";
import { ILancamentos } from "../types";
import { formatCurrency } from "../utils/helpers";

export function Main() {
  const [option, setOption] = useState("");
  const [spent, setSpent] = useState<ILancamentos[]>([]);
  const [totalSpents, setTotalSpents] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Setando as opções do menu
    // Por padrão será selecionado os lançamentos
    const dataFilter = spents.filter((data) => {
      if(option === "Lançamentos") {
        return spents;
      }
      return data.type === option;
    });
    
    // Valor total dos lançamento, receitas e despesas
    const total = dataFilter.reduce((sum, spent) => sum + spent.valor, 0);
    setSpent(dataFilter);
    setTotalSpents(total);

    // Filtrando pesquisa
    if(search !== "") {
      setSpent(dataFilter.filter(data => {
        return data.title.includes(search)
      }));
    }
  },[option, search])
  
  return (
    <>
      <Container>
        <Header />

        <ButtonsTop
          opt={option}
          setOpt={setOption}
        />
        
        <MonthText>Setembro 2023</MonthText>

        <Total>
          <LabelTotal>Total de {option}</LabelTotal>
          <ValueTotal>{formatCurrency(totalSpents)}</ValueTotal>
        </Total>

        <ListEntries 
          data={spent}
          label={option}
          search={setSearch}
          setData={setSpent}
        />

      </Container>
    </>
  )
}