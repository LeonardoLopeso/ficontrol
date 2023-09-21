import { Container, Label } from "./styles";

 interface ButtonProps {
  label: string;
  bgColor?: string;
  color: string;
  onAction?: () => void;
  styles?: {};
 }

export function ButtonCustom({ label, bgColor, color, onAction, styles }: ButtonProps) {
  return (
    <Container onPress={onAction}
      style={{
        backgroundColor: bgColor ? bgColor : 'transparent',
        ...styles
      }}
    >
      <Label style={{
        color: bgColor ? '#121212' : '#FFF'
      }}>{label}</Label>
    </Container>
  )
}