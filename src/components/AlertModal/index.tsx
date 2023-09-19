import { Modal } from 'react-native';
import { BoxButtonModal, BoxClose, BoxContent, ButtonAction, Container, Overlayer } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
              color="#ACACAC" 
              onPress={onClose}
            />
          </BoxClose>

          <BoxContent>
              <AntDesign 
                name={isOk ? "checkcircleo" : "infocirlceo"} 
                size={84}  
                color={isOk ? "#04D361" : "#FF7755"} 
                style={{
                  opacity: .8
                }}
              />
              <Text style={{ 
                fontSize: RFValue(16), 
                color: '#EEEEEE',
                maxWidth: 250,
                textAlign: 'center'
              }}>{label}</Text>
              
          {btnAction &&
            <BoxButtonModal>
              <ButtonAction onPress={onClose}>
                <Text style={{ color: '#FF7755' }}>Cancelar</Text>
              </ButtonAction>
              <ButtonAction onPress={funcAction} bgColor>
                <Text>{textBtnAction}</Text>
              </ButtonAction>
            </BoxButtonModal>
          }
          </BoxContent>

        </Container>
      </Overlayer>
    </Modal>
  );
}