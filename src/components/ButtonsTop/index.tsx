import { Text, TouchableOpacity } from "react-native";
import { BtnOp, Container } from "./styled";
import { useState } from "react";

export function ButtonsTop() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonPress = (buttonText: string) => {
    setSelectedButton(buttonText);
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => handleButtonPress('Lançamentos')}>
        <BtnOp isSelected={selectedButton === 'Lançamentos'}>Lançamentos</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress('Despesas')}>
        <BtnOp isSelected={selectedButton === 'Despesas'}>Despesas</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress('Receitas')}>
        <BtnOp isSelected={selectedButton === 'Receitas'}>Receitas</BtnOp>
      </TouchableOpacity>
    </Container>
  )
}