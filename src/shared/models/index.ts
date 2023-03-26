export type ToDo = {
  _id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  createdDate: number;
  updatedDate: number;
};

export type Expense = {
  _id: string;
  title: string;
  description: string;
  amount: number;
  category: string;
  createdDate: number;
  updatedDate: number;
  latitude: number;
  longitude: number;
};
