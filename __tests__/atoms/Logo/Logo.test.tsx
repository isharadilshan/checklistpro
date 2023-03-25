import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Logo from '../../../src/components/atoms/Logo';

configure({adapter: new Adapter()});

const props = {
  style: {width: 200, height: 150},
};

describe('when rendering', () => {
  const wrapper = shallow(<Logo {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
