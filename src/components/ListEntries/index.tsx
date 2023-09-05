import { FlatList, TouchableOpacity } from "react-native";
import { Container, DateHour, Entrie, IconTitle, Price, Separator, Spent, Title, TitleDate, TitleSpent } from "./styled";
import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { formatCurrency } from "../../utils/formatCurrency";
import { SpentModal } from "../SpentModal";
import { useState } from "react";
import { ILancamentos } from "../../types";

import { AntDesign } from '@expo/vector-icons';
import { Create } from "../Create";
import { Input } from "../Input";

interface ListEntriesProps {
  data: ILancamentos[];
  label: string;
}

export function ListEntries({ data, label }: ListEntriesProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [selectedSpent, setSelectedSpent] = useState<null | ILancamentos>(null);

  function handleOpenModal(spent: ILancamentos) {
    setIsModalVisible(true);
    setSelectedSpent(spent);
  }

  return(
    <Container>
      <Entrie>
        <Title>{label}</Title>
        <TouchableOpacity onPress={() => setIsModalCreateVisible(true)}>
          <AntDesign name="plus" color='#EEEEEE' size={20}/>
        </TouchableOpacity>
      </Entrie>

      <Input placeholder="Pesquisasr" />

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={data}
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
      />
    </Container>
  )
}