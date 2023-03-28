import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import AlertBanner from '../../../src/components/molecules/AlertToast';

configure({adapter: new Adapter()});

const props = {
  name: 'TEST FORM SELECT CONTROLLER',
  defaultValue: 'test',
  error: 'This is not a valid form input',
  label: 'FORM SELECT',
  items: [
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
  ],
};

describe('when rendering', () => {
  const wrapper = shallow(<AlertBanner {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
