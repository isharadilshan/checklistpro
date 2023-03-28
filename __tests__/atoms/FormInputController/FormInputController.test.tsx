import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import FormInputController from '../../../src/components/atoms/FormInputController';

configure({adapter: new Adapter()});

const props = {
  name: 'TEST FORM INPUT CONTROLLER',
  defaultValue: 'test',
  error: 'This is not a valid form input',
  label: 'FORM INPUT',
};

describe('when rendering', () => {
  const wrapper = shallow(<FormInputController {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
