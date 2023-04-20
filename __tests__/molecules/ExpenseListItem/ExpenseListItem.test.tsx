import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ExpenseListItem from '../../../src/components/molecules/ExpenseListItem';

configure({adapter: new Adapter()});

const props = {
  id: 'EXPENSE_ID',
  title: 'Expense Title',
  description: 'Expense Description',
  amount: 402,
  category: 'MEDICAL',
  createdDate: 1680101338199,
  updatedDate: 1680101338199,
  latitude: 12.3455,
  longitude: 12.3455,
  hideButtons: false,
  onPressEdit: jest.fn(),
  onPressDelete: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<ExpenseListItem {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
