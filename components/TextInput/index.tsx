import { FC, ChangeEventHandler } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import { Container, Input } from './styles';

interface TextInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  clear: () => void;
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({
  value, onChange, placeholder, clear,
}) => (
  <Container>
    <Input value={value} onChange={onChange} placeholder={placeholder} />
    {value === '' && <AiOutlineSearch size={32} color="#000" />}
    {value !== '' && <AiOutlineClose size={32} color="#000" onClick={clear} />}
  </Container>
);

export default TextInput;
