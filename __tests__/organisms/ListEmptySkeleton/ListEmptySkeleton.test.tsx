import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ListEmptySkeleton from '../../../src/components/organisms/ListEmptySkeleton';

configure({adapter: new Adapter()});

describe('when rendering', () => {
  const wrapper = shallow(<ListEmptySkeleton />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
