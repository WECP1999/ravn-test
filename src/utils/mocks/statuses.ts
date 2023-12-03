import SelectOption from '../types/SelectOption';

const statuses = Object.freeze([
  {
    value: 'BACKLOG',
    label: 'BACKLOG',
  },
  {
    value: 'CANCELLED',
    label: 'CANCELLED',
  },
  {
    value: 'DONE',
    label: 'COMPLETED',
  },
  {
    value: 'IN_PROGRESS',
    label: 'IN_PROGRESS',
  },
  {
    value: 'TODO',
    label: 'TODO',
  },
]) as Array<SelectOption>;

export default statuses;
