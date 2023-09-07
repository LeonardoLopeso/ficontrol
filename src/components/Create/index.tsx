import { Modal, Text, TouchableOpacity } from "react-native";
import { Content, Overlay, BoxTop, Fields, BoxButtons, Button, TextImport } from "./styles";
import { Input } from "../Input";
import { ButtonCustom } from "../ButtonCustom";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateInput from "../DateInput";

interface CreatProps {
  visible: boolean;
  plceholder: string;
  onClose: () => void;
}

export function Create({ onClose, visible, plceholder }: CreatProps) {

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
            <Input placeholder={plceholder.slice(0, plceholder.length - 1)} border />
            <Input isNumber={true} placeholder="R$ 00,00" border />
            <DateInput />
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