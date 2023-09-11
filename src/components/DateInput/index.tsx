
import React, {useState} from 'react';
import { Modal, Text, TouchableWithoutFeedback } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Container, TextInputFake } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { formatarDateBr } from '../../utils/helpers';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};


LocaleConfig.defaultLocale = 'pt-BR';

interface IDateInput {
  onChange: (value: any) => void;
}

const DateInput = ({ onChange }: IDateInput) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TextInputFake onPress={() => setIsOpen(true)}>
        <Text style={{color:`${selected ? '#FFF' : '#777'}`}}>
          {selected ? selected : formatarDateBr('')}
        </Text>
        <AntDesign name="calendar" size={24} color="rgba(255,255,255,.2)" />
      </TextInputFake>

      <Modal
        visible={isOpen}
        animationType='slide'
        transparent
        onRequestClose={() => setIsOpen(false)}
        onLayout={() => setIsOpen(false)}
        style={{ 
          zIndex: 100,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <Container>
          <Calendar
            style={{
              borderRadius:8,
            }}
            onDayPress={day => {
              setSelected(formatarDateBr(day.dateString));
              setIsOpen(false)
              onChange(formatarDateBr(day.dateString))
            }}
            markedDates={{
              [selected]: {selected: true, disableTouchEvent: true}
            }}
          />
          </Container>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default DateInput;