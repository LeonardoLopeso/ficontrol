import { Modal } from 'react-native';
import { BoxClose, BoxContent, ButtonAction, Container, Overlayer } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';

interface IAlertModal {
  isOk: boolean;
  label: string;
  visible: boolean;
  onClose: () => void;
  btnAction?: boolean;
  textBtnAction?: string;
  funcAction?: () => void;
}

export const AlertModal = ({ 
  isOk, 
  label, 
  visible, 
  onClose, 
  btnAction, 
  textBtnAction,
  funcAction
}: IAlertModal) => {

  return(
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      animationType='slide'      
    >
      <Overlayer>
        <Container>
          <BoxClose>
            <AntDesign 
              name="closesquare" 
              size={26} 
              color="#777" 
              onPress={onClose}
            />
          </BoxClose>

          <BoxContent>
              <AntDesign 
                name={isOk ? "checkcircleo" : "infocirlceo"} 
                size={84}  
                color={isOk ? "#04D361" : "#FF7755"} 
              />
              <Text style={{ 
                fontSize: 20, 
                color: '#EEEEEE',
                maxWidth: 200,
                textAlign: 'center'
              }}>{label}</Text>
              
          {btnAction &&
            <ButtonAction onPress={funcAction}>
              <Text>{textBtnAction}</Text>
            </ButtonAction>
          }
          </BoxContent>

        </Container>
      </Overlayer>
    </Modal>
  );
}