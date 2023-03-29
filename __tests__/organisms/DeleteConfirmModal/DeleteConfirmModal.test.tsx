import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DeleteConfirmModal from '../../../src/components/organisms/DeleteConfirmModal';

configure({adapter: new Adapter()});

const props = {
  modalVisible: true,
  closeModal: jest.fn(),
  onDeleteConfirm: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<DeleteConfirmModal {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
