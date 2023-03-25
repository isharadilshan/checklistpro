import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, AspectRatio, Image, Center } from 'native-base';

type CardItem = {
  id: string;
  title: string;
  onPress: () => void;
};

const ContentCard: React.FC<CardItem> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        maxW="40"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
        mx={2}
        my={6}
      >
        <Box>
          <AspectRatio w="100%" ratio={4 / 3}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {title}
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ContentCard;
