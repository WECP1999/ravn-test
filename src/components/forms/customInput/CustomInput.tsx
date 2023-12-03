import {
  UseControllerProps,
  useFormContext,
  useController,
} from 'react-hook-form';
import { InputContainer, Label } from './styles/style';
import { Input } from '../../shared/commons';
import 'twin.macro';

type CustomInputProps = UseControllerProps & {
  label?: string;
  className?: string;
  placeholder?: string;
};

const CustomInput = (props: CustomInputProps) => {
  const { name, rules, label, defaultValue, className, ...inputProps } = props;
  const formContext = useFormContext();
  const { field } = useController({ name, rules, defaultValue });

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    throw msg;
  }

  return (
    <InputContainer>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <Input
        className={className}
        name={name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />
    </InputContainer>
  );
};

export default CustomInput;
