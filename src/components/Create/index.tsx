import { useState } from "react";

import { Modal, Text, TouchableOpacity } from "react-native";
import { Content, Overlay, BoxTop, Fields, BoxButtons, Button, TextImport } from "./styles";
import { Input } from "../Input";
import { ButtonCustom } from "../ButtonCustom";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateInput from "../DateInput";
import { useSpent } from "../../context/main";
import { ILancamentos } from "../../types";

interface CreatProps {
  visible: boolean;
  plceholder: string;
  onClose: () => void;
}

export function Create({ onClose, visible, plceholder }: CreatProps) {
  const { addNewSpent } = useSpent();

  const [lancamento, setLancamento] = useState();
  const [value, setValue] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();

  // id: number;
  // title: string;
  // valor: number;
  // data: string;
  // iconArrowUpOrdown: boolean;
  // description: string;
  // type: string;

  function handleNewSpent(data: ILancamentos) {
    if(!lancamento || !value || !date || !desc) {
      return {}
    }
    
    const newSpent = {
      id: 345,
      title: lancamento,
      valor: value,
      data: date,
      description: desc,
      type: 'Despesas',
      iconArrowUpOrdown: true,
    }

    addNewSpent(newSpent)
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent
      style={{ zIndex: 10 }}
    >
      <Overlay>
        <Content>
          <BoxTop>
            <Text style={{ fontSize: 26, color:'#eeeeee' }}>Novo lançamento</Text>
          </BoxTop>

          <Fields>
            {/* Aplicando o placeholder dinamicamente.
              A variável plceholder pega o texto do botão de opção do header e por vir
              no plural foi utilizado a func slice para remover o último caractere "s"
            */}
            <Input 
              placeholder={plceholder.slice(0, plceholder.length - 1)} 
              onChange={setLancamento}
              border 
            />
            <Input 
              isNumber={true} 
              placeholder="R$ 00,00" 
              border
              onChange={setValue}
            />
            <DateInput 
              onChange={setDate}
            />
            <Input 
              placeholder="Descrição" 
              border 
              isTextArea
              onChange={setDesc}
            />
          </Fields>

          <TextImport>
            <Text style={{
              color: "#ACACAC",
            }}>
              Se preferir, importe um arquivo CSV &nbsp;
              <MaterialCommunityIcons 
                name="information-outline" 
                size={16} 
              />
            </Text>
            <TouchableOpacity>
              <Text style={{
                color: '#EEEEEE',
                fontSize: 18,
                marginTop: 8
              }}>Importar</Text>
            </TouchableOpacity>
          </TextImport>

          <BoxButtons>
            <ButtonCustom 
              label="Cancelar" 
              color="#FFF" 
              onClose={onClose}
            />
            <ButtonCustom 
              label="Salvar" 
              color="#121212" 
              bgColor="#04D361" 
            />
          </BoxButtons>
        </Content>
      </Overlay>
    </Modal>
  )
}