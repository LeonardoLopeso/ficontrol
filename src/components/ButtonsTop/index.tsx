import { TouchableOpacity } from "react-native";
import { BtnOp, Container } from "./styled";
import { useSpent } from "../../context/main";


export function ButtonsTop() {
  const { 
    setOption, 
    option, 
  } = useSpent();

  return (
    <Container>
      <TouchableOpacity onPress={() => setOption('Lançamentos')}>
        <BtnOp isSelected={option === 'Lançamentos'}>Lançamentos</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOption('Despesas')}>
        <BtnOp isSelected={option === 'Despesas'}>Despesas</BtnOp>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setOption('Receitas')}>
        <BtnOp isSelected={option === 'Receitas'}>Receitas</BtnOp>
      </TouchableOpacity>
    </Container>
  )
}