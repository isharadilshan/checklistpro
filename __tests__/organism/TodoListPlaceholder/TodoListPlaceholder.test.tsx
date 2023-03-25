import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import TodoListPlaceholder from '../../../src/components/organism/TodoListPlaceholder';

configure({adapter: new Adapter()});

describe('when rendering', () => {
  const wrapper = shallow(<TodoListPlaceholder />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
