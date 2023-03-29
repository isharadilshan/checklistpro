import React from 'react';
import {describe, expect} from '@jest/globals';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoAgendaItem from '../../../src/components/molecules/TodoAgendaItem';

configure({adapter: new Adapter()});

const props = {
  data: 'Agenda Title@Agenda Description@PERSONAL@DONE',
};

describe('when rendering', () => {
  const wrapper = shallow(<TodoAgendaItem {...props} />);

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
