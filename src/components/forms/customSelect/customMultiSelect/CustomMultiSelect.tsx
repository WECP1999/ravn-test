import { useRef, useState, useCallback } from 'react';
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
} from '../styles/style';
import useClickOutside from '../../../../utils/hooks/useClickOutside';
import type SelectOptionType from '../../../../utils/types/SelectOption';
import { Checkbox, Text } from '../../../shared/commons';
import 'twin.macro';

type CustomInputProps = UseControllerProps & {
  icon: React.ReactElement;
  options: Array<SelectOptionType>;
  label?: string;
  menuLabel?: string;
};

const CustomMultiSelect = (props: CustomInputProps) => {
  const { name, rules, label, defaultValue, icon, options, menuLabel } = props;
  const formContext = useFormContext();
  const { field } = useController({ name, rules, defaultValue });

  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelectOption = useCallback(
    (value: string) => {
      const selectedValues = JSON.parse(
        JSON.stringify(field.value || '')
      ) as Array<string>;

      if (selectedValues?.length > 0) {
        const selected = selectedValues.find(
          (selectedValue) => selectedValue === value
        );
        if (selected) {
          const uniqueValues = selectedValues.filter(
            (selectedValue) => selectedValue !== value
          );

          field.onChange(uniqueValues);
          return;
        }
        selectedValues.push(value);
        field.onChange(selectedValues);
        return;
      }

      field.onChange([value]);
      return;
    },
    [field]
  );

  useClickOutside(selectRef, () => {
    setIsOpen(false);
  });

  if (!formContext || !name) {
    const msg = !formContext
      ? 'Input must be wrapped by the FormProvider'
      : 'Name must be defined';
    throw msg;
  }

  return (
    <Container>
      <CustomSelectWrapper ref={selectRef}>
        <Select>
          <SelectBody
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {!field.value?.length && icon}
            <SelectLabel tw="flex flex-col">
              {field.value?.length
                ? field.value?.map((value: string) => (
                    <span key={value}>{value}</span>
                  ))
                : label}
            </SelectLabel>
          </SelectBody>
          <SelectOptionsContainer isOpen={isOpen}>
            <Text tw="font-bold text-[20px]">{menuLabel || label}</Text>
            {options.map((option) => (
              <SelectOption
                tw="w-full justify-start"
                key={option.value}
                selected={
                  !!field.value?.find((value: string) => value === option.value)
                }
                onClick={() => handleSelectOption(option.value)}
              >
                <Checkbox
                  type="checkbox"
                  checked={
                    !!field.value?.find(
                      (value: string) => value === option.value
                    )
                  }
                />
                <span data-value={option.value}>{option.label}</span>
              </SelectOption>
            ))}
          </SelectOptionsContainer>
        </Select>
      </CustomSelectWrapper>
    </Container>
  );
};

export default CustomMultiSelect;
