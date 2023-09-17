import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  isTextArea?: boolean;
  border?: boolean;
  onChange?: (value: any) => void;
  isNumber?: boolean;
}

export function Input({ 
  placeholder,
  isTextArea,
  border,
  onChange,
  isNumber,
}: InputProps) {

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
      placeholderTextColor="#777"
      multiline={isTextArea ? true : false}
      style={{...style}}
      onChangeText={onChange}
      keyboardType={isNumber ? 'decimal-pad' : 'default'}
    />
  )
}