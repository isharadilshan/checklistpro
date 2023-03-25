import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import FloorCordinateModal from '../../../src/components/modals/FloorCordinateModal';

configure({adapter: new Adapter()});

const props = {
  isModalVisible: true,
  closeModal: jest.fn(),
  cordinates: {
    xCordinate: 120,
    yCordinate: 30,
  },
};

describe('when rendering', () => {
  const wrapper = shallow(<FloorCordinateModal {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
