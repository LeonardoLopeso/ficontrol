import { Modal, Text } from "react-native";
import { ILancamentos } from "../../types";
import { Container, BoxDetails, TotalPrice, LabelDesc, LabelPrice, Top, Details, SpentLabel, BtnClose, BoxDeleteSpent, Delete } from "./styles";
import { DetailsSpent } from "../DetailsSpent";

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { formatCurrency, removeLastLetter } from "../../utils/helpers";
import { AlertModal } from "../AlertModal";
import { useState } from "react";
import { useSpent } from "../../context/main";

interface SpentProps {
  visible: boolean;
  onClose: () => void;
  spent: null | ILancamentos;
}

export function SpentModal({ visible, onClose, spent }: SpentProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const { removeSpent, closeModalAlert, setCloseModalAlert } = useSpent();

  if(!spent) {
    return null;
  }

  const clearWord = removeLastLetter(spent.type);

  function handleDelete() {
    setCloseModalAlert(true);
    setMsgAlert(`Deseja realmente excluir essa ${clearWord} #${spent?.id}`)
  }

  function handleExecuteDelete(id: number) {
    removeSpent(id);
    setCloseModalAlert(false)
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Container>
        <BtnClose onPress={onClose}>
          <AntDesign 
            name="closesquare" 
            color='#383838' 
            size={20}
          />
        </BtnClose>

        <TotalPrice>

          <SpentLabel>
            <LabelDesc>Despesa: </LabelDesc>
            <Text style={{ color:'#FFF', fontSize: 38 }}>{spent.title}</Text>
          </SpentLabel>
          
          <LabelDesc>Total das despesas</LabelDesc>
          <LabelPrice>{formatCurrency(spent?.valor)}</LabelPrice>
        </TotalPrice>

        <BoxDetails>
          <Text style={{ fontSize: 32, color:'#EEEEEE' }}>Detalhes</Text>
        
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

          <BoxDeleteSpent>
            <Delete onPress={handleDelete}>
              <Text 
                style={{ 
                  fontSize:16, 
                  color:'#FF7755' 
                }}>Excluir</Text>
            </Delete>
            <Delete isEdit>
              <Text style={{ fontSize:16 }}>Editar</Text>
            </Delete>
          </BoxDeleteSpent>
        </BoxDetails>

        <AlertModal 
          isOk={false}
          label={msgAlert}
          onClose={() => setCloseModalAlert(false)}
          visible={closeModalAlert}
          textBtnAction="Confirmar"
          btnAction
          funcAction={() => handleExecuteDelete(spent.id)}
        />
      </Container>
    </Modal>
  )
}