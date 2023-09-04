import { Modal, Text } from "react-native";
import { Content, Overlay, BoxTop, Fields, BoxButtons, Button } from "./styles";
import { Input } from "../Input";

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
            <Input placeholder="Despesa" />
            <Input placeholder="R$ 00,00" />
            <Input placeholder="Descrição" />
          </Fields>

          <BoxButtons>
            {/* <Button title="Salvar" /> */}
          </BoxButtons>
        </Content>
      </Overlay>
    </Modal>
  )
}