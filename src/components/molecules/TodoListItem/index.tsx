import React from 'react';
import {Box, Badge, HStack, View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getDateName} from '../../../utils/helper/Date';
import createStyle from './styles';

type TodoListItemProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  category: string;
  createdDate: number;
  updatedDate: number;
  hideButtons: boolean;
  onPressEdit: ({}) => void;
  onPressDelete: ({}) => void;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  title,
  description,
  status,
  category,
  createdDate,
  updatedDate,
  hideButtons,
  onPressEdit,
  onPressDelete,
}) => {
  const styles = createStyle();

  const renderBadge = (colorScheme: string, status: string) => {
    return (
      <Badge width={100} variant={'subtle'} colorScheme={colorScheme}>
        {status}
      </Badge>
    );
  };

  const renderStatusBadge = (todoStatus) => {
    switch (todoStatus) {
      case 'TODO':
        return renderBadge('coolGray', todoStatus);
      case 'INPROGRESS':
        return renderBadge('warning', todoStatus);
      case 'HOLD':
        return renderBadge('error', todoStatus);
      case 'DONE':
        return renderBadge('info', todoStatus);
      default:
        return null;
    }
  };

  return (
    <Box style={styles.cardWrapper}>
      <HStack height={'100%'}>
        <Box w={'75%'}>
          <View style={styles.textWrapper}>
            <View>
              <Text color={'blueGray.400'} fontSize="xl">
                {title}
              </Text>
              <Text color={'blueGray.400'}>{description}</Text>
              <Text mt={3} color={'blueGray.400'}>
                {getDateName(updatedDate)}
              </Text>
            </View>
            <View style={styles.tagWrapper}>
              <Badge width={120} variant={'outline'} colorScheme="success">
                {category}
              </Badge>
              {renderStatusBadge(status)}
            </View>
          </View>
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
                    status,
                    category,
                    createdDate,
                    updatedDate,
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

export default TodoListItem;
