import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ContentCard from '../../../src/components/molecules/ContentCard';

configure({adapter: new Adapter()});

const props = {
  title: 'STORYBOOK-CARD',
  imgUrl: 'https://picsum.photos/seed/picsum/200/300',
  onPress: jest.fn(),
};

describe('when rendering', () => {
  const wrapper = shallow(<ContentCard {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
