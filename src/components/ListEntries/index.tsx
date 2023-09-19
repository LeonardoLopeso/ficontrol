import { FlatList, TouchableOpacity } from "react-native";

import { BoxImage, Container, 
  DateHour, 
  Entrie, 
  IconTitle, 
  InputSearch, 
  Price, 
  Separator, 
  Spent, 
  SpentVoid, 
  Title, 
  TitleDate, 
  TitleSpent 
} from "./styled";

import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { SpentModal } from "../SpentModal";
import { useEffect, useState } from "react";
import { ILancamentos } from "../../types";

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Create } from "../Create";
import { Input } from "../Input";
import { formatCurrency } from "../../utils/helpers";
import { useSpent } from "../../context/main";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

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
          <AntDesign 
            name="plussquare" 
            color='#EEEEEE' 
            size={22}
            style={{ paddingRight:4}}
          />
        </TouchableOpacity>
      </Entrie>

      <InputSearch>
        <Input 
          placeholder="Pesquisar" 
          onChange={setSearch} 
          styles={{ flex: 1 }} 
          value={search}
        />
        <TouchableOpacity onPress={() => setSearch('')}>
          <Text style={{ 
            paddingHorizontal: 26,
            fontSize: RFValue(12),
            color: '#ACACAC'
           }}>Limpar</Text>
        </TouchableOpacity>
      </InputSearch>
      
      {spentFiltered.length > 0 &&
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
      }

      {spentFiltered.length < 1 &&
        <SpentVoid>
          <Text
            style={{
              color:'#ACACAC',
              textAlign: 'center',
              fontSize: 24
            }}
          >Sem lançamentos</Text>

          <Text
            style={{
              color:'#777',
              textAlign:'center',
              lineHeight: 20
            }}
          >
            Comece a trilhar o caminho para o controle total de suas finanças hoje mesmo! Adicione suas receitas e despesas agora e assuma o comando de seu futuro financeiro.
          </Text>

          <BoxImage>
            <MaterialCommunityIcons 
              name="finance" 
              size={180} 
              color="#383838"
            />
          </BoxImage>
        </SpentVoid>
      }

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