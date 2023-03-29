import React from 'react';
import {Box, Badge, HStack, View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getHumanReadableDate} from '../../../utils/helper/Date';
import createStyle from './styles';

type ExpenseListItemProps = {
  id: string;
  title: string;
  description: string;
  amount: number;
  category: string;
  createdDate: number;
  updatedDate: number;
  latitude: number;
  longitude: number;
  hideButtons?: boolean;
  onPressEdit: ({}) => void;
  onPressDelete: ({}) => void;
};

const ExpenseListItem: React.FC<ExpenseListItemProps> = ({
  id,
  title,
  description,
  amount,
  category,
  createdDate,
  updatedDate,
  latitude,
  longitude,
  hideButtons,
  onPressEdit,
  onPressDelete,
}) => {
  const styles = createStyle();

  return (
    <Box style={styles.cardWrapper}>
      <HStack height={'100%'}>
        <Box w={'50%'}>
          <View style={styles.textWrapper}>
            <View>
              <Text color={'blueGray.400'} fontSize="xl">
                {title}
              </Text>
              <Text color={'blueGray.400'}>{description}</Text>
              <Text color={'blueGray.400'}>
                {getHumanReadableDate(createdDate)}
              </Text>
            </View>
            <Badge width={150} variant={'outline'} colorScheme="success">
              {category}
            </Badge>
          </View>
        </Box>
        <Box w={'25%'}>
          <Text color={'blueGray.400'} fontSize="2xl">
            {amount}
          </Text>
        </Box>
        {!hideButtons && (
          <Box w={'25%'}>
            <View style={styles.buttonWrapper}>
              <Icon
                name="square-edit-outline"
                size={30}
                style={styles.iconStyle}
                onPress={() =>
                  onPressEdit({
                    id,
                    title,
                    description,
                    amount,
                    category,
                    createdDate,
                    updatedDate,
                    latitude,
                    longitude,
                  })
                }
              />
              <Icon
                name="delete"
                size={30}
                style={styles.iconStyle}
                onPress={() => onPressDelete({id})}
              />
            </View>
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default ExpenseListItem;
