import React from 'react';
import {Box, Badge, HStack, View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import createStyle from './styles';
import {getDateName} from '../../../utils/helper/Date';

type ExpenseListItemProps = {
  id: string;
  title: string;
  description: string;
  amount: number;
  category: string;
  createdDate: number;
  hideButtons?: boolean;
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
};

const ExpenseListItem: React.FC<ExpenseListItemProps> = ({
  id,
  title,
  description,
  amount,
  category,
  createdDate,
  hideButtons,
  onPressEdit,
  onPressDelete,
}) => {
  const styles = createStyle();

  return (
    <Box style={styles.cardWrapper} p={2} my={2}>
      <HStack height={'100%'}>
        <Box w={'50%'}>
          <View style={styles.textWrapper}>
            <View>
              <Text color={'blueGray.400'} fontSize="xl">
                {title}
              </Text>
              <Text color={'blueGray.400'}>{description}</Text>
              <Text color={'blueGray.400'}>{getDateName(createdDate)}</Text>
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
                color="#94a3b8"
                onPress={() => onPressEdit(id)}
              />
              <Icon
                name="delete"
                size={30}
                color="#94a3b8"
                onPress={() => onPressDelete(id)}
              />
            </View>
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default ExpenseListItem;
