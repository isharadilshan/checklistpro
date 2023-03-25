import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import TextInput from '../../../src/components/atoms/TextInput';

configure({adapter: new Adapter()});

const props = {
  label: 'TEST TEXT INPUT',
  value: 'test@gmail.com',
  onChangeText: jest.fn(),
  error: true,
  errorText: 'THIS IS ERROR TEXT',
  secureTextEntry: true,
};

describe('when rendering', () => {
  const wrapper = shallow(<TextInput {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
