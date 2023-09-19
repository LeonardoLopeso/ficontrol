import { useCallback, useEffect, useState } from "react";

import { KeyboardAvoidingView, Modal, Text, TouchableOpacity } from "react-native";
import { 
  Content, 
  Overlay, 
  BoxTop, 
  Fields, 
  BoxButtons, 
  TextImport, 
  RevenueExpense, 
  ButtonReveneuExpense 
} from "./styles";

import { Input } from "../Input";
import { ButtonCustom } from "../ButtonCustom";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateInput from "../DateInput";
import { ILancamentos } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSpent } from "../../context/main";
import { AlertModal } from "../AlertModal";
import { RFValue } from "react-native-responsive-fontsize";

interface CreatProps {
  visible: boolean;
  plceholder: string;
  onClose: () => void;
}

export function Create({ onClose, visible, plceholder }: CreatProps) {
  const { getData } = useSpent();
  const [lancamento, setLancamento] = useState<string>('');
  const [value, setValue] = useState<number | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [isCheck, setIsCheck] = useState(0);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [msgAlert, setMsgAlert] = useState<string>("");
  const [alertOk, setAlertOk] = useState<boolean>(false);

  const saveDate = useCallback(async () => {
    if (!lancamento || !value || !date || !desc || isCheck === 0) {
      setMsgAlert("Atenção! Preencha todos os campos.");
      setIsOpenModal(true);
      setAlertOk(false);
      return;
    }
  
    try {
      const expenseData: ILancamentos = {
        id: Math.floor(Math.random() * 1000),
        title: lancamento,
        valor: value,
        data: date,
        iconArrowUpOrdown: isCheck === 1 ? false : true,
        description: desc,
        type: isCheck === 1 ? 'Receitas' : 'Despesas',
      };
  
      const storeSpent = await AsyncStorage.getItem('spentData');
  
      let updateSpentList: ILancamentos[] = [];
  
      if (storeSpent !== null) {
        const storeData = JSON.parse(storeSpent);

        if (Array.isArray(storeData)) {
          updateSpentList = storeData;
        }
      }
  
      updateSpentList.push(expenseData);
  
      await AsyncStorage.setItem('spentData', JSON.stringify(updateSpentList));
      
      setLancamento('');
      setValue(null);
      setDate('');
      setDesc('');
      setIsCheck(0);

      getData();

      setIsOpenModal(true);
      setAlertOk(true);
      setMsgAlert("Lançamento criado com sucesso!");

    } catch (error) {
      console.error('Erro ao salvar lançamento', error);
    }
  }, [lancamento, value, date, isCheck, desc]);

  useEffect(() => {
    if(!isOpenModal && alertOk) {
      onClose();
    }
  },[isOpenModal, alertOk])
  

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
            <Text style={{ fontSize: RFValue(18), color:'#eeeeee' }}>Novo lançamento</Text>
          </BoxTop>

          
          <Fields>
            {/* Aplicando o placeholder dinamicamente.
              A variável plceholder pega o texto do botão de opção do header e por vir
              no plural foi utilizado a func slice para remover o último caractere "s"
            */}

            <Input 
              placeholder="Título do lançamento" 
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
            <RevenueExpense>
              <ButtonReveneuExpense 
                reveOrExpen
                onPress={() => setIsCheck(1)}
                check={isCheck === 2 && true}
              >
                <Text style={{ fontSize: RFValue(11) }}>Receita</Text>
              </ButtonReveneuExpense>
              <ButtonReveneuExpense
                onPress={() => setIsCheck(2)}
                check={isCheck === 1 && true}
              >
                <Text style={{ fontSize: RFValue(11) }}>Despesa</Text>
              </ButtonReveneuExpense>
            </RevenueExpense>
            <Input 
              placeholder="Descrição" 
              border 
              isTextArea
              onChange={setDesc}
            />
          </Fields>

          {/* <TextImport>
            <Text style={{
              color: "#ACACAC",
              fontSize: RFValue(10)
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
                fontSize: RFValue(14),
                marginTop: 8
              }}>Importar</Text>
            </TouchableOpacity>
          </TextImport> */}

          <KeyboardAvoidingView
            keyboardVerticalOffset={0}
          >
            <BoxButtons>
              <ButtonCustom 
                label="Cancelar" 
                color="#FFF" 
                onAction={onClose}
                />
              <ButtonCustom 
                label="Salvar" 
                color="#121212" 
                bgColor="#04D361" 
                onAction={saveDate}
                />
            </BoxButtons>
          </KeyboardAvoidingView>
        </Content>
        
        <AlertModal 
          visible={isOpenModal}
          isOk={alertOk}
          label={msgAlert}
          onClose={() => setIsOpenModal(false)}
        />
      </Overlay>
    </Modal>
  )
}