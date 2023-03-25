import React from 'react';
import {Box, Badge, HStack, View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  return (
    <Box
      height={150}
      rounded="sm"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: '#1f2937',
      }}
      _light={{
        backgroundColor: '#1f2937',
      }}
      p={2}
      my={2}
    >
      <HStack height={'100%'}>
        <Box w={'75%'}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
              <Text color={'blueGray.400'} fontSize="xl">
                {title}
              </Text>
              <Text color={'blueGray.400'}>{description}</Text>
            </View>
            <Badge width={150} variant={'outline'} colorScheme="success">
              {category}
            </Badge>
          </View>
        </Box>
        {!hideButtons && (
          <Box w={'25%'}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
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
