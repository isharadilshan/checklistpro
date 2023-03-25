import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import TextField from '../../../src/components/atoms/TextField';

configure({adapter: new Adapter()});

const props = {
  label: 'TEST TEXT FIELD',
  required: true,
  labelStyles: {width: 120},
  innerTextInputStyle: {fontSize: 14, color: 'red'},
};

describe('when rendering', () => {
  const wrapper = shallow(<TextField {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
