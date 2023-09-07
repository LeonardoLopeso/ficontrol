import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  isTextArea?: boolean;
  border?: boolean;
  search: (value: string) => void;
}

export function Input({ placeholder, isTextArea, border, search }: InputProps) {
  const style = {
    height: isTextArea ? 90 : 52,
    backgroundColor: 'rgba(0,0,0, .5)',
    borderWidth: border ? 1 : 0,
    borderColor: '#A7A6A6',
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
    color: '#FFF',
  }

  return (
    <TextInput
      placeholder={placeholder}
      multiline={isTextArea ? true : false}
      style={{...style}}
      onChangeText={search}
    />
  )
}