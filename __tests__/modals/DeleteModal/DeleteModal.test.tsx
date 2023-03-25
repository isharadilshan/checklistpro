import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import DeleteModal from '../../../src/components/modals/DeleteModal';

configure({adapter: new Adapter()});

const props = {
  isModalVisible: true,
  closeModal: jest.fn(),
  onConfirm: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<DeleteModal {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
