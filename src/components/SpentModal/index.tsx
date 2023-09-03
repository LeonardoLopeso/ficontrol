import { Modal, Platform, Text } from "react-native";
import { ILancamentos } from "../../types";
import { Container, BoxDetails, TotalPrice, LabelDesc, LabelPrice, Top, Details, SpentLabel } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { DetailsSpent } from "../DetailsSpent";

import { AntDesign, Octicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface SpentProps {
  visible: boolean;
  onClose: () => void;
  spent: null | ILancamentos;
}

export function SpentModal({ visible, onClose, spent }: SpentProps) {

  if(!spent) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Container>

        <TotalPrice>
          <SpentLabel>
            <LabelDesc>Despesa: </LabelDesc>
            <Text style={{ color:'#FFF', fontSize: 38 }}>{spent.title}</Text>
          </SpentLabel>
          
          <LabelDesc>Total das despesas</LabelDesc>
          <LabelPrice>{formatCurrency(spent?.valor)}</LabelPrice>
        </TotalPrice>

        <BoxDetails>
          <Top>
            <Text style={{ fontSize: 32, color:'#fff' }}>Detalhes</Text>
            <Text 
              style={{ 
                fontSize: 18, 
                color:'rgba(255,255,255, .6)'
              }}

              onPress={onClose}
            >
              <AntDesign name="down" /> voltar
            </Text>
          </Top>

          <Details>

            <DetailsSpent 
              title="Data de criação"
              description={spent.data}
              icon={<AntDesign name="calendar" size={24} color="rgba(255,255,255,.2)" />}
            />

            <DetailsSpent 
              title="Descrição"
              description={spent.description}
              icon={<MaterialCommunityIcons name="text" size={24} color="rgba(255,255,255,.2)" />}
            />
          </Details>
        </BoxDetails>
      </Container>
    </Modal>
  )
}