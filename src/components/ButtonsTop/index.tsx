import { Text, TouchableOpacity } from "react-native";
import { BtnOp, Container } from "./styled";
import { useEffect, useState } from "react";

interface ButtonsTopProps {
  opt: string;
  setOpt: (value: string) => void;
}

export function ButtonsTop({ opt, setOpt }: ButtonsTopProps) {;

  const handleButtonPress = (buttonText: string) => {
    if(buttonText === "") {
      return setOpt("Lançamentos");
    }
    return setOpt(buttonText)
  }

  useEffect(() => {
    handleButtonPress("");
  },[]);

  return (
    <Container>
      <TouchableOpacity onPress={() => handleButtonPress('Lançamentos')}>
        <BtnOp isSelected={opt === 'Lançamentos'}>Lançamentos</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress('Despesas')}>
        <BtnOp isSelected={opt === 'Despesas'}>Despesas</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleButtonPress('Receitas')}>
        <BtnOp isSelected={opt === 'Receitas'}>Receitas</BtnOp>
      </TouchableOpacity>
    </Container>
  )
}