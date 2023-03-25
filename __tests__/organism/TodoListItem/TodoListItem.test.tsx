import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import TodoListItem from '../../../src/components/organism/TodoListItem';

configure({adapter: new Adapter()});

const props = {
  item: {title: 'TEST TITLE', description: 'TEST DESCRIPTION'},
  onEdit: jest.fn(),
  onDelete: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<TodoListItem {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
