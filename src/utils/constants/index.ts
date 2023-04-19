/**
 * regex expression for email validate
 */
export const EMAIL_VALIDATE_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//months for select dropdown
export const MONTHS = [
  {
    key: 1,
    label: 'January',
    value: '01',
  },
  {
    key: 2,
    label: 'February',
    value: '02',
  },
  {
    key: 3,
    label: 'March',
    value: '03',
  },
  {
    key: 4,
    label: 'April',
    value: '04',
  },
  {
    key: 5,
    label: 'May',
    value: '05',
  },
  {
    key: 6,
    label: 'June',
    value: '06',
  },
  {
    key: 7,
    label: 'July',
    value: '07',
  },
  {
    key: 8,
    label: 'August',
    value: '08',
  },
  {
    key: 9,
    label: 'September',
    value: '09',
  },
  {
    key: 10,
    label: 'October',
    value: '10',
  },
  {
    key: 11,
    label: 'November',
    value: '11',
  },
  {
    key: 12,
    label: 'December',
    value: '12',
  },
];

//expense categories for select dropdown
export const EXPENSE_CATEGORIES = [
  {
    key: 1,
    label: 'Food',
    value: 'FOOD',
  },
  {
    key: 2,
    label: 'Medical',
    value: 'MEDICAL',
  },
  {
    key: 3,
    label: 'Transport',
    value: 'TRANSPORT',
  },
];

//tod categories for select dropdown
export const TODO_CATEGORIES = [
  {
    key: 1,
    label: 'Personal',
    value: 'PERSONAL',
  },
  {
    key: 2,
    label: 'Work',
    value: 'WORK',
  },
];

//tod status for select dropdown
export const TODO_STATUS = [
  {
    key: 1,
    label: 'ToDo',
    value: 'TODO',
  },
  {
    key: 2,
    label: 'In-Progress',
    value: 'INPROGRESS',
  },
  {
    key: 1,
    label: 'Hold',
    value: 'HOLD',
  },
  {
    key: 2,
    label: 'Done',
    value: 'DONE',
  },
];
