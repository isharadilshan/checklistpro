import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {View, Text} from 'react-native';

import KeyBoardAvoidingWrapper from '../../../src/components/wrappers/KeyBoardAvoidingWrapper';

configure({adapter: new Adapter()});

const props = {
  children: (
    <View>
      <Text>Test Text</Text>
    </View>
  ),
  noPaddings: true,
};

describe('when rendering', () => {
  const wrapper = shallow(<KeyBoardAvoidingWrapper {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
