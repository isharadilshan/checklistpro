import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import StatusBar from '../../../src/components/atoms/StatusBar';

configure({adapter: new Adapter()});

const props = {
  translucent: true,
  background: 'blue',
};

describe('when rendering', () => {
  const wrapper = shallow(<StatusBar {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
