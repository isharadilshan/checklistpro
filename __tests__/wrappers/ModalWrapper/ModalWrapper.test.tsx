import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {View, Text} from 'react-native';

import ModalWrapper from '../../../src/components/wrappers/ModalWrapper';

configure({adapter: new Adapter()});

const props = {
  modalVisible: true,
  closeModal: jest.fn(),
  fullScreen: false,
  children: (
    <View>
      <Text>Test Text</Text>
    </View>
  ),
};

describe('when rendering', () => {
  const wrapper = shallow(<ModalWrapper {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
