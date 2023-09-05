import { Container, Label } from "./styles";

 interface ButtonProps {
  label: string;
  bgColor?: string;
  color: string;
  onClose?: () => void;
 }

export function ButtonCustom({ label, bgColor, color, onClose }: ButtonProps) {
  return (
    <Container onPress={onClose}
      style={{
        backgroundColor: bgColor ? bgColor : 'transparent'
      }}
    >
      <Label style={{
        color: bgColor ? '#121212' : '#FFF'
      }}>{label}</Label>
    </Container>
  )
}