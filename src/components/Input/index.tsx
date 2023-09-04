import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  isTextArea?: boolean;
}

export function Input({ placeholder, isTextArea }: InputProps) {
  const style = {
    height: isTextArea ? 90 : 52,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#A7A6A6',
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
    color: '#FFF'
  }

  return (
    <TextInput
      placeholder={placeholder}
      style={style}
      multiline
    />
  )
}