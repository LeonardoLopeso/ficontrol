import { FlatList, TouchableOpacity } from "react-native";

import { Container, 
  DateHour, 
  Entrie, 
  IconTitle, 
  Price, 
  Separator, 
  Spent, 
  Title, 
  TitleDate, 
  TitleSpent 
} from "./styled";

import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { SpentModal } from "../SpentModal";
import { useEffect, useState } from "react";
import { ILancamentos } from "../../types";

import { AntDesign } from '@expo/vector-icons';
import { Create } from "../Create";
import { Input } from "../Input";
import { formatCurrency } from "../../utils/helpers";
import { useSpent } from "../../context/main";

interface ListEntriesProps {
  label: string;
}

export function ListEntries({ label }: ListEntriesProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [selectedSpent, setSelectedSpent] = useState<null | ILancamentos>(null);
  const [spentFiltered, setSpentFiltered] = useState<ILancamentos[]>([]);
  const { setSearch, spent, option, setTotalSpents, search, setSpent } = useSpent();

  function handleOpenModal(spent: ILancamentos) {
    setIsModalVisible(true);
    setSelectedSpent(spent);
  }

  useEffect(() => {
    const dataFiltered = spent.filter(data => option === 'Lançamentos' ? spent : data.type === option);

    // Valor total dos lançamento, receitas e despesas
    const total = dataFiltered.reduce((sum, spent) => sum + Number(spent.valor), 0);
    
    setSpentFiltered(dataFiltered)
    setTotalSpents(total);
    
    if(search) {
      setSpentFiltered(dataFiltered.filter(data => {
        return data.title.includes(search)
      }));
    }

  },[option, spent, search])

  return(
    <Container>
      <Entrie>
        <Title>{label}</Title>
        <TouchableOpacity onPress={() => setIsModalCreateVisible(true)}>
          <AntDesign name="plus" color='#EEEEEE' size={20}/>
        </TouchableOpacity>
      </Entrie>

      <Input placeholder="Pesquisar" onChange={setSearch} />

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={spentFiltered}
        keyExtractor={spent => spent.id.toString()}
        ItemSeparatorComponent={Separator}
        style={{marginTop: 16}}
        renderItem={({ item: spent }) => (
          <Spent onPress={() => handleOpenModal(spent)}>
            <IconTitle>
              {spent.iconArrowUpOrdown ? <ArrowDown /> : <ArrowUp />}

              <TitleDate>
                <TitleSpent>{spent.title}</TitleSpent>
                <DateHour>{spent.data}</DateHour>
              </TitleDate>
            </IconTitle>

            <Price>{formatCurrency(spent.valor)}</Price>
          </Spent>
        )}
      />

      <SpentModal 
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)}
        spent={selectedSpent}
      />

      <Create 
        visible={isModalCreateVisible}
        onClose={() => setIsModalCreateVisible(false)}
        plceholder={label}
      />
    </Container>
  )
}