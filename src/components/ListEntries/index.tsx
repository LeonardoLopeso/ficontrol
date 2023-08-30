import { FlatList, Text } from "react-native";
import { spents } from "../../data";
import { Container, DateHour, IconTitle, Price, Separator, Spent, Title, TitleDate, TitleSpent } from "./styled";
import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { formatCurrency } from "../../utils/formatCurrency";

export function ListEntries() {
  return(
    <Container>
      <Title>Lançamentos</Title>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={spents}
        keyExtractor={spent => spent.id.toString()}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: spen }) => (
          <Spent>
            <IconTitle>
              {spen.iconArrowUpOrdown ? <ArrowUp /> : <ArrowDown />}

              <TitleDate>
                <TitleSpent>{spen.title}</TitleSpent>
                <DateHour>{spen.data}</DateHour>
              </TitleDate>
            </IconTitle>

            <Price>{formatCurrency(spen.valor)}</Price>
          </Spent>
        )}

      />
    </Container>
  )
}