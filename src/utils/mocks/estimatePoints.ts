import type SelectOption from '../types/SelectOption';

const estimatePoints = Object.freeze([
  {
    value: 'ZERO',
    label: '0 Points',
  },
  {
    value: 'ONE',
    label: '1 Points',
  },
  {
    value: 'TWO',
    label: '2 Points',
  },
  {
    value: 'FOUR',
    label: '4 Points',
  },
  {
    value: 'EIGHT',
    label: '8 Points',
  },
]) as Array<SelectOption>;

export default estimatePoints;
