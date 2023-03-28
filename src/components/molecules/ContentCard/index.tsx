import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, AspectRatio, Image, Center} from 'native-base';
import createStyle from './styles';

type CardItem = {
  title: string;
  onPress: () => void;
};

const ContentCard: React.FC<CardItem> = ({title, onPress}) => {
  const styles = createStyle();

  return (
    <TouchableOpacity onPress={onPress}>
      <Box maxW="40" style={styles.cardWrapper}>
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
            style={styles.taglineWrapper}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
          >
            {title}
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ContentCard;
