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

import { MotiView } from 'moti'

import { ArrowUp } from "../Icons/ArrowUP";
import { ArrowDown } from "../Icons/ArrowDown";
import { SpentModal } from "../SpentModal";
import { useEffect, useState } from "react";
import { ILancamentos } from "../../types";

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Create } from "../Create";
import { Input } from "../Input";
import { addingEllipsis, formatCurrency } from "../../utils/helpers";
import { useSpent } from "../../context/main";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ListEntriesProps {
  label: string;
}

export function ListEntries({ label }: ListEntriesProps) {
  const { setSearch, spent, option, setTotalSpents, search } = useSpent();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [selectedSpent, setSelectedSpent] = useState<null | ILancamentos>(null);
  const [spentFiltered, setSpentFiltered] = useState<ILancamentos[]>([]);

  function handleOpenModal(spent: ILancamentos) {
    setIsModalVisible(true);
    setSelectedSpent(spent);
  }

  useEffect(() => {
    const dataFiltered = spent.filter(data => option === 'Lançamentos' ? spent : data.type === option);

    // Valor total dos lançamento, receitas e despesas
    const total = dataFiltered.reduce((sum, spent) => sum + Number(spent.valor), 0);

    const orderedList = [...dataFiltered];

    orderedList.sort((a, n) => (a.data > n.data) ? -1 : (n.data > a.data) ? 1 : 0);
    
    setSpentFiltered(orderedList)
    setTotalSpents(total);
    
    if(search) {
      const filtered = dataFiltered.filter(data => {
        return data.title.toLowerCase().includes(search.toLowerCase()) || 
                data.description.toLowerCase().includes(search.toLowerCase()) || 
                data.data.includes(search) || 
                data.valor.toString().includes(search)
      })
      setSpentFiltered(filtered);
      setTotalSpents(filtered.reduce((sum, spent) => sum + Number(spent.valor), 0))
    }

  },[option, spent, search]);



  return(
    <Container>
      <Entrie>
        <Title>{label} ({spentFiltered.length})</Title>
        <TouchableOpacity onPress={() => setIsModalCreateVisible(true)}>
          <AntDesign 
            name="plussquare" 
            color='#ACACAC' 
            size={22}
            style={{ paddingRight:4}}
          />
        </TouchableOpacity>
      </Entrie>

      <InputSearch>
        <Input 
          placeholder="Título, descrição, valor ou data" 
          onChange={setSearch} 
          styles={{ flex: 1 }} 
          value={search}
        />
        <TouchableOpacity onPress={() => setSearch('')}>
          <Text style={{ 
            paddingHorizontal: 20,
            fontSize: RFValue(12),
            color: '#ACACAC'
           }}><MaterialCommunityIcons name="broom" size={18} /> Limpar</Text>
        </TouchableOpacity>
      </InputSearch>

      {spentFiltered.length > 0 &&
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={spentFiltered}
          keyExtractor={spent => spent.id.toString()}
          ItemSeparatorComponent={Separator}
          style={{marginTop: 16}}
          renderItem={({ item: spent, index }) => (
            <MotiView
              from={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'timing', duration: 100, delay: index * 100 }}
            >
              <Spent onPress={() => handleOpenModal(spent)}>
                <IconTitle>
                  {spent.iconArrowUpOrdown ? <ArrowDown /> : <ArrowUp />}

                  <TitleDate>
                    <TitleSpent>{addingEllipsis(spent.title, 16)}</TitleSpent>
                    <DateHour>{spent.data}</DateHour>
                  </TitleDate>
                </IconTitle>

                <Price>{formatCurrency(spent.valor)}</Price>
              </Spent>
            </MotiView>
          )}
        />
      }

      {spentFiltered.length < 1 &&
        <SpentVoid>
          <Text
            style={{
              color:'#ACACAC',
              textAlign: 'center',
              fontSize: RFValue(20)
            }}
          >Sem lançamentos</Text>

          <Text
            style={{
              color:'#777',
              textAlign:'center',
              lineHeight: RFValue(18)
            }}
          >
            Comece a trilhar o caminho para o controle total de suas finanças hoje mesmo! Adicione suas receitas e despesas agora e assuma o comando de seu futuro financeiro.
          </Text>

          <BoxImage>
            <MaterialCommunityIcons 
              name="finance" 
              size={150} 
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