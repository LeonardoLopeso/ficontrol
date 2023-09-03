import { FlatList } from "react-native";
import { Container, DateHour, IconTitle, Price, Separator, Spent, Title, TitleDate, TitleSpent } from "./styled";
import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { formatCurrency } from "../../utils/formatCurrency";
import { SpentModal } from "../SpentModal";
import { useState } from "react";
import { ILancamentos } from "../../types";

interface ListEntriesProps {
  data: ILancamentos[];
  label: string;
}

export function ListEntries({ data, label }: ListEntriesProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSpent, setSelectedSpent] = useState<null | ILancamentos>(null);

  function handleOpenModal(spent: ILancamentos) {
    setIsModalVisible(true);
    setSelectedSpent(spent);
  }

  return(
    <>
      <Container>
        <Title>{label}</Title>

        <FlatList 
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={spent => spent.id.toString()}
          ItemSeparatorComponent={Separator}
          renderItem={({ item: spent }) => (
            <Spent onPress={() => handleOpenModal(spent)}>
              <IconTitle>
                {spent.iconArrowUpOrdown ? <ArrowUp /> : <ArrowDown />}

                <TitleDate>
                  <TitleSpent>{spent.title}</TitleSpent>
                  <DateHour>{spent.data}</DateHour>
                </TitleDate>
              </IconTitle>

              <Price>{formatCurrency(spent.valor)}</Price>
            </Spent>
          )}
        />
      </Container>

      <SpentModal 
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)}
        spent={selectedSpent}
      />
    </>
  )
}