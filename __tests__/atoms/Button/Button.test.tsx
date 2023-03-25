import React from 'react';
import {describe, expect} from '@jest/globals';
import {jest} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Button from '../../../src/components/atoms/Button';

// jest.useFakeTimers();

configure({adapter: new Adapter()});

const props = {
  label: 'TEST BUTTON',
  style: {width: 200},
  labelStyle: {backgroundColor: 'red'},
  contentStyle: {backgroundColor: 'red'},
  onPress: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<Button {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
