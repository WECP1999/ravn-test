import { ForwardedRef, forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import { SelectBody, SelectLabel } from '../customSelect/styles/style';

type CustomDatePickerProps = UseControllerProps & {
  icon: React.ReactElement;
  label?: string;
};

type CustomDatePickerInputProps = {
  value?: string;
  label?: string;
  onClick?: (...props: any) => void;
  icon: React.ReactElement;
};

const CustomDatePickerInput = forwardRef(
  (
    { value, onClick, icon, label }: CustomDatePickerInputProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <SelectBody
      onClick={onClick}
      ref={ref}
    >
      {icon}
      <SelectLabel>{value || label}</SelectLabel>
    </SelectBody>
  )
);

const CustomDatePicker = (props: CustomDatePickerProps) => {
  const { name, rules, label, defaultValue, icon } = props;

  const formContext = useFormContext();
  const { field } = useController({ name, rules, defaultValue });

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    throw msg;
  }

  return (
    <ReactDatePicker
      name={name}
      selected={field.value}
      value={field.value}
      onChange={(date) => field.onChange(date)}
      customInput={
        <CustomDatePickerInput
          icon={icon}
          label={label}
        />
      }
    />
  );
};

export default CustomDatePicker;
