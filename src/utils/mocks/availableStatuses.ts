import SelectOption from '../types/SelectOption';

const availableStatuses = Object.freeze([
  {
    value: 'TODO',
    label: 'Todo',
  },
  {
    value: 'IN_PROGRESS',
    label: 'In Progress',
  },
  {
    value: 'DONE',
    label: 'Completed',
  },
]) as Array<SelectOption>;

export default availableStatuses;
