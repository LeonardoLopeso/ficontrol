import { TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  isTextArea?: boolean;
  border?: boolean;
  onChange?: (value: any) => void;
  isNumber?: boolean;
  styles?: {};
  value?: any;
}

export function Input({ 
  placeholder,
  isTextArea,
  border,
  onChange,
  isNumber,
  styles,
  value
}: InputProps) {

  const style = {
    height: isTextArea ? 90 : 52,
    backgroundColor: 'rgba(0,0,0, .5)',
    borderWidth: border ? 1 : 0,
    borderColor: '#A7A6A6',
    borderRadius: 8,
    paddingLeft: 8,
    paddingTop: isTextArea ? 16 : 0,
    fontSize: 16,
    color: '#FFF',
    ...styles
  }

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#777"
      multiline={isTextArea ? true : false}
      style={{...style}}
      onChangeText={onChange}
      keyboardType={isNumber ? 'decimal-pad' : 'default'}
      value={value}
      textAlignVertical={isTextArea ? 'top' : 'auto'}
    />
  )
}