import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import ContentCard from './';

export default {
  title: 'components/molecules/ContentCard',
  component: ContentCard,
} as ComponentMeta<typeof ContentCard>;

export const Basic: ComponentStory<typeof ContentCard> = () => {
  const args = {
    title: 'STORYBOOK-CARD',
    imgUrl: 'https://picsum.photos/seed/picsum/200/300',
    onPress: () => {},
  };
  return (
    <NativeBaseProvider>
      <ContentCard {...args} />
    </NativeBaseProvider>
  );
};
