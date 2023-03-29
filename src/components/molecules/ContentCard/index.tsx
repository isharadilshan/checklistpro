import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, AspectRatio, Image, Center} from 'native-base';
import createStyle from './styles';

type CardItem = {
  title: string;
  imgUrl: string;
  onPress: () => void;
};

const ContentCard: React.FC<CardItem> = ({title, imgUrl, onPress}) => {
  const styles = createStyle();

  return (
    <TouchableOpacity onPress={onPress}>
      <Box maxW="40" style={styles.cardWrapper}>
        <Box>
          <AspectRatio w="100%" ratio={4 / 3}>
            <Image
              source={{
                uri: imgUrl,
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
