import { useRef, useState } from 'react';
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import {
  Container,
  CustomSelectWrapper,
  Select,
  SelectBody,
  SelectLabel,
  SelectOption,
  SelectOptionsContainer,
} from './styles/style';
import useClickOutside from '../../../utils/hooks/useClickOutside';
import type SelectOptionType from '../../../utils/types/SelectOption';
import 'twin.macro';
import { Avatar, Text } from '../../shared/commons';

type CustomInputProps = UseControllerProps & {
  icon: React.ReactElement;
  options: Array<SelectOptionType>;
  label?: string;
  className?: string;
  loading?: boolean;
};

const CustomSelect = (props: CustomInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    name,
    rules,
    label,
    defaultValue,
    className,
    icon,
    options,
    loading,
    ...inputProps
  } = props;
  const formContext = useFormContext();
  const { field } = useController({ name, rules, defaultValue });

  const selectRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(selectRef, () => {
    setIsOpen(false);
  });

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    throw msg;
  }

  return (
    <Container>
      <select
        {...inputProps}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={name}
        tw="hidden"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <CustomSelectWrapper
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        ref={selectRef}
      >
        <Select>
          <SelectBody>
            {icon}
            <SelectLabel>
              {options.find((item) => item.value === field.value)?.label ||
                label}
            </SelectLabel>
          </SelectBody>
          <SelectOptionsContainer isOpen={isOpen}>
            <Text tw="font-bold text-[20px]">{label}</Text>
            {loading && (
              <section tw="h-7 w-7 animate-spin rounded-full border-8 border-primary-4 border-l-[#fff]/0" />
            )}
            {options.map((option) => (
              <SelectOption
                className={option.avatar && 'has-avatar'}
                key={option.value}
                onClick={() => field.onChange(option.value)}
                selected={field.value === option.value}
              >
                {option.avatar ? (
                  <Avatar
                    tw="w-8 h-8"
                    src={option.avatar}
                  />
                ) : (
                  icon
                )}
                <span data-value={option.value}>{option.label}</span>
              </SelectOption>
            ))}
          </SelectOptionsContainer>
        </Select>
      </CustomSelectWrapper>
    </Container>
  );
};

export default CustomSelect;
