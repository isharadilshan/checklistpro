import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoListItem from '../../../src/components/molecules/TodoListItem';

configure({adapter: new Adapter()});

const props = {
  id: 'TODO_ID',
  title: 'Toto Title',
  description: 'Todo Description',
  status: 'INPROGRESS',
  category: 'MEDICAL',
  createdDate: 1680101338199,
  updatedDate: 1680101338199,
  hideButtons: false,
  onPressEdit: jest.fn(),
  onPressDelete: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<TodoListItem {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
