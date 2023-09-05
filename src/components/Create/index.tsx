import { Modal, Text, TouchableOpacity } from "react-native";
import { Content, Overlay, BoxTop, Fields, BoxButtons, Button, TextImport } from "./styles";
import { Input } from "../Input";
import { ButtonCustom } from "../ButtonCustom";

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CreatProps {
  visible: boolean;
  onClose: () => void;
}

export function Create({ onClose, visible }: CreatProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent
    >
      <Overlay>
        <Content>
          <BoxTop>
            <Text style={{ fontSize: 26, color:'#eeeeee' }}>Novo lançamento</Text>
          </BoxTop>

          <Fields>
            <Input placeholder="Despesa" border />
            <Input placeholder="R$ 00,00" border />
            <Input placeholder="Descrição" border isTextArea />
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
            <ButtonCustom label="Salvar" color="#121212" bgColor="#04D361" />
          </BoxButtons>
        </Content>
      </Overlay>
    </Modal>
  )
}